import React, { useState } from 'react';
import Link from 'next/link';
import router from 'next/router';
import { useDispatch } from 'react-redux';
import { postRequest } from '../../utils/api';
import { loginSuccess } from '../../redux/actions';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isAwaiting, setIsAwaiting] = useState(false);
    const dispatch = useDispatch();

    const setToken = (token) => {
        if (typeof window !== 'undefined') {
            // Code inside this block will only be executed in the browser
            // Check if localStorage is available before using it
            if (localStorage) {
              // Use localStorage here
              localStorage.setItem('token', token);
              router.push('/');
            } else {
              alert('localStorage is not available');
            }
          }
          else{
            alert('localStorage e');
          }
          
    }

    const handleSubmit = async (e) => {
        setIsAwaiting(true);
        e.preventDefault();

        setErrorMessage('');
        setSuccessMessage('')

        // Check if username or password is empty
        if (!username.trim() || !password.trim()) {
            setErrorMessage('Username and password are required.');
            setSuccessMessage('');
            setIsAwaiting(false);
            return;
        }

        try {
            const response = await postRequest('/v1/login/', {
                username,
                password,
            }, null);

            // Check if the response contains an error message
            if (response.error) {
                setErrorMessage(response.error);
                setSuccessMessage('');
            } 
            if (response.status === 'success') {
                setToken(response.results.token);
                dispatch(loginSuccess(response.results.token));
                setErrorMessage('');
                setSuccessMessage(response.message);
            } else {
                setErrorMessage(response.message);
                setSuccessMessage('');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage('Error logging in. Please try again later.');
            setSuccessMessage('');
        }
        setIsAwaiting(false);
    };

    return (
        <div className="login-form">
            <center><h2>Login</h2></center>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username or email</label>
                    <input type="text" className="form-control" placeholder="Username or email" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                        <p>
                            <input type="checkbox" id="test2" />
                            <label htmlFor="test2">Remember me</label>
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
                        <Link href="">
                            <a className="lost-your-password">Lost your password?</a>
                        </Link>
                    </div>
                </div>

                <button type="submit" disabled={isAwaiting}>Log In</button>
            </form>

            <div style={{marginTop: '10px'}}></div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

            {/* Display success message */}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
    )
}

export default LoginForm;
