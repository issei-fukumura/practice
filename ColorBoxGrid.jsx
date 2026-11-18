import ColorBox from "./ColorBox";
import './ColorBoxGrid.css';     


export default function ColorBoxGrid({colors}){
    return(
        <div className="colorBoxGrid">
            {colors.map((color) => {
            return(
                <ColorBox color={color} colors={colors} key={color} />
            )
        })}
        </div>
        
    )
}



