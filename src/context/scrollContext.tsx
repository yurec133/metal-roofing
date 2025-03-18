"use client";
import { createContext, useContext, ReactNode } from "react";

interface ScrollContextType {
  scrollToBlock: (id: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScroll = (): ScrollContextType => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const scrollToBlock = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 40;
      const elementTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollToBlock }}>
      {children}
    </ScrollContext.Provider>
  );
};
