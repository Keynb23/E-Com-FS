import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login: React.FC<{ onLogin: () => void }> = ({ onLogin }) => (
  <Link to="/login" onClick={onLogin} className="login-button">Login</Link>
);

export default Login;