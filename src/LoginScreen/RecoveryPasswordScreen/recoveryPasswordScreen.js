import TitleH1 from "../components/title/title";
import InputEmail from "../components/inputTextArea/inputFields/inputEmail/InputEmail";
import PurpleButton from "../components/buttons/purpleButton/purpleButton";
import DescriptionText from "../components/descriptionText/descriptionText";

const RecoveryPasswordScreen = () => {
    return (
        <body className="background-login">
            <main className="login-container">
                {TitleH1("Recover Password")}
                {DescriptionText("An email will be sent to you containing further password recovery instructions.")}
                <InputEmail/>
                {PurpleButton("Send email")}
            </main>
        </body>
    )
}

export default RecoveryPasswordScreen