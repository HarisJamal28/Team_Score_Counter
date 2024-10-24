var Left = document.getElementById('Left_Score');
var Right = document.getElementById('Right_Score');
var Button = document.getElementById('Logo');

var Badmenton = document.getElementById('Badmentan');
var UFC = document.getElementById('UFC');

flag = true;

var score1 = 0;
var score2 = 0;

Left.innerHTML = score1;
Right.innerHTML = score2;

function IncrementLeft(){
    score1++;
    Left.innerHTML = score1;
    // console.log(score1);
}
function DecrementLeft(){
    if(score1==0){
        return;
    }else{
    score1--;
    Left.innerHTML = score1;
    // console.log(score1);
    }
}

function IncrementRight(){
    score2++;
    Right.innerHTML = score2;
    // console.log(score2);
}

function DecrementRight(){
    if(score2==0){
        return;
    }else{
    score2--;
    Right.innerHTML = score2;
    // console.log(score2);
}
}

function Reset(){
    score1=0;
    score2=0;
    Left.innerHTML = score1;
    Right.innerHTML = score2;
}


function Switch(){
    flag = !flag;
    if(!flag){
        Badmenton.style.display = "none";
        UFC.style.display = "block";
        // body.style.backgroundColor = 
    }else{
        Badmenton.style.display = "block";
        UFC.style.display = 'none';
    }
}

function saveScores() {
    const scoreData = {
        leftScore: score1,
        rightScore: score2,
        date: new Date().toISOString().split('T')[0]
    };

    let savedScores = JSON.parse(localStorage.getItem('savedScores')) || [];
        savedScores.push(scoreData);
    localStorage.setItem('savedScores', JSON.stringify(savedScores));
    displayScores();
}


function displayScores() {
    const savedScores = JSON.parse(localStorage.getItem('savedScores')) || [];
    const tbody = document.querySelector('table tbody');
        tbody.innerHTML = '';
    savedScores.forEach(score => {
        const row = `<tr>
                        <td>${score.leftScore}</td>
                        <td>${score.rightScore}</td>
                        <td>${score.date}</td>
                    </tr>`;
        tbody.innerHTML += row;
    });
}


function FullReset() {
    localStorage.clear();
    score1 = 0;
    score2 = 0;
    Left.innerHTML = score1;
    Right.innerHTML = score2;
    displayScores();
}

window.onload = displayScores;