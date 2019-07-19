let main = document.getElementById("main");

function size() {
    let pixels = document.getElementById('pixels').value;
    return pixels;
}

function clearBoxes(){
    while (main.hasChildNodes()) {
        main.removeChild(main.lastChild);
    }
}

function createBoxes(a) {
    console.log(a, size);
    clearBoxes();
    let dimensions = 700/a;
    for (let i=0; i<a; i++) {
        let rows = document.createElement("div");
        rows.className = "rows";
        main.appendChild(rows);
        for (let j=0; j<a; j++) {
            let box = document.createElement("div");
            box.className = "empty";
            box.addEventListener("mouseover", changeColor);
            box.style.height = (dimensions-2) + "px";
            box.style.width = (dimensions-2) + "px";
            rows.appendChild(box);
        }
    }
}

function changeColor() {
    this.style.backgroundColor = "black";
}

createBoxes(30);