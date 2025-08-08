import React from 'react';
import './ArticleCard.css';

function ArticleCard({ article, onSelect }) {
  return (
    <div className="article-card" onClick={() => onSelect(article)}>
      <h3>{article.title}</h3>
      <button onClick={(e) => { e.stopPropagation(); onSelect(article); }}>
        Voir plus
      </button>
    </div>
  );
}

export default ArticleCard;
