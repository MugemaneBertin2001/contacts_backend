#Contact_Backend
#####Contact_Backend is a web application that allows users to register and log in, and create, read, update, and delete their contacts. The project is built with Node.js, Express, and MongoDB, and uses MD5 encryption to secure user passwords. The API endpoints can be tested with Thunder Client.

##Installation
Before you start, make sure you have the following tools installed on your system:

1. Node.js
npm
MongoDB
Thunder Client (Optional)
To install Contact_Backend, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/mugemanebertin2001/contact_backend.git
Install the dependencies:

Copy code
npm install
Start the MongoDB server:

Copy code
mongod
Start the application:

sql
Copy code
npm start
The application will start running at http://localhost:3000.

Usage
To use Contact_Backend, follow these steps:

Register a new user by sending a POST request to /register with the following data:

json
Copy code
{
    "name": "<your-name>",
    "email": "<your-email>",
    "password": "<your-password>"
}
Log in with your email and password by sending a POST request to /login. The response will include an access token that you can use to authenticate future requests.

Create a new contact by sending a POST request to /contacts with the following data:

json
Copy code
{
    "name": "<contact-name>",
    "email": "<contact-email>",
    "phone": "<contact-phone>"
}
Retrieve a list of your contacts by sending a GET request to /contacts. You can also retrieve a specific contact by sending a GET request to /contacts/<contact-id>.

Update a contact by sending a PUT request to /contacts/<contact-id> with the updated data.

Delete a contact by sending a DELETE request to /contacts/<contact-id>.

Contributing
If you want to contribute to Contact_Backend, please follow these guidelines:

Fork the repository and make your changes on a new branch.
Write clear commit messages and submit a pull request.
Follow the code style guidelines in .eslintrc.json.
License
Contact_Backend is licensed under the MIT License. See LICENSE for more information.

##Contact
If you have any questions or feedback, please contact the developer at [bertin.m2001@gmail.com].