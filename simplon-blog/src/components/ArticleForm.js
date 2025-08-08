import React, { useState } from 'react';
import './ArticleForm.css';

function NewArticleForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    const newArticle = {
      id: Date.now(),
      title,
      body,
    };

    onAdd(newArticle);
    setTitle('');
    setBody('');
    setError('');
  };

  return (
    <form className="new-article-form" onSubmit={handleSubmit}>
      <h2>Ajouter un article</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Contenu"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={6}
      />
      <button type="submit">Publier</button>
    </form>
  );
}

export default NewArticleForm;
