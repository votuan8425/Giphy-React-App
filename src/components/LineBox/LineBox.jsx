import React from 'react'
import './LineBox.css'
const LineBox = () => {
    const getColoredBorders = () => {
        const colors = ["purple", "sunshine", "bluepurple", "turqoise"];
        let randomIndex = Math.floor(Math.random() * 4) + 0;
        return colors[randomIndex];
    }
    const colorBorders = getColoredBorders();
    return (
        <div div className="line-box">
            <div className={`line-top-${colorBorders}`}></div>
            <div className={`line-middle-${colorBorders}`}></div>
            <div className={`line-bottom-${colorBorders}`}></div>
        </div>
    )
}

export default LineBox