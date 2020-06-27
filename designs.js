// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


function makeGrid() {
// Your code goes here!
    const canvas = document.querySelector("#pixelCanvas");
    let height = document.querySelector("#inputHeight").value;
    let width = document.querySelector("#inputWidth").value;
    canvas.innerHTML = "";
    for(var i = 0; i < height; i++){
        const rows = document.createElement("tr");
        canvas.appendChild(rows);
        for ( var j = 0; j < width; j++){
            const colums = document.createElement("td");
            rows.appendChild(colums);
            colums.addEventListener("click", function(){
                let color = document.querySelector("#colorPicker").value;
                colums.style.backgroundColor = color;
            })
        }
    }
}
const pickSize = document.querySelector("#submit");
pickSize.addEventListener("click", function(event){
    event.preventDefault();
    makeGrid();
});