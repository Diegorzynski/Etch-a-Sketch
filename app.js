const clear = document.getElementById('clear')
const container = document.getElementById('container')


makeRows(16)



function getSize(){
    let size = parseInt(prompt('Please enter the number of columns and rows.'))
       return makeRows(size)
};

function makeRows(size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    // container.style.cssText = `width: 500/${size}`
    // container.style.cssText = `height: 500/${size}`
    
    console.log(size)
    
    for( i = 0; i < size * size; i++) {
        let cell =  document.createElement('div');
            cell.className = 'grid-item'
                container.appendChild(cell);
       }
    };
   

let boxes= Array.from(document.getElementsByClassName('grid-item'))
    boxes.forEach(cel => cel.addEventListener('mouseenter', hovering));

function hovering(e){
    e.target.style.cssText = 'background-color: purple; transition: .7s'
}

clear.addEventListener('click', clearing)

    function clearing(){
        boxes.forEach(cel => cel.style.cssText = 'background-color: white');
         container.textContent = '';
         getSize()
        }
        
       
    

        