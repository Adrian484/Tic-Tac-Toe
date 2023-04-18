let clickCount = 0;
let gameOver = false;

const cells = document.querySelectorAll('table tr td'); 
cells.forEach(cell => {
   cell.addEventListener('click', handleClick) 
})

function handleClick(event) {
const cell = event.target;
if (event.target.textContent === "") {   ////Checks if box is empty
    clickCount++;                        ////Adds click
    if (clickCount === 9 )               ///If the count of clicks is 9 (9 clicks)
    alert("Stalemate!")                  ///alert - Stalemate
    if  (clickCount % 2 === 1) {         ///If every second click 
        cell.textContent = 'X';          ///Click is X
    }   else {cell.textContent = 'O'};   ///Second click is O
} 
// if (checkForWinner('X')) {
//     alert('X wins!'); 
//     gameOver = true; 
//  } else if (checkForWinner('O')) {
//     alert('O wins!'); 
//     gameOver = true; 
//  } else if (clickCount === 9) { 
//     alert('Stalemate!');
//     gameOver = true;
//  } 
        // 0 3 6
    if (document.querySelectorAll('table tr td')[0].textContent === "X" && 
    document.querySelectorAll('table tr td')[1].textContent === "X" && 
    document.querySelectorAll('table tr td')[2].textContent === "X") { 
        console.log("X Wins! 0 1 2") 
}       // 3 4 5
  else if (document.querySelectorAll('table tr td')[3].textContent === "X" &&
  document.querySelectorAll('table tr td')[4].textContent === "X" && 
  document.querySelectorAll('table tr td')[5].textContent === "X") {
        console.log("X Wins! 3 4 5")
}       // 6 7 8
  else if (document.querySelectorAll('table tr td')[6].textContent === "X" && 
  document.querySelectorAll('table tr td')[7].textContent === "X" &&
  document.querySelectorAll('table tr td')[8].textContent === "X") {
        console.log("X Wins! 6 7 8")
  }     // 0 3 6
  else if (document.querySelectorAll('table tr td')[0].textContent === "X" &&
  document.querySelectorAll('table tr td')[3].textContent === "X" &&  
  document.querySelectorAll('table tr td')[6].textContent === "X") { 
    console.log("X Wins! 0 3 6")
  }
        // 1 4 7
  else if (document.querySelectorAll('table tr td')[1].textContent === "X" &&
    document.querySelectorAll('table tr td')[4].textContent === "X" && 
    document.querySelectorAll('table tr td')[7].textContent === "X") {
        console.log("X Wins! 1 4 7")
  }    // 2 5 8
  else if (document.querySelectorAll('table tr td')[2].textContent === "X" && 
  document.querySelectorAll('table tr td')[5].textContent === "X" && 
  document.querySelectorAll('table tr td')[8].textContent === "X") {
      console.log("X Wins! 2 5 8")
  }    //0 4 8
  else if (document.querySelectorAll('table tr td')[0].textContent === "X" && 
  document.querySelectorAll('table tr td')[4].textContent === "X" && 
  document.querySelectorAll('table tr td')[8].textContent === "X") {
      console.log("X Wins! 0 4 8") 
  } 
       //2 4 6
  else if (document.querySelectorAll('table tr td')[2].textContent === "X" && 
  document.querySelectorAll('table tr td')[4].textContent === "X" && 
  document.querySelectorAll('table tr td')[6].textContent === "X") { 
     console.log("X Wins! 2 4 6")
  } //////////////// O
  else if (document.querySelectorAll('table tr td')[0].textContent === "O" && 
  document.querySelectorAll('table tr td')[1].textContent === "O" && 
  document.querySelectorAll('table tr td')[2].textContent === "O") {
     console.log("O Wins! 0 1 2")
  }
  else if (document.querySelectorAll('table tr td')[3].textContent === "O" &&
  document.querySelectorAll('table tr td')[4].textContent === "O" && 
  document.querySelectorAll('table tr td')[5].textContent === "O") {
     console.log("O Wins! 3 4 5")
  }
  else if (document.querySelectorAll('table tr td')[6].textContent === "O" &&
  document.querySelectorAll('table tr td')[7].textContent === "O" && 
  document.querySelectorAll('table tr td')[8].textContent === "O") {
    console.log("O Wins! 6 7 8")
  }
  else if (document.querySelectorAll('table tr td')[0].textContent === "O" &&
  document.querySelectorAll('table tr td')[3].textContent === "O" && 
  document.querySelectorAll('table tr td')[6].textContent === "O") {
    console.log("O Wins! 0 3 6")
} 
  else if (document.querySelectorAll('table tr td')[1].textContent === "O" &&
  document.querySelectorAll('table tr td')[4].textContent === "O" && 
  document.querySelectorAll('table tr td')[7].textContent === "O") {
    console.log("O Wins! 1 4 7") 
}
  else if (document.querySelectorAll('table tr td')[2].textContent === "O" &&
  document.querySelectorAll('table tr td')[5].textContent === "O" && 
  document.querySelectorAll('table tr td')[8].textContent === "O") {
    console.log("O Wins! 2 5 8")
}
  else if (document.querySelectorAll('table tr td')[0].textContent === "O" &&
  document.querySelectorAll('table tr td')[4].textContent === "O" && 
  document.querySelectorAll('table tr td')[8].textContent === "O") {
    console.log("O Wins! 0 4 8")
}
  else if (document.querySelectorAll('table tr td')[2].textContent === "O" &&
  document.querySelectorAll('table tr td')[4].textContent === "O" && 
  document.querySelectorAll('table tr td')[6].textContent === "O") {
      console.log("O Wins! 2 4 6") 
  
}
}
///['cell0', 'cell1', 'cell2'], ['cell3', 'cell4', 'cell5'],
///['cell6', 'cell7', 'cell8'], ['cell0', 'cell3', 'cell6'],
///['cell0', 'cell4', 'cell8'], ['cell2', 'cell5', 'cell8'],



///['cell0', 'cell4', 'cell8'], ['cell2', 'cell4', 'cell6'],



 
//  function checkForWinner(player) {
//     const winningCombinations = [
//     ['cell0', 'cell1', 'cell2']
//  ];  

  
    /// return winningCombinations.some(combination => {
    ///return combination.every(id => {
    ///const cell = document.getElementById(id);
    ///return cell.textContent === player;

  /// }); 
/// });
/// } 
///}









/* BACKUP CODE IN CASE I MESS EVERTHING UP

 document.querySelectorAll('table tr td')[1].textContent 
This accesses the second box of the grid. I can change the index
number to access the rest of them.*/


/* let clickCount = 0;
const cells = document.querySelectorAll('table tr td'); 
cells.forEach(cell => {
   cell.addEventListener('click', handleClick) 
})

function handleClick(event) {
const cell = event.target;
if (event.target.textContent === "") {
    clickCount++;
    if (clickCount === 9 ) 
    alert("Stalemate!")
    if  (clickCount % 2 === 1) {
        cell.textContent = 'X';
    }   else {cell.textContent = 'O'};
}
} 

*/