import React from 'react';

export type SoftwareSize = 'small' | 'medium' | 'large';

export interface WindowData {
  id: string;
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  isActive: boolean;
  isMinimized?: boolean;
  position: { x: number; y: number };
  size?: { width: number; height: number };
}

export interface DesktopIconData {
  id: string;
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  size?: SoftwareSize;
}
