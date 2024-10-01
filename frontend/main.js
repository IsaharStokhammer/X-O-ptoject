let gameId;

const r1c1 = document.getElementById('r1c1');
r1c1.position =[0,0];
r1c1.isEmpty = true;
r1c1.addEventListener('click', () => {
    move(r1c1);
});
const r1c2 = document.getElementById('r1c2');
r1c2.position =[0,1];
r1c2.isEmpty = true;
r1c2.addEventListener('click', () => {
    move(r1c2);
});
const r1c3 = document.getElementById('r1c3');
r1c3.position =[0,2];
r1c3.isEmpty = true;
r1c3.addEventListener('click', () => {
    move(r1c3);
});

const r2c1 = document.getElementById('r2c3');
r2c1.position =[1,0];
r2c1.isEmpty = true;
r2c1.addEventListener('click', () => {
    move(r2c1);
});
const r2c2 = document.getElementById('r2c2');
r2c2.position =[1,1];
r2c2.isEmpty = true;
r2c2.addEventListener('click', () => {
    move(r2c2);
});
const r2c3 = document.getElementById('r2c1');
r2c3.position =[1,2];
r2c3.isEmpty = true;
r2c3.addEventListener('click', () => {
    move(r2c3);
});

const r3c1 = document.getElementById('r3c1');
r3c1.position =[2,0];
r3c1.isEmpty = true;
r3c1.addEventListener('click', () => {
    move(r3c1);
});
const r3c2 = document.getElementById('r3c2');
r3c2.position =[2,1];
r3c2.isEmpty = true;
r3c2.addEventListener('click', () => {
    move(r3c2);
});
const r3c3 = document.getElementById('r3c3');
r3c3.position =[2,2];
r3c3.isEmpty = true;
r3c3.addEventListener('click', () => {
    move(r3c3);
});

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
