let main = document.getElementById("main");
let styleSheets = document.styleSheets[0];
let randomColor = false;
console.log(styleSheets.cssRules[4]);

function clearBoxes(){
    while (main.hasChildNodes()) {
        main.removeChild(main.lastChild);
    }
}

function createBoxes() {
    let pixels = Number(document.getElementById('pixels').value);
    clearBoxes();
    let dimensions = 700/pixels;
    for (let i=0; i<pixels; i++) {
        let rows = document.createElement("div");
        rows.className = "rows";
        main.appendChild(rows);
        for (let j=0; j<pixels; j++) {
            let box = document.createElement("div");
            box.className = "empty";
            box.addEventListener("mouseover", changeColor);
            styleSheets.cssRules[2].style.height = (dimensions-2) + "px";
            styleSheets.cssRules[2].style.width = (dimensions-2) + "px";
            rows.appendChild(box);
        }
    }
}

function reset() {
    let colored = document.getElementsByClassName("active");
    colored = Array.prototype.slice.call(colored);
    colored.forEach(element => {
        element.classList.remove("active");
        element.removeAttribute("style");
    });
}

function random() {
    if (!randomColor) {
        randomColor = true;
    }else {
        randomColor = false;
    } 
}

function randomizeColor() {
    let reds = Math.ceil(Math.random()*255);
    let greens = Math.ceil(Math.random()*255);
    let blues = Math.ceil(Math.random()*255);
    return `rgb(${reds},${greens},${blues})`
}

function changeColor() {
    if(!randomColor){
        let color = document.getElementById('color').value;
        this.style.backgroundColor = color;
        this.classList.add("active");
    }else{
        this.style.backgroundColor = randomizeColor();
        this.classList.add("active");
    }
}

createBoxes();