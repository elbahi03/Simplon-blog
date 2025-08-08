import React, { useState } from 'react';

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
      body
    };

    onAdd(newArticle);
    setTitle('');
    setBody('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un article</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br />
      <textarea
        placeholder="Contenu"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      /><br />
      <button type="submit">Publier</button>
    </form>
  );
}

export default NewArticleForm;
