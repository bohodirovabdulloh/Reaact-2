import React, { useState } from 'react';

const ThemeControler = () => {
  const [selectedTheme, setSelectedTheme] = useState('default'); // Default theme selection

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    document.querySelector('html').setAttribute('data-theme', theme); // Update HTML attribute for theme
  };

  return (
    <div className="dropdown mb-5 fixed top-10 right-10">
      <div tabIndex={0} role="button" className="btn m-1 dropdown-toggle btn-info shadow-info shadow-sm text-white">
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl">
        <li>
          <input
            type="radio"
            id="theme-default"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Default"
            value="default"
            checked={selectedTheme === 'default'}
            onChange={() => handleThemeChange('default')}
          />
          <label htmlFor="theme-default">Default</label>
        </li>
        <li>
          <input
            type="radio"
            id="theme-retro"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Retro"
            value="retro"
            checked={selectedTheme === 'retro'}
            onChange={() => handleThemeChange('retro')}
          />
          <label htmlFor="theme-retro">Retro</label>
        </li>
        <li>
          <input
            type="radio"
            id="theme-cyberpunk"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Cyberpunk"
            value="cyberpunk"
            checked={selectedTheme === 'cyberpunk'}
            onChange={() => handleThemeChange('cyberpunk')}
          />
          <label htmlFor="theme-cyberpunk">Cyberpunk</label>
        </li>
        <li>
          <input
            type="radio"
            id="theme-valentine"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Valentine"
            value="valentine"
            checked={selectedTheme === 'valentine'}
            onChange={() => handleThemeChange('valentine')}
          />
          <label htmlFor="theme-valentine">Valentine</label>
        </li>
        <li>
          <input
            type="radio"
            id="theme-aqua"
            name="theme-dropdown"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Aqua"
            value="aqua"
            checked={selectedTheme === 'aqua'}
            onChange={() => handleThemeChange('aqua')}
          />
          <label htmlFor="theme-aqua">Aqua</label>
        </li>
      </ul>
    </div>
  );
};

export default ThemeControler;
