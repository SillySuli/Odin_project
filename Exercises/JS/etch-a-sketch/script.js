const container = document.getElementById("container");

function createGrid ( num ){

    container.replaceChildren();
    const size = 1024/num;
    for ( let i = 0; i < (num**2); i ++ ){
        const div = document.createElement("div");
        div.classList.add("gridSquare");
        div.style.height = `${size}px`;
        div.style.width= `${size}px`;


        // Randomizing colour
        let red = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);

        div.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`; 
        div.style.opacity = 0;
        container.appendChild(div);

        div.addEventListener("mouseenter", (e) => {
            const curOpacity = Number(e.target.style.opacity);
            e.target.style.opacity = Math.min( curOpacity + 0.1, 1);
        });
    }
}
createGrid(16)

const btn = document.querySelector(".squareButton");
btn.addEventListener("click", () => {
    let input = Number(prompt("What size should you grid be"));
    createGrid(Math.min(input, 100));
});

