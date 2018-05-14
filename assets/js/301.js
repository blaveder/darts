var boardNumbers = [
    "25", "20", "19", "18", "17", "16", "15", "14", "13", "12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"
];


// var plThree = $(" #playerCard3 ");



var playCardVisible = false;
// POINTS FOR THE CARDS
function points() {
    var pointDiv = $(" #gameBoard ");

    if (!playCardVisible) {
        for (var i = 0; i < boardNumbers.length; i++) {

            var newpointDiv = $("<input id=" + "'" + boardNumbers[i] + "'" + " type='button' value=" + "'" + boardNumbers[i] + "'" + "onclick='addScore();'/>");
            pointDiv.append(newpointDiv);
        }; playCardVisible = true;

    }

};


