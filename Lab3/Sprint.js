var name = prompt("Enter your name");
var age = prompt("Enter your age");
var gender = prompt("Enter your gender");
alert("Your name:" + name + "    your age: " + age);

var x = document.getElementById("t1");
x.innerHTML = name;
var body = document.getElementById("body");
if (gender == "male")	
	{
 body.style.backgroundColor = "blue";
	}
else if (gender == "female"){
	body.style.backgroundColor = "purple";
	}


var array = document.getElementsByClassName("body");
for(var i =0; i<array.length; i++){
	array[i].style.color="blue";
	}