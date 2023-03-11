import React ,{useState}from 'react'
import "./Register.css"


function Register() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmpassword,setConfirmpassword]=useState('');
    const [error,setError]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(password.length<8 ){
            alert("Please check the password")
            setError(true)
        }
      
        else if(password!==confirmpassword){
            alert("Your confirm password not matched with password");
        }
        else if(!email||!email.includes('@')||(email.length<12||!email.includes(".com"))){
            alert("Please enter valid Email id");
        }
        else{
            setError(false)
            alert("Details submitted successfully")
        }
    }
  return (
    <div>
        <h1>Login Form</h1>
        <center>
        <form style={{alignItems:"center",justifyContent:"center"}}>
  <div className="form-group">
    <label for="exampleInputEmail1 font-weight-bold">Email:</label>
    <input type="email" className="form-control w-25" id="exampleInputEmail1" value={email} aria-describedby="emailHelp" placeholder="Enter email" onChange={e=>{setEmail(e.target.value)}}/>
    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
  </div>
  <div className="form-group">

    <label for="exampleInputPassword1 font-weight-bold">Password:</label>
    <input type="password" className="form-control w-25" id="exampleInputPassword1" value={password} placeholder="Password" onChange={e=>{setPassword(e.target.value)}}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1 font-weight-bold">Confirm Password:</label>
    <input type="password" className="form-control w-25" id="exampleInputPassword1" value={confirmpassword} placeholder="Password" onChange={e=>{setConfirmpassword(e.target.value)}}/>
  </div>
  
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
</center>
    </div>
  )
}

export default Register