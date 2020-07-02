import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


const NightSky = () => {
    const theme = useContext(ThemeContext)
    return(
        <div className="nightsky">
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div class="clouds"></div>
            <div className="moon" onClick={theme.toggleTheme}></div>
        </div>
    )

}

export default NightSky
