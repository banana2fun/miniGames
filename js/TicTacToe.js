var cells = document.querySelectorAll(".TicTacToeCell");
var count = 0;
cells.forEach(function (cell) {
    cell.onclick = function () {
        var contTic = cell.classList.contains('Tic');
        var contTac = cell.classList.contains('Tac');
        if (count == 1 && contTic != true) {
            cell.classList.remove('TicTacToeCell');
            cell.classList.add('Tac', 'Full');
            count = 0;
        } else if (count == 0 && contTac != true) {
            cell.classList.remove('TicTacToeCell');
            cell.classList.add('Tic', 'Full');
            count = 1;
        }
        console.log(count);
        winPlayer();
    }
});

function winPlayer() {
    var firstRow = document.querySelectorAll(".firstRow").length;
    var secondRow = document.querySelectorAll(".secondRow").length;
    var trirdRow = document.querySelectorAll(".trirdRow").length;
    var firstRowTic = document.querySelectorAll(".firstRow.Tic").length;
    var secondRowTic = document.querySelectorAll(".secondRow.Tic").length;
    var trirdRowTic = document.querySelectorAll(".trirdRow.Tic").length;
    var firstRowTac = document.querySelectorAll(".firstRow.Tac").length;
    var secondRowTac = document.querySelectorAll(".secondRow.Tac").length;
    var trirdRowTac = document.querySelectorAll(".trirdRow.Tac").length;
    var firstCollumn = document.querySelectorAll(".firstCollumn").length;
    var secondCollumn = document.querySelectorAll(".secondCollumn").length;
    var trirdCollumn = document.querySelectorAll(".trirdCollumn").length;
    var firstCollumnTic = document.querySelectorAll(".firstCollumn.Tic").length;
    var secondCollumnTic = document.querySelectorAll(".secondCollumn.Tic").length;
    var trirdCollumnTic = document.querySelectorAll(".trirdCollumn.Tic").length;
    var firstCollumnTac = document.querySelectorAll(".firstCollumn.Tac").length;
    var secondCollumnTac = document.querySelectorAll(".secondCollumn.Tac").length;
    var trirdCollumnTac = document.querySelectorAll(".trirdCollumn.Tac").length;
    var firstDiagonal = document.querySelectorAll(".firstDiagonal").length;
    var secondDiagonal = document.querySelectorAll(".secondDiagonal").length;
    var firstDiagonalTic = document.querySelectorAll(".firstDiagonal.Tic").length;
    var secondDiagonalTic = document.querySelectorAll(".secondDiagonal.Tic").length;
    var firstDiagonalTac = document.querySelectorAll(".firstDiagonal.Tac").length;
    var secondDiagonalTac = document.querySelectorAll(".secondDiagonal.Tac").length;
    switch (firstRow) {
        case firstRowTic:
            alert('Победил игрок 1', location.reload());
            break;
        case firstRowTac:
            alert('Победил игрок 2', location.reload());
            break;
    }
    switch (secondRow) {
        case secondRowTic:
            alert('Победил игрок 1', location.reload());
            break;
        case secondRowTac:
            alert('Победил игрок 2', location.reload());
            break;
    }
    switch (trirdRow) {
        case trirdRowTic:
            alert('Победил игрок 1', location.reload());
            break;
        case trirdRowTac:
            alert('Победил игрок 2', location.reload());
            break;
    }
    switch (firstCollumn) {
        case firstCollumnTic:
            alert('Победил игрок 1', location.reload());
            break;
        case firstCollumnTac:
            alert('Победил игрок 2', location.reload());
            break;
    }
    switch (secondCollumn) {
        case secondCollumnTic:
            alert('Победил игрок 1', location.reload());
            break;
        case secondCollumnTac:
            alert('Победил игрок 2', location.reload());
            break;
    }
    switch (trirdCollumn) {
        case trirdCollumnTic:
            alert('Победил игрок 1', location.reload());
            break;
        case trirdCollumnTac:
            alert('Победил игрок 2', location.reload());
            break;
    }
    switch (firstDiagonal) {
        case firstDiagonalTic:
            alert('Победил игрок 1', location.reload());
            break;
        case firstDiagonalTac:
            alert('Победил игрок 2', location.reload());
            break;
    }
    switch (secondDiagonal) {
        case secondDiagonalTic:
            alert('Победил игрок 1', location.reload());
            break;
        case secondDiagonalTac:
            alert('Победил игрок 2', location.reload());
            break;
    }
}

