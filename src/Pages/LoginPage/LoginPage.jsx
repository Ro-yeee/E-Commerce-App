import { Link } from "react-router-dom"
import "./LoginPage.css"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../FirebaseConfig"
import { useState } from "react"

function LoginPage() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleGoogleLogin = () =>{
        signInWithPopup(auth,provider)
            .then(result => {

            })
    }

    const handleLogin = (e) =>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
            .then(result =>{
                console.log(result.user)
            })
            .catch((error)=>{
                console.log("Error Code: "+error.code)
                console.log("Error Message: "+error.message)
            })
    }


    return (
        <div className='loginContainer'>
            <div className="logoBanner">
                <img 
                    src="./images/monkey.png" 
                    alt="Urban Monkey" />
            </div>
            <div className="formSection">
                <img 
                    className="icon" 
                    src="./images/monkey.png" 
                    alt="" />
                <div className="formBox">
                    <h1>Sign In</h1>
                    <p>Sign in to your account</p>
                    <button 
                        className="googleSignInBtn" 
                        onClick={handleGoogleLogin}>
                        <img 
                            src="./images/google-icon.svg" 
                            alt="Google Icon" />
                        <p>Sign in with Google</p>
                    </button>
                    <form className="inputForm" onSubmit={handleLogin}>
                        <label htmlFor="email">
                            Email address
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)} />
                        <label htmlFor="password">
                            Password
                        </label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}/>
                        <button type="submit">Sign In</button>
                    </form>
                    <span>Don’t have an account? <Link to="/signup">Register here</Link></span>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
