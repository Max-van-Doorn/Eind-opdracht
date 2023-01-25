import "./Registeren.css"
import { useForm } from 'react-hook-form'
import React from "react";


function Registeren() {
    const { register, handleSubmit, formState: { errors} } = useForm();

    function handleFormSubmit(data){
        console.log(data);
    }

    console.log('ERRORS', errors);

    return (
        <>
            <section>
                <div className={"registreren-container"}>
                    <h1 className={"registreren-title"}>Registeren</h1>
                </div>
            </section>
            <section>
                <form className="form-registreren-container" onSubmit={handleSubmit(handleFormSubmit)}>
                    <fieldset className="registreren-fieldset"><strong>Gegevens </strong></fieldset>

                    <label className="profile-label" htmlFor="profile-field">
                        Profile name: </label>
                        <input className="registreren-profile-input" placeholder="Type your profile name"
                            type="text"
                            id="profile-field"
                            {...register("profile",{
                                required: "Naam is verplicht",
                                minLength: {
                                    value: 3,
                                    message: "Naam moet minimaal 3 karakters bevatten"
                                },
                                })}
                            />
                        {errors.profile && <p>{errors.profile.message}</p>}

                    <label className="email-label" htmlFor="email-field">
                        Email:  </label>
                        <input className="registreren-email-input" placeholder="Type your email adress"
                            type="text"
                            id="email-field"
                            {...register("email",{
                                required: {
                                    value: true,
                                    message: "Email moet een @ bevatten"
                                },
                                validate: (value) => value.includes('@')
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}

                    <label className="password-label" htmlFor="password-field">
                        Password:  </label>
                        <input className="registreren-password-input" placeholder="Type your password"
                            type="password"
                            id="password-field"
                            {...register("password",
                                {
                                required: {
                                    value: true,
                                    message: "Dit veld is verplicht",
                                },
                                minLength: {
                                    value: 6,
                                    message: "Moet minstens 6 karakters bevatten",
                                },
                                    maxLength: {
                                    value: 20,
                                        message: "Mag maximaal 20 karakters bevatten"
                                    },
                            })}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    <p className="registreren-text">Heb je al een account? klik dan <a className="registreren-link" href={"/Login"}>hier</a>!</p>
                    <button className="registreren-button" type="submit">
                        <strong>Versturen</strong>
                    </button>
                </form>
            </section>
        </>
    )
}


export default Registeren;