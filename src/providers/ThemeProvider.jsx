// import React, { useContext } from 'react';
import { createContext } from 'react/cjs/react.development';
import { useState } from 'react/cjs/react.production.min';
// import { THEME_TYPE } from '../constants';

const ThemeContext = createContext(undefined);

const ThemeProvider = ({ children }) => {
  const [ThemeMode, setThemeMode] = useState({isDark: false});

  const ToggleTheme = (oldTheme) => {
    setThemeMode({...oldTheme, isDarkMode: !oldTheme.isDarkMode})
  };

  return (<>
    <ThemeContext.Provider value={{ ThemeMode, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  </>);
};
export default ThemeProvider;
