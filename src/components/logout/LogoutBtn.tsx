import React from 'react';
import './logoutBtn.css';

const LogoutBtn: React.FC<{ onLogout: () => void }> = ({ onLogout }) => (
  <button onClick={onLogout} className="logout-button">Logout</button>
);

export default LogoutBtn;