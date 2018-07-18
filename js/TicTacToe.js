var cells = document.querySelectorAll(".TicTacToeCell");
var count = 0;
cells.forEach((cell) => {
    cell.onclick = function() {
        var cont = cell.classList.contains('Tic');
        if (count == 1 && cont != true) {
            cell.classList.remove('TicTacToeCell');
            cell.classList.add('Tac');
            count = 0;
        } else {
            cell.classList.remove('TicTacToeCell');
            cell.classList.add('Tic');
            count = 1;
        }
        console.log(count);
    }
});