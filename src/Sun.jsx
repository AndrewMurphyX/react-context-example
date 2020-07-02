import React, { useContext }  from 'react'
import { ThemeContext } from './ThemeContext'

const Sun = () => {
    const theme = useContext(ThemeContext)
    return (
        <div class="sun">
            <div class="ray_box" onClick={theme.toggleTheme}>
                <div class="ray ray1"></div>
                <div class="ray ray2"></div>
                <div class="ray ray3"></div>
                <div class="ray ray4"></div>
                <div class="ray ray5"></div>
                <div class="ray ray6"></div>
                <div class="ray ray7"></div>
                <div class="ray ray8"></div>
                <div class="ray ray9"></div>
                <div class="ray ray10"></div>
            </div>
        </div> 
    )
}

export default Sun