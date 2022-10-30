let fields = [];
let currentShape = 'cross';
let gameOver = false;

function fillShape(id) {

    if (!fields[id] && !gameOver) {     // Ausrufezeichen bewirkt das gegenteil. Das heißt wenn schon ein Wert drin ist wird nichts mehr eingetragen

        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player2').classList.remove('playerInactive');
            document.getElementById('player1').classList.add('playerInactive');



        } else {
            currentShape = 'cross';
            document.getElementById('player2').classList.add('playerInactive');
            document.getElementById('player1').classList.remove('playerInactive');


        }
        fields[id] = currentShape;
        console.log(fields);
        draw();
        checkForWin()
    }
}

function restartGame(){
    gameOver = false;
    fields = [];

    document.getElementById('chessPic').classList.add('d-none');
    document.getElementById('restartButton').classList.add('d-none');
    for (let i = 1; i < 8; i++) {
        document.getElementById('line' + i).classList.add('d-none');
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');

    }
}

function draw() {

    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function checkForWin() {

    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {   //horizontal  Die ersten 4 Abfragen überprüfen ob in den drei Feldern das gleiche Zeichen ist. Die letzte Abfrage überprüft ob da kein undifined steht
        winner = fields[0];
        document.getElementById('line1').style.transform = 'scaleX(1.0)';
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {   //horizontal
        winner = fields[3];
        document.getElementById('line2').style.transform = 'scaleX(1.0)';
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {   //horizontal
        winner = fields[6];
        document.getElementById('line3').style.transform = 'scaleX(1.0)';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {   //vertikal
        winner = fields[0];
        document.getElementById('line4').style.transform = 'rotate(90deg) scaleX(1.0)';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {   //vertikal
        winner = fields[1];
        document.getElementById('line5').style.transform = 'rotate(90deg) scaleX(1.0)';
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {   //vertikal
        winner = fields[2];
        document.getElementById('line6').style.transform = 'rotate(90deg) scaleX(1.0)';
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {   //diagonal
        winner = fields[0];
        document.getElementById('line7').style.transform = 'rotate(45deg) scaleX(1.0)';
    }

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {   //diagonal
        winner = fields[2];
        document.getElementById('line8').style.transform = 'rotate(-45deg) scaleX(1.0)';
    }

    if (winner) {


        gameOver = true;
        setTimeout(function () {

            document.getElementById('chessPic').classList.remove('d-none');
            document.getElementById('restartButton').classList.remove('d-none');

        }, 500)


    }

}
