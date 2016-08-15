var posX = 0;
var posY = 0;

var posX_enemigo = 0;
var posY_enemigo = 0;
var prevX_enemigo = 0;
var prevY_enemigo = 0;
var enemy;
var steps_same_direction = 0;
var previous_direction = 0;
var step_counter = 0;
var personaje;
var dashboard = document.getElementById("tablero");

function load() { 
personaje = document.getElementById("personaje");
respawn(); 
 
 
 window.setInterval(function(){
    if(!enemy){
		respawn();
		steps_same_direction = Math.floor((Math.random() * 6) + 2);
		console.log(steps_same_direction);
	}	   
 },2000);


 window.setInterval(function(){
if(enemy){
	switch(getDirection()){
	case 1:
		if (posY_enemigo < 560) {
			//To up
			posY_enemigo += 40;
			enemy.style["top"] = posY_enemigo + "px";
		}
	break;
	case 2:
		if (posY_enemigo > 0) {
			//To down
			posY_enemigo -= 40;
			enemy.style["top"] = posY_enemigo + "px";
		}
	break;
	case 3:
		if (posX_enemigo > 0) {
			//To left
			posX_enemigo -= 40;
			enemy.style["left"] = posX_enemigo + "px";
		}
	break;
	case 4:
		if(posX_enemigo < 560){
			//To right
			posX_enemigo += 40;
			enemy.style["left"] = posX_enemigo + "px";
		}
	break;
	}
	enemy.textContent = posX_enemigo + "," + posY_enemigo;
	if(step_counter >= steps_same_direction){
			steps_same_direction = Math.floor((Math.random() * 6) + 2);
	}
}
    	   
 },150);
 

 
 window.addEventListener('keydown', 
	function(e) {
		var position_label = document.getElementById("position");
		
		if(posX < 560 && e.keyCode === 39){
			//Right key
			posX += 40;
			personaje.style["left"] = posX + "px";
		}
		
		
		if (posX > 0 && e.keyCode === 37) {
			//Left key
			posX -= 40;
			personaje.style["left"] = posX + "px";
		}
	
		if (posY < 560 && e.keyCode === 40) {
			//Up key
			posY += 40;
			personaje.style["top"] = posY + "px";
		}
		if (posY > 0 && e.keyCode === 38) {
			//Down key
			posY -= 40;
			personaje.style["top"] = posY + "px";
		}
	
		personaje.textContent = posX + "," + posY;
		if(posX === posX_enemigo && posY === posY_enemigo && enemy){
			enemy.remove();
			enemy = document.getElementById("enemy_1"); 
		}
		
	}                   
);
 
    }

var respawn = function(){
	enemy = document.createElement("div");
	dashboard.appendChild(enemy); 
	enemy.setAttribute("class", "enemigo");
	enemy.setAttribute("id", "enemy_1"); 
	//posX_enemigo = Math.floor((Math.random() * 560) + 0);
	//posY_enemigo = Math.floor((Math.random() * 560) + 0);
	posX_enemigo = 40;
	posY_enemigo = 120;

	enemy.style["left"] = posX_enemigo + "px";     
	enemy.style["top"] = posY_enemigo + "px";
};

var getDirection = function(){
	var direction = 0;
	if(step_counter >= steps_same_direction || previous_direction === 0){
		direction = Math.floor((Math.random() * 4) + 1);
		previous_direction = direction;
		prevY_enemigo = posY_enemigo;
		prevX_enemigo = posX_enemigo;
		step_counter = 0;
		console.log(direction);
	}else{
		step_counter++;
		direction = prevY_enemigo === posY_enemigo && prevX_enemigo === posX_enemigo ? differentDirection() : previous_direction;
		console.log(direction);
	}
	
	return direction;
};

var differentDirection = function(){
var direction = 0;
while(true){
	direction = Math.floor((Math.random() * 4) + 1);
	if(previous_direction !== direction){
		break;
	}
}
return direction;
}
    
    


//Al finalizar el cargardo del documento ejecutar la función load
document.addEventListener("DOMContentLoaded",load);