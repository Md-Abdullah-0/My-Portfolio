import React, { useState, useEffect } from 'react';
import { Settings, Clock } from 'lucide-react';

interface TopBarProps {
  onOpenWindow?: (id: string, title: string, content: React.ReactNode) => void;
  SettingsContent?: React.FC;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenWindow, SettingsContent }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 h-8 bg-[#dcd1b4] border-b-[3px] border-b-[#a3997d] flex items-center justify-between px-2 text-[#2c2820] z-40 select-none shadow-md">
      <div className="flex items-center gap-2 font-bold text-lg font-['VT323'] tracking-wide">
        <span>AD OS</span>
      </div>
      <div className="flex items-center gap-4">
        <Settings 
          size={18} 
          className="text-[#2c2820] hover:text-black hover:rotate-90 transition-transform duration-300 cursor-pointer active:scale-95" 
          onClick={() => onOpenWindow && SettingsContent && onOpenWindow('settings', 'Settings', <SettingsContent />)}
        />
        <div className="flex items-center gap-2 bg-[#cbb998] px-2 py-0.5 border border-[#a3997d] shadow-inner font-['VT323'] text-lg">
          <Clock size={16} />
          <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    </div>
  );
};
