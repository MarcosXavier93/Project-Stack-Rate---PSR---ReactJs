import React from 'react'
import './loginWithGoogleStyle.css'
import googleWhiteLogo from '../assets/google_white_logo150x150.png'

function getContentButton() {
    return <>
        <img src={googleWhiteLogo} alt="Google Logo"/><span className="login-with-google-text">Login With Google</span>
    </>;
}

const LoginWithGoogle = () => {
    return (
        <button className="login-with-google-button">
            {getContentButton()}
        </button>
    )
}

export default LoginWithGoogle