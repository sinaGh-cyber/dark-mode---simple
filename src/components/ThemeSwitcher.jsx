// import React, { useContext } from "react";
import { useContext } from 'react/cjs/react.development';
import { THEME_TYPE } from '../constants';
import { ThemeContext, useTheme } from '../providers/ThemeProvider';
const ThemeSwitcher = () => {
  // No need to change *return* part
  // You have to set themeMode based on context
  const { themeMode, toggleThemeMode } = useTheme();

  // const handleThemeChange = (e) => {
  //   toggleThemeMode();
  // };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          checked={themeMode === THEME_TYPE.DARK}
          onChange={toggleThemeMode}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
