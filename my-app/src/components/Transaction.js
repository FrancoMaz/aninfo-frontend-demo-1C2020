import React from "react";
import './Transaction.css';

export default class AccountList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="transaction">
                {this.props.type} de ${this.props.amount}
            </div>
        )
    }
}