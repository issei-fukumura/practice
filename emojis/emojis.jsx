import { v4 as uuid } from 'uuid';
import { useState } from "react"

const randomEmojis = ["✌️", "😂","😒","😜","😎","👀","😇"]

export default function EmojisGame() {
    const [emojis, setEmojis] = useState([])
    const addHappy = (happyEmoji) =>
        setEmojis((prev) => [...prev, { id: uuid(), emoji: happyEmoji }])
    const addSad = (sadEmoji) =>
        setEmojis((prev) => [...prev, { id: uuid(), emoji: sadEmoji }])
    const addRandom = () => {
        const randomNum = Math.floor(Math.random() * randomEmojis.length)
        setEmojis((prev) => [...prev, { id: uuid(), emoji: randomEmojis[randomNum]}])
    }
    const removeEmoji = (i) =>
        setEmojis((prev) => prev.filter((item) => item.id !== i))

    const removeAll = () => setEmojis([])



    return (
        <>
            <h1>EmojisGame</h1>
            {
                emojis.map((e) =>
                    <span key={e.id} onClick={() =>removeEmoji(e.id)}>{e.emoji}</span>
                )
            }
            <button onClick={() => addHappy("😁")}>😁を追加</button>
            <button onClick={() => addSad("😭")}>😭を追加</button>
            <button onClick={addRandom}>ランダムボタン</button>
            <button onClick={removeAll}>全消去</button>

        </>
    )
}

