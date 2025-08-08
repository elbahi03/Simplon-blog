import React from 'react';

function ArticleCard({ article, onSelect }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>{article.title}</h3>
      <button onClick={() => onSelect(article)}>Voir plus</button>
    </div>
  );
}

export default ArticleCard;