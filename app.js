/*  A simple Tic-Tac-Toe game implemented in Javascript V8 3.14.5.9

Execute using NodeJS

Players 'X' and 'O' take turn inputing their position on the command line using numbers 1-9

1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9

*/


// prompt for nodejs is required: https://github.com/flatiron/prompt
// npm install prompt
var prompt = require('prompt');

var board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
};

markBoard = (position, mark) => {
    board[position] = mark.toUpperCase();
    console.log('\n' +
        ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
        ' ---------\n' +
        ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
        ' ---------\n' +
        ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');
}

validateMove = (position) => {
    if (board[position] === ' ')
      return true
    else
      return false
}


checkTie = () => {
    for (var i = 1; i <= Object.keys(board).length; i++) {
        if (board[i] === ' ') {
            return false;
        }
    }
    return true;
}

playTurn = (player) => {

    console.log('Your turn player: ' + player);
    prompt.start();
    prompt.get(['position'], function (err, result) {

        if (validateMove(result.position) === true) {
            markBoard(result.position, player);
            if (checkTie() === true) {
                console.log('Tie Game');
                return;
            }
            if (player === 'X') {
                playTurn('O');
            } else {
                playTurn('X');
            }
        } else {
            console.log('incorrect input please try again...');
            playTurn(player);
        }
    });
}

console.log('Game started: \n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');

playTurn('X');
