import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../App.css';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_APIKEY,
      },
    };

    fetch(
      'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=climate%20change&pageNumber=1&pageSize=20&autoCorrect=true&withThumbnails=true&fromPublishedDate=null&toPublishedDate=null',
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
        setApiLoaded(true);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="list-of-Articles">
      {apiLoaded ? (
        articles.value.map((element) => <Card key={element.id} {...element} />)
      ) : (
        <p>Loading data</p>
      )}
    </div>
  );
};

export default Articles;
