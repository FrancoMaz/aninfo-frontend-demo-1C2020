import React from "react";
import extractIcon from "../extraer_icono.svg";
import depositIcon from "../depositar_icono.svg";
import TransactionList from "./TransactionList";
import TransactionPage from "./TransactionPage";

export default class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cbu: "928472923745271912736",
            amount: 100,
            transaction: null,
            show: true,
            transactionList: []
        }
    }

    doTransaction = (type) => {
        this.setState({transaction: type, show: false})
    };

    showMainPage = () => {
        this.setState({transaction: null, show: true})
    };

    changeAmount = (amount) => {
      this.setState({amount: amount, transaction: null, show: true})
    };

    addTransaction = (transaction) => {
        this.setState({transactionList: [transaction].concat(this.state.transactionList)})
    };


    render() {

        return (
            (this.state.show && this.state.transaction === null) ?
                <div className="app">
                    <div className="title">Mi caja de ahorro</div>
                    <div className="cbu">CBU {this.state.cbu}</div>
                    <div className="amount">$ {this.state.amount}</div>
                    <div className="options">
                        <div onClick={() => this.doTransaction("extract")}>
                            <img src={extractIcon}/>
                            <div className="img_label">Extraer</div>
                        </div>
                        <div onClick={() => this.doTransaction("deposit")}>
                            <img src={depositIcon}/>
                            <div className="img_label">Depositar</div>
                        </div>
                    </div>
                    <TransactionList transactions={this.state.transactionList}/>
                </div> :
                (this.state.transaction === "extract" ?
                    <TransactionPage action="Extraer" showMainPage={this.showMainPage} changeAmount={this.changeAmount} totalAmount={this.state.amount} addTransaction={this.addTransaction}/>
                    : <TransactionPage action="Depositar" showMainPage={this.showMainPage} changeAmount={this.changeAmount} totalAmount={this.state.amount} addTransaction={this.addTransaction}/>)

        )
    }
}
