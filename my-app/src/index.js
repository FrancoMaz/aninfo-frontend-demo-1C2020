import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import TransactionPage from "./components/TransactionPage";
import Login from "./components/Login";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<MainPage />} />
            <Route path='/transaction/:type' element={<TransactionPage />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
