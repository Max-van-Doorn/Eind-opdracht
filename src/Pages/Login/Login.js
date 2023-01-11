import './Login.css'
import Textbox from "../../Components/Textbox";

function Login() {
    return (
        <header className={"header-login"}>
    <div className={"container"}>
        <h1 className={"login-title"}>Login</h1>
        <Textbox/>
    </div>
        </header>
    )
}
export default Login;