import React from "react";
import Confirmation from "./Confirmation";
import "./TransactionPage.css";

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

    showConfirmation = () => {
        if (this.refs.myInput !== null) {
            let input = this.refs.myInput;
            let inputValue = input.value;
            this.setState({showConfirmation: true, amount: inputValue});
        }
    };

    render() {

        let confirmation = null;
        let page = null;

        if (this.state.showConfirmation) {
            confirmation = <Confirmation amount={this.state.amount} action={this.props.action} changeAmount={this.props.changeAmount} totalAmount={this.props.totalAmount} hidePage={this.hidePage}/>
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
                            <input type="button" value={this.props.action} className="action-button" onClick={this.showConfirmation}/>
                        </div>
                    </div>
        }

        return (
            <div>
                {page}
                {confirmation}
            </div>

        )
    }
}
