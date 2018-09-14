var number = prompt("Enter number");
var string = displayPyramid(x);
var y = document.getElementById("stars");
document.write(string);

function displayPyramid(x) {
	var str = ' ';
		for (var i = 0; i <x; i++) {
			strs = str + '</br>'
				for(var j=1; j<x-i; j++) {
						str = str + '&nbsp';
						}
				for (var k=1; k<=(2*i+1); k++) {
						str = str + '*';
						}
		}
return str;
}


