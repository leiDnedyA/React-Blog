import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/');
        } catch {
            setError("Failed to login.")
        }

        setLoading(false);

    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email: 
                    <input type="text" placeholder='email' ref={emailRef}/>
                </label>
                <label>Password: 
                    <input type="password" placeholder='password' ref={passwordRef}/>
                </label>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Login;