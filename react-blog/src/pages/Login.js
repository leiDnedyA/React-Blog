import React, { useRef, useState } from 'react'
import { useAuth } from '../contexts/AuthContext';

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            setError("Failed to login.")
        }

        setLoading(false);

    }

    return (
        <div>
            <form>
                <label>Enter your name:
                    <input type="text" />
                </label>
            </form>
        </div>
    )
}

export default Login;