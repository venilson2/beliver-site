import formatarDate from '@/helpers/FormatDate';
import React, { useEffect, useState } from 'react';
interface CountdownProps {
  targetDate: Date;
  countdownNumber: string
  countdownLabel: string;
}

const CountdownTimer = ({ targetDate, countdownNumber, countdownLabel }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(intervalId);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <>
      <div className="countdownContainer">
        <div className="countdownItem">
          <div className={`${countdownNumber}`}>{timeLeft.days}</div>
          <div className={`${countdownLabel}`}>Dias</div>
        </div>
        <div className="countdownItem">
          <div className={`${countdownNumber}`}>{timeLeft.hours}</div>
          <div className={`${countdownLabel}`}>Horas</div>
        </div>
        <div className="countdownItem">
          <div className={`${countdownNumber}`}>{timeLeft.minutes}</div>
          <div className={`${countdownLabel}`}>Minutos</div>
        </div>
        <div className="countdownItem">
          <div className={`${countdownNumber}`}>{timeLeft.seconds}</div>
          <div className={`${countdownLabel}`}>Segundos</div>
        </div>
      </div>
      <div className='countdownDateContainer'>
        <span className='h5'>{formatarDate(targetDate)}</span>
      </div>
    </>
  );
};

export default CountdownTimer;
