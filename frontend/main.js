let gameId;

function setCellEventListeners() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.isEmpty = true;
        cell.addEventListener('click', () => {
            move(cell);
        });
    });
}

function setCellPositions() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.position = [Math.floor(index / 3), index % 3];
    });
}

setCellEventListeners();
setCellPositions();
const loginContainer = document.getElementById('loginContainer');
const choosePlayerContainer = document.getElementById('choosePlayerContainer');
choosePlayerContainer.style.display = 'none';
const gameContainer = document.getElementById('gameContainer');
gameContainer.style.display = 'none';

let player;

const playerXBtn = document.getElementById('playerXBtn');
const playerOBtn = document.getElementById('playerOBtn');
playerXBtn.addEventListener('click', () => {
    player = 'X';
    choosePlayerContainer.style.display = 'none';
    gameContainer.style.display = 'block';
});

playerOBtn.addEventListener('click', () => {
    player = 'O';
    choosePlayerContainer.style.display = 'none';
    gameContainer.style.display = 'block';
});

const board = [r1c1, r1c2, r1c3, r2c1, r2c2, r2c3, r3c1, r3c2, r3c3];
const username = document.getElementById('username');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
    if(username.value !== '') {
        choosePlayerContainer.style.display = 'block';
        loginContainer.style.display = 'none';
    }
})

const restartBtn = document.getElementById('restart');
restartBtn.addEventListener('click', () => {
    location.reload();
})

function move(cell) {
    if(cell.isEmpty) {
        cell.innerText = player;
        cell.isEmpty = false;
        const logToSocket = {
            "gameId": gameId,
            "player": player,
            "position": cell.position
        };
        console.log(logToSocket);
        // socket.emit('move', logToSocket);
    }
    else {
        alert('Already played');
    }
}

