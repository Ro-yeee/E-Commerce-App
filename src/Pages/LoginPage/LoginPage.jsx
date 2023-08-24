import { useNavigate,Link } from "react-router-dom"
import "./LoginPage.css"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, db, provider } from "../../FirebaseConfig"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { collection, addDoc, setDoc, doc } from "firebase/firestore"


function LoginPage() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()

    const notify = (message) =>{
        toast(message,{
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }

    const handleGoogleLogin = () =>{
        signInWithPopup(auth,provider)
            .then(result => {
                setDoc(doc(db,"users",`${result.user.uid}`),{
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
                navigate("/")
            })
            .catch((error)=>{
                console.log(error.code)
                if(error.code === "auth/popup-closed-by-user")
                    notify("SignIn window was closed by the user, please try again")
            })
    }

    const handleLogin = (e) =>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
            .then(result =>{
                addDoc(collection(db,"users"),{
                    id: result.user.uid,
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
                navigate("/")
            })
            .catch((error)=>{
                switch(error.code){
                    case "auth/invalid-email" : 
                                notify("Invalid Email")
                                break
                    case "auth/user-not-found" :
                                notify("User does not exist")    
                                break  
                    case "auth/wrong-password" :
                                notify("Password entered is wrong")
                                break
                    case "auth/missing-password" :
                                notify("Please enter password")
                                break
                    default :
                             notify(error.message)
                             break
                }
                console.log(error)
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
            <ToastContainer />
        </div>
    )
}

export default LoginPage
