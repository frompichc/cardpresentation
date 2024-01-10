import React, {useState} from "react";
import './LoginSignup.css';
import user_icon from '../Icons/user_icon.svg';
import email_icon from '../Icons/email_icon.svg';
import password_icon from '../Icons/password_icon.svg';
//import { useState } from 'react';

const LoginSignup = () => {

    const [action, setAction] = useState("Login");

    return (
        <div class='wrapper'>
            <div class='header'>
                <div class="text">{action}</div>
                <div class="underline"></div>
            </div>
            <div class="inputs">
                {action==="Login"?<div></div>:<div class="input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Username" />
                </div>}
                <div class="input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email"/>
                </div>
                <div class="input">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>

            {action==="Sign Up"?<div></div>:<div class="forgot-password">
                Forgot Password? <span>Click here</span>
            </div>}
            
            <div class="submit-container">
                <div class={action==="Login"?"submit gray":"submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
                <div class={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}

export default LoginSignup