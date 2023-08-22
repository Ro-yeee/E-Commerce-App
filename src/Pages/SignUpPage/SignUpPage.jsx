import "./SignUpPage.css"

function SignUpPage() {
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
                <form className="inputForm">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUpPage
