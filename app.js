
const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display"),
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display"),
}

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#winningScore");


function reset(){
    for (const p of [p1,p2]) {
         p.score = 0;
         p.button.disabled = false;
         p.display.innerText = p.score;
    }
}

function upDateScore(player , opponent){
    player.score ++;
    player.display.innerText = player.score;
    if (player.score  === parseInt(winningScoreSelect.value)) {
        alert("終了です")
        player.button.disabled = true;
        opponent.button.disabled = true;
    }
} 

p1.button.addEventListener("click",function(){
    upDateScore(p1,p2);
})

p2.button.addEventListener("click",function(){
    upDateScore(p2,p1);
})

resetButton.addEventListener("click",reset);

winningScoreSelect.addEventListener("change",reset);







