
function InputComponent({ inputType, inputName, inputLabel, inputId, validationRules, register, errors }) {
    return (
        <>
            <label className="label" htmlFor={inputId}>
                {inputLabel}
                <input className="registreren-profile-input" placeholder={"Type hier je "+inputLabel}
                    type={inputType}
                    id={inputId}
                    {...register(inputName, validationRules)}
                />
            </label>
            {errors[inputName] && <p>{errors[inputName].message}</p>}
        </>
    );
}

export default InputComponent;