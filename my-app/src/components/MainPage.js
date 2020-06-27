import React from "react";
import extractIcon from "../extraer_icono.svg";
import depositIcon from "../depositar_icono.svg";
import AccountList from "./AccountList";
import TransactionPage from "./TransactionPage";

export default class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cbu: "928472923745271912736",
            amount: 104.45,
            transaction: null,
            show: true
        }
    }

    doTransaction = (type) => {
        this.setState({transaction: type, show: false})
    };


    render() {

        return (
            (this.state.show && this.state.transaction === null) ?
                <div className="app">
                    <div className="title">Mi caja de ahorro</div>
                    <div className="cbu">CBU {this.state.cbu}</div>
                    <div className="amount">$ {this.state.amount}</div>
                    <div className="options">
                        <div onClick={this.doTransaction("extract")}>
                            <img src={extractIcon}/>
                            <div className="img_label">Extraer</div>
                        </div>
                        <div onClick={this.doTransaction("deposit")}>
                            <img src={depositIcon}/>
                            <div className="img_label">Depositar</div>
                        </div>
                    </div>
                    <AccountList />
                </div> :
                (this.state.transaction === "extract" ?
                    <TransactionPage action="Extraer"/>
                    : <TransactionPage action="Depositar"/>)

        )
    }
}
