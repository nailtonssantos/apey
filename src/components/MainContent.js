import React from 'react';
import './MainContent.css';
import image1 from './images/image1.png';  // Caminho da imagem 1 (exemplo)
import image2 from './images/image2.png';  // Caminho da imagem 2 (exemplo)
import image3 from './images/image3.png';  // Caminho da imagem 3 (exemplo)

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="first-section">
        <div className="text">
          <h1>Site em Construção</h1>
          <p>Entre em contato conosco, clique no botão abaixo.</p>
          <a href='https://wa.me/5566996555525?text=Ol%C3%A1.%20Gostaria%20de%20ter%20meu%20pr%C3%B3prio%20Sistema%2FAplicativo.' target="_blank"><button className='button'>Fale Conosco</button></a>
        </div>
      </div>
      <div className="second-section">
        <div className="images">
          <div className="image">
            <img src={image1} alt="Imagem 1" />
          </div>
          <div className="image">
            <img src={image2} alt="Imagem 2" />
          </div>
          <div className="image">
            <img src={image3} alt="Imagem 3" />
          </div>
        </div>
        <div className="text">
          <h1>Procure uma ideia</h1>
          <p>O que você quer experimentar agora? Procure algo de seu interesse, como "receitas práticas de frango para o jantar", e veja o que aparece.</p>
          <button className='button'>Explorar</button>
        </div>
      </div>
    </main>
  );
}

export default MainContent;