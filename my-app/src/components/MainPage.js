import React from "react";
import extractIcon from "../extraer_icono.svg";
import depositIcon from "../depositar_icono.svg";
import TransactionList from "./TransactionList";
import "../App.css";

export default class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cbu: 0,
            amount: 0,
            transactionList: []
        }
    }

    componentDidMount() {

        /*fetch('https://memo1-bank-app.herokuapp.com/accounts/1', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error('Error:', error))
            .then((response) => {
                console.log(response);
                this.setState({
                    cbu: response.cbu,
                    amount: response.balance
                })
            })

        fetch('https://memo1-bank-app.herokuapp.com/accounts/1/transactions', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error('Error:', error))
            .then((response) => {
                console.log(response);
                this.setState({
                    transactionList: response
                })
            })*/

    }

    doTransaction = (type) => {
        this.props.history.push("/transaction/" + type);
    };

    render() {
        return (
            <div className="app">
                <div className="title">Mi caja de ahorro</div>
                <div className="cbu">CBU {this.state.cbu}</div>
                <div className="amount">$ {this.state.amount}</div>
                <div className="options">
                    <div className="transaction-option" onClick={() => this.doTransaction("withdrawal")}>
                        <img src={extractIcon}/>
                        <div className="img_label">Extraer</div>
                    </div>
                    <div className="transaction-option" onClick={() => this.doTransaction("deposit")}>
                        <img src={depositIcon}/>
                        <div className="img_label">Depositar</div>
                    </div>
                </div>
                <TransactionList transactions={this.state.transactionList}/>
            </div>
        )
    }
}
