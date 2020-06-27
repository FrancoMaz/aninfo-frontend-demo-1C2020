import React from 'react';
import './App.css';
import MainPage from "./components/MainPage";

/**
 * @return {boolean}
 */
export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {

        return (
            <MainPage />
        )
    }
}
