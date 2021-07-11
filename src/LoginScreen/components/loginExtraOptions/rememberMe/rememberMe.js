import './rememberMe.css'

const RememberMe = () => {
    return (
        <label className="remember-me">
            <input type="checkbox" id="remember-me"/><span className="remember-me-text">Remember Me</span>
        </label>
    )
}

export default RememberMe