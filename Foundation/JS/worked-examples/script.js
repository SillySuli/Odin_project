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

// DOM minuplation exercises from MDN
const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const para2 = document.createElement("p");
para2.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para2);

const text = document.createTextNode(
" - the premier source for web development knowledge.",
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// Array Method exercises
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

let getAverageAge = (arr) =>{
    
    let sum = 0;
    for ( let ob in arr){
        sum += ob.age;
    }
    
    return sum/3;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById( users ){
    
    let userById = {};
    for ( let items in users){
        userById[items.id] = items;
    }

    return userById;
}


function groupById2( users ){
    return users.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {});
}

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/



