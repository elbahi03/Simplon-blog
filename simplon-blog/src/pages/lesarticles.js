import React, { useState } from 'react';
import ArticleAjoute from '../components/ArticleAjoute';
import ArticleDetail from '../components/ArticleDetail';
import AllArticles from '../components/AllArticles';

function LesArticles({ articles }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleSelect = (article) => {
    setSelectedArticle(article);
  };

  const handleBack = () => {
    setSelectedArticle(null);
  };

  return (
    <div>
      {selectedArticle ? (
        <ArticleDetail article={selectedArticle} onBack={handleBack} />
      ) : (
        <>
          <ArticleAjoute articles={articles} onSelect={handleSelect} />
          <AllArticles onSelect={handleSelect} />
        </>
      )}
    </div>
  );
}

export default LesArticles;
