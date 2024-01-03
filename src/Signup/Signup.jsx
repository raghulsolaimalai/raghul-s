

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
const Signup = () =>
{
    const navigate = useNavigate();
    const handleSubmit = ()=>{
        console.log("Registration Successful.");
        navigate('/');
    }
    return(
        <div>
            <form onSubmit={handleSubmit} className="form">
                <h2>Sign-Up</h2>
                <input type="textarea" placeholder="Username" required></input><br/>
                <input type="email" placeholder="Email-ID" required></input><br/>
                <input type="password" placeholder="Password"required></input><br/>
                <input type="password" placeholder="Confirm Password"required></input><br/>
                <br/>
                <button type='submit'>Sign-Up</button>
            </form>
        </div>
    )
}

export default Signup;