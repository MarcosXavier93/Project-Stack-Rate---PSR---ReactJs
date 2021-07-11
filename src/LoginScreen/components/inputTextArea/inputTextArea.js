import './inputTextArea.css'
import InputPassword from "./inputFields/inputPassword/inputPassword";
import InputEmail from "./inputFields/inputEmail/InputEmail";


const InputTextArea = () => {
    return (
        <div className=".login-input-container">
            <InputEmail/>
            <InputPassword/>
        </div>
    )
}

export default InputTextArea