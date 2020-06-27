import React from "react";
import Transaction from "./Transaction";

export default class AccountList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="transaction-list">
                <Transaction type="Extracción" amount="40"/>
                <Transaction type="Transferencia" amount="60"/>
                <Transaction type="Depósito" amount="100"/>
                <Transaction type="Extracción" amount="15.59"/>
                <Transaction type="Depósito" amount="100"/>
                <Transaction type="Extracción" amount="50.50"/>
            </div>
        )
    }
}
