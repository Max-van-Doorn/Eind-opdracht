import './Login.css'
import InputComponent from "../../Components/InputComponent";
import React, { useContext, useState } from 'react';
import {useForm} from "react-hook-form";
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
            console.log('GELUKT INLOGGEN?', result.data);

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
                    <h1 className={"registreren-title"}>Login</h1>
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
                        // validationRules={{
                        //     required: {
                        //         value: true,
                        //         message: 'Username is verplicht',
                        //     }
                        // }}
                        // register={register}
                        // errors={errors}
                    />
                    <InputComponent
                        inputType="password"
                        inputName="password-name"
                        inputId="password-field"
                        inputLabel="Wachtwoord:"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        // validationRules={{
                        //     required: {
                        //         value: true,
                        //         message: 'Wachtwoord is verplicht',
                        //     },
                        //     minLength: {
                        //         value: 6,
                        //         message: 'Moet minimaal 6 karakters bevatten'
                        //     }
                        // }}
                        // register={register}
                        // errors={errors}
                    />
                    <p><strong>-----------------------------------------------------------------------------------------</strong></p>
                    <p className="registreren-text">Heb je nog geen account? klik dan <a className="registreren-link" href={"/Registreren"}>hier</a>!</p>
                    <button className="registreren-button" type="submit">
                        <strong>Versturen</strong>
                    </button>
                </form>
            </section>
        </>
    )
}

export default Login;