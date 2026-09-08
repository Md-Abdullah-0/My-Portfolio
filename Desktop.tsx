import React, { useState, useEffect } from 'react';
import { TopBar } from './TopBar';
import { Taskbar } from './Taskbar';
import { DesktopIcon } from './DesktopIcon';
import { Window } from './Window';
import { ContextMenu } from './ContextMenu';
import { WindowData, SoftwareSize } from '../types';
import { CVContent, ProjectsContent, InsightsContent, AboutMeContent, SkillsContent, ExperienceContent, EducationContent, AchievementsContent, PublicationsContent, ContactContent, TiredWindowContent } from '../data';
import { StayFreshContent } from './StayFresh';
import { audioFeedback } from '../utils/audio';

import bgImage1 from '../assets/images/pixel_art_city_background_1786299546370.jpg';
import grumpyCatsBg from '../assets/images/grumpy_cats_wallpaper_1788687354540.jpg';

export const Desktop: React.FC = () => {
  const [windows, setWindows] = useState<WindowData[]>([]);
  const [wallpaper, setWallpaper] = useState<string>(() => {
    const saved = localStorage.getItem('ad_os_wallpaper');
    return saved !== null ? saved : grumpyCatsBg;
  });
  const [isShutDown, setIsShutDown] = useState(false);
  const [isRestarting, setIsRestarting] = useState(false);
  const [contextMenu, setContextMenu] = useState<{ isOpen: boolean; x: number; y: number }>({
    isOpen: false,
    x: 0,
    y: 0
  });
  const [softwareSize, setSoftwareSize] = useState<SoftwareSize>(() => {
    const saved = localStorage.getItem('ad_os_software_size');
    return (saved as SoftwareSize) || 'medium';
  });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleSetWallpaper = (wp: string) => {
    setWallpaper(wp);
    localStorage.setItem('ad_os_wallpaper', wp);
    audioFeedback.playClickSound();
  };

  const handleSetSoftwareSize = (size: SoftwareSize) => {
    setSoftwareSize(size);
    localStorage.setItem('ad_os_software_size', size);
    audioFeedback.playClickSound();
  };

  const handleRefresh = () => {
    audioFeedback.playClickSound();
    setIsRefreshing(true);
    setRefreshKey(prev => prev + 1);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 450);
  };

  // Keyboard shortcut F5 for refresh
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F5') {
        e.preventDefault();
        handleRefresh();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({
      isOpen: true,
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleRestart = () => {
    setIsRestarting(true);
    setTimeout(() => {
      setIsRestarting(false);
      setIsShutDown(false);
      setWindows([]);
    }, 2800);
  };
  const openWindow = (id: string, title: string, content: React.ReactNode) => {
    setWindows(prev => {
      // Check if already open
      if (prev.find(w => w.id === id)) {
        return prev.map(w => ({ 
          ...w, 
          isActive: w.id === id,
          isMinimized: w.id === id ? false : w.isMinimized
        }));
      }
      
      audioFeedback.playOpenSound();
      
      // Calculate a staggered position based on existing windows
      const offset = prev.length * 30;
      const newWindow: WindowData = {
        id,
        title,
        content,
        isOpen: true,
        isActive: true,
        isMinimized: false,
        position: { x: 50 + offset, y: 50 + offset }
      };
      
      // Set others to inactive
      return [...prev.map(w => ({ ...w, isActive: false })), newWindow];
    });
  };

  const closeWindow = (id: string) => {
    audioFeedback.playCloseSound();
    setWindows(prev => prev.filter(w => w.id !== id));
  };

  const focusWindow = (id: string) => {
    setWindows(prev => prev.map(w => ({ ...w, isActive: w.id === id, isMinimized: w.id === id ? false : w.isMinimized })));
  };

  const minimizeWindow = (id: string) => {
    setWindows(prev => prev.map(w => w.id === id ? { ...w, isMinimized: true, isActive: false } : w));
  };

  const SettingsContent = () => (
    <div className="font-sans space-y-4">
      <h2 className="text-xl font-bold border-b-2 border-black pb-2">Display & System Settings</h2>
      
      <div>
        <h3 className="font-bold mb-2 text-sm">Wallpaper</h3>
        <div className="flex gap-2.5">
           <button 
             className={`w-24 h-16 bg-[#FAF5EA] border-2 rounded overflow-hidden flex items-center justify-end relative transition-all ${wallpaper === grumpyCatsBg ? 'border-red-500 ring-2 ring-red-300' : 'border-gray-400 hover:border-black'}`}
             onClick={() => handleSetWallpaper(grumpyCatsBg)}
             title="Grumpy Cats (Right)"
           >
             <img 
               src={grumpyCatsBg} 
               alt="Grumpy Cats" 
               className="h-full w-auto object-contain object-right pointer-events-none"
               referrerPolicy="no-referrer"
             />
             <span className="absolute bottom-1 left-1 text-[9px] bg-black/70 text-white px-1 py-0.5 rounded font-mono font-bold leading-none">Cats</span>
           </button>
           <button 
             className={`w-24 h-16 bg-blue-500 border-2 rounded relative transition-all ${wallpaper === bgImage1 ? 'border-red-500 ring-2 ring-red-300' : 'border-gray-400 hover:border-black'}`}
             style={{ backgroundImage: `url(${bgImage1})`, backgroundSize: 'cover' }}
             onClick={() => handleSetWallpaper(bgImage1)}
             title="Pixel Art City"
           >
             <span className="absolute bottom-1 right-1 text-[9px] bg-black/70 text-white px-1 py-0.5 rounded font-mono font-bold leading-none">City</span>
           </button>
           <button 
             className={`w-24 h-16 bg-[#36493b] border-2 rounded flex items-center justify-center text-white text-xs font-semibold relative transition-all ${wallpaper === '' ? 'border-red-500 ring-2 ring-red-300' : 'border-gray-400 hover:border-black'}`}
             onClick={() => handleSetWallpaper('')}
             title="Solid Retro Color"
           >
             Retro Teal
           </button>
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-2 text-sm">Software / Icon Size Control</h3>
        <div className="flex gap-2">
          {(['small', 'medium', 'large'] as SoftwareSize[]).map((size) => (
            <button
              key={size}
              onClick={() => handleSetSoftwareSize(size)}
              className={`px-3 py-1.5 text-xs font-bold border-2 capitalize transition-all ${
                softwareSize === size 
                  ? 'bg-[#000080] text-white border-black shadow-inner' 
                  : 'bg-[#dcd1b4] text-black border-black hover:bg-[#eae1cd]'
              }`}
            >
              {size === 'small' ? '▫️ Small' : size === 'medium' ? '◽ Medium' : '◻️ Large'}
            </button>
          ))}
        </div>
        <p className="text-[11px] text-gray-600 mt-1">
          Adjust the scale of desktop software icons and elements.
        </p>
      </div>

      <div className="pt-2 border-t border-gray-300">
        <h3 className="font-bold mb-1 text-sm">Desktop Maintenance</h3>
        <button
          onClick={handleRefresh}
          className="px-3 py-1.5 text-xs font-bold bg-[#dcd1b4] border-2 border-black hover:bg-[#eae1cd] flex items-center gap-2 active:scale-95"
        >
          <span>🔄</span> Refresh Desktop (F5)
        </button>
      </div>

      <div className="pt-1">
        <p className="text-xs text-gray-600">
          AD OS v0.2 • A retro desktop environment portfolio.
        </p>
      </div>
    </div>
  );

  const desktopIcons = [
    {
      id: 'about',
      title: 'Info',
      icon: <span>ℹ️</span>,
      onClick: () => openWindow('about', 'Info', <AboutMeContent />)
    },
    {
      id: 'education',
      title: 'Education',
      icon: <span>🎓</span>,
      onClick: () => openWindow('education', 'Education', <EducationContent />)
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: <span>✉️</span>,
      onClick: () => openWindow('contact', 'Contact', <ContactContent />)
    },
    {
      id: 'projects',
      title: 'Projects',
      icon: <span>📁</span>,
      onClick: () => openWindow('projects', 'Projects', <ProjectsContent />)
    },
    {
      id: 'achievements',
      title: 'Achievements',
      icon: <span>🏆</span>,
      onClick: () => openWindow('achievements', 'Achievements', <AchievementsContent />)
    },
    {
      id: 'insights',
      title: 'Insights',
      icon: <span>💡</span>,
      onClick: () => openWindow('insights', 'Insights Viewer', <InsightsContent />)
    },
    {
      id: 'skills',
      title: 'Skills',
      icon: <span>🔧</span>,
      onClick: () => openWindow('skills', 'Skills', <SkillsContent />)
    },
    {
      id: 'publications',
      title: 'Publications',
      icon: <span>📖</span>,
      onClick: () => openWindow('publications', 'Research & Publications', <PublicationsContent />)
    },
    {
      id: 'stay-fresh',
      title: 'Stay Fresh',
      icon: <span>☕</span>,
      onClick: () => openWindow('stay-fresh', 'Stay Fresh.exe', <StayFreshContent />)
    },
    {
      id: 'experience',
      title: 'Experience',
      icon: <span>💼</span>,
      onClick: () => openWindow('experience', 'Experience', <ExperienceContent />)
    },
    {
      id: 'cv',
      title: 'CV.txt',
      icon: <span>📄</span>,
      onClick: () => openWindow('cv', 'CV.txt - Notepad', <CVContent />)
    },
    {
      id: 'trash',
      title: 'Trash',
      icon: <span>🗑️</span>,
      onClick: () => openWindow('trash', 'Recycle Bin', <div className="text-center text-gray-500 mt-10">Nothing here... yet.</div>)
    }
  ];

  if (isShutDown) {
    return (
      <div className="absolute inset-0 bg-[#008080] flex flex-col items-center justify-center text-white font-['VT323'] z-50">
        {isRestarting ? (
          <div className="bg-[#c0c0c0] border-4 border-t-[#ffffff] border-l-[#ffffff] border-b-[#808080] border-r-[#808080] p-8 text-black text-center max-w-md shadow-2xl space-y-4">
            <div className="text-3xl font-bold">Restarting AD OS...</div>
            <div className="text-6xl animate-bounce my-4">🐱🐾</div>
            <div className="text-xl text-gray-700 animate-pulse">Pixel Cat is waking up the system...</div>
            <div className="w-full bg-gray-300 h-4 border-2 border-black overflow-hidden mt-2">
              <div className="bg-blue-600 h-full animate-[pulse_1s_infinite] w-3/4"></div>
            </div>
          </div>
        ) : (
          <div className="bg-[#c0c0c0] border-4 border-t-[#ffffff] border-l-[#ffffff] border-b-[#808080] border-r-[#808080] p-8 text-black text-center max-w-md shadow-2xl">
            <div className="text-3xl font-bold mb-4">AD OS Shut Down</div>
            <p className="text-xl mb-6 text-gray-800">It is now safe to turn off your computer.</p>
            <button 
              onClick={handleRestart}
              className="px-6 py-2 bg-[#c0c0c0] border-2 border-t-[#ffffff] border-l-[#ffffff] border-b-[#000000] border-r-[#000000] active:border-t-[#000000] active:border-l-[#ffffff] font-bold text-xl cursor-pointer hover:bg-gray-200"
            >
              Restart Computer
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      className="absolute inset-0 bg-transparent overflow-hidden select-none"
      onContextMenu={handleContextMenu}
      onClick={() => {
        if (contextMenu.isOpen) {
          setContextMenu(prev => ({ ...prev, isOpen: false }));
        }
      }}
    >
      {/* Background Wallpaper Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {wallpaper === grumpyCatsBg ? (
          <div className="w-full h-full bg-[#FAF5EA] relative flex items-center justify-end overflow-hidden">
            <img
              src={grumpyCatsBg}
              alt="Grumpy Cats Background"
              className="h-full w-auto max-w-[70%] sm:max-w-[55%] md:max-w-[48%] object-contain object-right pointer-events-none select-none transition-opacity duration-300 pr-2 sm:pr-6"
              referrerPolicy="no-referrer"
            />
          </div>
        ) : wallpaper ? (
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `url(${wallpaper})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              imageRendering: 'pixelated'
            }}
          />
        ) : (
          <div className="w-full h-full bg-[#36493b]" />
        )}
      </div>

      <TopBar onOpenWindow={openWindow} SettingsContent={SettingsContent} />
      
      {/* Refreshing Feedback Indicator */}
      {isRefreshing && (
        <div className="absolute top-12 right-6 z-40 bg-[#dcd1b4] border-2 border-t-[#f5e9c9] border-l-[#f5e9c9] border-b-[#000000] border-r-[#000000] px-3 py-1.5 text-sm font-['VT323'] text-black shadow-lg flex items-center gap-2 pointer-events-none">
          <span className="animate-spin text-sm">🔄</span>
          <span>Refreshing Desktop...</span>
        </div>
      )}

      {/* Desktop Icons Area */}
      <div 
        className={`absolute top-10 left-2 bottom-12 flex flex-col flex-wrap gap-x-3 gap-y-4 content-start z-10 p-2 transition-all duration-200 ${
          isRefreshing ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        {desktopIcons.map(icon => (
           <DesktopIcon 
             key={`${icon.id}-${refreshKey}`} 
             id={icon.id} 
             title={icon.title} 
             icon={icon.icon} 
             onClick={icon.onClick} 
             size={softwareSize}
           />
        ))}
      </div>

      {/* Windows Area */}
      <div className="absolute top-8 left-0 right-0 bottom-10 z-20 pointer-events-none">
        <div className="relative w-full h-full pointer-events-none">
          {windows.map(win => (
            <Window
              key={win.id}
              id={win.id}
              title={win.title}
              isOpen={win.isOpen}
              isActive={win.isActive}
              isMinimized={win.isMinimized}
              onClose={() => closeWindow(win.id)}
              onFocus={() => focusWindow(win.id)}
              onMinimize={() => minimizeWindow(win.id)}
              defaultPosition={win.position}
            >
              {win.content}
            </Window>
          ))}
        </div>
      </div>

      <Taskbar 
        onOpenWindow={openWindow} 
        windows={windows} 
        onToggleWindow={(id) => {
          const win = windows.find(w => w.id === id);
          if (win) {
            if (win.isActive && !win.isMinimized) {
              minimizeWindow(id);
            } else {
              focusWindow(id);
            }
          }
        }} 
        onShutDown={() => setIsShutDown(true)}
      />

      {/* Right-Click Desktop Context Menu */}
      <ContextMenu
        isOpen={contextMenu.isOpen}
        x={contextMenu.x}
        y={contextMenu.y}
        onClose={() => setContextMenu(prev => ({ ...prev, isOpen: false }))}
        onRefresh={handleRefresh}
        currentSize={softwareSize}
        onSetSize={handleSetSoftwareSize}
        onOpenSettings={() => openWindow('settings', 'Settings', <SettingsContent />)}
      />
    </div>
  );
};

