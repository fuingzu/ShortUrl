# 短网址
基于 Vercel 的无服务器 URL 缩短服务。
本页还提供：[English](README.md)

## 🎉 特点
- 无服务器
- 自动防止生成重复的短网址
- 后台管理页面
    - 添加短网址
    - 短网址列表
    - 删除短网址
- 配套 API
- 可进行二次开发

## 😎演示
链接：https://short-url-demo.vercel.app/snQaWdG27M
管理员：https://short-url-demo.vercel.app/admin（session：123456）

<img width="583" alt="image" src="https://user-images.githubusercontent.com/79984712/213964020-9b395a45-0d23-4b37-87e4-e41b74670c56.gif">

## 😜部署
### 第一部分
> 申请Mongodb数据库

> 视频版：[Youtube第一章](https://youtube.com/watch?v=wH-Hcnl9bg8&si=EnSIkaIECMiOmarE)/[Bilibili](https://www.bilibili.com/video/BV1xY411X7Uz/)

由于短链接服务需要存储URL数据，因此需要向Mongodb.com申请免费的Mongodb数据库用于数据存储。

在本节中，您将获得一个 Mongodb url，请保存它，我们将在下一节中使用它。

打开 https://account.mongodb.com/account/register 注册一个账号
<img width="914" alt="image" src="https://user-images.githubusercontent.com/79984712/213992084-84a13904-06c1-458f-a662-543999bf8698.png">
<img width="914" alt="image" src="https://user-images.githubusercontent.com/79984712/213992242-673cec96-9f27-414e-ba04-929614ac9213.png">
<img width="914" alt="image" src="https://user-images.githubusercontent.com/79984712/213992292-b2e4df09-3b99-4197-9be7-a6642f784805.png">
<img width="909" alt="image" src="https://user-images.githubusercontent.com/79984712/213992322-038f8ea1-cf12-4595-9a22-4cd2fd8be36a.png">

创建数据库账号并记录账号密码

<img width="906" alt="image" src="https://user-images.githubusercontent.com/79984712/213992401-2f597f50-b9bb-4b89-bd99-edf2f6facc74.png">

授权所有 IP 连接

<img width="915" alt="image" src="https://user-images.githubusercontent.com/79984712/213992557-604169c6-207f-4795-a9a2-3e1b28a77243.png">

创建

<img width="129" alt="image" src="https://user-images.githubusercontent.com/79984712/213992674-4283b9f6-ce40-4bd3-9d41-5a0fc1c980da.png">
<img width="904" alt="image" src="https://user-images.githubusercontent.com/79984712/213992717-2bbd5525-875b-4344-9e67-dc8ee2670b74.png">
单击此选项

<img width="853" alt="image" src="https://user-images.githubusercontent.com/79984712/213992778-8ac478f8-0fbe-4e5a-a416-9afd018d8db4.png">
复制连接网址

<img width="539" alt="image" src="https://user-images.githubusercontent.com/79984712/213992829-ba6b8728-f7b7-4721-809f-c6cb0d12506a.png">
将URL中的“<password>”替换为您刚刚设置的密码
   
<img width="584" alt="image" src="https://user-images.githubusercontent.com/79984712/213992971-87292770-b0c9-47d1-b807-b23c79528a54.png">

***

### 第二部分
> 视频版：[Youtube第二章](https://youtube.com/watch?v=8LsWTiHbQHU&si=EnSIkaIECMiOmarE)/[Bilibili](https://www.bilibili.com/video/BV1xY411X7Uz/)
#### 1. 将存储库部署到 Vercel：
> 您需要点击下方按钮进入Vercel部署页面

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/linglaoda/ShortUrl/)

如果您还没有登录或注册过Vercel，请根据页面注册/登录后再次点击上面的部署按钮。

如果一切就绪，点击按钮后你会看到如下页面：
<img width="1003" alt="image" src="https://user-images.githubusercontent.com/79984712/213967437-dc480bfe-32a5-4989-920f-a40390f56cda.png">
你需要给你的项目起个名字，并将其填入“Repository Name”输入框，点击“Create”按钮，

<img width="981" alt="image" src="https://user-images.githubusercontent.com/79984712/213967720-2f9c9051-ccf6-449a-af15-ba662ff5d0d8.png">

届时 Vercel 会自动在你的 Github 中创建一个同名的仓库，并拉取该项目的代码。

<img width="989" alt="image" src="https://user-images.githubusercontent.com/79984712/213967788-07be714c-ea3a-4a8d-9d5b-e1bd95f0f348.png">

拉取完成后，Vercel 会开始项目部署，也是自动的。

<img width="951" alt="image" src="https://user-images.githubusercontent.com/79984712/213967842-b9861645-61db-4427-bde7-0274a7fe367c.png">

当你看到这个页面时，项目已经部署成功。
<img width="979" alt="image" src="https://user-images.githubusercontent.com/79984712/213971819-93386058-d0bc-46e7-8171-f7cf470944e5.png">



#### 2.添加环境变量

部署完成后，需要点击位于页面右上角的“Continue to Dashboard”按钮
<img width="181" alt="image" src="https://user-images.githubusercontent.com/79984712/213968419-e6a978aa-59fe-4281-8608-2e62e8ac7c27.png">
> 如果你不小心关闭了这个页面，您只需在首页打开该项目即可。
在新页面中，点击菜单栏中的“设置”按钮

![图片](https://user-images.githubusercontent.com/79984712/213971941-5a59f666-3692-43f1-a0bb-d2948ae5d1b1.png)
点击“环境变量”按钮，打开环境变量设置页面
<img width="960" alt="image" src="https://user-images.githubusercontent.com/79984712/213968655-58662c1c-1358-4e91-add1-91503850f7da.png">
在环境变量设置页面，按照下图新建名为“AppSession”和“mongodbUrl”的环境变量，分别写入管理员登录凭证和mongodbUrl（步骤1中获取）。
还要检查下面的“生产”、“预览”和“开发”选项。
最后点击“保存”按钮保存
<img width="960" alt="image" src="https://user-images.githubusercontent.com/79984712/213969111-5d3c5de2-9e4d-4edf-b29a-a55410788c4f.png">
我们需要点击导航栏中的“Deployments”按钮，打开部署选项卡
<img width="969" alt="image" src="https://user-images.githubusercontent.com/79984712/213969434-70111d0f-0734-4559-9bf0-fe8af571e154.png">
点击第一条记录右侧“...”按钮中的“重新部署”按钮，重新部署项目
<img width="954" alt="image" src="https://user-images.githubusercontent.com/79984712/213969594-cdc1025e-98b3-46f9-97bc-902ef0c1e145.png">
选中“使用现有构建缓存重新部署”。 然后点击“REDEPLOY”按钮重新部署
<img width="979" alt="image" src="https://user-images.githubusercontent.com/79984712/213969744-7bb050a6-4662-4782-8579-696367ef8482.png">
当你看到这个页面时，服务已经部署成功
<img width="965" alt="image" src="https://user-images.githubusercontent.com/79984712/213972652-a51b54f9-04ae-4a8d-9b2c-04f3deb52d7f.png">
您可以通过域名+/admin访问管理页面，登录密码为您设置的环境变量中“AdminSession”的值。
<img width="1038" alt="image" src="https://user-images.githubusercontent.com/79984712/213970084-32bf1ba9-64b0-4760-96cf-7038e4a6fa39.png">
如需自定义域名，可在设置页面自行绑定
