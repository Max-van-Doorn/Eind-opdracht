function InputComponent({inputType, inputName, inputLabel, inputId, onChange}) {
    return (
        <>
            <label className="label" htmlFor={inputId}>
                {inputLabel}
                <input className="registreren-profile-input" placeholder={"Type hier je " + inputLabel}
                       type={inputType}
                       id={inputId}
                       name={inputName}
                       onChange={onChange}

                />
            </label>
        </>
    );
}

export default InputComponent;