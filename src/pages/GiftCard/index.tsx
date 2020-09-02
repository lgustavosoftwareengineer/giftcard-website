import React from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import { Link } from 'react-router-dom';

import './styles.css';

const GiftCard: React.FC = () => {
  // Setting the title of the browser tab
  document.title = 'Happy birdthday!!';

  // Changing the icon of the browser tab
  React.useEffect(() => {
    const favicon: HTMLElement | any = document.querySelector(
      "link[rel*='icon']",
    );
    favicon.href = './favicons/party.ico';
  }, []);

  const { width, height } = useWindowSize();

  const [showConfetti, setShowConfetti] = React.useState(true);

  const [configs] = React.useState({
    yourName: '*your name*',
    fromEmoji: '*some emoji*',
    nameOfTheSpecialPerson: '*name*',
    toEmoji: '*another emoji*',
  });

  return (
    <div>
      <Confetti width={width} height={height} opacity={showConfetti ? 1 : 0} />
      <div className="container">
        <div id="from-to">
          <h1>
            <span id="from">From: </span>
            {configs.yourName}{' '}
            <span role="img" aria-label="emoji">
              {configs.fromEmoji}
            </span>
          </h1>
          <h1>
            To: <span id="to">{configs.nameOfTheSpecialPerson}</span>{' '}
            <span role="img" aria-label="emoji">
              {configs.toEmoji}
            </span>
          </h1>
          <Link to="/" className="button-back">
            <p>Back</p>
          </Link>
        </div>
        <div
          className="mail-wrapper"
          onMouseEnter={() => setShowConfetti(true)}
          onMouseLeave={() => setShowConfetti(false)}
        >
          <div className="mail">
            <div className="cover" />
            <div className="letter">
              <div className="letter-content">
                <h1>
                  <span role="img" aria-label="emoji">
                    🎉
                  </span>{' '}
                  Happy Birthday!,
                </h1>
                {/* Here you pull the name of the special person */}
                <h1>
                  {configs.nameOfTheSpecialPerson}{' '}
                  <span role="img" aria-label="emoji">
                    🎉
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Here are some playlist by your choice */}
        <iframe
          title="HappyBirthday"
          src="https://open.spotify.com/embed/playlist/4rwpivnI4LveehwciuQlIA"
          width="300"
          height="200"
          frameBorder="0"
          allow="encrypted-media"
        />
      </div>
    </div>
  );
};

export default GiftCard;
