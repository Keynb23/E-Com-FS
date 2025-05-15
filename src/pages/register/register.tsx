import React from 'react';

import './register.css';

import Form from 'react-bootstrap/Form';

const Register: React.FC = () => {
  return (
    <>
      <div className="register-container">
        <Form>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingFullName"
              type="text"
              placeholder="Please type your full name"
              required
            />
            <label htmlFor="floatingFullName">Full Name</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingEmail"
              type="email"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="floatingEmail">Email address</label>
          </Form.Floating>
          <Form.Floating>
            <Form.Control
              id="floatingPassword"
              type="password"
              placeholder="Choose your Password"
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </Form.Floating>
          {/* Add checkbox/radio input */}
          <div className="mb-3">
            <Form.Check
              type="checkbox"
              id="default-checkbox"
              label="The information above is correct"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;