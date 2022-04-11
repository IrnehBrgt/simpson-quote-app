import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Quote = () => {
  const sampleSimpson = {
    quote: 'Oh Yeah!',
    character: 'Duffman',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FDuffman.png?1497567511709',
    characterDirection: 'Left',
  };

  const [simpson, setSimpson] = useState(sampleSimpson);

  const loadQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((data) => {
        setSimpson(data[0]);
      });
  };

  return (
    <div>
      <p>{simpson.quote}</p>
      <p>{simpson.character}</p>
      <img src={simpson.image} alt={simpson.character} />
      <button onClick={loadQuote}>Random quote</button>
    </div>
  );
};

export default Quote;
