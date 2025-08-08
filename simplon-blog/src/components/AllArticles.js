import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import './AllArticles.css';


function ArticleList({ onSelect }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setArticles(data.posts))
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);

  return (
    <div className="article-list">
      <h2>Liste des articles</h2>
      <div className="articles-grid">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}

export default ArticleList;