# Ciao

Ciao is a Chat user interface created with create-react-app and is written in React.js.
Currently the UI only supports Desktop view and is not mobile responsive.

## Usage

Download or clone the project directory in your own system, and navigate into *ciao*.

Run 'npm i' in your terminal to install project dependencies and after the installation is compelete run 'npm start' to open the project on your localhost (normally on port 3000).

## What each file does

### Components

inside the 'src/Components' folder there are a few components that are finally rendered in App.js. These components are as follows:

#### Ciao.js

Inside this file the basic layout of the application is rendered with a few mock users and at first it displays a main page. after clicking on any username the user is taken to the corresponding chat filled with a few pre-written messages

#### Chat.js

Within this component basic user interactions are implemented, users can send messages to others containing emoji and time is automaticaly rendered as per the 'utils.js' file in the 'src' directory.

For now the act of sending messages only rendered in the client side and there is no server-side interactions with the application.

Also currently sending files in messages is not possible.

#### Bubble.js

This file holds a functional component which will render message bubbles with the time at which they were sent to the other user and/or the time at which the user has intercepted the message.

#### messages.js

In this file there are a few mock messages for the application to render and are only for preview.

### images/

This is the folder in which there are the background images necessary for the user interface.

### App.css

This is the file which contains the styles for the application.

## Dependencies

This project uses 'emoji-picker-react' package by ealush. To install the package simply run 'npm install emoji-picker-react'.
