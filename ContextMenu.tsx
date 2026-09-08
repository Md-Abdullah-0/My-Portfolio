import React, { useState, useEffect, useRef } from 'react';
import { RotateCw, Settings, ChevronRight, Check, LayoutGrid } from 'lucide-react';
import { SoftwareSize } from '../types';

interface ContextMenuProps {
  x: number;
  y: number;
  isOpen: boolean;
  onClose: () => void;
  onRefresh: () => void;
  currentSize: SoftwareSize;
  onSetSize: (size: SoftwareSize) => void;
  onOpenSettings: () => void;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  x,
  y,
  isOpen,
  onClose,
  onRefresh,
  currentSize,
  onSetSize,
  onOpenSettings
}) => {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setShowSubmenu(false);
      return;
    }

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('touchstart', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Clamping to avoid viewport overflow
  const menuWidth = 210;
  const menuHeight = 150;
  const clampedX = Math.max(10, Math.min(x, window.innerWidth - menuWidth - 10));
  const clampedY = Math.max(10, Math.min(y, window.innerHeight - menuHeight - 50));
  const openSubmenuLeft = clampedX + menuWidth + 180 > window.innerWidth;

  return (
    <div
      ref={menuRef}
      style={{ top: `${clampedY}px`, left: `${clampedX}px` }}
      className="fixed z-50 bg-[#dcd1b4] border-2 border-t-[#f5e9c9] border-l-[#f5e9c9] border-b-[#000000] border-r-[#000000] shadow-[4px_4px_12px_rgba(0,0,0,0.45)] py-1 min-w-[200px] text-[#2c2820] text-sm select-none font-sans animate-in fade-in zoom-in-95 duration-75"
      onClick={(e) => e.stopPropagation()}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Refresh Option */}
      <button
        onClick={() => {
          onRefresh();
          onClose();
        }}
        className="w-full flex items-center justify-between px-3 py-1.5 hover:bg-[#000080] hover:text-white group text-left transition-colors"
      >
        <div className="flex items-center gap-2.5">
          <RotateCw size={14} className="text-gray-700 group-hover:text-white" />
          <span className="font-semibold text-xs tracking-wide">Refresh</span>
        </div>
        <span className="text-[10px] text-gray-500 group-hover:text-gray-200 font-mono">F5</span>
      </button>

      {/* Software Size Control with Submenu */}
      <div
        className="relative"
        onMouseEnter={() => setShowSubmenu(true)}
        onMouseLeave={() => setShowSubmenu(false)}
      >
        <button
          onClick={() => setShowSubmenu(!showSubmenu)}
          className={`w-full flex items-center justify-between px-3 py-1.5 ${
            showSubmenu ? 'bg-[#000080] text-white' : 'hover:bg-[#000080] hover:text-white'
          } group text-left transition-colors`}
        >
          <div className="flex items-center gap-2.5">
            <LayoutGrid size={14} className={`${showSubmenu ? 'text-white' : 'text-gray-700'} group-hover:text-white`} />
            <span className="font-semibold text-xs tracking-wide">Software Size Control</span>
          </div>
          <ChevronRight size={13} className={`${showSubmenu ? 'text-white' : 'text-gray-600'} group-hover:text-white`} />
        </button>

        {/* Submenu */}
        {showSubmenu && (
          <div
            style={{
              top: '-4px',
              left: openSubmenuLeft ? '-168px' : '100%'
            }}
            className="absolute z-50 bg-[#dcd1b4] border-2 border-t-[#f5e9c9] border-l-[#f5e9c9] border-b-[#000000] border-r-[#000000] shadow-[4px_4px_12px_rgba(0,0,0,0.45)] py-1 min-w-[164px] text-xs font-sans"
          >
            <button
              onClick={() => {
                onSetSize('large');
                onClose();
              }}
              className="w-full flex items-center justify-between px-3 py-1.5 hover:bg-[#000080] hover:text-white group text-left transition-colors"
            >
              <span className="font-semibold">Large (Expansive)</span>
              {currentSize === 'large' && <Check size={13} className="text-blue-900 group-hover:text-white" />}
            </button>

            <button
              onClick={() => {
                onSetSize('medium');
                onClose();
              }}
              className="w-full flex items-center justify-between px-3 py-1.5 hover:bg-[#000080] hover:text-white group text-left transition-colors"
            >
              <span className="font-semibold">Medium (Default)</span>
              {currentSize === 'medium' && <Check size={13} className="text-blue-900 group-hover:text-white" />}
            </button>

            <button
              onClick={() => {
                onSetSize('small');
                onClose();
              }}
              className="w-full flex items-center justify-between px-3 py-1.5 hover:bg-[#000080] hover:text-white group text-left transition-colors"
            >
              <span className="font-semibold">Small (Compact)</span>
              {currentSize === 'small' && <Check size={13} className="text-blue-900 group-hover:text-white" />}
            </button>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="border-t border-[#a3997d] my-1 mx-1 border-b border-[#f5e9c9]" />

      {/* Settings Option */}
      <button
        onClick={() => {
          onOpenSettings();
          onClose();
        }}
        className="w-full flex items-center gap-2.5 px-3 py-1.5 hover:bg-[#000080] hover:text-white group text-left transition-colors"
      >
        <Settings size={14} className="text-gray-700 group-hover:text-white" />
        <span className="font-semibold text-xs tracking-wide">Settings</span>
      </button>
    </div>
  );
};
