/* 
 * JavaScript clásico para definir el comportamiento del comelon y sus enemigos
 */
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
               if(posX < 560){
                if (e.keyCode === 39) {
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
            
                if (e.keyCode === 40) {
                    posY += 40;
                    personaje.style["top"] = posY + "px";
                }
                if (e.keyCode === 38) {
                    posY -= 40;
                    personaje.style["top"] = posY + "px";
                }
            
                position_label.innerHTML = "X=" + posX + "," + "Y=" + posY;
                
            }                   
);
 
    }


//Al finalizar el cargardo del documento ejecutar la función load
document.addEventListener("DOMContentLoaded",load);

