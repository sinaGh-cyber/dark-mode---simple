import React, { useContext, useState } from 'react';
import { createContext } from 'react/cjs/react.development';
import { THEME_TYPE } from '../constants';

const ThemeContext = createContext(undefined);

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(THEME_TYPE.LIGHT);
  const toggleThemeMode = () => {
    setThemeMode((old) =>
      old === THEME_TYPE.LIGHT ? THEME_TYPE.DARK : THEME_TYPE.LIGHT
    );
  };
  return (
    <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => useContext(ThemeContext);
export default ThemeProvider;
export { useTheme, ThemeContext };
