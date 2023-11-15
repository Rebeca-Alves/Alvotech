import React, { useState, useEffect } from 'react';
import './relogio.css';

const Relogio: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="relogioBox">
      {currentTime.toLocaleTimeString()} - {currentTime.toLocaleDateString()}
    </div>
  );
};

export default Relogio;
