import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import TransactionPage from "./components/TransactionPage";

/**
 * @return {boolean}
 */
export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Routes>
                <Route path='/' component={MainPage} />
                <Route path='/transaction/:type' component={TransactionPage} />
            </Routes>
        )
    }
}
