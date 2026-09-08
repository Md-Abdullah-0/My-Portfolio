import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { DesktopIconData } from '../types';

export const DesktopIcon: React.FC<DesktopIconData> = ({ title, icon, onClick, size = 'medium' }) => {
  const isDragging = useRef(false);

  const sizeClasses = {
    small: {
      container: 'w-[58px] gap-0.5',
      iconBox: 'w-8 h-8',
      iconText: 'text-2xl',
      label: 'text-xs min-h-[16px]'
    },
    medium: {
      container: 'w-[74px] gap-1',
      iconBox: 'w-10 h-10',
      iconText: 'text-3xl',
      label: 'text-sm min-h-[20px]'
    },
    large: {
      container: 'w-[92px] gap-1.5',
      iconBox: 'w-14 h-14',
      iconText: 'text-4xl',
      label: 'text-base min-h-[24px]'
    }
  }[size] || {
    container: 'w-[74px] gap-1',
    iconBox: 'w-10 h-10',
    iconText: 'text-3xl',
    label: 'text-sm min-h-[20px]'
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      onDragStart={() => { isDragging.current = true; }}
      onDragEnd={() => { setTimeout(() => { isDragging.current = false; }, 50); }}
      className={`flex flex-col items-center justify-start ${sizeClasses.container} cursor-pointer group select-none`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        if (!isDragging.current) {
          onClick();
        }
      }}
    >
      <div className={`${sizeClasses.iconBox} relative flex items-center justify-center transition-transform`}>
        <div className={`${sizeClasses.iconText} group-active:scale-95 transition-transform flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      <span className={`text-white ${sizeClasses.label} font-['VT323'] tracking-wider px-1 py-0.5 text-center leading-tight flex items-center justify-center break-words w-full [text-shadow:_1px_1px_0_#000,_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_0_1px_2px_rgba(0,0,0,0.9)] group-hover:bg-[#000080]/70 group-hover:text-white rounded-[2px] transition-colors`}>
        {title}
      </span>
    </motion.div>
  );
};
