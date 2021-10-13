import React from "react";
import Confirmation from "./Confirmation";
import "./TransactionPage.css";
import Error from "./Error";

export default class TransactionPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showConfirmation: false,
            amount: 0,
            error: ""
        }
    }

    hidePage = () => {
        this.props.history.push("/");
    };

    validateInput = () => {
        if (this.refs.myInput !== null) {
            let inputValue = parseFloat(this.refs.myInput.value);
            if (inputValue < 0 || inputValue > 100) {
                this.setState({error: "Por favor, ingrese un monto entre 0 y 100"});
                return;
            }
            if (this.props.match.params.type === "withdrawal" &&
                this.props.location.state.amount - inputValue < 0) {
                this.setState({error: "El monto ingresado no puede ser mayor que el que hay en la cuenta"});
                return;
            }

            this.setState({error: "", showConfirmation: true, amount: inputValue});
        }
    };

    hideConfirmation = () => {
        this.setState({showConfirmation: false})
    };

    render() {

        let confirmation = null;
        let page;
        let error = null;
        let action = this.props.match.params.type === "deposit" ? "Depositar" : "Extraer";

        if (this.state.showConfirmation) {
            confirmation = <Confirmation amount={this.state.amount} action={action}
                                         hidePage={this.hidePage} hideConfirmation={this.hideConfirmation}/>
        }

        if (this.state.error !== "") {
            error = <Error message={this.state.error}/>
        }

        page = <div className="transaction-page">
                    <div className="transaction-name">{action}</div>
                    <div className="input-amount">
                        <div className="input-label">Monto</div>
                        <input type="text" ref="myInput" />
                    </div>
                    <div className="buttons">
                        <button className="cancel-button" onClick={this.hidePage}>Cancelar</button>
                        <button onClick={this.validateInput} className="action-button">{action}</button>
                    </div>
                </div>

        return (
            <div>
                {page}
                {error}
                {confirmation}
            </div>

        )
    }
}
