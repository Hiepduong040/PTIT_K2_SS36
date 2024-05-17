import React, { useState, useEffect } from 'react';

export default function CountTimeRender() {
  const [timeSinceRender, setTimeSinceRender] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSinceRender(prevTime => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      
      <p>Thời gian đã trôi qua: {timeSinceRender} giây</p>
    </div>
  );
}