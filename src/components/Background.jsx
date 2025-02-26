import React from 'react';

const Backgrounds = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-10 p-6">
      {/* Background 1 */}
      <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 transform rotate-45 translate-x-1/4 translate-y-1/4 rounded-full"></div>
      </div>

      {/* Background 2 */}
      <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400 to-blue-500 opacity-50 transform -rotate-45 -translate-x-1/4 -translate-y-1/4 rounded-full"></div>
      </div>

      {/* Background 3 */}
      <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-red-400 to-yellow-500 opacity-50 transform rotate-45 translate-x-1/4 translate-y-1/4 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-r from-blue-400 to-green-500 opacity-50 transform -rotate-45 -translate-x-1/4 -translate-y-1/4 rounded-full"></div>
      </div>

      {/* Background 4 */}
      <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-400 to-purple-500 opacity-50 transform rotate-90 translate-x-1/4 translate-y-1/4 rounded-full"></div>
      </div>

      {/* Background 5 */}
      <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-r from-teal-400 to-blue-500 opacity-50 transform rotate-45 translate-x-1/4 translate-y-1/4 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-orange-400 to-red-500 opacity-50 transform -rotate-45 -translate-x-1/4 -translate-y-1/4 rounded-full"></div>
      </div>
    </div>
  );
}

export default Backgrounds;
