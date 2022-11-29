import { useState } from 'react';
// import './signUp.css'
import './signUp.css';

const SignUp = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    let name, value;

    const submitHandler = (e) => {

        e.prevetDefault();
        console.log(e);
        name = e.target.value;
        value = e.target.value;

        setUser({ ...user, [name]: value })

        const postURL = "http://localhost:3000/Shipment-T1/User-info/"
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                clockedIn: false,
                dates: []
            })
        })
            .then(() => {
                alert('You have been added to the system!');
            })

    }

    return (
        <div className="wrapper">
            <h2>Registration</h2>
            <form onSubmit={submitHandler}>
                <div className="input-box">
                    <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} value={email} required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Create password" required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Confirm password" required />
                </div>
                <div className="policy">
                    <input type="checkbox" />
                    <h3>I accept all terms & condition</h3>
                </div>
                <div className="input-box button">
                    <input type="Submit" />
                </div>
                <div className="text">
                    <h3>Already have an account? <a href="/signIn">Login now</a></h3>
                </div>
            </form>
        </div>
    )
}

export default SignUp;