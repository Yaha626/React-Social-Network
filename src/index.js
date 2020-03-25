import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {
        ID: 1,
        name: "Dimych"
    },
    {
        ID: 2,
        name: "Andrew"
    },
    {
        ID: 3,
        name: "Sveta"
    },
    {
        ID: 4,
        name: "Sasha"
    },
    {
        ID: 5,
        name: "Victor"
    },
    {
        ID: 6,
        name: "Valera"
    }

]


let messages = [
    {
        ID: 1,
        message: "Hi"
    },
    {
        ID: 2,
        message: "How is your"
    },
    {
        ID: 3,
        message: "Sveta"
    },
    {
        ID: 4,
        message: "Yo"
    },
    {
        ID: 5,
        message: "Yo"
    },
    {
        ID: 6,
        message: "Yo"
    }

]

ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();