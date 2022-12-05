import { useState } from 'react';
// import './signUp.css'
import './signUp.css';

const SignUp = () => {

    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    let name, email, password, confirmPassword;

    const submitHandler = async (e) => {
        e.prevetDefault();
        setUser({ name, email, password, confirmPassword });
        console.log(name, email, password, confirmPassword);
        // setUser({ ...user })

        const postURL = "http://localhost:3001/signUp/"
        fetch(postURL, {
            method: 'POST',
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Alloq-Origin": "*",
            },
            body: JSON.stringify({
                user: {
                    name,
                    email,
                    password,
                    confirmPassword

                    // clockedIn: false,
                }
            })
                .then((res) => {
                    res.json();
                    alert('You have been added to the system!');
                })
                .then((data) => {
                    console.log(data, "user signUp");
                })

        })
    }

    return (
        <div className="wrapper">
            <h2>Registration</h2>
            <form onSubmit={submitHandler}>
                <div className="input-box">
                    <input type="text" placeholder="Enter your name" onChange={e => setUser({ name: e.target.value })} value={name} required />
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Enter your email" onChange={e => setUser({ email: e.target.value })} value={user.email} required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Create password" onChange={e => setUser({ password: e.target.value })} value={user.password} required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Confirm password" onChange={e => setUser({ confirmPassword: e.target.value })} value={user.confirmPassword} required />
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