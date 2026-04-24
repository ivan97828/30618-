const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
const result = document.querySelector(".result");
const count = document.querySelector(".count");

let answer = Math.floor(Math.random() * 100) + 1;
console.log("答案:", answer);

let countNum = 0;

function checkGuess() {
    const userGuess = Number(guessField.value);

    // 防呆
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        result.textContent = "請輸入 1 到 100 的數字！";
        return;
    }

    countNum++;
    count.textContent = "猜測次數: " + countNum;

    if (answer === userGuess) {
        result.textContent = "🎉 猜對了！";
        endGame();
    } else if (answer < userGuess) {
        result.textContent = "📉 太大了！";
    } else {
        result.textContent = "📈 太小了！";
    }

    // 次數限制
    if (countNum >= 10 && answer !== userGuess) {
        result.textContent = "❌ 遊戲結束！答案是 " + answer;
        endGame();
    }

    guessField.value = "";
    guessField.focus();
}


function endGame() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
}

guessSubmit.addEventListener("click", checkGuess);