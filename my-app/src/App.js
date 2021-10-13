import React from 'react';
import {Routes} from "./routes";

/**
 * @return {boolean}
 */
export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Routes />
        )
    }
}
