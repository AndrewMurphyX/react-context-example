import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


const ThemedButton = () => {
    const theme = useContext(ThemeContext)
    return(
        <>
            <button className="myButton" style={{background: theme.color.background, color: theme.color.foreground}} onClick={theme.toggleTheme}>Toggle Theme</button>
            <p style={{color: theme.color.background}}>{theme.themeColor ? 'Night Time' : 'Sunny Day!!!'}</p>
        </>
    )
}

export default ThemedButton