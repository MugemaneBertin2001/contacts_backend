# Contact_Backend
Contact_Backend is a web application that allows users to register and log in, and create, read, update, and delete their contacts. The project is built with Node.js, Express, and MongoDB, and uses MD5 encryption to secure user passwords. The API endpoints can be tested with Thunder Client.
## Installation
Before you start, make sure you have the following tools installed on your system:
## Tools Used

- Node.js
- Express
- MongoDB
- MD5 Encryption
- Thunder Client
## To install Contact_Backend, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/MugemaneBertin2001/contacts_backend.git
```
2. Install the dependencies:
```bash
npm install
```
3. Start the MongoDB server:
```bash
mongod
```
4. Start the application:
```bash
npm start
```
##### The application will start running at http://localhost:3000.
# Usage
To use Contact_Backend, follow these steps:

1. Register a new user by sending a POST request to /register with the following data:
```json
{
    "name": "<your-name>",
    "email": "<your-email>",
    "password": "<your-password>"
}
```
2. Log in with your email and password by sending a POST request to /login. The response will include an access token that you can use to authenticate future requests
3. Create a new contact by sending a POST request to /contacts with the following data:
```json
{
    "name": "<contact-name>",
    "email": "<contact-email>",
    "phone": "<contact-phone>"
}
```
4. Retrieve a list of your contacts by sending a GET request to /contacts. You can also retrieve a specific contact by sending a GET request to /contacts/:contact-id.
5. Update a contact by sending a PUT request to /contacts/:contact-id with the updated data.
6. Delete a contact by sending a DELETE request to /contacts/:contact_id
# Contributing
If you want to contribute to Contact_Backend, please follow these guidelines:
1. Fork the repository and make your changes on a new branch.
2. Write clear commit messages and submit a pull request.
3. Follow the code style guidelines in .eslintrc.json.
 # License
 Contact_Backend is licensed under the MIT License. See LICENSE for more information.
 # Contact
 If you have any questions or feedback, please contact the developer at bertin.m2001@gmail.com.
