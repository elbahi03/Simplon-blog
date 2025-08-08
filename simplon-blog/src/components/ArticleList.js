import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import './ArticleList.css';

function ArticleList({ onSelect }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=4")
      .then((res) => res.json())
      .then((data) => setArticles(data.posts))
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);

  return (
    <div className="article-list">
      <h2>Articles Importants</h2>
      <div className="articles-row">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} onSelect={onSelect} />
        ))}
      </div>
      <button>Tous les articles</button>
    </div>
  );
}

export default ArticleList;

