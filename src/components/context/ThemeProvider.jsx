import React, { useMemo, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import darkTheme from '../../theming/dark/dark.module.css';
import lightTheme from '../../theming/light/light.module.css';

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme'))

  const setTheme = (currentTheme) => {
    localStorage.setItem('theme', currentTheme)
    setCurrentTheme(currentTheme)
  }

  const value = useMemo(() => ({ theme: currentTheme, setTheme }), [currentTheme]);
  // console.log(value)
  return (
    <ThemeContext.Provider value={value}>
      <div className={currentTheme === 'dark' ? darkTheme.darkTheme : lightTheme.lightTheme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;