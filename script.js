
let nombre=prompt ("INDIQUE SU NOMBRE")
let contrasena = prompt("ingrese su pass para guardar")

for (let i=3; i>=0 ; i--) {
    let pass= prompt("introduzca su pass nuevamente");
    if (contrasena === pass) {
        alert("BIENVENIDO/A  " + nombre);
        break;
    }
    if (i==0) {
        alert("TU CUENTA FUE BLOQUEADA  " + nombre + "  LLAME PARA REINICIAR PASS")
    }
    else {alert ("INTENTE NUEVAMENTE, le quedan" + i + "intentos")}
    
}


let series = " ";


while (series<= 10 ) {
    let nombre=prompt("diga su numero secreto");
    
 if (series>=10) {(alert("BIEEEEN"))
    break;}
 
 
     else {alert ("VAMOS QUEDAN POCAS")};
   
} 




