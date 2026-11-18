import { useState } from "react"
import './ColorBox.css';     


export default function ColorBox ({color , colors}){
    const [ defaultColor, setdefaultColor] = useState(color)
    const changeColor = () => {
        const num = Math.floor(Math.random() * colors.length);
        setdefaultColor(colors[num])
    }
    return (
        <button 
        className="colorBox"
        type="button" 
        style={{backgroundColor:defaultColor}}
        onClick={changeColor}
        >
            {color}
        </button>
            )
        }