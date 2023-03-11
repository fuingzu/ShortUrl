const { mongodbUrl,AdminSession } = process.env || {} // 获取环境变量
const linkLen = process.env.linkLen || 10 // 如未指定链接长度则默认为10
let database = null




// 引入mongodb模块
const { MongoClient } = require('mongodb')

// 随机字符串
function randomString(len) {
    len = len || 32
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    var maxPos = $chars.length
    var pwd = ''
    for (var i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return pwd
}

module.exports =  async (request, response) => {

    if (mongodbUrl == undefined || AdminSession == undefined) { // 判断环境变量是否存在
        response.status(403).json({ "error": 'Environment variable not configured' })
        return

    } else {
        let res = null
    
        // 获取请求地址
        let url = request.url

        // 获取 IP 地址
        let ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress || request.socket.remoteAddress || request.connection.socket.remoteAddress

        // 链接数据库
        await db_connect()


        // ---读取公共参数完毕---
        switch (request.method) {
            case 'POST':
                // 获取请求体
                let requestsBody = request.body || {}

                var api = requestsBody.api

                switch (api) {
                    case 'addLink':
                        res = await addLink(requestsBody, url, ip)
                        break
                    case 'login':
                        var session = requestsBody.session
                        if (await checkLoginAssess(session)) {
                            res = { "success": 'success' }
                        } else {
                            res = { "error": 'Authentication failed' }
                        }
                        break
                    case 'delete':
                        res = await deleteLink(requestsBody, url)
                        break
                    case undefined:
                        res = await index(requestsBody, url, "POST")
                        break
                    default:
                        res = { "error": 'API Not Found' }
                        break
                }
                break
            case 'GET':
                // 获取请求体
                let requestsQuery = request.query || {}

                var api = requestsQuery.api

                switch (api) {
                    case 'list':
                        res = await getList(requestsQuery, url)
                        break
                    case undefined:
                        res = await index(requestsQuery, url, "GET")
                        break
                    default:
                        res = { "error": 'API Not Found' }
                        break
                }
                break
            default:
                res = { "error": 'Method Not Allowed' }
                break
        }

        // 返回结果
        if (res == null) {
            response.status(500).json({ "error": 'Internal Server Error' })
        } else {
            if (res.error == undefined) {
                if (res.goLink != undefined) { // 如果有goLink则跳转
                  // 302 重定向
                  response.status(302).setHeader('Location', res.goLink)
                  response.end()
                } else {
                    response.status(200).json(res)
                }
            } else {
                response.status(403).json(res)
            }
        }
    }
}

async function checkLoginAssess(session) {
    if (session == AdminSession) {
        return true
    } else {
        return false
    }
}

async function getList(requestsQuery, url) { // 获取列表

    function getList_() {
        return new Promise((resolve, reject) => {
            database.collection('Links').find({}).toArray((err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }

    var session = requestsQuery.session

    if (await checkLoginAssess(session)) {
        var list_ = await getList_()
        // 倒序
        list_.sort(function (a, b) {
            return b.time - a.time
        })

        return (list_)
    } else {
        return { "error": 'Session Err' }
    }


}

async function deleteLink(requestsBody, url) { // 删除链接

    function deleteLink_(path) {
        return new Promise((resolve, reject) => {
            database.collection('Links').deleteOne({ "path": path }, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }

    var session = requestsBody.session
    var path = requestsBody.path

    if (await checkLoginAssess(session)) {
        if (path == undefined) {
            return { "error": 'path cannot be empty' }
        } else {
            var deleteData = await deleteLink_(path)
            if (deleteData.deletedCount == 1) {
                return { "success": 'success' }
            } else {
                return { "error": 'Not Found' }
            }
        }
    } else {
        return { "error": 'Session Err' }
    }
}

async function addLink(requestsBody, url, ip) { // 添加链接 


    async function insertLink(link) {

        // 开始获取随机路径
        // 注意：要判断随机路径是否已经存在，不能覆盖已有的链接。

        var go = true // 是否继续循环
        while (go) {
            var path = randomString(linkLen)
            var linkData = await searchUrl(path)
            // console.log(linkData)
            if (linkData.length == 0) {
                go = false
            }
        }

        var obj = {"path":path,"link":link,"ip":ip,"time":new Date().getTime()}

        // 写入数据库
        return new Promise((resolve, reject) => {
            database.collection('Links').insertOne(obj, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(path)
                }
            })
        })
    }

    var session = requestsBody.session
    var link = requestsBody.link

    if (await checkLoginAssess(session)) {

        if (link == undefined) {
            return { "error": 'link cannot be empty' }
        } else {
            return {"path":await insertLink(link)}
        }

    } else {
        return { "error": 'Authentication failed' }
    }
}

async function index(requestsBody, url,metmod) { // 索引
    
    url = url.replace('/','')

    var linkData =  await searchUrl(url)
    var getLink = requestsBody.getLink

    // console.log(linkData)
    if (linkData.length == 0) {
        return { "error": "Not found this link" }
    } else {
        var link = linkData[0]["link"]
        if (metmod == "POST" && getLink == "true") {
            return {"link":link}
        } else {
            return {"goLink":link}
        }
    }
    
}

// 链接数据库
async function db_connect() {

    if (database != null) {
        return database
    } else {
        console.log("Connecting to MongoDB...")
        try {
            const client = await MongoClient.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
            database = client.db('FuLinks')
            console.log("Connected to MongoDB")

            // 判断集合 Links 是否存在
            const collections = await database.listCollections().toArray()
            if (collections.find((item) => item.name === 'Links') == undefined) {
                await database.createCollection('Links')
                console.log("Created collection Links")
            } else {
                console.log("Collection Links already exists")
            }

        } catch (error) {
            console.log("Error connecting to MongoDB")
            console.log(error)
        }
        return database
    }
}

// 查询数据库
function searchUrl(url) {
    return new Promise((resolve, reject) => {
        database.collection('Links').find({"path":url}).toArray((err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}
