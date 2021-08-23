const clear = document.getElementById('clear')
const container = document.getElementById('container')


function makeRows(rows, columns){
    // container.style.setProperty('--grid-rows',rows)
    // container.style.setProperty('--grid-columns',columns)
        for( i = 0; i < (rows * columns); i++){
            let cell =  document.createElement('div');
                //cell.innerText = (i + 1)
                    container.appendChild(cell).className = 'grid-item'
        };
};

makeRows(16,16)

let boxes= Array.from(document.getElementsByClassName('grid-item'))
    boxes.forEach(cel => cel.addEventListener('mouseenter', hovering));

function hovering(e){
    e.target.style.cssText = 'background-color: purple; transition: .7s'
}
clear.addEventListener('click', clearing)

    function clearing(){
        boxes.forEach(cel => cel.style.cssText = 'background-color: white')
    }