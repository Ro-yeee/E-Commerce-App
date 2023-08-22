import { Link } from "react-router-dom"
import "./LoginPage.css"

function LoginPage() {
  return (
    <div className='loginContainer'>
        <div className="logoBanner">
            <img src="./images/monkey.png" alt="Urban Monkey" />
        </div>
        <div className="formSection">
            <img className="icon" src="./images/monkey.png" alt="" />
            <div className="formBox">
                <h1>Sign In</h1>
                <p>Sign in to your account</p>
                <button className="googleSignInBtn">
                    <img src="./images/google-icon.svg" alt="Google Icon" />
                    <p>Sign in with Google</p>
                </button>
                <form className="inputForm">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <button type="submit">Sign In</button>
                </form>
                <span>Don’t have an account? <Link to="/signup">Register here</Link></span>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
