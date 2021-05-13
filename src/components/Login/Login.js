import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css'
import blacklogo from '../../assets/blacklogo.png'
import { auth } from '../../firebase';

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const logIn = (e) => {
        e.preventDefault()
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    const signUp = (e) => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            if(auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <Link to="/">
                <img 
                    className='login-logo'
                    src={blacklogo} 
                    alt='ema john logo'
                />
            </Link>
            <div className="login-container">
                <h1>Login Now</h1>
                <form>
                    <h5>Email</h5>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onClick={logIn} className="login-login_button">Log In</button>
                </form>
                <p>
                    By signing-in you agree to ema john's Conditions of use and sale. Please read carefully our privacy notice, cookies notice and Interest based ads.
                </p>
                <button onClick={signUp} className="login-signup_button">Create a new account</button>
            </div>

        </div>
    );
};

export default Login;