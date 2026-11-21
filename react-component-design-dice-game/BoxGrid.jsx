
import Box from "./Box";
import { useState } from "react";



function BoxGrid(){
    const [boxes ,setBoxes] = useState([false ,false ,false ,false ,false ,false ,false ,false ,false ,])
    const reset = () => setBoxes([false ,false ,false ,false ,false ,false ,false ,false ,false ,])
    const toggleBox = (idx) => {
        setBoxes((pre) =>
            pre.map((boxIsActive,i) => {
                if(i === idx){
                    return !boxIsActive
                } else {
                    return boxIsActive
                }
            })
        )
    }

    return(
        <>
        {boxes.map((b,idx) => 
        <Box key={idx} isActive={b} toggle={() => toggleBox(idx)}/>
        )}

        <button onClick={reset}>リセット</button>
        </>
    )
}

export default BoxGrid;




