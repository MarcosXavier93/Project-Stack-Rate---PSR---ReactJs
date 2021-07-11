import './inputField.css'

const InputField = (placeHolder, type) => {
    return (
        <input className="login-input-field" type={type} placeholder={placeHolder}/>
    )
}

export default InputField