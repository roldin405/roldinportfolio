import { useState, useEffect } from 'react';
import './LoadingScreen.css';

export default function LoadingScreen({ onEnter }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 3) + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      onEnter();
    }, 1200);
  };

  return (
    <div className={`loading-screen ${clicked ? 'loading-exit' : ''}`}>
      <div className="loading-bg-orbs">
        <div className="loading-orb loading-orb-1"></div>
        <div className="loading-orb loading-orb-2"></div>
      </div>
      <div
        className={`loading-wrap ${clicked ? 'loading-clicked' : ''}`}
        onMouseMove={handleMouseMove}
        onClick={counter >= 100 ? handleClick : undefined}
        style={{
          '--mouse-x': `${mousePos.x}px`,
          '--mouse-y': `${mousePos.y}px`,
          cursor: counter >= 100 ? 'pointer' : 'default',
        }}
      >
        <div className="loading-glow"></div>
        <div className="loading-button">
          <span className="loading-button-text">
            {counter >= 100 ? 'Enter' : `${Math.min(counter, 100)}%`}
          </span>
          <div className="loading-button-shine"></div>
        </div>
      </div>
      <div className="loading-marquee">
        <div className="loading-marquee-track">
          {[...Array(6)].map((_, i) => (
            <span key={i}>PORTFOLIO</span>
          ))}
        </div>
      </div>
    </div>
  );
}
