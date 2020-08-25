import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const WrongAnswer: React.FC = () => {
  document.title = 'Ops';

  React.useEffect(() => {
    const favicon: HTMLElement | any = document.querySelector(
      "link[rel*='icon']",
    );
    favicon.href = './favicons/error.ico';
  }, []);

  /**
   * Insert some phrases to keep the person motivated to keeping try
   */
  const [possiblePhrases] = React.useState(['Try again', 'Almost there!']);

  return (
    <div className="form-container">
      <h1>
        {
          possiblePhrases[
            Math.floor(Math.random() * Math.floor(possiblePhrases.length))
          ]
        }
      </h1>
      <Link to="/" className="button">
        <p>Try again</p>
      </Link>
    </div>
  );
};

export default WrongAnswer;
