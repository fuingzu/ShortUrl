# ShortUrl
A serverless URL shortening service based on Vercel.  
本页还提供：[简体中文版](https://iling.cool/archives/shortUrl-vercel.html)

## 🎉 Features
- serverless
- Automatically prevent duplicate short URLs from being generated
- Background management page
   - Add short URL
   - list of short urls
   - remove short url
- Companion API
- Secondary development possible

## 😎 Demo
Link:https://short-url-demo.vercel.app/snQaWdG27M  
Admin:https://short-url-demo.vercel.app/admin (session:123456)

<img width="583" alt="image" src="https://user-images.githubusercontent.com/79984712/213964020-9b395a45-0d23-4b37-87e4-e41b74670c56.gif">

## 😜 deploy
### First part
> Apply for Mongodb database

> Video version: [The first chapter on Youtube](https://youtube.com/watch?v=wH-Hcnl9bg8&si=EnSIkaIECMiOmarE)/[Bilibili](https://www.bilibili.com/video/BV1xY411X7Uz/)

Because the short link service needs to store URL data, it is necessary to apply for a free Mongodb database from Mongodb.com for data storage.

In this section, you will get a Mongodb url, please save it, we will use it in the next section.

Open https://account.mongodb.com/account/register to register an account
<img width="914" alt="image" src="https://user-images.githubusercontent.com/79984712/213992084-84a13904-06c1-458f-a662-543999bf8698.png">
<img width="914" alt="image" src="https://user-images.githubusercontent.com/79984712/213992242-673cec96-9f27-414e-ba04-929614ac9213.png">
<img width="914" alt="image" src="https://user-images.githubusercontent.com/79984712/213992292-b2e4df09-3b99-4197-9be7-a6642f784805.png">
<img width="909" alt="image" src="https://user-images.githubusercontent.com/79984712/213992322-038f8ea1-cf12-4595-9a22-4cd2fd8be36a.png">

Create a database account and record the password of the account

<img width="906" alt="image" src="https://user-images.githubusercontent.com/79984712/213992401-2f597f50-b9bb-4b89-bd99-edf2f6facc74.png">  

Authorize all IP connections

<img width="915" alt="image" src="https://user-images.githubusercontent.com/79984712/213992557-604169c6-207f-4795-a9a2-3e1b28a77243.png">  

create

<img width="129" alt="image" src="https://user-images.githubusercontent.com/79984712/213992674-4283b9f6-ce40-4bd3-9d41-5a0fc1c980da.png">
<img width="904" alt="image" src="https://user-images.githubusercontent.com/79984712/213992717-2bbd5525-875b-4344-9e67-dc8ee2670b74.png">  
Click this option

<img width="853" alt="image" src="https://user-images.githubusercontent.com/79984712/213992778-8ac478f8-0fbe-4e5a-a416-9afd018d8db4.png">  
Copy the connection URL

<img width="539" alt="image" src="https://user-images.githubusercontent.com/79984712/213992829-ba6b8728-f7b7-4721-809f-c6cb0d12506a.png">  
Replace the "<password>" in the URL with the password you just set
   
<img width="584" alt="image" src="https://user-images.githubusercontent.com/79984712/213992971-87292770-b0c9-47d1-b807-b23c79528a54.png">

***

### The second part
> Video version: [The second chapter on Youtube](https://youtube.com/watch?v=8LsWTiHbQHU&si=EnSIkaIECMiOmarE)/[Bilibili](https://www.bilibili.com/video/BV1xY411X7Uz/)
#### 1. Deploy the repository to Vercel:
> You need to click the button below to go to the Vercel deployment page

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/linglaoda/ShortUrl/)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Flinglaoda%2FShortUrl.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Flinglaoda%2FShortUrl?ref=badge_shield)

If you have not logged in or registered Vercel, please click the deployment button above again after registering/logging in according to the page.

If everything is ready, you will see the following page after clicking the button:
<img width="1003" alt="image" src="https://user-images.githubusercontent.com/79984712/213967437-dc480bfe-32a5-4989-920f-a40390f56cda.png">
You need to give your project a name, fill it in the "Repository Name" input box, and click the "Create" button,

<img width="981" alt="image" src="https://user-images.githubusercontent.com/79984712/213967720-2f9c9051-ccf6-449a-af15-ba662ff5d0d8.png">

At that time Vercel will automatically create a repository with the same name in your Github and pull the code of this project.

<img width="989" alt="image" src="https://user-images.githubusercontent.com/79984712/213967788-07be714c-ea3a-4a8d-9d5b-e1bd95f0f348.png">

After the pull is complete, Vercel will start project deployment, which is also automatic.

<img width="951" alt="image" src="https://user-images.githubusercontent.com/79984712/213967842-b9861645-61db-4427-bde7-0274a7fe367c.png">

When you see this page, the project has been deployed successfully.
<img width="979" alt="image" src="https://user-images.githubusercontent.com/79984712/213971819-93386058-d0bc-46e7-8171-f7cf470944e5.png">



#### 2. Add environment variables

After the deployment is complete, you need to click the "Continue to Dashboard" button located in the upper right corner of the page
<img width="181" alt="image" src="https://user-images.githubusercontent.com/79984712/213968419-e6a978aa-59fe-4281-8608-2e62e8ac7c27.png">
> If you accidentally close this button, you only need to open the item on the homepage.
In the new page, click the "Settings" button in the menu bar

![image](https://user-images.githubusercontent.com/79984712/213971941-5a59f666-3692-43f1-a0bb-d2948ae5d1b1.png)
Click the "Environment Variables" button to open the environment variable settings page
<img width="960" alt="image" src="https://user-images.githubusercontent.com/79984712/213968655-58662c1c-1358-4e91-add1-91503850f7da.png">
On the environment variable setting page, create new environment variables named "AppSession" and "mongodbUrl" according to the figure below, and write the administrator login credentials and mongodbUrl (obtained in step 1) respectively.
Also check the "Production", "Preview" and "Development" options below.
Finally click the "Save" button to save
<img width="960" alt="image" src="https://user-images.githubusercontent.com/79984712/213969111-5d3c5de2-9e4d-4edf-b29a-a55410788c4f.png">
We need to click the "Deployments" button in the navigation bar to open the deployment tab
<img width="969" alt="image" src="https://user-images.githubusercontent.com/79984712/213969434-70111d0f-0734-4559-9bf0-fe8af571e154.png">
Click the "Redeploy" button in the "..." button to the right of the first record to redeploy the project
<img width="954" alt="image" src="https://user-images.githubusercontent.com/79984712/213969594-cdc1025e-98b3-46f9-97bc-902ef0c1e145.png">
Check "Redeploy with existing Build Cache." and click the "REDEPLOY" button to redeploy
<img width="979" alt="image" src="https://user-images.githubusercontent.com/79984712/213969744-7bb050a6-4662-4782-8579-696367ef8482.png">
When you see this page, the service has been successfully deployed
<img width="965" alt="image" src="https://user-images.githubusercontent.com/79984712/213972652-a51b54f9-04ae-4a8d-9b2c-04f3deb52d7f.png">
You can access the domain name +/admin to access the management page, and the login password is the value of "AdminSession" in the environment variable you set.
<img width="1038" alt="image" src="https://user-images.githubusercontent.com/79984712/213970084-32bf1ba9-64b0-4760-96cf-7038e4a6fa39.png">
If you need a custom domain name, you can bind it yourself on the settings page


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Flinglaoda%2FShortUrl.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Flinglaoda%2FShortUrl?ref=badge_large)