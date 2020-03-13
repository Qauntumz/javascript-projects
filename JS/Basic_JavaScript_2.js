function myFunction(thing1, thing2) {
    var thing1 = "8";
    var thing2 = "9";
    return thing1 * thing2;
}
document.getElementById("things").innerHTML = myFunction(8, 9);

function urFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
document.getElementById("Concatenate").innerHTML = sentence;
}