/* ------------------------------------------------------------ */
/*EJERCICIO CLASE 1                                                           */
 /*------------------------------------------------------------ */

/* const fechaActual = new Date();
const anioActual = fechaActual.getFullYear;
let anioNacimiento = prompt("Ingrese su año de nacimiento");
let nombre = prompt("Ingrese su nombre");
let edad = anioActual  -   parseInt(anioNacimiento) 
alert(nombre + " USTED TIENE " + edad + " AÑOS!")
console.log(nombre + " USTED TIENE " + edad + " AÑOS!"); */

/* try {
    
} catch (error) {
    
} */
//pido ingreso de valores
/* let datoA = parseInt(prompt("INGRESE UN PRIMER VALOR"));
let datoB = parseInt(prompt("INGRESE EL SEGUNDO VALOR"));
//comparo variables
let menor = (datoA < datoB);
let mayor = (datoA > datoB);
//variable para mensajes
let mensaje;
//consulto evaluación
if (mayor)
{
    mensaje = `El dato A:  ${datoA} Es mayor al dato B:  ${datoB}`;
} else if (menor) 
    {
        mensaje=`El dato A:  ${datoA} Es menor al dato B:  ${datoB}`;
    } else {
        mensaje=`El dato A:  ${datoA}  Es igual al dato B:  ${datoB}`;
    }
//acá reduzco código
alert(mensaje);
console.log(mensaje); */

/* ------------------------------------------------------------ */
/*EJERCICIO CLASE 2                                                           */
/* ------------------------------------------------------------ */

//pido ingreso de valores

/* let datoA = parseInt(prompt("INGRESE SU EDAD"));
    if (!isNaN(datoA)){
        //comparo variables
        let menor = (datoA >= 0 ) &&  (datoA <= 17);
        let mayor = (datoA > 17) &&  (datoA <= 40);
        let anciano = (datoA > 40)
        let negativo = (datoA < 0);
        
        //variable para mensajes
        let mensaje;
        //consulto evaluación
        if (mayor)
        {
            mensaje = `sos joven`;
        }
        if (menor) 
        {
            mensaje=`eres un ninio`;
        } 
        if (negativo) 
        {
            mensaje=`no vale numero negativo`;
        }
        if (anciano)
        {
            mensaje=`trajiste tu bastón?`;
        }
        //acá reduzco código
        alert(mensaje);
        console.log(mensaje);
    }else{
        alert('no ingreso numeros')
    } */

/* ------------------------------------------------------------ */
/* EJERCITACIÓN DEL AFTER                                               */
/* ------------------------------------------------------------ */
/*Detectar el tipo de triángulo según el tamaño de los lados ingresados*/
// let lado1 = parseFloat("Ingrese Lado 1")
// let lado2 = parseFloat("Ingrese Lado 2")
// let lado3 = parseFloat("Ingrese Lado 3")

// if (!isNaN(lado1) || !isNaN(lado2) || !isNaN(lado3)) {
//     if(lado1 == lado2 && lado2 == lado3){
//         alert(`El triángulo de lado 1 = ${lado1}, lado2 = ${lado2} y lado 3 = ${lado3} es EQUILATERO` )
//     } else if  (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
//         alert(`El triángulo de lado 1 = ${lado1}, lado2 = ${lado2} y lado 3 = ${lado3} es ISÓCELES` )
//     } else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
//         alert(`El triángulo de lado 1 = ${lado1}, lado2 = ${lado2} y lado 3 = ${lado3} es ESCALENO` )
//     }
// }else{
//     alert(`ALGUNO DE LOS VALORES NO FUE INGRESADO` )
// }

/* ------------------------------------------------------------ */
/* EJERCICIOS  CLASE 3                                                       */
/* ------------------------------------------------------------ */
/* 
    Hacer una calculadora
    pediremos  dos numeros
    pediremos una operación
*/    

/* let A = parseInt(prompt("Ingrese un numero"));
let B = parseInt(prompt("Ingrese un numero"));
let O = prompt("Ingrese una operación");
let R;
switch (O) {
    case "+":
       R = A + B; 
        alert(`la suma es ${R}`);
        break;
    case "-":
        R=A-B;
        alert(`la resta es ${R}`);
        break;
    case "*":
        R=A*B;
        alert(`la multiplicación es ${R}`);
        break;
    case "/":
        if(B!=0){
            R=A/B;
            alert(`la división es ${R}`);
        }else{
            alert("NO SE PUEDE DIVIDIR POR CERO");
        }
        break;
    default:
        alert("NO INGRESÓ UNA OPERACIÓN");
        break;
} */

/* ------------------------------------------------------------ */
/* EJERCICIOS  AFTER CLASS 2                                            */
/* ------------------------------------------------------------ */
/* 
    Imprimir
    54321
    4321
    321
    21
    1
*/    

/* let numero = "";
while (numero != undefined) {
    numero = prompt(`INGRESE EL NUMERO DE LA ESCALA \n (Oprima cancelar para terminar)`);
    if (numero != undefined )
    {
        if (!isNaN(numero)) {
            let numero;
            for (let i = numero; i > 0; i--) {
                numero = "";
                for (let j = i; j > 0; j--) {
                    numero += j;
                }
                console.log(numero);
            }
        } else {
            console.log('NO INGRESÓ UN NÚMERO, VERIFIQUE!');
        }
    }else{
        console.log('DECIDIÓ FINALIZAR LA APLICACIÓN');
    }
    
} */

/*
Obtener el FACTORIAL de un número
Finalizar el programa cuando el USUARIO oprima CANCELAR
*/

/* let factorial = 1;
let numero = 0;
while (numero != undefined) {
    numero = prompt(
        `INGRESE EL NÚMERO DEL CUAL QUIERE OBTENER EL FACTORIAL \n (Oprima cancelar para terminar)`
    );
    if (numero != undefined) {
        if (!isNaN(numero)) {
            for (let i = numero; i > 0; i--) {
                factorial *= i;
            }
            console.log(factorial);
        } else {
            console.log("NO INGRESÓ UN NÚMERO, VERIFIQUE!");
        }
    } else {
        console.log("DECIDIÓ FINALIZAR LA APLICACIÓN");
    }
} */


/* ------------------------------------------------------------ */
/* DESAFIO Nº 1                                                                  */
/* ------------------------------------------------------------ */
/* CONSIGNA
        Calcular el promedio de los números PRIMOS ingresados por el USUARIO
        El USUARIO puede detener el programa cuando oprima 'CANCELAR'
        Debe mostrar:
            La cantidad de números ingresados
            La cantidad de primos ingresados
            El promedio de los números primos ingresados
*/


let dato;
let cantNumeros = 0;
let cantPrimos = 0;
let sumaPrimos = 0;
let promedioPrimos = 0;

dato = prompt("INGRESE UN NÚMERO \n (OPRIMA CANCELAR CUANDO QUIERA TERMINAR)")
while (dato != undefined) {
    dato = parseInt(dato);
    cantNumeros++;
    if (dato > 1){
        primo = true;
        for (let i = 2; i < dato; i++) {
            if(dato % i == 0){
                primo = false;
            }
        }
        if(primo){
            cantPrimos++;
            sumaPrimos += dato;
        }
    }else{
        primo = false;
    }
    dato = prompt("INGRESE UN NÚMERO \n (OPRIMA CANCELAR CUANDO QUIERA TERMINAR)")
}
if (cantPrimos != 0){
    promedioPrimos = sumaPrimos / cantPrimos;
}

alert(`La cantidad de Números ingresados fue de ${cantNumeros} \n La cantidad de Números primos es ${cantPrimos} \n La suma total de Números primos fue de ${sumaPrimos} \n El promedio de Números primos fue de ${promedioPrimos}`);