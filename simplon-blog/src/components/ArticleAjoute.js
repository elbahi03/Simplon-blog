import React from 'react';

function AddedArticles({ articles, onSelect }) {
  if (articles.length === 0) return null;

  return (
    <div>
      <h2>Articles ajoutés</h2>
      {articles.map((a) => (
        <div key={a.id} style={{ marginBottom: "20px" }}>
          <h3>{a.title}</h3>
          <button onClick={() => onSelect(a)}>Voir plus</button>
        </div>
      ))}
    </div>
  );
}

export default AddedArticles;