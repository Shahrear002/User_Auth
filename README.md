# User_Auth
Task for Internship

# run npm install to install dependencies

# To run the project

npm run dev

# User Registration

URL: /users/register

Method: POST

Success Response: Code: 200

                  Content: user information
                  
 Error Response: Code: 400
 
                  Content: User already Exists   
                  
# User Login

URL: /users/login

Method: POST

Success Response: Code: 200
                  Content: Logged in successfully and generates a bearer token
                  
Error Response: Code: 400
                  Content: User not found or Password incorrect
                  
 
 # Customer Registration

URL: /users/customerregister

Method: POST

Success Response: Code: 200

                  Content: user information
                  
 Error Response: Code: 400
 
                  Content: logs error 
