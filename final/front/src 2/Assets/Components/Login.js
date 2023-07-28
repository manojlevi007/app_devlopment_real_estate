import React, { useState } from "react";
// import './App.css';
// import { Link } from "react-router-dom";

// function Signup() {
//   const [isLoginForm, setIsLoginForm] = useState(true);

  // const switchToLogin = (event) => {
  //   event.preventDefault();
  //   setIsLoginForm(true);
  // };

  // const switchToSignup = (event) => {
  //   event.preventDefault();
  //   setIsLoginForm(false);
  // };

  // return (
    // <div className="container">
    //   <div className={`form-container ${!isLoginForm ? "active" : ""}`} id="signup-form">
    //     <h1>New User</h1>
    //     <form>
    //       <label htmlFor="new-username">First name</label>
    //       <input className="margin" type="text" id="new-username" name="new-username" required placeholder="   enter your firstname"/>
    //       <label htmlFor="new-username">Last name</label>
    //       <input className="margin" type="text" id="new-username" name="new-username" required placeholder="   enter your lastname"/>
    //       <label htmlFor="new-email">Email Id</label>
    //       <input className="margin" type="text" id="new-username" name="new-username" required placeholder="   Enter your emailid"/>
    //       <label htmlFor="new-email">Mobile No</label>
    //       <input className="margin" type="number" id="new-password" name="new-password" placeholder="   enter mobile no" required />
    //       <label htmlFor="new-email">Vechile No</label>
    //       <input className="margin" type="text" id="new-password" name="new-password" placeholder="   enter vechile no" required />
    //       <label htmlFor="new-email">Select Vechile Type </label>
    //       <select className="margin1" id="new-password" name="new-paddword" >
  
    //          <option value="volvo">  TWO-Wheeler</option>

    //          <option value="fiat">  FOUR-Wheeler  </option>
    //          <option value="audi">  OTHER</option>
             
    //          </select>
    //       <button  className="sumit" type="submit">Sign Up</button>
    //     </form>
    //     <p>
    //       Already have an account?{" "}
    //       <Link to="/"  id="login-link">
    //         Login
    //       </Link>
    //     </p>
    //   </div>
    // </div>
//   );
// }

// export default Signup;
import "./sigm.css";
import {Link} from 'react-router-dom';
function Login()
{   
    
    const [isLoginForm, setIsLoginForm] = useState(true);
      const [email, setemail] = useState('');
      const [password, setpassword] = useState('');
    
      const handleEmailChange = (e) => {
        setemail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setpassword(e.target.value);
      };

     
    
      const handleSubmit = (e) => {
        if(!email){
          alert("please enter the email")
        }
        else if(!password){
          alert("please enter the password")
        }
        else{
          alert("Login sucessful")
          // e.preventDefault();
          // Perform sign-in logic here, such as making an API call to authenticate the user
          console.log('Email:', email);
          console.log('Password:', password);
          // Reset form fields
          setemail('');
          setpassword('');
        }

        const switchToLogin = (event) => {
            event.preventDefault();
            setIsLoginForm(true);
          };
  
          const switchToSignup = (event) => {
                event.preventDefault();
                setIsLoginForm(false);
              };


      };



    //   {`form-container ${isLoginForm ? "active" : ""}`} id="login-form"

    return(
        <div className="full">
            <div className={`outer ${isLoginForm ? "active" : ""}`} id="login-full">
                <h1 id="title">Acres.com</h1>
                <h1 id="head">LOGIN</h1>
                <div className="fields">

<br></br>
<br></br>
<input id="email" type="email" required placeholder="Enter your email here" value={email} onChange={handleEmailChange}></input>

 {/* <input type="text" id="new-username" name="new-username" required placeholder="   Enter your emailid"/> */}
<br></br>
<br></br>
<br></br>
<input id="password" type="password" required placeholder="Enter your password here"  value={password} onChange={handlePasswordChange}/>
<br></br>
<br></br>
<br></br>
<Link to='/na'><button id="submit" onClick={handleSubmit} type="submit">LOGIN</button></Link>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
           <h4 id="lower">Dont have an account?{" "}<Link to='/reg'>Register</Link></h4>
                </div>
            </div>
        </div>
    )
}

export default Login;