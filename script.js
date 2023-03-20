// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    var table = document.getElementById("grid");
    var row = table.insertRow(-1);
    var cellCount = table.rows[0].cells.length;
    for (var i = 0; i < cellCount; i++) {
        var cell = row.insertCell(i);
        cell.innerHTML = "";
    }
}

// Add a column
function addC() {
    var table = document.getElementById("grid");
    var rowCount = table.rows.length;
    for (var i = 0; i < rowCount; i++) {
        var cell = table.rows[i].insertCell(-1);
        cell.innerHTML = "";
    }
}

// Remove a row
function removeR() {
    var table = document.getElementById("grid");
    var rowCount = table.rows.length;
    if (rowCount > 1) {
        table.deleteRow(rowCount - 1);
  }
}

// Remove a column
function removeC() {
    var table = document.getElementById("grid");
    var rowCount = table.rows.length;
    var colCount = table.rows[0].cells.length; // assume all rows have the same number of columns
    if (colCount > 1) { // make sure there's at least one column besides the first
        for (var i = 0; i < rowCount; i++) {
        table.rows[i].deleteCell(colCount - 1);
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
