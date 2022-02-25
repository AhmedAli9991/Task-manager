# Task-manager

### what I learned 

- Authentication
- Protected Routes in React
- Cors in detail
- Cookies
- JWTs
- AccessTokens and RefreshTokens
- giving credentials for cookies
- Working with HTTPOnly Cookies
- Linking multiple MongoDB Collections 

### About Project

this is a task manager app made using the MERN stack it manages tasks of multiple users and authenticates them using JWTs Multiple Users can use this Application to manage their own Tasks User can Signup Login and create new Task which he wants to do once complete they can delete the task if User wants they can Update the Task and change it. This is a fullStack app made using the MERN stack 

### Modules 

- #### Login/Signup 
The User can create an account and login and access the application the user can the tasks made by the user will be stored for that user and user can see his tasks and update them
When user loggs in an AccessToken and RefreshToken pair is generated which is stored in HTTPOnly Cookies 

- #### Add Tasks
The User can create a Task which they want to do after they are loggedin it checks for a valid token when create tasks otherwise it redirects to Login page

- #### Update and Delete Tasks 
The User can update and delete any Task which they want after they are loggedin it checks for a valid token when updating or deleting  otherwise it redirects to Login page



### End
