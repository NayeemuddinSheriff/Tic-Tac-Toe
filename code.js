var players = ["PLAYER X","PLAYER O"];
var sign = ["x","O"];
var turn = 0;
var points = [0,0];
var winpoints = [7,56,73,84,146,273,292,448];
var game;

function win() {
    for ( var i=0; i <winpoints.length; i++)
    {
        if ((points[turn] & winpoints[i]) == winpoints[i])
        {
            document.getElementById("winner").innerText= players[turn] + " WINS!!"
            game = true;
        }
    }
    if ((points[0] + points[1]) == 511 && !game)
    {
        document.getElementById("winner").innerText= "GAME IS DRAW"
        game = true;
    }
}

function play(clicked , divValue)
{
    if (!game)
    {
        points[turn] += divValue;
        clicked.onclick = "";
        clicked.innerHTML = "<font>"+ sign[turn] + "</font>";
        win();
        if(!game){
            toggle();
        }
        
    }
}

function toggle() {
    if (turn == 0) {
        turn =1;
    }
    else {
        turn = 0;
    }
}