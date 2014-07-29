/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var posX = 0;
function load() { 
 var personaje = document.getElementById("personaje"); 
 //personaje.addEventListener("keydown", function() { alert("alert");});
 
 window.addEventListener('keydown', function (e) {
    if (e.keyCode === 38) {
    alert("arriba");
    }
    if (e.keyCode === 39) {
    posX += 40;
    personaje.style["left"] = posX + "px";
    }
}, false);
 
}
 
document.addEventListener("DOMContentLoaded",load);
