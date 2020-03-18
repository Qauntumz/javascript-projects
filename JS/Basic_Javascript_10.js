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

function constant_function() {
    const Musical_instrument = {type: "guitar", brand:"Fender", color:"black"};
    Musical_instrument.color = "blue";
    Musical_instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_instrument.type + " was " + Musical_instrument.price + " and the color was " + Musical_instrument.color;
}

var X = 100 
document.write(X);
{
    let X = 50;
    document.write("<br>" + X);
}
document.write("<br>" + X);

function myfunction() {
    return Math.PI;
}
document.getElementById("demo").innerHTML = myfunction();

let car = {
    make: "Ford",
    model: "Mustang",
    year: "2020",
    color: "Red",
    description : function() {
        return "the car is a " + this.year + " " + this.color + " " + this.make + " " + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();


var ZZ = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  ZZ += "The number is " + i + "<br>";
}
document.getElementById("part1").innerHTML = ZZ;

var HH = "";
var k;
for (k = 0; k < 10; k++) {
  if (k === 3) { continue; }
  HH += "The number is " + k + "<br>";
}
document.getElementById("part2").innerHTML = HH;