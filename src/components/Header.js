import React from 'react';
import './Header.css';
import logo from './path/logo.png'; // Altere o caminho para o logotipo do Pinterest

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <img src={logo} alt="Apey" className="logo" />
        <nav>
          <ul>
            <li>Hoje</li>
            <li>Explorar</li>
          </ul>
        </nav>
      </div>
      <div className="right">
        <nav>
          <ul>
            <li>Sobre</li>
            <li>Business</li>
            <li>Blog</li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login">Entrar</button>
          <button className="signup">Criar conta</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
