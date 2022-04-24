import React, {forwardRef, useImperativeHandle, useRef, useState} from "react";
import Confirmation from "./Confirmation";
import "./TransactionPage.css";
import Error from "./Error";
import { useNavigate, useLocation } from 'react-router-dom';

export default function TransactionPage() {

    const [showConfirmation, setShowConfirmation] = useState(false);
    const [amount, setAmount] = useState(0);
    const [error, setError] = useState("");
    const location = useLocation();
    let navigate = useNavigate();
    let inputRef = useRef(null);
    let action = location.state.action === "deposit" ? "Depositar" : "Extraer";

    function hidePage() {
        navigate('/home', {
            state: {
                amount: location.state.amount,
                cbu: location.state.cbu
            }
        });
    }

    function validateInput() {
        if (inputRef.current.value !== "") {
            let inputValue = parseFloat(inputRef.current.value);
            if (inputValue < 0 || inputValue > 100) {
                setError("Por favor, ingrese un monto entre 1 y 100");
                return;
            }
            if (location.state.action === "withdrawal" &&
                location.state.amount - inputValue < 0) {
                setError("El monto ingresado no puede ser mayor que el que hay en la cuenta");
                return;
            }
            setError("");
            setShowConfirmation(true);
            setAmount(inputValue);
        } else {
            setError("El campo Monto no puede estar vacío");
        }
    }

    function hideConfirmation() {
        setShowConfirmation(false);
    }

    return (
        <div>
            <div className="transaction-page">
                <div className="transaction-name">{action}</div>
                <div className="input-amount">
                    <div className="input-label">Monto</div>
                    <input type="text" ref={inputRef} />
                </div>
                <div className="buttons">
                    <button className="cancel-button" onClick={hidePage}>Cancelar</button>
                    <button onClick={validateInput} className="action-button">{action}</button>
                </div>
            </div>
            {error !== "" &&
                <Error message={error}/>
            }
            {showConfirmation &&
                <Confirmation amount={amount} action={action}
                              hideConfirmation={hideConfirmation}
                              cbu={location.state.cbu}/>
            }
        </div>

    )
}
