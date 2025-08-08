import React, { useState } from 'react';
import ArticleAjoute from '../components/ArticleAjoute';
import ArticleDetail from '../components/ArticleDetail';
import ArticleList from '../components/ArticleList';
import Hero from '../components/Hero';

function Acceuil({ articles }) {
    const [selectedArticle, setSelectedArticle] = useState(null);

    const handleSelect = (article) => {
        setSelectedArticle(article);
    };

    const handleBack = () => {
        setSelectedArticle(null);
    };

    return (
        <div>
            <div>
                <Hero />
                {selectedArticle ? (
                    <ArticleDetail article={selectedArticle} onBack={handleBack} />
                ) : (
                    <>
                        <ArticleList onSelect={handleSelect} />
                        <ArticleAjoute articles={articles} onSelect={handleSelect} />
                    </>
                )}
            </div>
        </div>
    );
}

export default Acceuil;
