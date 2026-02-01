import { useState, useEffect } from 'react';
import catImage from '../assets/images/cat.svg';
import '../styles/animations.css';

function DancingCat() {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        toggleAnimation();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isAnimating]);

  return (
    <div className="dancing-cat-container">
      <div className="cat-wrapper">
        <img
          src={catImage}
          alt="Dancing Cat"
          className={isAnimating ? 'cat dancing' : 'cat'}
        />
      </div>
      <button
        onClick={toggleAnimation}
        className="control-button"
        aria-label={isAnimating ? 'Stop dancing' : 'Start dancing'}
      >
        {isAnimating ? '⏸ 멈추기' : '▶ 춤추기'}
      </button>
    </div>
  );
}

export default DancingCat;
