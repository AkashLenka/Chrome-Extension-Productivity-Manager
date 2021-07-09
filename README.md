# Chrome-Extension-Productivity-Manager

This is a Productivity Managament Chrome Extension build under the Coding Club IITG.
It's built using the following application and languages:

  1. **Front-End:** JavaScript , HTML and CSS.
  2. **Database:** Chrome(using its local storage API).

**Main Popup Menu:**<br/>
<br/>
It contains the following features:
  1. **Home Page:** It basically redirects you to the webpage of the extension where you can contact the creators.
  2. **ToDo List:** It basically contains your To Do task.
  3. **Work Timer:** It basically contains a timer to control your work hours.
  4. **Blacklist URLs:** It basically contains a list of blacklisted URLs.

![image](https://user-images.githubusercontent.com/78587230/125006411-b22fac00-e07b-11eb-8e26-41d737c832c2.png)

**Home Page:**<br/>
<br/>
On clicking the home icon you would be redirected to a HTML web page where you can send your email to contact the creators.
<br/>

![image](https://user-images.githubusercontent.com/78587230/125007232-6bdb4c80-e07d-11eb-8bcc-87bc3cf25175.png)

**ToDo List:**<br/>

On clicking the ToDo list you can find your task.<br/>
Some features includes:
<br/>
  1. **All-Task:** It shows you all the completed and the active task you have.
  2. **Active-Task:** These task are usually plain and darker than the completed one to hightlight it well.
  3. **Completed-Task:** These task are usually denoted with tick mark and striked off.
  4. The ToDo part also shows you the amount of task remaining and you can clear them off at once by clicking on **Clear Completed**.
<br/>

![image](https://user-images.githubusercontent.com/78587230/125007738-8b26a980-e07e-11eb-9799-2fcd94df7e43.png)

**Work Timer:**<br/>
<br/>
On clicking the work timer you come up to this page where you can set the time of your work in minutes:<br/>
Features included:<br/>
  1.**Notification alarm:** Sends you a notifcation when time is completed.<br/>
  2.**Blocking URLs:** User may no longer be able to access any website until time is set again.<br/>

![image](https://user-images.githubusercontent.com/78587230/125008027-3df70780-e07f-11eb-801f-e643bbca6434.png)

After setting up the timer the timer countdowns to zero until ur browser is open, since it runs on the **background.js**.<br/>
After the timer becomes you get a notification(alarm feature) that your time is up and locks up your entire browser thus not allowing you to use anything.

  **Notification:**
<br/>
  You can see a custom made notification popup at the bottom right of the screen.
<br/>

  ![image](https://user-images.githubusercontent.com/78587230/125008603-70553480-e080-11eb-8645-796f5cecaf8b.png)

  **Blocking all URLs:**
<br/>
  You can see that these pages and other pages(which are grey now) have become inactive, as being blocked by the extension:
<br/>

![image](https://user-images.githubusercontent.com/78587230/125008770-d5108f00-e080-11eb-8203-dad1dcd7b372.png)

**Blacklist URLs:**
<br/>
This contains a list of blacklisted URLs by the user which wont be accessible to them and other websites run smoothly without interuption.<br/>
Features include:<br/>
  1. **Add URL:** You can add URL to be blocked.
  2. **Remove URL(Close button near the URL):** You can remove them from being blocked.
  3.  All data is basically being stored in an array in **background.js** file which when interacting with **new_Black.js** file allows for all these commands.<br/>
<br/>

**Unlisted in Blacklist URL:**

![image](https://user-images.githubusercontent.com/78587230/125009722-b7dcc000-e082-11eb-8f90-6ebbaff6cf23.png)

**Listed in Blacklisted URL:**

![image](https://user-images.githubusercontent.com/78587230/125009861-ff634c00-e082-11eb-802d-11c53cc2d493.png)<br/>
You can check yourself that codeforces is also blocked by the change in icon. 
<br/>
As you can see in the images above that other websites are working fine but the CF and CC site alone are blocked.
<br/>

<p align="center"> 
  ****Hope you loved my project :)****
</p>
