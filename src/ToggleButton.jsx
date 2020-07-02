import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


const ToggleButton = () => {
    const theme = useContext(ThemeContext)
    return(
        <>
            <button className="myButton" style={{background: theme.color.background, color: theme.color.foreground}} onClick={theme.toggleTheme}>{theme.themeColor ? 'Swith to light Mode' : 'Switch to Night Mode'}</button>
        </>
    )
}

export default ToggleButton