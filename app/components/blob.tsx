'use client';

import React, { useState, useEffect } from 'react';

//TODO: add bezier curve to animation
const Blob = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-50 h-16 w-16 rounded-full bg-cyan-400 opacity-60 mix-blend-difference blur-xl transition-transform duration-300 ease-out"
      style={{
        transform: `translate3d(${position.x - 32}px, ${position.y - 32}px, 0)`,
      }}
    />
  );
};

export default Blob;
