import React, {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import Error from "./Error";
import "./Login.css";

function Login() {

    const [showCbuInput, setShowCbuInput] = useState(false);
    const [error, setError] = useState("");
    let navigate = useNavigate();
    const refCbu = useRef();

    function createAccount() {
        setShowCbuInput(false)
        fetch('https://memo1-bank-app.herokuapp.com/accounts', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "balance": 0
            })
        })
            .then((res) => res.json())
            .catch((error) => setError("No se pudo crear la cuenta"))
            .then((response) => {
                navigate('/home', {
                    state: {
                        amount: response.balance,
                        cbu: response.cbu
                    }})
            })
    }

    function login() {
        let cbuInput = refCbu.current.value;
        fetch('https://memo1-bank-app.herokuapp.com/accounts/' + cbuInput, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .catch((error) => console.log("Error: ", error))
            .then((response) => {
                if (response !== undefined && response.balance !== undefined &&
                    response.cbu !== undefined) {
                    navigate('/home', {
                        state: {
                            amount: response.balance,
                            cbu: response.cbu
                        }
                    })
                } else {
                    setError("No se encontró la cuenta con cbu " + cbuInput)
                }
            })
    }

    return (
        <div>
            <div className="login-page">
                <div className="buttons">
                    <button className="create-account-button" onClick={createAccount}>Crear cuenta</button>
                    <button className="login-button" onClick={() => setShowCbuInput(true)}>Login</button>
                </div>
                {showCbuInput &&
                    <div>
                        <div className="input-cbu">
                            <div className="input-label">CBU</div>
                            <input type="text" ref={refCbu}/>
                        </div>
                        <button className="validate-login-button" onClick={login}>Ingresar a la cuenta</button>
                    </div>
                }
            </div>
            {error !== "" &&
                <Error message={error}/>
            }
        </div>

    )
}

export default Login;
