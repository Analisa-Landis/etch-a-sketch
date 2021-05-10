const gridContainer = document.querySelector("#grid-container");
let numOfTimes = 256;
        //let dimension = 10;
        //let numOfCells = dimension**2;
        //root.style.setProperty('--row',(100/dimension) + "%");
    for(let i = 0; i < numOfTimes; i++) {
    const singleCell = document.createElement("div");
     //singleCell.textContent = "hello";
     //singleCell.style.color = "black";
     singleCell.classList.add("bg-red")
     singleCell.addEventListener('mouseover',() => {
        singleCell.classList.add("blue")
    });
    gridContainer.appendChild (singleCell);
}
