import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <MainContent />
      </div>
    </div>
  );
}

export default App;