let screen = document.querySelector(".screen");

const MULTIPLY = "\u00D7"
const DIVIDE= "\u00F7"
const SUBTRACT= "\u2212"
const ADD= "\u002B"

// Calculator object that keeps track of all calculations.
let calculator = {
    result : "2",
    operator: DIVIDE,
    operand: "0",
}

let clearFunction = () =>{
    calculator.result = "0";
    calculator.operator = undefined;
    calculator.operand = undefined;
    console.log("History cleared");
}

function updateScreen() {
    let str = "";
    str += calculator.result;
    str += ( calculator.operator === undefined) ? "" : calculator.operator;
    str += ( calculator.operand === undefined) ? "" : calculator.operand;
    screen.textContent = str;
}

updateScreen();

let buttonFunc = (e) => {
    
    // Handle all the operations
    if( e.target.dataset.value == "0"){
        if ( calculator.operand !== undefined ){

            let res =operate();
            if (!res){
                setTimeout( () => {
                    clearFunction();
                    updateScreen();
                }, 2000);
                return;
            }
        console.log(e.target.textContent);
        calculator.operator = e.target.textContent;
        }

    }else{
        // handle the rest.
        switch (e.target.id){
            case "clear":
                clearFunction();
                break;
        }
    }
    updateScreen();
}

// fucntion that does the appropriate operation given 2 num and an operator.
function operate(){

    let success = 0;
    let num = Number(calculator.result);
    let num2 = Number(calculator.operand);
    switch (calculator.operator){
        case MULTIPLY:
            let value = num * num2; 
            calculator.result = String(value);
            success = 1;
            break;
        case DIVIDE:
            // check for division by 0
            if( num2 == 0 ){
                calculator.result = "Low IQ move";
                break;
            }
            calculator.result = (num / num2).toFixed(2);
            success = 1;
            break;
        case SUBTRACT:
            calculator.result = String(num - num2);
            success = 1;
            break;
        case ADD:
            calculator.result = String(num + num2);
            success = 1;
            break;
    }

    calculator.operator = undefined;
    calculator.operand = undefined;
    updateScreen();
    return success;
}

// Adding the number buttons
function createButton( text , id, dataValue){
    let button = document.createElement("button");
    button.classList.add("button");
    button.id = id;
    button.textContent = text;
    button.dataset.value = dataValue;
    
    button.addEventListener("click", buttonFunc );
    
    return button;
}

// Adding operation buttons.
let operationBar = document.querySelector(".operationContainer");

let multiplicationButton = createButton(MULTIPLY,"multiply", "0");
let divideButton = createButton(DIVIDE, "divide", "0");
let subtractButton = createButton(SUBTRACT, "subtract", "0");
let addButton = createButton(ADD, "add", "0");

addButton.style.backgroundColor = "red";
addButton.style.flex = "2 1 0%";

operationBar.appendChild(multiplicationButton);
operationBar.appendChild(divideButton);
operationBar.appendChild(subtractButton);
operationBar.appendChild(addButton);



let numberPad = document.querySelector(".numberContainer");

function createRowAndAddButtons( ele1,id1, ele2, id2, ele3, id3){

    let row = document.createElement("div");
    row.classList.add("numberRow");

    let button1 = createButton(ele1, id1, "1");
    let button2 = createButton(ele2, id2, "1");
    let button3= createButton(ele3, id3, "1");

    row.appendChild(button1);
    row.appendChild(button2);
    row.appendChild(button3);

    return row;
}

numberPad.appendChild(
    createRowAndAddButtons("AC", "clear" , "%" , "modulo", "\u232B", "backspace")
);
numberPad.appendChild(
    createRowAndAddButtons("1", "one", "2" , "two", "3", "three")
);
numberPad.appendChild(
    createRowAndAddButtons("4", "four", "5", "five", "6", "six")
);
numberPad.appendChild(
    createRowAndAddButtons("7", "seven", "8", "eight", "9", "nine")
);
numberPad.appendChild(
    createRowAndAddButtons("0", "zero", ".", "decimal", "\u003D", "equal")
);
