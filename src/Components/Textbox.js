import React from "react";

const Textbox = () => {

    return (
        <>
            <div className="div-container">
        <div className="form-container">
            <label className="label-email">Email:</label>
            <input className="email-input" type="text" id="Name" name="Name" placeholder="Email"/>
            {/*<div className="form-container-2">*/}
            <label className="label-password">Password:</label>
            <input className="email-input" type="password" id="Name" name="Name" placeholder="Password"/>
            </div>
            </div>
                {/*<form className="login-form">*/}
               {/*Email: <input className="email-input" type ="text" name="Email"/>*/}
               {/*Password: < input className="password-input" type = "password" name="Password"/>*/}
           {/*</form>*/}
</>
    )
}

export default Textbox