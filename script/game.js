let countRandom = 0;
let countQuestion = 0;
let count;
let progress;
let arr = [];


/**
 * Generates random numbers and saves it in array 'arr'.
 * Every number is generated only once.
 * The number of generated numbers is equal to the json 'qAndA' length.
 * If all random numbers are taken alert will be displayed.
 */
function getRandoms() {
    if(arr.length < 1) {
        while(arr.length < qAndA.length){
            var r = Math.floor(Math.random() * qAndA.length);
            if(arr.indexOf(r) === -1) arr.push(r);
        }
    }
    count = arr[countRandom];
    if(countRandom == qAndA.length) {
        alert('Quiz abgeschlossen!');
        count = 0;
    }
    countRandom++;
}

/**
 * Counts questions and displays question.
 * @function getProgress
 * @function getRandoms
 * @function getQandA
 */
function nextQuestion() {
    countQuestion++;
    getProgress();
    getRandoms();
    getQandA();
    document.querySelector('.btn-info').classList.add('d-none');
}

/**
 * Calculates and displays progress.
 */
function getProgress() {
    let progressBar = document.querySelector('.progress-bar');
    progress = countQuestion * 100 / qAndA.length;
    progress = Math.round(progress); 
    progressBar.style.width = `${progress}%`;
    progressBar.innerHTML = `${progress}%`;

}

/**
 * Loads data from json and displays question and possible answers.
 */
function getQandA() {
    document.querySelector('#question').innerHTML = `${qAndA[count].question} ${qAndA[count].country}`;
    document.querySelector('#answerA').innerHTML = `${qAndA[count].answerA}`;
    document.querySelector('#answerB').innerHTML = `${qAndA[count].answerB}`;
    document.querySelector('#answerC').innerHTML = `${qAndA[count].answerC}`;
    document.querySelector('#answerD').innerHTML = `${qAndA[count].answerD}`;
}

/**
 * Displays alert green if the answer is correct and alert red if the answer is wrong.
 * Next question button will be displayed if the answer is correct.
 * @param {string} a 
 */
function answer(a) {
    let chosenAnswer = document.querySelector(`#${a}`);
    if(chosenAnswer.innerHTML == qAndA[count].correctAnswer) {
        document.querySelector('.alert-danger').classList.add('d-none');
        document.querySelector('.alert-success').classList.remove('d-none');
        document.querySelector('.btn-info').classList.remove('d-none');
    } else {
        document.querySelector('.alert-success').classList.add('d-none');
        document.querySelector('.alert-danger').classList.remove('d-none');
    }
}