import React from "react";
import "./Confirmation.css";
import {useNavigate} from "react-router-dom";

export default function Confirmation(props) {

    let navigate = useNavigate();

    function hidePage(response) {
        navigate('/home', {
            state: {
                cbu: response.cbu,
                amount: response.balance
            }
        });
    }

    function changeAmount() {
        let path = props.action === "Extraer" ? "withdraw" : "deposit";
        fetch('https://memo1-bank-app.herokuapp.com/accounts/' +
            props.cbu + '/' + path + '?sum=' + parseFloat(props.amount), {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .catch((error) => console.error('Error:', error))
            .then((response) => {
                hidePage(response);
            })
    }
    return (
        <div className="confirmation">
            <div className="confirmation-title">Confirmación</div>
            <div className="confirmation-text">Desea {props.action} ${props.amount} en su cuenta?</div>
            <div className="confirmation-options">
                <div className="first-option" onClick={props.hideConfirmation}>No</div>
                <div onClick={changeAmount}>Sí</div>
            </div>
        </div>
    )
}
