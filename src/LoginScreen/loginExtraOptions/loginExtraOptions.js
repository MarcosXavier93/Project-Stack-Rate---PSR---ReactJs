import './loginExtraOptions.css'
import RememberMe from "./rememberMe/rememberMe";
import ForgotPassword from "./forgotPassword/forgotPassword";

const LoginExtraOptions = () => {
    return (
        <div className="login-extra-options-container">
            <RememberMe/>
            <ForgotPassword/>
        </div>
    )
}

export default LoginExtraOptions