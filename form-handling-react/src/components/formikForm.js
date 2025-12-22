// src/components/formikForm.js
// Purpose: Same registration form, but powered by Formik + Yup.
// - Formik handles values, errors, touched states, and submit.
// - Yup provides a schema to validate inputs declaratively.

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Yup validation schema (declarative rules)
const RegistrationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('ter a valid email').required('Email is required'),
    password: Yup.string().min(6, 'Password should be at least 6 characters').required('password is required'),        
});

// Simulated API (same idea as before)
const fakeRegisterApi = (payload) =>
    new Promise((resolved) => {
        setTimeout(() => resolved ({ ok: true, message: `Registered ${payload.username}`}), 800);
    });

export default function FormikForm() {
    return (
        <div className='max-w-md mx-auto p-6 border rounded-lg space-y-4'>
            <h2 className='text-xl font-semibold'>Register (Formik + Yup)</h2>

            <Formik
                initialValues={{ username: '', email: '', password: '' }}  // Form starts empty
                validationSchema={RegistrationSchema}
                onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
                    // setStatus can hold server messages
                    setStatus('');
                    try {
                        const res = await fakeRegisterApi(values);
                        if (res.ok) {
                            setStatus(res.message);  // Show success
                            resetForm();             // Clear inputs
                        }
                    }   finally {
                        setSubmitting(false);        // Stop loading state
                    }
                }}
            >
                {({ isSubmitting, status }) => (
                    <Form className='space-y-4'>
                        {/* Field components auto-wire to Formik state */}
                        <div>
                            <label htmlFor='username' className='block mb-1'>Username</label>
                            <Field
                                id="username"
                                name="username"
                                type="text"
                                className="w-full border p-2 rounded"
                                placeholder="john_doe"
                            />   
                            {/* ErrorMessage reads from Formik errors + touched */}
                            <ErrorMessage name="username" component="p" className="text-red-600 text-sm mt-1" /> 
                        </div>

                        <div>
                            <label htmlFor='email' className='block mb-1'>Email</label>
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                className="w-full border p-2 rounded"
                                placeholder="john@example.com"
                            />
                            <ErrorMessage name="email" component="p" className="text-red-600 text-sm mt-1" /> 
                        </div>

                        <div>
                            <label htmlFor='password' className='block mb-1'>Password</label>
                            <Field
                                id="password"
                                name="password"
                                type="password"
                                className="w-full border p-2 rounded"
                                placeholder="Enter a strong password"
                            />
                            <ErrorMessage name="password" component="p" className="text-red-600 text-sm mt-1" />                              
                        </div> 

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 disabled:opacity-50"
                        >
                            {isSubmitting ? 'Submitting...' : 'Register'}
                        </button>   

                        {/* Server-like status feedback */}
                        {status && <p className='text-green-700 mt-2'>{status}</p>}                                                                                                                    
                    </Form>
                )}
            </Formik>    
        </div>
    )
}