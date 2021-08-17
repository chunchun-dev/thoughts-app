# Thoughts

A web app made in React JS using Firebase that functions much like Twitter where users can create accounts, post, and delete.
All posts are anonymous, but they require an account to create to prevent spam. 
Users can write down their thoughts for others to view.
The project is in very early stages.

Check it out [live](https://thoughts-app.vercel.app/)!

# Tech Stack

* React
* Firebase
* Chakra UI.

# Local Development Setup

Clone the repository

```
git clone https://github.com/qt-coder/thoughts-app.git
```

Change into the project directory

```
cd thoughts-app
```

Setup the .env file with your firebase credentials

```
REACT_APP_FIREBASE_KEY=
REACT_APP_FIREBASE_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

Run the install command
```
yarn install
```

Run the development server
```
yarn start
```