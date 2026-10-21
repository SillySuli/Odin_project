const container = document.getElementById("container");

function createGrid ( num ){

    container.replaceChildren();
    const size = 1024/num;
    for ( let i = 0; i < (num**2); i ++ ){
        const div = document.createElement("div");
        div.classList.add("gridSquare");
        div.style.height = `${size}px`;
        div.style.width= `${size}px`;
        container.appendChild(div);

        div.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "black";
        });
    }
}
createGrid(16)

const btn = document.querySelector(".squareButton");
btn.addEventListener("click", () => {
    let input = Number(prompt("What size should you grid be"));
    createGrid(Math.min(input, 100));
});

