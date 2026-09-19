# Web Contacts

## This site was built to register contacts for users in an organization, whether its a personal contact, a collegue, a supplier, a client, a service provider, or anyone needed to get a job done. It can be used to share contact information, separate types of contacts, and make an easy access to the contact details in the site. 

## Screenshots


## Technologies Used
- Node JS
- EJS
- Express
- CSS
- Mongo DB

# Getting Started

## User Stories
1. I want to create contacts and add their details and categories.
2. I want to share contacts with others.
3. I want some contacts for only me to create and view.
4. I want to edit contact information, and to delete contacts which I will not need in the future.


## Database Design
- User Table
| Primary Key | Object_ID          |
|-------------|--------------------|
|             | Username  Password |

- Contacts Table
| Primary Key | Object_ID                                                              |
|-------------|------------------------------------------------------------------------|
|             | Name  Phone Number  Email  makePublic  Company  User.Owner  Types.Type |

- Types Table
| Primary Key | Object_ID         |
|-------------|-------------------|
|             | Type  Description |


## Routes
| Method | Route                 | Description                  |
|--------|-----------------------|------------------------------|
| GET    | /                     | Home Page                    |
| GET    | /sign-up              | Sign Up page                 |
| POST   | /                     | User Creation                |
| GET    | /sign-in              | Sign in Page                 |
| POST   | /                     | User Sign in                 |
| GET    | /new                  | Contact Creation Page        |
| POST   | /all-contacts         | Contact Creation             |
| GET    | /all-contacts         | View all public contacts     |
| GET    | /my-contacts          | View all private contacts    |
| GET    | /all-contacts/:id     | View shared contact details  |
| GET    | /my-contacts/:id      | View private contact details |
| GET    | /my-contacts/:id/edit | Editing contact page         |
| PUT    | /my-contacts/:id      | Edit Contact                 |
| DELETE | /my-contacts/:id      | Delete Contact               |



## Features
### Signing up and signing in the app, creating contacts and sharing, viewing personal contacts and shared contacts, editing contact information, deleting contacts.


## Future Enhancements
### Making an admin user to manage users and their contacts. Adding a field for birthdays and creating a reminder functionality to send a notification.


### Credits
Komail Aljanabi - General Assembly. All rights reserved.