var posX = 0;
var posY = 0;

var posX_enemigo = 0;
var posY_enemigo = 0;
function load() { 
 var personaje = document.getElementById("personaje"); 
 var enemigo_1 = document.getElementById("enemigo_1"); 
 
 
 window.setInterval(function(){
     posX_enemigo = Math.floor((Math.random() * 560) + 0);
     posY_enemigo = Math.floor((Math.random() * 560) + 0);
     enemigo_1.style["left"] = posX_enemigo + "px";     
     enemigo_1.style["top"] = posY_enemigo + "px";     
 },100);
 

 
 window.addEventListener('keydown', 
            function(e) {
                var position_label = document.getElementById("position");
                {
                if(posX < 560 && e.keyCode === 39){
                    //Movimiento derecha
                    posX += 40;
                    personaje.style["left"] = posX + "px";
                }
                
                }
                if (posX > 0 && e.keyCode === 37) {
                    //Movimiento izquierda
                    posX -= 40;
                    personaje.style["left"] = posX + "px";
                }
            
                if (posY < 560 && e.keyCode === 40) {
                    //Movimiento arriba
                    posY += 40;
                    personaje.style["top"] = posY + "px";
                }
                if (posY > 0 && e.keyCode === 38) {
                    //Movimiento abajo
                    posY -= 40;
                    personaje.style["top"] = posY + "px";
                }
            
                position_label.innerHTML = "X=" + posX + "," + "Y=" + posY;
                
            }                   
);
 
    }
    /*var personaje = {radius: 40px};
var enemigo_1 = {radius: 40px};

var dx = personaje.x - enemigo_1.x;
var dy = personaje.y - enemigo_1.y;
var distance = Math.sqrt(dx * dx + dy * dy);

if (distance < personaje.radius + enemigo_1.radius) {
    // collision detected!
}
*/
    
    
    


//Al finalizar el cargardo del documento ejecutar la función load
document.addEventListener("DOMContentLoaded",load);