import React from 'react';
import RegistrationForm from './components/RegistrationForm ';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Form Handling in React</h1>
      <RegistrationForm />
      <hr style={{ margin: '2rem 0' }} />
      <FormikForm />
    </div>
  );
}

export default App;
