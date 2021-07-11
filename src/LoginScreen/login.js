import React from 'react'
import './login.css'
import LoginWithGoogle from "./loginWithGoogle/loginWithGoogle";
import InputTextArea from "./inputTextArea/inputTextArea";
import LoginExtraOptions from "./loginExtraOptions/loginExtraOptions";
import ManualLoginButton from "./manualLoginButton/manualLoginButton";
import RegisterField from "./registerField/registerField";

const Login = () => {
    return (
        <main className="login-container">
            <h1 className="login-to-your-account-text">Login to Your Account</h1>
            <span className="description-login-text">Choose from over 2000 different animes to interact with the community.</span>
            <LoginWithGoogle/>
            <span className="or-text">----- OR -----</span>
            <InputTextArea/>
            <LoginExtraOptions/>
            <ManualLoginButton/>
            <RegisterField/>
        </main>
    )
}

export default Login