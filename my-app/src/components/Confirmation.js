import React from "react";
import "./Confirmation.css";

export default class Confirmation extends React.Component {

    constructor(props) {
        super(props);
    }

    changeAmount = () => {
        let newAmount = this.props.action === "Extraer" ? (parseFloat(this.props.totalAmount) - parseFloat(this.props.amount)) : (parseFloat(this.props.totalAmount) + parseFloat(this.props.amount));
        this.props.changeAmount(newAmount);
        this.props.hidePage();
    };

    render() {

        return (
            <div className="confirmation">
                <div className="confirmation-title">Confirmación</div>
                <div className="confirmation-text">Desea {this.props.action} ${this.props.amount} en su cuenta?</div>
                <div className="confirmation-options">
                    <div className="first-option">No</div>
                    <div onClick={this.changeAmount}>Sí</div>
                </div>
            </div>

        )
    }
}
