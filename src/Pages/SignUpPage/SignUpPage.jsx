import { useState } from "react"
import "./SignUpPage.css"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../FirebaseConfig"

function SignUpPage() {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,email,password)
            .then(result =>{
                console.log(result.user)
            })
            .catch((error)=>{
                console.log("Error Code: "+error.code)
                console.log("Error Message: "+error.message)
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
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage
