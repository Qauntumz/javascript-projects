document.write(typeof 3);

document.write(2E310);
document.write(-2E310);
document.write(10 > 2);
document.write(2 > 10);
console.log(2 + 2);
document.write("10"+ 5);
console.log(2 >10);

document.write(2 == 2);
document.write(2 == 10);

var X = 82
var Y = "82"
var Z = 50
var W = "50"

document.write(X === X)
document.write(X === Y)
document.write(X === Z)
document.write(X === W)

document.write(5 > 2 && 10 > 4);
document.write(5 > 10 && 10 > 4);
document.write(5 > 10 || 10 > 4);
document.write(5 > 10 || 10 > 20);

function not_Function() {
    document.getElementById("Not").innerHTML = !(5>10);
}

function ton_Function() {
    document.getElementById("Ton").innerHTML = !(20>10);
}