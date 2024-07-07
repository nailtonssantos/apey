import React, { useState } from 'react';
import './Header.css';
import logo from './path/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="left">
        <img src={logo} alt="Apey Logo" className="logo" />
        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>Hoje</li>
            <li>Explorar</li>
            <li>Sobre</li>
            <li>Business</li>
            <li>Blog</li>
          </ul>
        </nav>
      </div>
      <div className="right">
        <div className="auth-buttons">
          <button className="login">Entrar</button>
          <button className="signup">Criar conta</button>
        </div>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;