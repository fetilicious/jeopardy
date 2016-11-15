var cells;
var score1 = 0;
var score2 = 0;
var score3 = 0;
function init(){
    console.info("intialized");
    
    cells = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ];
    
    score1 = 0;
    score2 = 0;
    score3 = 0;
    
    document.getElementById('score1').innerHTML = score1;
    document.getElementById('score2').innerHTML = score2;
    document.getElementById('score3').innerHTML = score3;
}

function questionSelect(row, column) {
    var identifier = "c" + row + "_" + column;
    console.info(identifier);    
    document.getElementById(identifier).style.opacity = 0;
    
    if (row === 1 && column === 1){
        document.getElementById('question').innerHTML = 'Question number 1';
        document.getElementById('answer').innerHTML = 'Answer number 1';
    }
    else if (row === 2 && column === 1){
        document.getElementById('question').innerHTML = 'Question number 2';
        document.getElementById('answer').innerHTML = 'Answer number 2';
    }
    
    
    document.getElementById('gamequestionbox').style.opacity = 1;
    document.getElementById('gamequestionbox').style.zIndex = 100;
}

function closeQuestion() {
    document.getElementById('gamequestionbox').style.opacity = 0;
    document.getElementById('gamequestionbox').style.zIndex = -100;
    document.getElementById('answer').style.opacity = 0;
}

function showAnswer() {
    document.getElementById('answer').style.opacity = 1;
}

function increaseScore(player) {
    if (player === 1){
        score1 = score1 + 100;
        document.getElementById('score1').innerHTML = score1;
    }
    else if (player === 2){
        score2 = score2 + 100;
        document.getElementById('score2').innerHTML = score2;
    }
    else if (player === 3){
        score3 = score3 + 100;
        document.getElementById('score3').innerHTML = score3;
    }
}

function decreaseScore(player) {
    if (player === 1){
        score1 = score1 - 100;
        document.getElementById('score1').innerHTML = score1;
    }
    else if (player === 2){
        score2 = score2 - 100;
        document.getElementById('score2').innerHTML = score2;
    }
    else if (player === 3){
        score3 = score3 - 100;
        document.getElementById('score3').innerHTML = score3;
    }
}