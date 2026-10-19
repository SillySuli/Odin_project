const uoList = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

const submitButtonResponse = (e) => {

    e.preventDefault();
    
    // Store the current input, and then clear the input buffer.
    let value = input.value;
    input.value = "";

    // Create the necessary elements and add it to the List.
    const liElement = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("Button");

    liElement.appendChild(span);
    liElement.appendChild(delBtn);
    span.textContent = value;
    delBtn.textContent = "delete";

    uoList.appendChild(liElement);

    delBtn.addEventListener("click", () => {
        uoList.removeChild(liElement);
    })
    
    input.focus();
}

btn.addEventListener("click", submitButtonResponse);
