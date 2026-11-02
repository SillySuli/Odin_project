let screen = document.querySelector(".screen");

const MULTIPLY = "\u00D7"
const DIVIDE= "\u00F7"
const SUBTRACT= "\u2212"
const ADD= "\u002B"

// Calculator object that keeps track of all calculations.
let calculator = {
    result : "0",
    operator: undefined,
    operand: undefined,
}

let clearFunction = () =>{
    calculator.result = "0";
    calculator.operator = undefined;
    calculator.operand = undefined;
    console.log("History cleared");
}

function cleanCalculator(){
    if (calculator.result == ""){
        calculator.result = "0"}
    if (calculator.operator == ""){
        calculator.operator= undefined}
    if (calculator.operand == ""){
        calculator.operand = undefined}
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

    let content = e.target.textContent;
    console.log(content);
    let equalPressed = false;
    // Handle all the operations
    if( e.target.dataset.value == "0"){
        if ( calculator.operand !== undefined ){

            let res = operate();
            if (!res){
                setTimeout( () => {
                    clearFunction();
                    updateScreen();
                }, 2000);
                return;
            }
        } 
        calculator.operator = content;

    }else{
        // handle the rest.
        switch (e.target.id){
            case "clear":
                clearFunction();
                break;
            case "equal":
                if (!operate()){
                    setTimeout( () => {
                        clearFunction();
                        updateScreen();
                    }, 2000);
                    return;
                }
                equalPressed = true;
                break;
            case "backspace":
                if ( calculator.operand !== undefined){
                    calculator.operand = (calculator.operand).slice(0, -1);
                } else if( calculator.operator !== undefined){
                    calculator.operator = undefined;
                } else {
                    calculator.result = calculator.result.slice(0, -1);
                }
                cleanCalculator();
                break;
            case "decimal":
                if (calculator.operator === undefined){
                    if ( calculator.result.includes(".")){
                        break
                    }
                    calculator.result += content;
                } else {
                    if ( calculator.operand.includes(".")){
                        break
                    }
                    calculator.operand += content;
                }
                break;
            default:
                if (calculator.operator === undefined){
                    if(calculator.result == "0"){
                        calculator.result = content;
                    } else {
                        calculator.result += content;
                    }

                } else {

                    if(calculator.operand === "0" || 
                        calculator.operand === undefined){

                        calculator.operand = content;
                    } else {
                        calculator.operand += content;
                    }
                }
                break;
        }
    }
    updateScreen();
    if (equalPressed) clearFunction();
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
                setTimeout( () => {
                    clearFunction();
                    updateScreen();
                }, 2000);
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

function createRowAndAdd2Buttons( ele1,id1, ele2, id2){

    let row = document.createElement("div");
    row.classList.add("numberRow");

    let button1 = createButton(ele1, id1, "1");
    button1.style.flex = "2 1 0%";
    let button2 = createButton(ele2, id2, "1");

    row.appendChild(button1);
    row.appendChild(button2);

    return row;
}

function createRowAndAdd3Buttons( ele1,id1, ele2, id2, ele3, id3){

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
    createRowAndAdd2Buttons("AC", "clear" , "\u232B", "backspace")
);
numberPad.appendChild(
    createRowAndAdd3Buttons("1", "one", "2" , "two", "3", "three")
);
numberPad.appendChild(
    createRowAndAdd3Buttons("4", "four", "5", "five", "6", "six")
);
numberPad.appendChild(
    createRowAndAdd3Buttons("7", "seven", "8", "eight", "9", "nine")
);
numberPad.appendChild(
    createRowAndAdd3Buttons("0", "zero", ".", "decimal", "\u003D", "equal")
);
