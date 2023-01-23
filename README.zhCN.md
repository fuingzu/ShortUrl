# ShortUrl
一个基于 Vercel 的无服务器短网址服务。

## 🎉 特点
- 无服务器
- 域名无需备案 (特别指中国大陆)
- 自动防止生成重复的短网址
- 后台管理页面
  - 新增短网址
  - 短网址列表
  - 删除短网址
- 配套 API
- 可二次开发

## 😎 演示
演示短链:https://short-url-demo.vercel.app/snQaWdG27M  
管理演示:https://short-url-demo.vercel.app/admin (session:123456)  
因中国大陆屏蔽了 vercel 的域名，所以需要代理工具才可以访问，如果有自定义域名的话无需担心此问题。
<img width="583" alt="image" src="https://user-images.githubusercontent.com/79984712/213964020-9b395a45-0d23-4b37-87e4-e41b74670c56.gif">

## 😜 部署
### 第一部分
> 申请 Mongodb 数据库
因短链接服务需要存储网址数据，故需要从 Mongodb.com 申请免费的 Mongodb 数据库用以数据的存储。

本节我们在视频网站"Bilibili"上提供了完整的配置教学视频，您可以转至：[Bilibili](https://) 查看。
在本节中，您将获取到一个 Mongodb url，请将其保存，我们在下一节中还将用到。

### 第二部分
#### 1.将存储库部署至 Vercel：
> 您需要点击下面的按钮前往 Vercel 部署页面

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/linglaoda/ShortUrl/)

如您没有登录或注册 Vercel，请根据页面知道注册/登录后再次点击上面的部署按钮。

如一切就绪，您将在点击按钮后看到如下页面：
<img width="1003" alt="image" src="https://user-images.githubusercontent.com/79984712/213967437-dc480bfe-32a5-4989-920f-a40390f56cda.png">
您需要为您的项目取一个名字，并将其填写至 "Repository Name" 输入框中，并点击 "Create" 按钮，

<img width="981" alt="image" src="https://user-images.githubusercontent.com/79984712/213967720-2f9c9051-ccf6-449a-af15-ba662ff5d0d8.png">

届时 Vercel 将自动在您的 Github 创建一个同名存储库，并拉取本项目代码。

<img width="989" alt="image" src="https://user-images.githubusercontent.com/79984712/213967788-07be714c-ea3a-4a8d-9d5b-e1bd95f0f348.png">

待拉取完毕后，Vercel 会开始项目部署，该过程也是自动的。

<img width="951" alt="image" src="https://user-images.githubusercontent.com/79984712/213967842-b9861645-61db-4427-bde7-0274a7fe367c.png">

当您看到该页面时，代表项目已部署成功。

<img width="985" alt="image" src="https://user-images.githubusercontent.com/79984712/213967910-b6738ed0-bf77-4558-b81d-47cbe3a73a5e.png">

#### 2.添加环境变量
部署完毕后，您需要点击位于页面右上角的："Continue to Dashboard" 按钮
<img width="181" alt="image" src="https://user-images.githubusercontent.com/79984712/213968419-e6a978aa-59fe-4281-8608-2e62e8ac7c27.png">
> 如您不小心关闭了此按钮，您只需要在首页打开该项目即可。
在新页面中，点击菜单栏中的 "Settings" 按钮
<img width="959" alt="image" src="https://user-images.githubusercontent.com/79984712/213968544-358d4b2c-6fe6-4fc3-8f3a-b47fa61dc496.png">
点击 "Environment Variables" 按钮，打开环境变量设置页面
<img width="960" alt="image" src="https://user-images.githubusercontent.com/79984712/213968655-58662c1c-1358-4e91-add1-91503850f7da.png">
在环境变量设置页面中，按照下图新建名为 "AppSession" 和 "mongodbUrl" 的环境变量，分别写入管理员登录凭据和 mongodbUrl(步骤一处获取到的).
同时将下方的 "Production"、"Preview"和"Development" 选项勾选。
最后点击 "Save" 按钮保存
<img width="960" alt="image" src="https://user-images.githubusercontent.com/79984712/213969111-5d3c5de2-9e4d-4edf-b29a-a55410788c4f.png">
我们需要点击导航栏的 "Deployments" 按钮，打开部署选项卡
<img width="969" alt="image" src="https://user-images.githubusercontent.com/79984712/213969434-70111d0f-0734-4559-9bf0-fe8af571e154.png">
点击第一条记录右侧的 "..." 按钮中的 "Redeploy" 按钮以重新部署项目
<img width="954" alt="image" src="https://user-images.githubusercontent.com/79984712/213969594-cdc1025e-98b3-46f9-97bc-902ef0c1e145.png">
勾选 "Redeploy with existing Build Cache." 后点击 "REDEPLOY" 按钮重新部署
<img width="979" alt="image" src="https://user-images.githubusercontent.com/79984712/213969744-7bb050a6-4662-4782-8579-696367ef8482.png">
当您看到该页面时，代表服务已部署成功
<img width="977" alt="image" src="https://user-images.githubusercontent.com/79984712/213969881-5d8522bf-73ee-4160-9ce2-e7738adc00a2.png">
您可以访问 域名+/admin 来访问管理页面，登录密码即为您设置的环境变量的 "AdminSession" 的值。
<img width="1038" alt="image" src="https://user-images.githubusercontent.com/79984712/213970084-32bf1ba9-64b0-4760-96cf-7038e4a6fa39.png">
如您需要自定义域名，可在设置页自行绑定
