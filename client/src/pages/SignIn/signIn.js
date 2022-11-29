import React from 'react';
import './signIn.css';

const SignIn = () => {

    const submitHandler = (event) => {
        event.preventDefault();
        let email = document.getElementById("email").value;
        let emailReg = `/^([w-.]+@([w-]+.)+[w-]{2,4})?$/`;
        let password = document.getElementById('password').value
        if (email != '') {
            if (!email.match(emailReg)) {
                alert("Invalid Email Address...!!!");
                return false;
            }
        } else {
            alert("All fields are required.....!");
            return false;
        }
    }


    return (
        <div>
            <div class="wrapper">
                <h2>Login</h2>
                <form onSubmit={submitHandler}>
                    <div class="input-box">
                        <input type="email" id="email" placeholder="Enter Your Email" required />
                    </div>
                    <div class="input-box">
                        <input type="password" id="password" placeholder="Password" required />
                    </div>

                    <div class="input-box button">
                        <input type="Submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn