import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LesArticles from './pages/lesarticles';
import Creer from './pages/creer';            
import Apropos from './pages/apropos';         
import Acceuil from './pages/acceuil';        

function App() {
  const [articles, setArticles] = useState([]);

  const addArticle = (newArticle) => {
    setArticles(prev => [newArticle, ...prev]);
  };

  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Acceuil articles={articles} />} />
          <Route path="/lesarticles" element={<LesArticles articles={articles} />} />
          <Route path="/creer" element={<Creer addArticle={addArticle} />} />
          <Route path="/apropos" element={<Apropos />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
