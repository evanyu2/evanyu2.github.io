var seats = [];
var rowMax = 5;
var colMax = 9;
var selectSeat = -1;

//雙迴圈產生矩陣    
for (var row = 0; row < rowMax; row++) {
    seats[row] = [];
    for (var col = 0; col < colMax; col++) {
        seats[row][col] = (Math.round(Math.random()) == 1); //利用二微陣列亂數產生座位
    }
}

//上圖 -> True: red; False: gray
function initSeats() {
    for (var row = 0; row < rowMax; row++) {
        for (var col = 0; col< colMax; col++) {
            if (seats[row][col]) {
                document.getElementById("seat" + row + col).src = "seat_avail.png";
            } else {
                document.getElementById("seat" + row + col).src = "seat_unavail.png";
            }
        }
    }
}
    

    
function findSeats() {
    var col = 0;
    var finished = false;
    for (var row = 0; row < rowMax; row++) {
        for (var col = 0; col< colMax; col++) {
            if (seats[row][col] && seats[row][col+1] && seats[row][col+2]) {
                selectSeat = col;
                document.getElementById("seat" + row + col).src = "seat_select.png";
                document.getElementById("seat" + row + (col+1)).src = "seat_select.png";
                document.getElementById("seat" + row + (col+2)).src = "seat_select.png";
                finished = true;
            }
        }
    }    
}

console.log(seats);