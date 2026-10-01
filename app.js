


const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winningScoreSelect = document.querySelector("#winningScore");


let p1Score = 0;
let p2Score = 0;




resetButton.addEventListener("click",function(){
    p1Score = 0;
    p2Score = 0;
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Display.innerText = p1Score;
    p2Display.innerText = p2Score;
})



p1Button.addEventListener("click",function(){
    p1Score ++;
    p1Display.innerText = p1Score;
    if (p1Score  === parseInt(winningScoreSelect.value)) {
        alert("終了です")
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
    p1Display.innerText = p1Score
})
p2Button.addEventListener("click",function(){
    p2Score ++;
    p2Display.innerText = p2Score;
    if (p2Score ===  parseInt(winningScoreSelect.value)) {
        alert("終了です")
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
    p2Display.innerText = p2Score;
})































































