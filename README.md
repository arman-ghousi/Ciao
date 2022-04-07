# Ciao

Ciao is a chat user interface created with **create-react-app** and is written in React.js

For now, the UI is only supported for desktop view and it not responsive.

## Usage

Download or clone the project files inside a directory and navigate into the directory.

After that run 'npm install' to install project dependecies, and then run 'npm start' to start the application in your localhost (normally on port 3000).

## What each file does

### App.js

This file renders the application inside the root element.

### App.css

This file holds all the styles of the application.

### utils.js

Inside this file there is a function to handle time generation when messages are created.

### images/

All the background images used for the app are inside this directory.

### Components/

This folder has all the components necessary for the project, all of which will finally be rendered inside **App.js**.

Each of the components inside this directory are described as follows:

#### Ciao.js

This component renders the main page of the application which display a list of mock users and the chat section. Clicking on any username navigates the user to their corresponding chat.

#### Chat.js

This component is responsible for user interaction within the chat application. User can write messages and add emoji to them, which by clicking on the envelope button or hitting enter the message is generated and added to the list of messages (Currently file upload is not implemented inside this component).

#### Bubble.js

This component renders message bubbles which displays message content and the time at which it was sent.

#### messages.js

In this file there are a few pre-written messages for preview and are rendered when the application starts. The application is currently purely client-side and there are no server-side interactions. As such on every reload of the page all recently written messages are lost.

## Credits

The emoji in this application are provided by the [**emoji-picker-react**](https://github.com/ealush/emoji-picker-react) package written by ealush.
