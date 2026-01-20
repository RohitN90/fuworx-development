import React from 'react';

const WorkInProgress = () => {
  return (
    <div className="min-h-screen flex py-20 mt-20 items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#002336' }}>
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="relative text-center px-6 max-w-4xl mx-auto">
        {/* Icon */}
        <div className="mb-12 inline-block">
          <div className="relative">
            <div className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-linear-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-2xl animate-float">
              <svg 
                className="w-16 h-16 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-cyan-500 rounded-full filter blur-xl opacity-40"></div>
          </div>
        </div>

        {/* Main heading - Golden ratio: 61.8px */}
        <h1 
          className="text-white font-semibold mb-6 tracking-tight leading-tight"
          style={{ fontSize: '61.8px', letterSpacing: '-0.03em' }}
        >
          We're Building
          <br />
          <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-300 text-transparent bg-clip-text">
            Something Amazing
          </span>
        </h1>

        {/* Subheading - Golden ratio: 38.2px */}
        <p 
          className="text-cyan-100 mb-4 font-light"
          style={{ fontSize: '38.2px', letterSpacing: '-0.02em' }}
        >
          Work in Progress
        </p>

        {/* Description - Golden ratio: 23.6px */}
        <p 
          className="text-blue-200 mb-12 max-w-2xl mx-auto opacity-90 font-normal leading-relaxed"
          style={{ fontSize: '23.6px' }}
        >
          Our team is crafting an exceptional experience for you. This page will be live soon with something truly special.
        </p>

        {/* Progress indicator */}
        <div className="max-w-md mx-auto mb-12">
          <div className="h-1.5 bg-blue-900 bg-opacity-30 rounded-full overflow-hidden backdrop-blur-sm">
            <div className="h-full bg-linear-to-r from-blue-400 to-cyan-400 rounded-full animate-progress shadow-lg shadow-cyan-500/50"></div>
          </div>
        </div>

        {/* Additional info - Golden ratio: 14.6px */}
        <p 
          className="text-blue-300 opacity-75 font-light tracking-wide"
          style={{ fontSize: '14.6px', letterSpacing: '0.05em' }}
        >
          ESTIMATED COMPLETION: COMING SOON
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 75%;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-progress {
          animation: progress 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WorkInProgress;