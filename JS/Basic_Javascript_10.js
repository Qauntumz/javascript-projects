function count_To_ten() {
    var Digit ="";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function strLength() {
    var str = "Hello World!";
    var X = str.length;
    document.getElementById("strlngth").innerHTML = X;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_actions() {
    var Cat_Action = [];
    Cat_Action[0] = "sleeping";
    Cat_Action[1] = "playing";
    Cat_Action[2] = "eating";
    Cat_Action[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Action[2] + ".";
}