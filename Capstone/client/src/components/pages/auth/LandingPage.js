import React from 'react'
import { Link } from 'react-router-dom'

import "../../../../src/App.css"

import BackgroundImage from './assets/lp.jpg'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle}>
            <h1 style={{fontSize:'80px', fontweight:'bolder', color:'white'}} className="main-title text-center" >BOOKNSTAY</h1>
            <p style={{fontSize:'25px', color:'white', padding:'0px'}} className=" text-center">A Heaven Like Experience</p>
            <div className="buttons text-center">
                <Link to="/Customer">
                    <button className="primary-button" >Customer</button>
                </Link>
                <Link to="/Admin">
                    <button className="primary-button" id="reg_btn"><span>Admin </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "1518px",
    height: "800px",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}