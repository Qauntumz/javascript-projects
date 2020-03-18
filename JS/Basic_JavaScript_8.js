function full_sentence() {
    var p1 = "Welcome";
    var p2 = " to";
    var p3 = " this";
    var p4 = " sentence.";
    var whole_sentence = p1.concat(p2, p3, p4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function sentenceUpper() {
    var upr = "Click here to make this sentence full caps";
    var zzz = upr.toUpperCase();
    document.getElementById("try1").innerHTML = zzz;
}

function srch() {
    var X = "html and javascript"
    var Y = X.search("javascript");
    document.getElementById("try2").innerHTML = Y;
}

function precisionMethod() {
    var X = 82731.128739182736;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixedMethod() {
    var X = 10.878;
    document.getElementById("Fixed").innerHTML = X.toFixed(3);
}

function valofMethod() {
    var X = "Hello World";
    document.getElementById("Valof").innerHTML = X.valueOf();
}