import React from "react";
import "./Box.css"
/**
 * Component box
 * Props: color, width, height
 * Inherited func: removeBox - removes box when button clicked
 */
function Box({color, width, height, removeBox}) {
    return (
    <div className="Box-group">
        <div className="Box" style = {{backgroundColor: color, 
                    width: `${width}px`,
                    height: `${height}px`}}>
        </div>
        <button className="Box-btn" onClick ={removeBox}>X</button>
    </div>
    )
}

export default Box;