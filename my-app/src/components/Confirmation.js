import React from "react";
import "./Confirmation.css";
import {useNavigate} from "react-router-dom";

export default function Confirmation(props) {

    let navigate = useNavigate();

    function hidePage() {
        navigate('/');
    }

    function changeAmount() {
        console.log(props.amount);
        let path = props.action === "Extraer" ? "withdraw" : "deposit";
        fetch('https://memo1-bank-app.herokuapp.com/accounts/5/' + path + '?sum=' + parseFloat(props.amount), {
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
                hidePage();
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
