//DESAFÍO CLASE 1
/* const fechaActual = new Date();
const anioActual = fechaActual.getFullYear;
let anioNacimiento = prompt("Ingrese su año de nacimiento");
let nombre = prompt("Ingrese su nombre");
let edad = anioActual  -   parseInt(anioNacimiento) 
alert(nombre + " USTED TIENE " + edad + " AÑOS!")
console.log(nombre + " USTED TIENE " + edad + " AÑOS!"); */

//DESAFÍO CLASE 2
let datoA = prompt("INGRESE UN PRIMER VALOR")
let datoB = prompt("INGRESE EL SEGUNDO VALOR")
if (datoA > datoB){
    alert("El dato A: " + datoA + " Es mayor al dato B: " + datoB)
    console.log("El dato A: " + datoA + " Es mayor al dato B: " + datoB)
}else if (datoA < datoB) {
    alert("El dato A: " + datoA + " Es menor al dato B: " + datoB)
    console.log("El dato A: " + datoA + " Es menor al dato B: " + datoB)    
} else {
    alert("El dato A: " + datoA + " Es igual al dato B: " + datoB)
    console.log("El dato A: " + datoA + " Es igual al dato B: " + datoB)
}
