import { useFormik } from 'formik';
import './Form1.css';

function Form1() {
      const formik = useFormik({
      initialValues: {
      firstname:'',
      lastname:'',
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

       if (!values.firstname) {
        errors.firstname = 'firstname is required';
      }
       if (!values.lastname) {
        errors.lastname = 'lastname is required';
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
     marginBottom: (formik.errors.firstname|| formik.errors.lastname || formik.errors.email || formik.errors.password ) ? '10px' : '',
  });

  return (
    <section className='signup'>
    <div className="signup-container" >
      <h2>Create an Account</h2>
      <form id="signup-form" onSubmit={formik.handleSubmit}  >
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input 
          type="text"
           id="firstname" 
           name="firstname" 
          onChange={formik.handleChange}
          value={formik.values.firstname}
          style={{...getInputStyles('firstname'),...getFormStyle()}}
           />
           {formik.errors.firstname && formik.touched.firstname && (
          <div className="error-message">{formik.errors.firstname}</div>
        )}
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input 
          type="text" 
          id="lastname" 
          name="lastname"
          onChange={formik.handleChange}
          value={formik.values.lastname}
          style={{...getInputStyles('lastname'),...getFormStyle()}}
            />
             {formik.errors.lastname && formik.touched.lastname && (
          <div className="error-message">{formik.errors.lastname}</div>
        )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
          type="email"
           id="email"
            name="email"
        onChange={formik.handleChange}
          value={formik.values.email}
          style={{...getInputStyles('email'),...getFormStyle()}}
              />
              {formik.errors.email && formik.touched.email && (
          <div className="error-message">{formik.errors.email}</div>
        )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
           type="password"
            id="password" 
            name="password"
             onChange={formik.handleChange}
          value={formik.values.password}
          style={{...getInputStyles('password'),...getFormStyle()}}
              />
              {formik.errors.password && formik.touched.password && (
          <div className="error-message">{formik.errors.password}</div>
        )}
        </div>
        <div className="form-group">
          <button type="submit">Signup</button>
        </div>
      </form>
      <div className="login-link">
        <p>Already have an account? <a href="#">Login here</a></p>
      </div>
    </div>
    </section>
  );
}

export default Form1;
