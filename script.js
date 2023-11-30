

let secretNumber = Math.trunc(Math.random() * 100) + 1;

let score = 20;
let lstscore = 0;




document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guessnumber').value);
    if (score === 1) {
        document.querySelector('.message').textContent = '😂 You Lost Game';
        score--;
        document.querySelector('.score').textContent = score;
    } else if (!guess) {
        document.querySelector('.message').textContent = '😂 No Number';
        score--;
        document.querySelector('.score').textContent = score;
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉🎉 Congratulation, Correct Number 🎉🎉';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.check').style.display = 'none';
        document.querySelector('body').style.backgroundColor = '#3B013B';
        document.querySelector('.number').style.width = '200px';
        lstscore = Number(document.querySelector('.highScore').innerHTML);
        if (lstscore < score) {
            document.querySelector('.highScore').textContent = score;
        }

    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = '🏹 Number is Too High';
        score--;
        document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = '🏹 Number is Too Low';
        score--;
        document.querySelector('.score').textContent = score;
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    document.querySelector('.guessnumber').value = '';
    document.querySelector('.message').textContent = 'Start Guessing Now ... ';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#000';
    document.querySelector('.number').style.width = '150px';
    document.querySelector('.check').style.display = 'block';
    score = 20;
    document.querySelector('.score').textContent = score;
})
