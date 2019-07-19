var answerNumber = Math.floor(Math.random()*100) + 1;
var guessHistory = document.querySelector('.guessHistory');
var yesOrNo = document.querySelector('.yesOrNo');
var highOrLow = document.querySelector('.highOrLow');
var guessButton = document.querySelector('.guessButton');
var guessForm = document.querySelector('.guessForm');
var guessCount = 1;

function checkYourNumber() {
    var userGuess = Number(guessForm.value);

    if(guessCount === 1) {
        guessHistory.textContent = '입력한 숫자들 :';
    }

    if (1 <= userGuess && userGuess <= 100) {

    guessHistory.textContent += userGuess + ' ';

    if (userGuess === answerNumber) {
        yesOrNo.textContent = '축하합니다! 정답입니다!';
        yesOrNo.style.backgroundColor = 'green';
        highOrLow.textContent ='';
        setGameOver();
    } else if (guessCount === 10) {
        yesOrNo.textContent = '!!!게임오버!!!';
        highOrLow.textContent = '';
        setGameOver();
    } else {
        yesOrNo.textContent = '틀렸습니다';
        yesOrNo.style.backgroundColor = 'red';
        if (userGuess < answerNumber) {
            highOrLow.textContent = '정답은 더 큽니다';
        } else if(userGuess > answerNumber) {
            highOrLow.textContent = '정답은 더 작습니다';
        }
    }

    guessCount++;
} else{
    highOrLow.textContent = '1이상 100이하의 숫자만 입력해주세요';
    highOrLow.style.backgroundColor = 'red';
}

//미입력시 null값을 geussForm.value에서 체크 : 카운트안됨
if (guessForm.value == "" || guessForm.value == null){
    highOrLow.textContent = '아무것도 입력되지 않았습니다.';
    highOrLow.style.backgroundColor = 'red';
    guessForm.focus();
}

//숫자가 아닐경우 숫자 입력 요구
if (isNaN(userGuess) === true){
    highOrLow.textContent = '숫자만 입력해주세요';
    highOrLow.style.backgroundColor = 'red';
    guessForm.focus();
}

    guessForm.value = '';
}



guessButton.addEventListener('click', checkYourNumber);

var restartButton;

function setGameOver() {
    guessForm.disabled = true;
    guessButton.disabled = true;
    restartButton = document.createElement('button');
    restartButton.textContent = '새 게임 시작하기';
    document.body.appendChild(restartButton);
    restartButton.addEventListener('click', restartGame);
}


function restartGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultDiv p');
    for (var i=0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    restartButton.parentNode.removeChild(restartButton);
    guessForm.disabled = false;
    guessButton.disabled = false;
    guessForm.value = '';
    guessForm.focus();
    yesOrNo.style.background = 'white';
    answerNumber = Math.floor(Math.random() * 100) + 1;
}