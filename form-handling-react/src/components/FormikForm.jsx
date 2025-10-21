import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const FormikForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log('User registered:', data);
      alert('Registration successful!');
      resetForm();
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong!');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Formik + Yup - User Registration</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>Username:</label>
            <Field type="text" name="username" placeholder="Enter username" />
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />

            <label>Email:</label>
            <Field type="email" name="email" placeholder="Enter email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

            <label>Password:</label>
            <Field type="password" name="password" placeholder="Enter password" />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

            <button type="submit" disabled={isSubmitting}>Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
