import "./Registeren.css"
import React, { useEffect, useState} from "react";
import InputComponent from "../../Components/InputComponent";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {useForm} from "react-hook-form";


function Registeren() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();

    // const { register } = useForm();

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);
        console.log(email, password, username)

        try {
            const response = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                email: email,
                password: password,
                username: username,
                role: ["user"]
            });
            console.log('REGISTREREN', response.data);
            navigate('/login');
        } catch(e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }

    return (
        <>
            <section>
                <div className={"registreren-container"}>
                    <h1 className={"registreren-title"}>Registeren</h1>
                </div>
            </section>
            <section>
                <form className="form-registreren-container" onSubmit={handleSubmit}>
                    <fieldset className="registreren-fieldset"><strong>Gegevens </strong></fieldset>
                        <InputComponent
                            inputType="text"
                            inputName="name-name"
                            inputId="name-field"
                            inputLabel="Profiel Naam:"
                            value={username}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'Naam is verplicht',
                                }
                            }}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    {error && <p>hi</p>}
                        <InputComponent
                            inputType="text"
                            inputName="email-name"
                            inputId="email-field"
                            inputLabel="Email:"
                            value={email}
                            rules={{
                                required: {
                                    value: true,
                                    validate: (value) => value.includes('@'),
                                    message: 'Email is verplicht',
                                }
                            }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    {error && <p>hi</p>}
                        <InputComponent
                            inputType="password"
                            inputName="password-name"
                            inputId="password-field"
                            inputLabel="Wachtwoord:"
                            value={password}
                            rules={{
                                required: {
                                    value: true,
                                    message: 'Wachtwoord is verplicht',
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Moet minimaal 6 karakters bevatten'
                                }
                            }}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    {error && <p>Werkt niet!</p>}
                    <p><strong>-----------------------------------------------------------------------------------------</strong></p>
                    <p className="registreren-text">Heb je al een account? klik dan <a className="registreren-link" href={"/Login"}>hier</a>!</p>
                    <button className="registreren-button" type="submit" disabled={loading}>
                        <strong>Versturen</strong>
                    </button>
                </form>
            </section>
        </>
    )
}


export default Registeren;