import { Container } from "./style";

const Register = () => {
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
                        <input type="text" placeholder="Username" className="loginInput" />
                        <input type="email" placeholder="Email" className="loginInput" />
                        <input type="password" placeholder="Password" className="loginInput" />
                        <input type="password" placeholder="Password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">
                            Log into Account
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Register;
