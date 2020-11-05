function add(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}

function operation(firstnumber,firstoperation,secondnumber){
    if(firstoperation=='+'){return add(firstnumber,secondnumber)}
    if(firstoperation=='-'){return subtract(firstnumber,secondnumber)}
    if(firstoperation=='*'){return multiply(firstnumber,secondnumber)}
    if(firstoperation=='/'){return divide(firstnumber,secondnumber)}
    else alert('EHHHH')
}

let container = document.querySelector('#container')
let divs = container.querySelectorAll('div')
divs.forEach((div)=>{
    div.setAttribute('id','decorations')
    //div.classList.add('keys')
})

// For number keys only, click and it goes to display board, using (+=) so it doesn't refresh everytime you click numbers
let numbers = document.querySelectorAll('.number')
let firstnumber = 0 //Instantiating value of 0 for making the variable
let secondnumber = 0;
numbers.forEach((key)=>{
    key.addEventListener('click',(e)=>{
        if(secondoperation){
            displayBoard.textContent='';
            displayBoard.textContent += e.target.textContent;
            play.textContent += e.target.textContent;
            secondnumber = Number(displayBoard.textContent);
            firstoperation=secondoperation 
        }
        else{
        if(!firstoperation){
        displayBoard.textContent += e.target.textContent;
        firstnumber = Number(displayBoard.textContent)
        play.textContent += e.target.textContent;} // this would work before we press the operation key
        else{        
        displayBoard.textContent += e.target.textContent;
        secondnumber = Number(displayBoard.textContent);   
        play.textContent += e.target.textContent; 
        }   }      
    })
})

// Display setup
let displayBoard = document.querySelector('#displayboard')

//Operation
let operations = document.querySelectorAll('.operation')
let firstoperation;
let secondoperation;
operations.forEach((operational)=>{
    operational.addEventListener('click',(e)=>{
        if(!secondnumber){
            displayBoard.textContent='';
            firstoperation=e.target.textContent; 
            play.textContent += e.target.textContent;
        }
        if(secondnumber){
            secondoperation = e.target.textContent
            play.textContent += e.target.textContent;
            displayBoard.textContent=operation(firstnumber,firstoperation,secondnumber)
            firstnumber = Number(displayBoard.textContent)                        
            secondnumber = undefined;
        }
    })
})

// work done for now
let returnValue = document.querySelector('.return')
returnValue.addEventListener('click',()=>{
    displayBoard.textContent=operation(firstnumber,firstoperation,secondnumber);
    firstnumber = Number(displayBoard.textContent)
    secondnumber=0;
    play.textContent += '=';
})


//Reset button
let Clear = document.querySelector('.clear')
Clear.addEventListener('click',()=>{
    firstnumber=0;
    secondnumber=0;
    firstoperation=undefined;
    secondoperation=undefined;
    displayBoard.textContent=''
    play.textContent=''
})

//display whatever you pressed so far
let play = document.querySelector('#playboard')
