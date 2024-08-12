
let randomNumber = parseInt(Math.random()*100 + 1)
// console.log(randomNumber);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')     //yha pr bhi user input value le skte the , pr bad m liya
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let preGuess = []

let numGuess = 0

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()

        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    });
}

function validateGuess(guess){
    const validGuessMsg=document.querySelector('#validGuessMsg')
    if(guess==='' || isNaN(guess)){
        alert("Please, Enter a valid number")
        // validGuessMsg.appendChild(document.createTextNode('Please, Enter a valid number'))
        // setTimeout(function(){
        //     validGuessMsg.style.display="none"
        // },3000)
    }
    else if(guess<0 || guess>100){
        alert("Please, Enter number between 1 to 100")
    }
    else{
        // preGuess.push(guess)
        if(numGuess=='9'){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage("You guess it right🎉")
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage("Number is too low")
    }
    else{
        displayMessage("Number is too high")
    }
}

function displayGuess(guess){            //celan up guess
    userInput.value = ''
    guessSlot.innerHTML+=`${guess}, `
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled', '')     //user koi input n de paye aur  //sirf diabled bhi likho ge to bhi chalega
    p.innerHTML=`<label><h3 id="newGame">Restart</h3></label>`
    startOver.appendChild(p)
    playGame=false;
    newGame()
}

function newGame(){
    const buttonStart=document.querySelector('#newGame')
    buttonStart.addEventListener("click",function(e){
        // playGame=true   sari value set kr de fir likhege playGame = true

        randomNumber = parseInt(Math.random()*100 + 1)
        numGuess=0
        guessSlot.innerHTML=''
        remaining.innerHTML=`${10-numGuess}`
        userInput.removeAttribute('disabled')
        
        startOver.removeChild(p)    //start new game ko htao
        displayMessage(" ")

        playGame=true;

    })
}