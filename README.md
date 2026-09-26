# Web Contacts

## This site was built to register contacts for users in an organization, whether its a personal contact, a collegue, a supplier, a client, a service provider, or anyone needed to get a job done. It can be used to share contact information, separate types of contacts, and make an easy access to the contact details in the site. 

## Screenshots
#### 1. Home Page
![Home Page](public\Screenshot 2026-09-26 114908.png)
*Overview of the main dashboard and public contact directory.*

#### 2. New Contact Page
![New Contact Page](public\Screenshot 2026-09-26 115020.png)
*Form for adding and categorizing new contacts.*

#### 3. Sign Up Page
![Sign Up Page](public\Screenshot 2026-09-26 115126.png)
*User registration interface for new accounts.*

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

### Types

| Key | Field |
| :--- | :--- |
| **PK** | `Object ID` |
| | `Type` |
| | `Description` |

### User

| Key | Field |
| :--- | :--- |
| **PK** | `Object ID` |
| | `Username` |
| | `Password` |

### Contact Details

| Key | Field |
| :--- | :--- |
| **PK** | `Object ID` |
| | `Name` |
| | `Phone Number` |
| | `Email` |
| | `makePublic` |
| | `Company` |
| | `job` |
| | `location` |
| **FK** | `User.Owner` |
| **FK** | `Types.Type` |

## Routes
| Method | Route                 | Description                  |
|--------|-----------------------|------------------------------|
| GET    | /                     | Home Page                    |
| GET    | /auth/sign-up         | Sign Up page                 |
| POST   | /                     | User Creation                |
| GET    | /auth/sign-in         | Sign in Page                 |
| POST   | /                     | User Sign in                 |
| GET    | /my-contacts/new      | Contact Creation Page        |
| POST   | /my-contacts          | Contact Creation             |
| GET    | /all-contacts         | View all public contacts     |
| GET    | /my-contacts          | View all private contacts    |
| GET    | /all-contacts/:id     | View shared contact details  |
| GET    | /my-contacts/:id/edit | Editing contact page         |
| PUT    | /my-contacts/:id      | Edit Contact                 |
| DELETE | /my-contacts/:id      | Delete Contact               |



## Features
### Signing up and signing in the app, creating contacts and sharing, viewing personal contacts and shared contacts, editing contact information, deleting contacts.


## Future Enhancements
### Making an admin user to manage users and their contacts. Adding a field for birthdays and creating a reminder functionality to send a notification.


### Credits
Komail Aljanabi - General Assembly. All rights reserved.