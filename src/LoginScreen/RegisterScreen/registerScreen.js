import TitleH1 from "../components/title/title";
import InputEmail from "../components/inputTextArea/inputFields/inputEmail/InputEmail";
import PurpleButton from "../components/buttons/purpleButton/purpleButton";
import DescriptionText from "../components/descriptionText/descriptionText";
import InputPassword from "../components/inputTextArea/inputFields/inputPassword/inputPassword";

const RegisterScreen = () => {
    return (
        <body className="background-login">
            <main className="login-container">
                {TitleH1("Register Account")}
                {DescriptionText("Register your account and stay on top of the anime world")}
                <InputEmail/>
                <InputPassword/>
                {PurpleButton("Register")}
            </main>
        </body>
    )
}

export default RegisterScreen