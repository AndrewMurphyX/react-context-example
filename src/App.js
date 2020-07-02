import React, { useState } from 'react';
import './App.css';
import { ThemeContext } from './ThemeContext'
import Toolbar from './Toolbar'
import Sun from './Sun'
import NightSky from './NightSky.jsx'

function App() {

  const themes = {
    light: {
      foreground: '#2EB5E5',
      background: '#fff'
    },
    dark: {
      foreground: '#fff',
      background: '#000'
    }
  }

  const [ darkTheme, setDarkTheme ] = useState(true)

  const toggleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  return (
    <ThemeContext.Provider value={{color: darkTheme ? themes.dark : themes.light, themeColor: darkTheme,  toggleTheme: toggleTheme}}>
        <div className="App" style={{background: darkTheme ? themes.dark.foreground : themes.light.foreground}}>
          {
            darkTheme &&
            <NightSky />
          }
          {
            !darkTheme &&
            <Sun />
          }

          <Toolbar/>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
