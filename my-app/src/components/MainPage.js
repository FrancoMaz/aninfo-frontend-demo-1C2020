import React, {useEffect, useState} from "react";
import extractIcon from "../extraer_icono.svg";
import depositIcon from "../depositar_icono.svg";
import "../App.css";
import {useLocation, useNavigate} from "react-router-dom";

function MainPage() {

    const [cbu, setCbu] = useState(0);
    const [amount, setAmount] = useState(0);
    const location = useLocation();
    let navigate = useNavigate();

    useEffect(() => {
        setCbu(location.state.cbu);
        setAmount(location.state.amount);
    })

    function doTransaction(type) {
        navigate('/transaction/' + type, {
            state: {
                amount: amount,
                action: type,
                cbu: cbu
            }})
    }

    function returnToLoginPage() {
        navigate('/');
    }

    return (
        <div className="app">
            <div className="title">Mi caja de ahorro</div>
            <div className="cbu">CBU {cbu}</div>
            <div className="amount">$ {amount}</div>
            <div className="options">
                <div className="transaction-option" onClick={() => doTransaction("withdrawal")}>
                    <img src={extractIcon}/>
                    <div className="img_label">Extraer</div>
                </div>
                <div className="transaction-option" onClick={() => doTransaction("deposit")}>
                    <img src={depositIcon}/>
                    <div className="img_label">Depositar</div>
                </div>
            </div>
            <button className="return-button" onClick={returnToLoginPage}>Volver</button>
        </div>
    )
}

export default MainPage;
