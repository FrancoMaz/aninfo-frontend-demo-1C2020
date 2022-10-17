import React from "react";
import "./Error.css";

function Error(props) {
    return (
        <div className="error-message">{props.message}</div>
    )
}

export default Error;
