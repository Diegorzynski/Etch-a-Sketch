const container = document.getElementById('container')

function makeRows(rows, columns){
    container.style.setProperty('--grid-rows',rows)
    container.style.setProperty('--grid-columns',colmns)
        for( i = 0; i < (rows * columns); i++){
            let cell =  document.createElement('div');
                cell.innerText = (i + 1)
                    container.appendChild(cell).className = 'grid-item'
        };
};

makeRows(16,16)