import React, { useState } from 'react';

interface MonitorFrameProps {
  children: React.ReactNode;
}

export const MonitorFrame: React.FC<MonitorFrameProps> = ({ children }) => {
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="h-[100dvh] w-full bg-white flex items-center justify-center sm:p-4 font-['VT323'] overflow-hidden">
      {/* Outer monitor shell */}
      <div className="w-full h-full sm:h-[98dvh] sm:w-auto sm:aspect-[4/3] bg-[#e3d5be] sm:rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-1 sm:p-3 relative sm:border-[4px] border-[#cbb998] flex flex-col">
        {/* Inner bezel */}
        <div className="flex-1 bg-[#d5c6ae] sm:rounded-[2rem] p-1 sm:p-3 shadow-[inset_0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden relative flex flex-col">
          {/* Deep screen bevel */}
          <div className="flex-1 bg-black sm:rounded-[1.5rem] p-0.5 sm:p-1 shadow-inner overflow-hidden relative flex flex-col">
            {/* Screen content area */}
            <div className={`w-full h-full ${isOn ? 'bg-[#36493b]' : 'bg-black'} overflow-hidden relative sm:rounded-[1rem] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] transition-colors duration-500`}>
              {isOn ? children : null}
              
              {/* CRT Scanline effect */}
              {isOn && <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] z-50 mix-blend-overlay"></div>}
            </div>
          </div>
        </div>
        
        {/* Monitor controls/branding area */}
        <div className="h-8 sm:h-10 mt-2 sm:mt-4 flex items-center justify-between px-4 sm:px-8 shrink-0">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsOn(!isOn)}
              className="w-5 h-5 sm:w-6 sm:h-6 bg-[#2a2a2a] flex items-center justify-center rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),0_1px_1px_rgba(255,255,255,0.2)] active:scale-95 transition-transform"
            >
              <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors duration-300 ${isOn ? 'bg-green-500 shadow-[0_0_6px_#22c55e]' : 'bg-gray-800 shadow-none'}`}></div>
            </button>
          </div>
          <div className="flex gap-2 sm:gap-4">
             <div className="w-8 sm:w-12 h-3 sm:h-4 bg-[#2a2a2a] shadow-inner rounded-sm"></div>
             <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[#2a2a2a] shadow-inner rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
