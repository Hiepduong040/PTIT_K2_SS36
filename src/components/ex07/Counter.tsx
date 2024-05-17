import React, { useState, useRef } from 'react';

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  const prevCountRef = useRef<number>(0);

  const handleIncrement = () => {
    prevCountRef.current = count;
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Giá trị trước đó: {prevCountRef.current}</p>
      <p>Giá trị hiện tại: {count}</p>
      <button onClick={handleIncrement}>Tăng</button>
    </div>
  );
}