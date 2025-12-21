// src/components/RegistrationForm.jsx
// Purpose: A beginner-friendly registration form using controlled components
// - Each input has its own piece of state (useState).
// - Basic validation: required fields.
// - Simulated API submission.

import { useState } from "react";

export default function RegistrationForm() {
    // Form state for each field
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // UI/validation state
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [serverMessage, setServerMessage] = useState('');

    // Simple required-fied validation
    const validate = () => {
        const newErrors = {};
        if (!username) 
            newErrors.username = 'Username is required';
        if (!email) 
            newErrors.email = 'Email is required';
        if (!password) 
            newErrors.password = 'Password is required';
        return newErrors;
    };

    // Simulate a mock API call (e.g., POST to /register)
    const fakeRegisterApi = (payload) =>
        new Promise((resolve) => {
            setTimeout(() => resolve({ ok: true, message: `Registered ${payload.username}` }), 800);
        });

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
        setServerMessage('');
        const newErrors = validate();
        setErrors(newErrors);

        // If we have errors, stop here
        if (Object.keys(newErrors).length > 0) return;

        // Otherwise, submit to mock API
        try {
            setSubmitting(true);
            const res = await fakeRegisterApi({ username, email, password });
            if (res.ok) {
                setServerMessage(res.message);
                // Optionally reset the form
                setUsername('');
                setEmail('');
                setPassword('');
            }
        }   finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border rounded-lg space-y-4">
            <h2 className="text-xl font-semibold">Register (Controlled)</h2>

            {/* Username field */}
            <div>
                <label htmlFor="username" className="block mb-1">Username</label>
                <input
                id="username"
                type="text"
                value={username}                  // Controlled: value comes from state.
                onChange={(e) => setUsername(e.target.value)}  // update state on input
                className="w-full border p-2 rounded"
                placeholder="john_doe"
                />
                {errors.username && <p className="text-red-600 text-sm mt-1">{errors.username}</p>}
            </div>

            {/* Email field */}
            <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input
                id="email"
                type="email"
                value={email}                  
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full border p-2 rounded"
                placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password field */}
             <div>
                <label htmlFor="password" className="block mb-1">Password</label>
                <input
                id="password"
                type="password"
                value={password}               
                onChange={(e) => setPassword(e.target.value)}  
                className="w-full border p-2 rounded"
                placeholder="Enter a strong password"
                />
                {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
            </div>

            <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
                {submitting ? 'Submitting...' : 'Register'}
            </button>

            {serverMessage && <p className="text-green-700 mt-2">{serverMessage}</p>}
        </form>
    );
}