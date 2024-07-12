import React, { useState } from 'react';
import styles from './index.module.css';
import FilledButton from "../../components/buttons/filledButton";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username === '' || email === '' || password === '') {
            setError('All fields are required');
            return;
        }

        try {
            const response = await fetch('http://localhost:5100/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setError('');
                setSuccess('Registration successful! Please login.');
            } else {
                setError(data.message || 'Registration failed');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className={styles.registerContainer}>
            <form onSubmit={handleSubmit} className={styles.registerForm}>
                <h2>Register</h2>
                {error && <div className={styles.error}>{error}</div>}
                {success && <div className={styles.success}>{success}</div>}
                <div className={styles.formGroup}>
                    <label htmlFor="username">Username</label>
                    <input
                        className={styles.inputBox}
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        className={styles.inputBox}
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        className={styles.inputBox}
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <FilledButton text={'Register'} background={'black'} cursor={'pointer'}
                              padding={'15px 41%'} color={'white'} onClick={handleSubmit} />
            </form>
        </div>
    );
};

export default Register;
