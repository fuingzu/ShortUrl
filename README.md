# ShortUrl
A serverless URL shortening service based on Vercel.

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
<img width="583" alt="image" src="https://user-images.githubusercontent.com/79984712/213964020-9b395a45-0d23-4b37-87e4-e41b74670c56.gif">

## 😜 deploy
### first part
> Apply for Mongodb database
Because the short link service needs to store URL data, it is necessary to apply for a free Mongodb database from Mongodb.com for data storage.

In this section, we provide a complete configuration teaching video on the video website "Bilibili", you can go to: [Bilibili](https://) to view.
In this section, you will get a Mongodb url, please save it, we will use it in the next section.

### the second part
#### 1. Deploy the repository to Vercel:
> You need to click the button below to go to the Vercel deployment page

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/linglaoda/ShortUrl/)

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
