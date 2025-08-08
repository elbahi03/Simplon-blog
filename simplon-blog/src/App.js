import React, { useState } from 'react';
import ArticleList from './components/ArticleList';
import ArticleDetail from './components/ArticleDetail';
import ArticleForm from './components/ArticleForm';
import ArticleAjoute from './components/ArticleAjoute';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articles, setArticles] = useState([]);
  const handleSelect = (article) => setSelectedArticle(article);
  const handleBack = () => setSelectedArticle(null);
  const handleAddArticle = (article) => {
    setArticles([article, ...articles]);
    setSelectedArticle(null);
  };

  return (
    <div className="App">
      <Header />
      <main style={{ padding: "20px" }}>
        <h1>📝 SimplonBlog</h1>

        <ArticleForm onAdd={handleAddArticle} />

        {selectedArticle ? (
          <ArticleDetail article={selectedArticle} onBack={handleBack} />
        ) : (
          <>
            <ArticleList onSelect={handleSelect} />
            <ArticleAjoute articles={articles} onSelect={handleSelect} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
