var X = 5;

function math1Function() {
    document.getElementById("Math1").innerHTML = (X + 10);
}

function tmath2Function() {
    var Y = 15;
    document.getElementById("Math2").innerHTML = (Y + 10);
}

function get_Date() {
    if (new Date().getHours() < 18)  {
    document.getElementById("hello").innerHTML = "How are you this evening?";
    }
}

console.log()

function math3Function() {
    var X = 10
    var Y = 15
    if (Y > X) {
    document.getElementById("Math3").innerHTML = "15 is greater than 10"
    }
}

function Voter_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Words = "You are old enough to vote!";
    }
    else {
        Words = "You are not old enough to vote!";
    }
    document.getElementById("Vote").innerHTML = Words;
}

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Replay = "It s morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Replay = "It is the afternoon.";
    }
    else {
        Replay = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Replay;
}