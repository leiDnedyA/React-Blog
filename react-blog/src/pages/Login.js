import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../elements/Card';

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
        <Card>
            <div className="userFormContainer">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label className="blockInput userFormLabel">Email</label>
                    <input type="text" placeholder='email' ref={emailRef} />
                    <label className="blockInput userFormLabel">Password</label>
                    <input type="password" placeholder='password' ref={passwordRef} />
                    <input type="submit" className="blockInput standardButton"/>
                </form>
                <p>Don't have an account? <Link to="/signup">sign up</Link>.</p>
            </div>
        </Card>
    )
}

export default Login;