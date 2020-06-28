
function makeGrid() {

    const canvas = document.querySelector("#pixelCanvas");
    const height = document.querySelector("#inputHeight").value;
    const width = document.querySelector("#inputWidth").value;
    /*The empty string allows the grid to refresh before each new grid submission*/
    canvas.innerHTML = "";
    for(let i = 0; i < height; i++){
        /*This loop creates rows to match the input value */
        const rows = document.createElement("tr");
        canvas.appendChild(rows); 
        for (let j = 0; j < width; j++){
            /*In this for loop we create the boxes for the colums and to each
            we then attach an eventlistener that picks up the color selection*/
            const colums = document.createElement("td");
            rows.appendChild(colums); 
            colums.addEventListener("click", function(){
                const color = document.querySelector("#colorPicker").value;
                colums.style.backgroundColor = color;
            })
        }
    }
}
/*Here we listen for the click on the submit button in order to start the makeGrid function*/
const pickSize = document.querySelector("#submit");
pickSize.addEventListener("click", function(event){
    event.preventDefault();
    makeGrid();
});