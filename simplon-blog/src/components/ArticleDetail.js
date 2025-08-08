import React from 'react';

function ArticleDetail({ article, onBack }) {
  if (!article) return <p>Sélectionnez un article</p>;

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <button onClick={onBack}>← Retour</button>
    </div>
  );
}

export default ArticleDetail;
