import './Login.css'
import InputComponent from "../../Components/InputComponent";
import React, { useContext, useState } from 'react';
import {useForm} from "react-hook-form";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, toggleError] = useState(false);
    // const { login } = useContext(AuthContext);
    // Kijk naar de banana security pagina. Daar kan je de login en registreren pagina maken

    const { register, handleSubmit, formState: { errors} } = useForm();


    function handleFormSubmit(data){
        console.log(data);
    }

    console.log('ERRORS', errors);

    return (
        <>
            <section>
                <div className={"registreren-container"}>
                    <h1 className={"registreren-title"}>Login</h1>
                </div>
            </section>
            <section>
                <form className="form-registreren-container" onSubmit={handleSubmit(handleFormSubmit)}>
                    <fieldset className="registreren-fieldset"><strong>Gegevens </strong></fieldset>
                    <InputComponent
                        inputType="email"
                        inputName="email-name"
                        inputId="email-field"
                        inputLabel="Email:"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        validationRules={{
                            required: {
                                value: true,
                                validate: (value) => value.includes('@','.nl', '.com'),
                                message: 'Email is verplicht',
                            }
                        }}
                        register={register}
                        errors={errors}
                    />
                    <InputComponent
                        inputType="password"
                        inputName="password-name"
                        inputId="name-field"
                        inputLabel="Wachtwoord:"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        validationRules={{
                            required: {
                                value: true,
                                message: 'Wachtwoord is verplicht',
                            },
                            minLength: {
                                value: 6,
                                message: 'Moet minimaal 6 karakters bevatten'
                            }
                        }}
                        register={register}
                        errors={errors}
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