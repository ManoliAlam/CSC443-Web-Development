// JavaScript source code

var password1 = document.getElementById("pass1").value;
var password2 = document.getElementById("pass2").value;
var IncorrectTxt = document.getElementById("incorrect")

text.hidden = true;

function sumbit() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass1").value;
    if (pass1 != pass2) {
        IncorrectTxt.hidden = false;
    }
    else {
        IncorrectTxt.hidden = true;
        succesTxt.hiddent = false;
    }
}
