const display = document.querySelector('.display');

document.querySelectorAll('.digits button')
    .forEach(button => button.addEventListener('click', digitPressed));

function digitPressed(ev){
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
    .forEach(button => button.addEventListener('click', opersPressed));

function opersPressed(ev){
    display.value += ev.target.innerText;
}

document.querySelector('.point')
    .addEventListener('click', pointPressed);

function pointPressed(ev){
    let operToStr = display.value.replace(/[\+\-\*\/]/g, ' ');
    operToStr = operToStr.split(" ");
    if(!(operToStr.pop().includes('.'))){
    display.value += ev.target.innerText;
}
}


document.querySelector('.eq')
    .addEventListener('click', calculate);

function calculate(){
    display.value = eval(display.value);
}

document.querySelector('.del')
    .addEventListener('click', deleted);

function deleted(){
    display.value = '';
}





