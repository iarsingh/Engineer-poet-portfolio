"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type ViewType = 'poet' | 'engineer';

interface ViewContextType {
  view: ViewType;
  toggleView: () => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<ViewType>('engineer');

  const toggleView = () => {
    setView((prevView) => (prevView === 'engineer' ? 'poet' : 'engineer'));
  };

  return (
    <ViewContext.Provider value={{ view, toggleView }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
} 