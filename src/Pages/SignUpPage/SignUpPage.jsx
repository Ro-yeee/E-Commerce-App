import { useState } from "react"
import "./SignUpPage.css"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, db } from "../../FirebaseConfig"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

function SignUpPage() {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [cPassword,setcPassword] = useState("")
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

    const handleSubmit = (e)=>{
        e.preventDefault()
        if( password !== cPassword) notify("Passwords do not match")
        else
        createUserWithEmailAndPassword(auth,email,password)
            .then(result =>{
                updateProfile(result.user,{displayName:name,photoURL:"./images/avatar.png"})
            .then(()=>{
                addDoc(collection(db,"users"),{
                    id: result.user.uid,
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
                navigate("/")
            })
            })
            .catch((error)=>{
                switch(error.code){
                    case "auth/invalid-email" : 
                                notify("Invalid Email")
                                break
                    case "auth/weak-password" :
                                notify("Password should be atleast 6 characters")    
                                break  
                    case "auth/email-already-in-use" :
                                notify("User already exist")
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
            <img src="./images/monkey.png" alt="Urban Monkey" />
        </div>
        <div className="formSection">
            <img className="icon" src="./images/monkey.png" alt="" />
            <div className="formBox">
                <h1>Sign Up</h1>
                <p>Create your account</p>
                <form className="inputForm" onSubmit={handleSubmit}>
                    <label htmlFor="name"
                        >Name
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={name} 
                        onChange={(e)=>setName(e.target.value)} />
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
                        onChange={(e)=>setPassword(e.target.value)} />
                    <label htmlFor="confirmpassword">
                        Confirm Password
                    </label>
                    <input 
                        type="password" 
                        name="confirmpassword" 
                        id="confirmpassword"
                        value={cPassword}
                        onChange={(e)=>setcPassword(e.target.value)} />
                    <button type="submit">Sign Up</button>
                </form>
                <span>Already have an account? <Link to="/login">Login</Link></span>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default SignUpPage
