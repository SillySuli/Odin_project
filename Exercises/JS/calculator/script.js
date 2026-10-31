// Adding the number buttons

function createButton( text , id){
    let button = document.createElement("div");
    button.classList.add("button");
    button.id = id;
    button.textContent = text;
    
    return button;
}

// Adding operation buttons.
let operationBar = document.querySelector(".operationContainer");

let multiplicationButton = createButton("\u00D7", "multiply");
let divideButton = createButton("\u00F7", "divide");
let subtractButton = createButton("\u2212", "subtract");
let addButton = createButton("\u002B", "add");

addButton.style.backgroundColor = "red";
addButton.style.flex = "2 1 0%";

operationBar.appendChild(multiplicationButton);
operationBar.appendChild(divideButton);
operationBar.appendChild(subtractButton);
operationBar.appendChild(addButton);

// Adding rest of the buttons
let numberPad = document.querySelector(".numberContainer");
    //let backSpaceButton = createButton(u232B");

function createRow( ele1,id1, ele2, id2, ele3, id3){

    let row = document.createElement("div");
    row.classList.add("numberRow");

    let button1 = createButton(ele1, id1);
    let button2 = createButton(ele2, id2);
    let button3= createButton(ele3, id3);

    row.appendChild(button1);
    row.appendChild(button2);
    row.appendChild(button3);

    return row;
}

numberPad.appendChild(
    createRow("AC", "clear" , "%" , "modulo", "\u232B", "backspace")
);
numberPad.appendChild(
    createRow("1", "one", "2" , "two", "3", "three"));
numberPad.appendChild(createRow("4", "four", "5", "five", "6", "six"));
numberPad.appendChild(createRow("7", "seven", "8", "eight", "9", "nine"));
numberPad.appendChild(createRow("0", "zero", ".", "decimal", "\u003D", "equal"));
