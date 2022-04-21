import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

import BackgroundImage from './assets/logim.jpg'


const axios = require('axios');




export default function RegisterPageAdmin() {
    const history = useHistory();

    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState()
    const [user, setUser] = useState()


    const handleRegister = async(e) =>{
        e.preventDefault()
        try{
            const res = await axios.post("http://localhost:5000/admin/adminsignup", {
                firstName:firstname,
                lastName:lastname,
                email:email,
                password:password,
                phone:phone
            })

            setUser(res.data)
            history.push("/Admin");
            // console.log(res.data)

        }catch(err){
            console.log(err)

        }
    }

    return (
        <header style={ HeaderStyle}>

        <div className="text-center" >
            <h2 style={{color:'white',  padding: '20px' , fontWeight:'bolder', fontSize:'35px'}}>Join us</h2>
            <h5 style={{color:'white',  padding: '08px' , fontWeight:'bolder', fontSize:'20px'}}>Create your personal admin account</h5>
            <form action="/home" onSubmit={handleRegister}>
                <p>
                    <label>Firstname</label><br/>
                    <input type="text" name="first_name" onChange={(e)=>{setFirstname(e.target.value)}} required />
                </p><br></br>
                <p>
                    <label>Lastname</label><br/>
                    <input type="text" name="first_name" onChange={(e)=>{setLastname(e.target.value)}} required />
                </p><br></br>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} required />
                </p><br></br>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} requiredc />
                </p><br></br>
                <p>
                    <label>Phone</label><br/>
                    <input type="phone" name="phone" onChange={(e)=>{setPhone(e.target.value)}} requiredc />
                </p><br></br>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p><br></br>

                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form> 
            <footer style={{color:'white',  padding: '20px' , fontWeight:'bolder', fontSize:'35px'}}>
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

