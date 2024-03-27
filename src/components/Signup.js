import React from 'react';

const Signup = () => {
    return (
        <div className="signup-container">
            <h2>Signup Form</h2>
            <form>
                <div className="input-container">
                    <img src="person.png" alt="person icon" />
                    <input type="text" placeholder="Enter Name" />
                </div>
                <div className="input-container">
                    <img src="email.png" alt="email icon" />
                    <input type="email" placeholder="Enter Email" />
                </div>
                <div className="input-container">
                    <img src="password.png" alt="password icon" />
                    <input type="password" placeholder="Enter Password" />
                </div>
                <div className="button-container">
                    <button className='btn' type="submit">Signup</button>
                    <button className='btn' type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
