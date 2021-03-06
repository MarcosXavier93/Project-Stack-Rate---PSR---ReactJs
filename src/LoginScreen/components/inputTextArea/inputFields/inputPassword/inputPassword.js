import './inputPassword.css'
import {useState} from "react";
import {MdVisibility, MdVisibilityOff} from "react-icons/all";
import InputField from "../InputField";

const eye = <MdVisibility fill="#6f6f7a" />;
const eyeSlashed = <MdVisibilityOff fill="#6f6f7a" />;

const InputPassword = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <div className="login-password-field">
            {InputField("Password", passwordShown ? "text" : "password")}
            <span id="password-visibility-icon" onClick={togglePasswordVisiblity}>{passwordShown ? eyeSlashed : eye}</span>
        </div>
    );
}

export default InputPassword