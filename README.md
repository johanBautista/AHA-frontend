## StarterKit Frontend module 3

**importante** cambiar el `.env-sample` a `.env` con vuestras variables de entorno​

# ​AHA-Moment

## Description

We are all geniuses, the problem is not knowing what. AHA-Moment is the app where you can save your thoughts of lucidity and also, read, search and vote on the ideas of others
​
## User Stories

- **404** I can see a 404 page, and know that it is my fault when I try to access a page that does not exist.
- **500** I can see a 500 page and I know it's not my fault, because there is an internal server error​.
- **Homepage** I can see a list of quotes, I also have access to log in and register
- **Sign up** As a user, I want to register on the website to create my profile and be able to participate in aha! moment.
- **Login** As a user, I want to be able to login edit my profile, create, search and vote Aha! Moments.
- **Logout** As a user I want to be able to log out from the webpage so that I can make sure no one will access my account.
- **Profile** As a user I can see and update my profile.
- **Events list** As a user I want to see all the events available so that I can choose which ones I want to attend
- **Events create** As a user I want to create an event so that I can invite others to attend
- **Events detail** As a user I want to see the event details and attendee list of one event so that I can decide if I want to attend
- **Attend event** As a user, I want to be able to attend the event so that the organizers can count on me.
-**Filter quotes** As a user, I want to filter appointments by name and location.

## Backlog

**​User profile**
- Upload my profile picture.
- See other users profile.
- Chat with other users.
- I want to create an event in order to invite others to atten,  see the details of the event and the list of attendees of event. 
- vote speaker quotes and determine the most popular speakers​

**Geo Location**
- show all events in a map in the event list page.
​​

## Routes
### auth
<!-- |Method|Route|Functionality|
|---|---|---|
|GET|api/auth/me|Check session status|
|POST|api/auth/signup|Log in user to app and set user to session (Body: username, email, password)|
|POST|api/auth/login|Register user to app and set user to session (Body: username, mail, password)|
|POST|api/auth/logout|Log out user from app and remove session|


​
List routes backend

POST/quote ---create quote
GET/quote ---list quote
PUT/quote/:id ----update quote
DELETE/quote/:id ----delete quote

List routes frontend

/quote list
/quote/:id detail
/quote/:id/update update
/quote/:id/delete delete -->

​

## Models

User model

```json
 username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  ocupation: { type: String, required: true }
```

Event model

```json
 title: { type: String, required: true, unique: true },
  description: { type: ObjectId, ref: "User"},
  owner: { type: ObjectId, ref: "User"},
  date: { type: Date, required: true },
  location: { type: String, required: true }
``

Quote model
​```json
 text: { type: String, required: true, unique: true },
  owner: { type: ObjecId, ref: "User", unique: true },
 theme: { type: String, required: true }
``

## Links

​

### Git

​
The url to your repository and to your deployed project
​
[Repository Frontend Link](http://github.com/)
​
[Repository Backend Link](http://github.com/)
​
[Deploy Link](http://heroku.com/)
​

### Slides

​
[Slides Link](http://slides.com/)
Contrae
