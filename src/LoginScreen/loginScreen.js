import React from 'react'
import './style.css'
import LoginWithGoogle from "./components/buttons/loginWithGoogle/loginWithGoogle";
import InputTextArea from "./components/inputTextArea/inputTextArea";
import LoginExtraOptions from "./components/loginExtraOptions/loginExtraOptions";
import RegisterField from "./components/registerField/registerField";
import LoginButton from "./components/buttons/loginButton";
import TitleH1 from "./components/title/title";
import DescriptionText from "./components/descriptionText/descriptionText";

const LoginScreen = () => {
    return (
        <body className="background-login">
            <main className="login-container">
                {TitleH1("Login to Your Account")}
                {DescriptionText("Choose from over 2000 different animes to interact with the community.")}
                <LoginWithGoogle/>
                <span className="or-text">----- OR -----</span>
                <InputTextArea/>
                <LoginExtraOptions/>
                <LoginButton/>
                <RegisterField/>
            </main>
        </body>
    )
}

export default LoginScreen