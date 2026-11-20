
import { useState } from "react"


export default function ScoreKeeper({numPlayers ,target}){
    const [scores ,setScores] = useState(() =>
    new Array(numPlayers).fill(0)
)

    const addScore = (index) => {
        setScores (prev => 
            prev.map((score,i) => 
                 i === index ?score + 1 : score 
        ));
        
    }

    return (
        <>
        <h1 >ScoreKeeper</h1>
        <ul>
            {
                scores.map((score ,i) => {
                    return(
                        <li key={i}>Player{i + 1}: {score}
                            <button onClick={() => addScore(i)} disabled={score >= target}>+1</button>
                            {score === target ? " WINNER!" : null}
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
}



