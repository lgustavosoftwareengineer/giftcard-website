import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Form: React.FC = () => {
  document.title = 'Type the Keyword';

  const [keyword, setKeyword] = React.useState('');

  function handlerKeyword(text: any): any {
    return setKeyword(text.target.value);
  }

  // Insert here the secret keyword
  const secretKeyword = 'test';

  return (
    <div className="form-container">
      <h1>Type the secret keyword</h1>
      <input type="password" name="keyword" onChange={handlerKeyword} />

      {keyword === secretKeyword ? (
        <Link to="/gift-card" className="button">
          <p>Check</p>
        </Link>
      ) : (
        <Link to="/wrong-answer" className="button">
          <p>Check</p>
        </Link>
      )}
    </div>
  );
};

export default Form;
