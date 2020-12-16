import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from './reportWebVitals';

let rerenderEntireTree = () => {
    ReactDOM.render(<App state={store.getState()}
                         addPost={store.addPost.bind(store)}
                         changeNewText={store.changeNewText.bind(store)}
    />, document.getElementById('root'));
}

store.subscribe(rerenderEntireTree);
store._rerenderEntireTree();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
