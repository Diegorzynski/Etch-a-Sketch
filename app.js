const clear = document.getElementById('clear')
const container = document.getElementById('container')
let originalSize = 16;
let boxes = [];
let color_change = document.getElementById('color-change')
color_change.addEventListener('change',changeColor)
let currentColor = `background-color: ${color_change.value}; transition: .7s`

makeRows(originalSize);

function getSize(){
    let newSize = parseInt(prompt('Please enter the number of columns and rows.'))
       return makeRows(newSize)
       
};

function makeRows(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
     
    for( i = 0; i < size * size; i++) {
        let cell =  document.createElement('div');
            cell.className = 'grid-item'
                container.appendChild(cell);
    }
       mousePaint();
    };
  


function mousePaint() {
    boxes = Array.from(document.getElementsByClassName('grid-item'))
    boxes.forEach(cel => cel.addEventListener('mouseenter', hovering));
};

function hovering(e){
    e.target.style.cssText = currentColor;
}

clear.addEventListener('click', clearing)

    function clearing(){
        boxes.forEach(cel => cel.style.cssText = 'background-color: white');
        container.textContent = '';

         getSize();
}



function changeColor(){
    let newColor = color_change.value;

    currentColor = `background-color: ${newColor}; transition: .7s`
}
        
       
    

        