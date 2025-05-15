import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import Login from '../login/Login'; 
import Register from '../../pages/register/register'; 
import LogoutBtn from '../logout/LogoutBtn'; 
import './navdrop.css';

interface NavDropProps {
    isAuthenticated: boolean;
    setIsAuthenticated: (value: boolean) => void;
}

export const NavDrop: React.FC<NavDropProps> = ({ isAuthenticated, setIsAuthenticated }) => {
    return (
        <NavDropdown
            title={
                <>
                    <span className="gg-profile"></span>
                </>
            }
            id="collapsible-nav-dropdown"
        >
            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
                {isAuthenticated ? (
                    <LogoutBtn
                        onLogout={() => {
                            setIsAuthenticated(false);
                        }}
                    />
                ) : (
                    <>
                        <Login onLogin={() => setIsAuthenticated(true)} />
                        <Register />
                    </>
                )}
            </NavDropdown.Item>
        </NavDropdown>
    );
};