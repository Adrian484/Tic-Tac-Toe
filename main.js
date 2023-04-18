let clickCount = 0;
const cells = document.querySelectorAll('table tr td'); 
cells.forEach(cell => {
   cell.addEventListener('click', handleClick) 
})

function handleClick(event) {
const cell = event.target;
if (event.target.textContent === "") {
    clickCount++;
    if  (clickCount % 2 === 1) {
        cell.textContent = 'X';
    }   else {cell.textContent = 'O'};
}
} 