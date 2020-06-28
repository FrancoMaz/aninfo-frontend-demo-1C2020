import React from "react";
import Confirmation from "./Confirmation";
import "./TransactionPage.css";
import Error from "./Error";

export default class TransactionPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
            showConfirmation: false,
            amount: 0,
            error: ""
        }
    }

    hidePage = () => {
        this.setState({show: false});
        this.props.showMainPage();
    };

    validateInput = () => {
        if (this.refs.myInput !== null) {
            let inputValue = parseFloat(this.refs.myInput.value);
            if (inputValue < 0 || inputValue > 100) {
                this.setState({error: "Por favor, ingrese un monto entre 0 y 100"});
                return;
            }
            if (this.props.action === "Extraer" && this.props.totalAmount - inputValue < 0) {
                this.setState({error: "El saldo no puede quedar negativo"});
                return;
            }

            this.setState({error: "", showConfirmation: true, amount: inputValue});
        }
    };

    render() {

        let confirmation = null;
        let page = null;
        let error = null;

        if (this.state.showConfirmation) {
            confirmation = <Confirmation amount={this.state.amount} action={this.props.action} changeAmount={this.props.changeAmount}
                                         totalAmount={this.props.totalAmount} hidePage={this.hidePage} addTransaction={this.props.addTransaction}/>
        }

        if (this.state.error !== "") {
            error = <Error message={this.state.error}/>
        }

        if (this.state.show) {
            page = <div className="transaction-page">
                        <div className="transaction-name">{this.props.action}</div>
                        <div className="input-amount">
                            <div className="input-label">Monto</div>
                            <input type="text" ref="myInput" />
                        </div>
                        <div className="buttons">
                            <button className="cancel-button" onClick={this.hidePage}>Cancelar</button>
                            <input type="button" value={this.props.action} className="action-button" onClick={this.validateInput}/>
                        </div>
                    </div>
        }

        return (
            <div>
                {page}
                {error}
                {confirmation}
            </div>

        )
    }
}
