import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {splitIntoWords} from "./01-hello-tests/01";

// const sentense = "hello my friend";
// const result = splitIntoWords(sentense);
// console.log(result[0] === "hello");
// console.log(result[1] === "my");
// console.log(result[2] === "friend");

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);