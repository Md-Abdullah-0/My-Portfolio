import React, { useState, useRef, useEffect } from 'react';
import { Github, Twitter, Linkedin, Mail, User, Briefcase, Settings, Power, FileText, Wrench, GraduationCap, Trophy, BookOpen, Lightbulb, Coffee, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AboutMeContent, ProjectsContent, SkillsContent, ExperienceContent, EducationContent, AchievementsContent, PublicationsContent, ContactContent, CVContent, InsightsContent, TiredWindowContent } from '../data';
import { StayFreshContent } from './StayFresh';

import { WindowData } from '../types';

interface TaskbarProps {
  onOpenWindow: (id: string, title: string, content: React.ReactNode) => void;
  windows?: WindowData[];
  onToggleWindow?: (id: string) => void;
  onShutDown?: () => void;
}

export const Taskbar: React.FC<TaskbarProps> = ({ onOpenWindow, windows = [], onToggleWindow, onShutDown }) => {
  const [isStartOpen, setIsStartOpen] = useState(false);
  const startRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (startRef.current && !startRef.current.contains(event.target as Node)) {
        setIsStartOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleOpen = (id: string, title: string, content: React.ReactNode) => {
    onOpenWindow(id, title, content);
    setIsStartOpen(false);
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#dcd1b4] border-t-[3px] border-t-[#f5e9c9] flex items-center justify-between px-2 text-black z-50 select-none shadow-[0_-2px_5px_rgba(0,0,0,0.2)] font-sans" ref={startRef}>
      
      {/* Start Button Area */}
      <div className="relative">
        <div 
          onClick={() => setIsStartOpen(!isStartOpen)}
          title="Start"
          className={`flex items-center justify-center w-9 h-8 rounded-[4px] cursor-pointer transition-all border ${
            isStartOpen 
              ? 'bg-[#cce2f7] border-[#9bc2e8] shadow-inner scale-95' 
              : 'border-transparent hover:bg-[#e4effa] hover:border-[#b8d6f5] active:scale-95'
          }`}
        >
          {/* Windows 11 4-tile blue logo */}
          <div className="grid grid-cols-2 gap-[2.5px] w-[21px] h-[21px]">
            <div className="bg-[#0078d4] rounded-[2px] shadow-[0_1px_1px_rgba(0,120,212,0.3)] transition-transform hover:brightness-105" />
            <div className="bg-[#0078d4] rounded-[2px] shadow-[0_1px_1px_rgba(0,120,212,0.3)] transition-transform hover:brightness-105" />
            <div className="bg-[#0078d4] rounded-[2px] shadow-[0_1px_1px_rgba(0,120,212,0.3)] transition-transform hover:brightness-105" />
            <div className="bg-[#0078d4] rounded-[2px] shadow-[0_1px_1px_rgba(0,120,212,0.3)] transition-transform hover:brightness-105" />
          </div>
        </div>

        {/* Start Menu */}
        <AnimatePresence>
          {isStartOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-12 left-0 w-64 bg-[#dcd1b4] border-[3px] border-t-[#f5e9c9] border-l-[#f5e9c9] border-b-[#000000] border-r-[#000000] shadow-[4px_4px_10px_rgba(0,0,0,0.5)] flex flex-col font-sans max-h-[70vh] overflow-y-auto"
            >
              <div className="bg-[#2a4d3f] text-white font-bold p-2 text-xl tracking-wider font-['VT323'] flex items-center gap-2 sticky top-0 z-10">
                <div className="grid grid-cols-2 gap-[1.5px] w-5 h-5 flex-shrink-0">
                  <div className="bg-[#0078d4] rounded-[1px]" />
                  <div className="bg-[#0078d4] rounded-[1px]" />
                  <div className="bg-[#0078d4] rounded-[1px]" />
                  <div className="bg-[#0078d4] rounded-[1px]" />
                </div>
                <span>AD OS</span>
              </div>
              
              <div className="flex flex-col py-1">
                <button onClick={() => handleOpen('about', 'About Me', <AboutMeContent />)} className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a4d3f] hover:text-white text-black transition-colors text-left group">
                  <User size={20} className="text-gray-600 group-hover:text-white" />
                  <span className="font-semibold text-sm">About Me</span>
                </button>
                <button onClick={() => handleOpen('projects', 'Projects', <ProjectsContent />)} className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a4d3f] hover:text-white text-black transition-colors text-left group">
                  <Briefcase size={20} className="text-gray-600 group-hover:text-white" />
                  <span className="font-semibold text-sm">Projects</span>
                </button>
                <button onClick={() => handleOpen('skills', 'Skills', <SkillsContent />)} className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a4d3f] hover:text-white text-black transition-colors text-left group">
                  <Wrench size={20} className="text-gray-600 group-hover:text-white" />
                  <span className="font-semibold text-sm">Skills</span>
                </button>
                <button onClick={() => handleOpen('experience', 'Experience', <ExperienceContent />)} className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a4d3f] hover:text-white text-black transition-colors text-left group">
                  <Briefcase size={20} className="text-gray-600 group-hover:text-white" />
                  <span className="font-semibold text-sm">Experience</span>
                </button>
                <button onClick={() => handleOpen('education', 'Education', <EducationContent />)} className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a4d3f] hover:text-white text-black transition-colors text-left group">
                  <GraduationCap size={20} className="text-gray-600 group-hover:text-white" />
                  <span className="font-semibold text-sm">Education</span>
                </button>
                <button onClick={() => handleOpen('achievements', 'Achievements', <AchievementsContent />)} className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a4d3f] hover:text-white text-black transition-colors text-left group">
                  <Trophy size={20} className="text-gray-600 group-hover:text-white" />
                  <span className="font-semibold text-sm">Achievements</span>
                </button>
                <button onClick={() => handleOpen('publications', 'Research & Publications', <PublicationsContent />)} className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a4d3f] hover:text-white text-black transition-colors text-left group">
                  <BookOpen size={20} className="text-gray-600 group-hover:text-white" />
                  <span className="font-semibold text-sm">Publications</span>
                </button>
                <button onClick={() => handleOpen('insights', 'Insights Viewer', <InsightsContent />)} className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a4d3f] hover:text-white text-black transition-colors text-left group">
                  <Lightbulb size={20} className="text-gray-600 group-hover:text-white" />
                  <span className="font-semibold text-sm">Insights</span>
                </button>
                <button onClick={() => handleOpen('stay-fresh', 'Stay Fresh.exe', <StayFreshContent />)} className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a4d3f] hover:text-white text-black transition-colors text-left group">
                  <Coffee size={20} className="text-gray-600 group-hover:text-white" />
                  <span className="font-semibold text-sm">Stay Fresh</span>
                </button>
                <button onClick={() => handleOpen('cv', 'CV.txt - Notepad', <CVContent />)} className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a4d3f] hover:text-white text-black transition-colors text-left group">
                  <FileText size={20} className="text-gray-600 group-hover:text-white" />
                  <span className="font-semibold text-sm">Resume / CV</span>
                </button>
                <button onClick={() => handleOpen('contact', 'Contact', <ContactContent />)} className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a4d3f] hover:text-white text-black transition-colors text-left group">
                  <Mail size={20} className="text-gray-600 group-hover:text-white" />
                  <span className="font-semibold text-sm">Contact</span>
                </button>
                <button onClick={() => handleOpen('trash', 'Recycle Bin', <div className="text-center text-gray-500 mt-10">Nothing here... yet.</div>)} className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a4d3f] hover:text-white text-black transition-colors text-left group">
                  <Trash2 size={20} className="text-gray-600 group-hover:text-white" />
                  <span className="font-semibold text-sm">Recycle Bin</span>
                </button>
                
                <div className="h-px bg-gray-400 mx-2 my-1 border-b border-white"></div>
                
                <button onClick={() => { setIsStartOpen(false); onShutDown?.(); }} className="flex items-center gap-3 px-4 py-2 hover:bg-[#2a4d3f] hover:text-white text-black transition-colors text-left group mt-1">
                  <Power size={20} className="text-red-600 group-hover:text-red-300" />
                  <span className="font-semibold text-sm">Shut Down...</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Open Windows Area */}
      <div className="flex-1 flex items-center gap-1 mx-2 overflow-x-auto h-full py-1 px-2 border-x-2 border-x-[#a3997d]">
        {windows.map(win => (
          <button
            key={win.id}
            onClick={() => onToggleWindow && onToggleWindow(win.id)}
            className={`px-3 h-full min-w-[80px] max-w-[160px] truncate font-['VT323'] text-lg border-[3px] text-left shadow-sm transition-colors ${
              win.isActive && !win.isMinimized
                ? 'bg-[#e3d9c1] border-t-[#966d6d] border-l-[#966d6d] border-b-[#f5c6c6] border-r-[#f5c6c6] text-black bg-opacity-70'
                : 'bg-[#dcd1b4] border-t-[#f5e9c9] border-l-[#f5e9c9] border-b-[#000000] border-r-[#000000] text-black hover:bg-[#e3d9c1]'
            }`}
          >
            {win.title}
          </button>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-3 pr-2 font-['VT323'] text-lg">
        <a 
          href="https://github.com/Md-Abdullah-0" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="GitHub - Md. Abdulla" 
          className="w-7 h-7 bg-[#dcd1b4] text-[#2c2820] flex items-center justify-center border-2 border-t-[#f5e9c9] border-l-[#f5e9c9] border-b-[#000000] border-r-[#000000] active:border-t-[#000000] active:border-l-[#000000] active:border-b-[#f5e9c9] active:border-r-[#f5e9c9] hover:bg-[#e3d9c1] active:scale-95 transition-all"
        >
          <Github size={16} />
        </a>
        <button onClick={() => onOpenWindow('twitter', 'Twitter', <TiredWindowContent />)} title="Twitter" className="w-7 h-7 bg-[#dcd1b4] text-[#2c2820] flex items-center justify-center border-2 border-t-[#f5e9c9] border-l-[#f5e9c9] border-b-[#000000] border-r-[#000000] active:border-t-[#000000] active:border-l-[#000000] active:border-b-[#f5e9c9] active:border-r-[#f5e9c9] hover:bg-[#e3d9c1] active:scale-95 transition-all">
          <Twitter size={16} />
        </button>
        <a 
          href="https://www.linkedin.com/in/md-abdulla-626922414" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="LinkedIn - Md. Abdulla" 
          className="w-7 h-7 bg-[#dcd1b4] text-[#2c2820] flex items-center justify-center border-2 border-t-[#f5e9c9] border-l-[#f5e9c9] border-b-[#000000] border-r-[#000000] active:border-t-[#000000] active:border-l-[#000000] active:border-b-[#f5e9c9] active:border-r-[#f5e9c9] hover:bg-[#e3d9c1] active:scale-95 transition-all"
        >
          <Linkedin size={16} />
        </a>
        <button onClick={() => onOpenWindow('contact', 'Contact', <ContactContent />)} title="Contact / Email (mdabdullah10769@gmail.com)" className="w-7 h-7 bg-[#dcd1b4] text-[#2c2820] flex items-center justify-center border-2 border-t-[#f5e9c9] border-l-[#f5e9c9] border-b-[#000000] border-r-[#000000] active:border-t-[#000000] active:border-l-[#000000] active:border-b-[#f5e9c9] active:border-r-[#f5e9c9] hover:bg-[#e3d9c1] active:scale-95 transition-all">
          <Mail size={16} />
        </button>
      </div>

    </div>
  );
};

