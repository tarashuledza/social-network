import store from "./redux/redux-store";
import React from 'react';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import {Provider} from "react-redux";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
            </BrowserRouter>
            </Provider>
        </React.StrictMode>
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});


// API
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

