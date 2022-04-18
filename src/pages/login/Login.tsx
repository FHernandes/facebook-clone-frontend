import { Container } from "./style";

const Login = () => {
    return (
        <Container>
            <div className="login">
                <div className="loginLeft">
                    <h3 className="loginLogo">facebook</h3>
                    <span className="loginDescription">
                        Connect with friends and the world around you on Facebook.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="email" placeholder="Email" className="loginInput" />
                        <input type="password" placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            Create a New Account
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Login;
