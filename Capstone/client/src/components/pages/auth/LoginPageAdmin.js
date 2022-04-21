import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../../../context/Context'
import { useHistory } from "react-router-dom";

import BackgroundImage from './assets/logim.jpg'


export default function LoginPageAdmin() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [admin, setAdmin] = useState()
    const {user, dispatch, isFetching} = useContext(Context)
    const history = useHistory();

    const handleRegister = async(e) =>{
        e.preventDefault()
        dispatch({type: "LOGIN_START"})
        try{
            const res = await axios.post("http://localhost:5000/admin/adminsignin", {

                email:email,
                password:password,
            })
            dispatch({type: "LOGIN_SUCCESS", payload: res.data})
            history.push("/");

        }catch(err){
            dispatch({type: "LOGIN_FAILURE"})
        }
        console.log(user)
    }
    return (
        <header style={ HeaderStyle}>

   
        <div className="text-center">
            <h2 style={{color:'white',  padding: '20px' , fontWeight:'bolder', fontSize:'35px'}}>Sign in to us</h2>
            <form action="/home" onSubmit={handleRegister}>
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="email"  onChange={(e)=>{setEmail(e.target.value)}}required />
                </p><br></br>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}}  required />
                </p><br></br>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer style={{color:'white',  padding: '20px' , fontWeight:'bolder', fontSize:'35px'}}>
                <p>First time? <Link to="/AdminRegister">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </header>
    )

}
const HeaderStyle = {
    width: "100%",
    height: "120vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

