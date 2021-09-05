import React from 'react'
import './loginWithGoogleStyle.css'
import googleWhiteLogo from '../../../assets/google_white_logo150x150.png'
import GoogleLogin from 'react-google-login'


const LoginWithGoogle = () => {
    const responseGoogleSuccess = (response) => {
        console.log('Success login')
        console.log(response)
        // TODO: set user session
        // if use not present on db, create
    }
    const responseGoogleFailed = (response) => {
        console.log('Failed login')
        console.log(response)
    }
    return (
        <GoogleLogin
            clientId="46422004103-nj4h63kmkb9tqba6n1dvvicad35d8o57.apps.googleusercontent.com"
            render={renderProps => (
                <button onClick={renderProps.onClick} className="login-with-google-button">
                    <img src={googleWhiteLogo} alt="Google Logo"/><span className="login-with-google-text">Login With Google</span>
                </button>
            )}
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleFailed}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default LoginWithGoogle
