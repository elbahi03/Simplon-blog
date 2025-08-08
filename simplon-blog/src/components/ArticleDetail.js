import React from 'react';
import './ArticleDetail.css';

function ArticleDetail({ article, onBack }) {
  if (!article) return <p>Sélectionnez un article</p>;

  return (
    <div className="article-detail">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <button onClick={onBack}>← Retour</button>
    </div>
  );
}

export default ArticleDetail;
