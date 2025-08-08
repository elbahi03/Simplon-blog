import React from 'react';
import NewArticleForm from '../components/ArticleForm';

function Creer({ addArticle }) {
  const add = (newArticle) => {
    addArticle(newArticle);
    alert("Article ajouté avec succès !");
  };

  return (
    <div>
      <NewArticleForm onAdd={add} />
    </div>
  );
}

export default Creer;
