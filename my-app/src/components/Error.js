import React from "react";
import "./Error.css";

export default class Error extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="error-message">{this.props.message}</div>
        )
    }
}