# Hopper

What is Hopper?
Hopper is the new way to share your personal links!

How does it work?
You just have to create an account, upload your links and start sharing your personal hopper link in social media!

Documentation
Data Types
User
id: Auto-generated unique user ID
username: Unique string
name: User's fullname
email: Unique | User's email
password: Auto encrypted string
bio: Optional string
config: Optional stringified JSON that should be parsed to be applied
avatar: Optional auto generated link to an image.
createdAt: Optional | Auto generated date time
slug: Unique | Auto setted to [username]
Link
id: Auto incremental ID
destination: Link entered by the user
userId: Relation | User's link owner id | This is the one you send
user: User's ID | This is the one you receive
Routes
Users
/api/users/
Method 'GET' allows you to receive an array with all the users and their links.

/api/users/register
Method 'POST' allows you to register an user if you send this type of body:

Expected body:
{"username":"string","email":"string","name":"string","password":"string"}

/api/users/login
Method 'POST' allows you to login a user if the fields are valid

Expected body:
{"identifier":"string - email/username","password":"string"}

/api/users/upload-link
Method 'POST' allows you upload a link for an user

Expected body:
{"id":"string","link":"string"}

/api/users/[username]
Method 'GET' allows you to receive an specific user data and their links

/api/users/update
Method 'POST' allows you to edit the info of an specific user

Expected body:
"An object with just the entries (keys and values) to edit. (Username, avatar, bio, email, etc.)"

Slugs
/api/slugs
Method 'GET' sends you an array with all the available slugs to visit

/api/slugs/edit
Method 'POST' allows you to edit an specific user slug

Expected body:
{"id":"string","slug":"string"}

The main objective of the project is to develop an application as complete as possible based on the basic idea. Then share the code on Github and spread it through the community! Happy development.