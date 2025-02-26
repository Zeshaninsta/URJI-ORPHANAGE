import React from 'react';

const Particles = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      {/* Particle 1 */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
      
      {/* Particle 2 */}
      <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
      
      {/* Particle 3 */}
      <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-green-500 rounded-full"></div>
      
      {/* Particle 4 */}
      <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-yellow-500 rounded-full animate-spin"></div>
      
      {/* Particle 5 */}
      <div className="absolute top-1/3 right-1/2 w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
    </div>
  );
}

export default Particles;
