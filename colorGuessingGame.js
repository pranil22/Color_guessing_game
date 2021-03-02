var boxes = document.querySelectorAll(".box");
var aux = [];
var ansInd = Math.floor(Math.random()*6);
var ans;
var spans = document.getElementsByClassName("color");
var isGameOver = false;



function createObject(){
	var obj = {
		 r : Math.floor(Math.random()*255 + 1),
		 g : Math.floor(Math.random()*255 + 1),
		 b : Math.floor(Math.random()*255 + 1)
	};

	return obj;
}

for(var i=0;i<6;i++) {
	var obj = createObject();
	aux.push(obj);
}

function assignRgb(){
	spans[0].innerHTML = aux[ansInd].r;
	spans[1].innerHTML = aux[ansInd].g;
	spans[2].innerHTML = aux[ansInd].b;

}

assignRgb();

function componentToHex(c) {
  	var hex = c.toString(16);
  	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


ans = Object.assign(aux[ansInd]);


function colorBox(aux){
	for(var i=0;i<aux.length;i++) {
		var hex = rgbToHex(aux[i].r,aux[i].g,aux[i].b);

		boxes[i].style.backgroundColor = hex;
	}
}

colorBox(aux);
if(!isGameOver) {
	for(var i=0;i<boxes.length;i++){
		boxes[i].addEventListener("click",function(){
			if(this.style.backgroundColor==boxes[ansInd].style.backgroundColor) {
				document.getElementById("status").innerHTML = "You Won";
				isGameOver = true;
				for(var j=0;j<boxes.length;j++) {
					boxes[j].style.backgroundColor = this.style.backgroundColor;
					boxes[j].classList.remove("invisible");
				}
				document.getElementsByClassName("main")[0].style.backgroundColor = this.style.backgroundColor;
			}
			else {
				document.getElementById("status").innerHTML = "Try Again";
				this.classList.add("invisible");
			}
		});
	}
}