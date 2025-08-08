import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';

function ArticleList({ onSelect }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=4")
      .then((res) => res.json())
      .then((data) => setArticles(data.posts))
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);

  return (
    <div>
      <h2>Liste des articles</h2>
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} onSelect={onSelect} />
      ))}
      <button> Tous les articles </button>
    </div>
  );
}

export default ArticleList;
