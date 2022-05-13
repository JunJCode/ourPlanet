import React, { useEffect, useState } from 'react';
import CardBook from './CardBook';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [apiLoaded, setApiLoaded] = useState(false);

  useEffect(() => {
    fetch(
      'https://openlibrary.org/search.json?subject=climate+change&language=eng&first_publish_year=2020'
    )
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setApiLoaded(true);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="list-of-Articles">
      {apiLoaded ? (
        books.docs.map((element, index) => (
          <CardBook random={index} key={element.id} {...element} />
        ))
      ) : (
        <p>Loading data</p>
      )}
    </div>
  );
};

export default Books;
