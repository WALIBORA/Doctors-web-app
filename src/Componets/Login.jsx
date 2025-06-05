import React, { useState } from 'react';

export default function Login({ onSwitchView }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '' });

    const validate = () => {
        let valid = true;
        let newErrors = { email: '', password: '' };

        if (!email) {
            newErrors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
            valid = false;
        }

        if (!password) {
            newErrors.password = 'Password is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(`Logging in with Email: ${email} and Password: ${password}`);
            setEmail('');
            setPassword('');
            setErrors({ email: '', password: '' });
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '400px' }}>
            <h2 className="mb-4 text-center">Login</h2>
            <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-describedby="email-error"
                        required
                    />
                    {errors.email && <div id="email-error" className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-describedby="password-error"
                        required
                    />
                    {errors.password && <div id="password-error" className="invalid-feedback">{errors.password}</div>}
                </div>

                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        id="show-password"
                        className="form-check-input"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                    />
                    <label htmlFor="show-password" className="form-check-label">Show Password</label>
                </div>

                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <div className="text-center mt-3">
                <p>Not registered? <button type="button" className="btn btn-link p-0" onClick={() => onSwitchView('register')}>Register here</button></p>
            </div>
        </div>
    );
}
