
let count = 1;


function nextQuestion() {
    document.querySelector('#question').innerHTML = `${qAndA[count].question} ${qAndA[count].country}`;
    document.querySelector('#answerA').innerHTML = `${qAndA[count].answerA}`;
    document.querySelector('#answerB').innerHTML = `${qAndA[count].answerB}`;
    document.querySelector('#answerC').innerHTML = `${qAndA[count].answerC}`;
    document.querySelector('#answerD').innerHTML = `${qAndA[count].answerD}`;
}

function answer(a) {
    let chosenAnswer = document.querySelector(`#${a}`);
    alert(`Du hast ${chosenAnswer.innerHTML} geantwortet`);
    if(chosenAnswer.innerHTML == qAndA[count].correctAnswer) {
        alert('Richtig!');
    } else {
        alert('Falsch!');
    }
}