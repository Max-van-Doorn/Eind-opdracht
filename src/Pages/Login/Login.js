import './Login.css'
import InputComponent from "../../Components/InputComponent";
import React, { useContext, useState } from 'react';
import {AuthContext} from "../../Context/AuthContext";
import axios from "axios";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthContext);

     async function handleFormSubmit(e){
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: username,
                password: password,
            });
            console.log('Inloggen is gelukt!', result.data);

            login(result.data.accessToken);

        } catch(e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <section>
                <div className={"registreren-container"}>
                    <h1 className={"registreren-title"}>Inloggen</h1>
                </div>
            </section>
            <section>
                <form className="form-registreren-container" onSubmit={handleFormSubmit}>
                    <fieldset className="registreren-fieldset"><strong>Gegevens </strong></fieldset>
                    <InputComponent
                        inputType="text"
                        inputName="username-name"
                        inputId="username-field"
                        inputLabel="Username:"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}

                    />
                    <InputComponent
                        inputType="password"
                        inputName="password-name"
                        inputId="password-field"
                        inputLabel="Password:"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

/>
                        {error && <p className="login-error">De ingevulde gegevens kloppen niet!</p>}
                    <p><strong>-----------------------------------------------------------------------------------------</strong></p>
                    <p className="registreren-text">Heb je nog geen account? klik dan <a className="registreren-link" href={"/Registreren"}>hier</a>!</p>
                    <button className="registreren-button" type="submit">
                        <strong>Login</strong>
                    </button>
                </form>
            </section>
        </>
    )
}

export default Login;