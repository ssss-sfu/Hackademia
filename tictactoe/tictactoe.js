console.log("hi ssss");

function onPikaClicked() {
    alert("Oh wow!");
    document.getElementById("pika").style.display='none';
}

function squareClicked( num ) {
    if( document.getElementById(num).innerHTML == "" ) {

        if( document.getElementById("turn").innerHTML == 'X' ) {
            document.getElementById(num).innerHTML = 'X';
            document.getElementById("turn").innerHTML = 'O';
        } else {
            document.getElementById(num).innerHTML = 'O';
            document.getElementById("turn").innerHTML = 'X';
        }
    
    }

    var winner = calculateWinner();
    if( winner != '' ) {
        document.getElementById("status").innerHTML = winner + " is the winner!";
    }

}

function calculateWinner() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (document.getElementById(a).innerHTML && document.getElementById(a).innerHTML === document.getElementById(b).innerHTML && document.getElementById(a).innerHTML === document.getElementById(c).innerHTML) {
            return document.getElementById(a).innerHTML;
        }
    }
    return '';
  }
  