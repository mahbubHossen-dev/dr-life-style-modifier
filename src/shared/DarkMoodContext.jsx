// context/DarkModeContext.js
'use client'
import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMood, setIsDarkMood] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      setIsDarkMood(true);
    } else {
      setIsDarkMood(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMood) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMood]);

  return (
    <DarkModeContext.Provider value={{ isDarkMood, setIsDarkMood }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom Hook
export const useDarkMode = () => useContext(DarkModeContext);
