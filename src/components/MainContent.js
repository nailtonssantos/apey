import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="images">
        <div className="image-1">
          <p>receitas práticas de frango para o jantar</p>
        </div>
        <div className="image-2"></div>
        <div className="image-3"></div>
      </div>
      <div className="text">
        <h1>Procure uma ideia</h1>
        <p>O que você quer experimentar agora? Procure algo de seu interesse, como "receitas práticas de frango para o jantar", e veja o que aparece.</p>
        <button>Explorar</button>
      </div>
    </main>
  );
};

export default MainContent;
