import React, { useEffect } from 'react';

export default function Scroll() {
  useEffect(() => {
    const handleScroll = () => {
      document.title = `Vị trí cuộn: ${window.scrollY}`;
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
     
    </div>
  );
}