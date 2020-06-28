import React from "react";
import "./TransactionPage.css";
import MainPage from "./MainPage";

export default class TransactionPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
            value: ""
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    hidePage = () => {
        this.setState({show: false});
        this.props.showMainPage();
    };

    render() {

        return (
            this.state.show ?
                <div className="transaction-page">
                    <div className="transaction-name">{this.props.action}</div>
                    <div className="input-amount">
                        <div className="input-label">Monto</div>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="buttons">
                        <button className="cancel-button" onClick={this.hidePage}>Cancelar</button>
                        <button className="action-button">{this.props.action}</button>
                    </div>
                </div> : null

        )
    }
}
