import React, { useState } from 'react';
import './App.css';
import { ThemeContext } from './ThemeContext'
import Toolbar from './Toolbar'

function App() {

  const themes = {
    light: {
      foreground: '#000',
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
    <ThemeContext.Provider value={{color: darkTheme ? themes.light : themes.dark, themeColor: darkTheme,  toggleTheme: toggleTheme}}>
        <div className="App" style={{background: darkTheme ? themes.light.foreground : themes.dark.foreground}}>
          <Toolbar/>
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
