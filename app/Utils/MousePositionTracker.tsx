// "use client"
// import { useState, useEffect } from 'react';

// const MousePositionTracker = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (event: { clientX: number; clientY: number; }) => {
//       const newX = event.clientX;
//       const newY = event.clientY;
//       setPosition({ x: newX, y: newY });
//       console.log(`Mouse Position - X: ${newX}, Y: ${newY}`);
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);
//   return null;
// };

// export default MousePositionTracker;
