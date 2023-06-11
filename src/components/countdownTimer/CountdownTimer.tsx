import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: string; // Data no formato "YYYY-MM-DDTHH:MM:SS"
  className?: string; // Propriedade className opcional
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className }) => {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    // Função para calcular o tempo restante até a data alvo
    const calculateTimeLeft = () => {
      const targetTime = new Date(targetDate).getTime();
      const currentTime = new Date().getTime();
      const timeDifference = targetTime - currentTime;

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
        const seconds = Math.floor((timeDifference / 1000) % 60);

        setTimeLeft(`${days} : ${hours} : ${minutes} :  ${seconds}`);
      } else {
        setTimeLeft('Tempo expirado!');
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);

  return <div className={className}>{timeLeft}</div>;
};

export default CountdownTimer;
