import React from 'react';
import './ArticleAjoute.css';

function AddedArticles({ articles, onSelect }) {
  if (articles.length === 0) return null;

  return (
    <div className="added-articles">
      <h2>Votre Articles</h2>
      {articles.map((a) => (
        <div key={a.id} className="article-item">
          <h3>{a.title}</h3>
          <button onClick={() => onSelect(a)}>Voir plus</button>
        </div>
      ))}
    </div>
  );
}

export default AddedArticles;
