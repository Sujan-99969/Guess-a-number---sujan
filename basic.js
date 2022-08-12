// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86,52]
// let tips =[];
// let totals = [];


// function calcTip(bill) {
// for( let i=0; i < bill.length;i++){
//         tips.push(Math.floor(Math.random()*15)+1)
//        totals.push(bills[i]+tips[i])
// }
// }

//  console.log(bills);
//  console.log(tips);
//  console.log(totals);

// // // }
// // // calcTip(bills);

// // // const person1 = {
// // //     fullName : "Mark Mille",
// // //     mass :29,
// // //    height :1.73
// // // }
// // // const person2 = {
// // //     fullName : "John Smith",
// // //     mass :29,
// // //    height :1.73
// // // }

// // // // calcBMI();


// // let score = 0;

// // // const userAnswer = prompt("what is the capital of india")

// // // function userAnswer (question,answer){
// // //     const userAnswer = prompt(question)

// // //     if(userAnswer === "New Delhi"){
// // //         alert(`you are correct",score : ${score = score+1}`)
    
// // //     }
// // //     else{
// // //         alert(`you are wrong",score : ${score = score-1}`)
    
// // //     }

    
// // // }
// // // userAnswer("what is the capital of india","New Delhi");

// // const capital = [

// // {
// //     question : "India",
// //     answer : "New Delhi"
// // },
// // {
// //     question : "USA",
// //     answer : "Washington"
// // },

// // ]


// // for(i=0 ; i < question.length ; i++){



// // }

// function playGame (user){

// }
// playGame();
// let computerInput  = ""
// let randomNumber = Math.floor(Math.random()*2)

// if(randomNumber === 0) {
//     console.log("Rock");
// }
// else if(randomNumber === 1){
//     console.log("paper");

// }
// else if(randomNumber === 2){
//     console.log("scissor");

// }
// return computerInput 




var randomNumGen = Math.floor(Math.random() * 100) + 1;
var guessbtn = document.getElementById("guessbtn");
var guessinput = document.getElementById("guessinput").value;
// var scoreresult = document.getElementById("scoreresult");
var statusrange = document.getElementById("statusrange");
var chances = document.getElementById("chances");


var guessNum = 1;



function checkGuess() {
    var chances = document.getElementById("chances");
    chances.innerHTML= "Clicked times : " + (guessNum);
    if (guessNum < 10) {
        if (guessinput < randomNumGen) {
            // scoreresult.textContent = `Score is ${randomNumGen}` ;
            statusrange.textContent = "Value is Too Low";
            
            guessNum++;
            guessinput.value = '';
            console.log(randomNumGen);
        }
        else if (userInput > randomNumGen) {
            // scoreresult.textContent = `Score is ${randomNumGen}`;
            statusrange.textContent = "Value is Too High";
            
            guessNum++;
            guessinput.value = '';
        }
        else {
            // scoreresult.textContent = `Score is ${randomNumGen}`;
            statusrange.textContent = "Congratulations!Successfully Guessed the Value";
            
            guessinput.value = '';
            gameOver();
        }
    }
    else {
        debugger;
        statusrange.textContent = "Gameis Over, your chances are over.";
        
        guessinput.value = '';
        gameOver();
    }
}

function gameOver() {
    guessbtn.disabled = true;
    guessinput.disabled = true;
}

function resetGame(){
    statusrange.innerHTML = 'Be a high scorer!!!!'; 
    guessNum = 1;
    guessbtn.disabled = false;
    guessinput.disabled = false;
    chances.innerHTML = 'chances repeats';
}