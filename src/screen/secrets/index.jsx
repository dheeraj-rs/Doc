import React from 'react'

function SecretScreen() {
  return (
    <p>{`
    
    import { useFormik } from 'formik';

function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (values) => {
      const errors = {};

      // Validate email
      if (!values.email) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Invalid email format';
      }

      // Validate password
      if (!values.password) {
        errors.password = 'Password is required';
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log('Login data:', values);
    },
  });

  const getInputStyles = (fieldName) => ({
    borderColor: formik.errors[fieldName] && formik.touched[fieldName] ? 'red' : '',
  });

  const getFormStyle = () => ({
    backgroundColor: ( formik.errors.email || formik.errors.password) ? 'lightgreen' : '',
  });



  return (
    <form onSubmit={formik.handleSubmit} style={getFormStyle()}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          style={getInputStyles('email')}
          className="input-field"
        />

        {formik.errors.email && formik.touched.email && (
          <div className="error-message">{formik.errors.email}</div>
        )}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          style={getInputStyles('password')}
          className="input-field"
        />

        {formik.errors.password && formik.touched.password && (
          <div className="error-message">{formik.errors.password}</div>
        )}
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

    
    
    `}</p>
  )
}

export default SecretScreen