"use strict"

const btnContainer = document.querySelector('.buttons');
const rezaltBlock = document.querySelector('.rezalt-block');
const form = document.querySelector('.form');


btnContainer.addEventListener('click',(event) => {
    if (event.target !== btnContainer) {
        // const firstNum = Number(document.querySelector('.firstNum').value);
        // const secondNum = Number(document.querySelector('.secondNum').value);
        // const numberAfterComa = Number(document.querySelector('.numberAfterComa').value);
        const valueIputs = getValue();
        const firstNum = valueIputs[0];
        const secondNum = valueIputs[1];
        const numberAfterComa = valueIputs[2];

        const btn = event.target;
        const mathSymbol = btn.dataset.simbol;
        const rezalt = mathOperation(firstNum, secondNum, mathSymbol);
    
        showRezalt(rezalt,numberAfterComa); 
        
    }
})

const mathOperation = (firstNum, secondNum, symbol) => {
    switch (symbol) {
        case 'plus':
            return firstNum + secondNum;
        case 'minus':
            return firstNum - secondNum;
        case 'multiply':
            return firstNum * secondNum;
        case 'divide':
            return firstNum / secondNum;
        case 'squaring':
            return Math.pow(firstNum, secondNum);
        case 'square':
            return Math.pow(firstNum, 1 / secondNum) // Так себе выход из ситуации
    }
}

const showRezalt = (rezalt, numberAfterComa)=>{
    if (numberAfterComa < 0 || numberAfterComa > 20 ) {
        numberAfterComa = 0;
    }

    rezaltBlock.innerHTML = rezalt.toFixed(numberAfterComa)
}

const getValue = () => {  //Новый метод, добавил последним 
    const formData = new FormData(form);
    let value= [];
    value.push(Number(formData.get('firstNum')));
    value.push(Number(formData.get('secondNum')));
    value.push(Number(formData.get('numberAfterComa')));

    return value;    
}