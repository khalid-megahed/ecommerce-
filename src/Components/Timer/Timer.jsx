import  { useState, useEffect } from 'react';
import './Timer.css'; // Import your CSS file for styling

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const launchDate = new Date('2024-03-01T00:00:00Z').getTime(); // Replace with your launch date
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <h2>Come to the discount</h2>
      <div className="countdown-timer">
        <div className="timer-section">
          <p>{timeLeft.days}</p>
          <span>Days</span>
        </div>
        <div className="timer-section">
          <p>{timeLeft.hours}</p>
          <span>Hours</span>
        </div>
        <div className="timer-section">
          <p>{timeLeft.minutes}</p>
          <span>Minutes</span>
        </div>
        <div className="timer-section">
          <p>{timeLeft.seconds}</p>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
