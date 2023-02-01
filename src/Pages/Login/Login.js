import './Login.css'
import InputComponent from "../../Components/InputComponent";
import React from "react";
import {useForm} from "react-hook-form";
import jwt_decode from 'jwt-decode';

function Login() {

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
                        inputType="text"
                        inputName="name-name"
                        inputId="name-field"
                        inputLabel="Profiel Naam:"
                        validationRules={{
                            required: {
                                value: true,
                                message: 'Naam is verplicht',
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