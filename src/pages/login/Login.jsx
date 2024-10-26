import "./login.scss"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
    const navigate = useNavigate()

    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault()
        login()
        navigate('/')
    }

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                        alias totam numquam ipsa exercitationem dignissimos, error nam,
                        consequatur.
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" value={'john jeo'} />
                        <input type="password" placeholder="Password" value={'password'} />
                        {/* <Link to={'/'}> */}
                        <button onClick={handleLogin}>Login</button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login