export const Table1code = `import React from 'react';
import './Table1.css';
const Table1 = () => {

  const data = [
    { id: 1, title: 'Product 1', price: 20, priceMRP: 30 },
    { id: 2, title: 'Product 2', price: 25, priceMRP: 35 },
    { id: 3, title: 'Product 3', price: 35, priceMRP: 45 },

  ];

  return (
    <div className="table-container">
      <h2 className="table-heading">Product List</h2>
      <div className="table-scroll">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>PRICE</th>
              <th>MRP</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.priceMRP}</td>
                <td>
                  <div className="table-actions">
                    <button >Edit</button>
                    <button >Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table1;`;

export const Table1Style = `
/* Table1.css */

.table-container {
    padding: 20px;
    margin: 20px;
    border-radius: 8px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
  
  .table-heading {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 15px;
    color: #afafaf;
  }
  
  .table-scroll {
    overflow-x: auto;
  }
  
  .custom-table {
    width: 100%;
    border-collapse: collapse;
    overflow: hidden;
  }
  
  .custom-table th,
  .custom-table td {
    border: 1px solid #e2e8f0;
    text-align: left;
    padding: 15px;
  }
  
  .custom-table th {
    color: #afafaf;
  }
  
  .table-actions {
    display: flex;
    margin-top: 15px;
  }
  
  .table-actions button {
    margin-right: 10px;
    cursor: pointer;
    background-color: #3490dc;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;
  }
  
  .table-actions button:hover {
    background-color: #2779bd;
  }
  
  .table-actions button:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
  }
  
`;

export const Table2code = `hello Table2code`;
export const Table2Style = `hiTable2style`;


export const Form1code = `
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

`;

export const Form1codestyle = `
.signup {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.signup-container {
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  color: #333;
}

/* Add a media query for screens with a maximum width of 600px (adjust as needed) */
@media only screen and (max-width: 600px) {
  .signup-container {
    max-width: 100%;
  }
}

h2 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #555;
}

.form-group input {
  width: calc(100% - 16px); /* Adjusted width for smaller screens */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  margin-bottom: 10px; /* Spacing between inputs */
}

.signup-container button {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

button:hover {
  background-color: #0056b3;
}

.login-link {
  text-align: center;
  margin-top: 15px;
  color: #888;
}

.login-link a {
  color: #007bff;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}

`;
