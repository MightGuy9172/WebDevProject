
//function for display message
function displaymsg(msg){
    document.querySelector('.txt').textContent = msg;
}

//variable of highest score
let highScore =0;

//variable storing no of guesses Left
let score=Number(document.querySelector('.guessLeft').textContent);

//variable storing correct guess
let correctGuess=Math.trunc(Math.random()*20+1);
//Event when guess iss clicked
document.querySelector('.btn').addEventListener('click', function(){
    //taking input as number form
    let guess =Number(document.querySelector('#guess').value);
    //checking if input is valid or not
    if(!guess){
displaymsg('Enter a valid guess')
    }//checking if input is correct
    else if(guess===correctGuess){
        displaymsg('🥳Correct Guess');
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.box').textContent=correctGuess;
        if(score>highScore){
            highScore=score;
            document.querySelector('.highScore').textContent=highScore;
        };
        document.querySelector('.answer').style.width='200px'; 

    }//checking if input is not correct
    else if(guess!==correctGuess){
        if(score>1){
            displaymsg(guess>correctGuess?'⬆️ Too High':'⬇️ Too Low');
            score--;
            document.querySelector('.guessLeft').textContent=score;
           
    }//checking if input is invalid
    else{
        displaymsg('🏃‍♂️Try again');
        document.querySelector('.guessLeft').textContent=0;
        document.querySelector('body').style.backgroundColor='red';
        document.querySelector('.box').textContent=correctGuess;
    }
    }
    
});

//event for resetting
document.querySelector('.again').addEventListener('click', function(){
displaymsg('Start Guessing...')
score=10;
correctGuess=Math.trunc(Math.random()*20+1);
document.querySelector('.guessLeft').textContent=score;
document.querySelector('body').style.backgroundColor='black';
document.querySelector('.box').textContent='?';
document.querySelector('#guess').value='';
document.querySelector('.answer').style.width='100px'; 
});