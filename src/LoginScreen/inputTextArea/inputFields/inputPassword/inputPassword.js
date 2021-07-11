import './inputPassword.css'
import {useState} from "react";
import {MdVisibility, MdVisibilityOff} from "react-icons/all";
import InputField from "../InputField";

const eye = <MdVisibility/>;
const eyeSlashed = <MdVisibilityOff/>;

const InputPassword = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <div className="login-password-field">
            {InputField("Password", passwordShown ? "text" : "password")}
            <i className="visibility-icon" onClick={togglePasswordVisiblity}>{passwordShown ? eyeSlashed : eye}</i>
        </div>
    );
}

export default InputPassword