import React from "react";
import "./Confirmation.css";

export default class Confirmation extends React.Component {

    constructor(props) {
        super(props);
    }

    changeAmount = () => {
        let path = this.props.action === "Extraer" ? "withdraw" : "deposit";
        fetch('https://memo1-bank-app.herokuapp.com/accounts/1/' + path + '?sum=' + parseFloat(this.props.amount), {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error('Error:', error))
            .then((response) => {
                console.log(response);
                this.props.changeAmount(response.balance);

            })
        this.props.hidePage();
    };

    render() {

        return (
            <div className="confirmation">
                <div className="confirmation-title">Confirmación</div>
                <div className="confirmation-text">Desea {this.props.action} ${this.props.amount} en su cuenta?</div>
                <div className="confirmation-options">
                    <div className="first-option" onClick={this.props.hideConfirmation}>No</div>
                    <div onClick={this.changeAmount}>Sí</div>
                </div>
            </div>

        )
    }
}
