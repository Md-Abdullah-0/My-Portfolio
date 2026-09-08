import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useDragControls } from 'motion/react';
import { X, Minus, Square, Copy } from 'lucide-react';

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  isActive: boolean;
  isMinimized?: boolean;
  onClose: () => void;
  onFocus: () => void;
  onMinimize?: () => void;
  defaultPosition?: { x: number; y: number };
}

export const Window: React.FC<WindowProps> = ({
  id,
  title,
  children,
  isOpen,
  isActive,
  isMinimized = false,
  onClose,
  onFocus,
  onMinimize,
  defaultPosition = { x: 50, y: 50 }
}) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  const [isMaximized, setIsMaximized] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={windowRef}
        drag={!isMaximized}
        dragControls={dragControls}
        dragListener={false}
        dragMomentum={false}
        initial={{ opacity: 0, scale: 0.8, x: defaultPosition.x, y: defaultPosition.y }}
        animate={
          isMinimized
            ? { opacity: 0, scale: 0.1, y: 200, pointerEvents: 'none' }
            : isMaximized 
              ? { opacity: 1, scale: 1, x: 0, y: 0, width: '100%', height: '100%', pointerEvents: 'auto' } 
              : { opacity: 1, scale: 1, width: 'min(90vw, 550px)', height: '380px', pointerEvents: 'auto' }
        }
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ type: 'spring', damping: 22, stiffness: 260 }}
        onPointerDown={onFocus}
        style={{ zIndex: isActive ? 30 : 20 }}
        className="absolute flex flex-col bg-[#dcd1b4] border-[3px] border-t-[#f5e9c9] border-l-[#f5e9c9] border-b-[#000000] border-r-[#000000] shadow-[4px_4px_15px_rgba(0,0,0,0.4)] font-sans pointer-events-auto rounded-none overflow-hidden"
      >
        {/* Title Bar */}
        <div 
          onPointerDown={(e) => {
            onFocus();
            if (!isMaximized) dragControls.start(e);
          }}
          onDoubleClick={() => setIsMaximized(!isMaximized)}
          className={`h-7 flex items-center justify-between px-2 ${isMaximized ? '' : 'cursor-grab active:cursor-grabbing'} ${isActive ? 'bg-[#000080] text-white' : 'bg-[#808080] text-[#c0c0c0]'}`}
        >
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="font-bold truncate select-none text-sm tracking-wide font-['VT323'] text-base">{title}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                if (onMinimize) onMinimize();
              }}
              className="w-4 h-4 bg-[#dcd1b4] border-2 border-t-[#f5e9c9] border-l-[#f5e9c9] border-b-[#000000] border-r-[#000000] flex items-center justify-center text-black active:border-t-[#000000] active:border-l-[#000000] active:border-b-[#f5e9c9] active:border-r-[#f5e9c9] text-xs font-bold leading-none"
              title="Minimize"
            >
              <Minus size={10} strokeWidth={3} />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsMaximized(!isMaximized);
              }}
              className="w-4 h-4 bg-[#dcd1b4] border-2 border-t-[#f5e9c9] border-l-[#f5e9c9] border-b-[#000000] border-r-[#000000] flex items-center justify-center text-black active:border-t-[#000000] active:border-l-[#000000] active:border-b-[#f5e9c9] active:border-r-[#f5e9c9] text-xs font-bold leading-none"
              title="Maximize"
            >
              {isMaximized ? <Copy size={9} strokeWidth={3} /> : <Square size={9} strokeWidth={3} />}
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="w-4 h-4 bg-[#dcd1b4] border-2 border-t-[#f5e9c9] border-l-[#f5e9c9] border-b-[#000000] border-r-[#000000] flex items-center justify-center text-black active:border-t-[#000000] active:border-l-[#000000] active:border-b-[#f5e9c9] active:border-r-[#f5e9c9] text-xs font-bold leading-none"
              title="Close"
            >
              <X size={11} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 min-h-0 bg-white p-5 overflow-auto border-2 border-t-[#000000] border-l-[#000000] border-b-[#f5e9c9] border-r-[#f5e9c9] m-1">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
