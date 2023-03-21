function InputComponent({inputType, inputName, inputLabel, inputId, onChange, error}) {
    return (
        <>
            <label className="label" htmlFor={inputId}>
                {inputLabel}
                <input className="registreren-profile-input" placeholder={"Type hier je " + inputLabel}
                       type={inputType}
                       id={inputId}
                       name={inputName}
                       onChange={onChange}
                       onError={error}

                />
            </label>
        </>
    );
}

export default InputComponent;