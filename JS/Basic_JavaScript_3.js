function myFunction() {
    var addition = 2736 + 1723;
    document.getElementById("math").innerHTML = "Answer = " + addition;
}

function urFunction() {
    var sub = 2736 - 1723;
    document.getElementById("math2").innerHTML = "Answer = " + sub;
}

function divFunction() {
    var div = 100 / 10;
    document.getElementById("math3").innerHTML = "Answer = " + div;
}

function mulFunction() {
    var mul = 100 * 10;
    document.getElementById("math4").innerHTML = "Answer = " + mul;
}

function complexFunction() {
    var comp = (8 + 100) * 10 - 50;
    document.getElementById("math5").innerHTML = "Answer = " + comp;
}

function modulusFunction() {
    var mod = 31 % 5;
    document.getElementById("math6").innerHTML = "remainder of:  " + mod;
}