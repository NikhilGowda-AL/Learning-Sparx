import { useState } from 'react'
import axios from 'axios'
import Profiles from './profiles';
import '../css/index.css'
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  let [credentials,setCredentials] = useState({usn: "",password:""});
  let handleChange=(e) =>{
          var key = e.target.name;
          var value = e.target.value;
          setCredentials({...credentials, [key] :value})
        }

        
let server2 = (e)=>{
  e.preventDefault();
  console.log("comming")

}
  let server = async (e) => {
    e.preventDefault();
    try {
      var string = await axios.post('http://localhost:4000/api/v1/login',{credentials});

      console.log(string.data);
    }
    catch(error){
      console.error(error)
    }
    // .then((rs) => {
    //   console.log(rs)
    //   navigate("/login/userProfile")
    // })
  }
  

   return (
    <section className='loginBody'>
    <div className="container">
     <h2 style={{padding:"10px 0px 20px 0",fontFamily: "cursive"}}>Login With Your USN</h2>
    <form onSubmit={server}>
      <label htmlFor="usn" className='loginLabel'>USN:</label>
      <input type="text" id="name" name="usn" className='loginInput' onChange={handleChange} required/>
      <label htmlFor="password" className='loginLabel'>Password:</label>
      <input type="password" id="password" name="password" className='loginInput' onChange={handleChange} required/>
      <button type="submit" className='loginBtn'>Login</button>
    </form>
  </div>
  </section>
   
  )
}

export default Login
