// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const para = document.createElement("p");
para.classList.add("red");
para.textContent = "Hey I'm red!";

const heading3 = document.createElement("h3");
heading3.classList.add("blue");
heading3.textContent = "I'm a blue h3!";

container.appendChild(content);
container.appendChild(para);
container.appendChild(heading3);

// change color
const red = document.querySelector(".red");
red.style.color = "red";

const blue = document.querySelector(".blue");
blue.style.color = "blue";


// adding a div with border box and a pink background.
const pinkBorderedDiv = document.createElement("div");
pinkBorderedDiv.classList.add("borderedPink");

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div";

const para1 = document.createElement("p");
para1.textContent = "ME TOO!";

pinkBorderedDiv.appendChild(heading1);
pinkBorderedDiv.appendChild(para1);
container.appendChild(pinkBorderedDiv)

const borderedPink = document.querySelector(".borderedPink");
borderedPink.style.backgroundColor = "pink";
borderedPink.style.border = "solid black 10px";


