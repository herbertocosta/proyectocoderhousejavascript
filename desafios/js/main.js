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


/* let dato;
let cantNumeros = 0;
let cantPrimos = 0;
let sumaPrimos = 0;
let promedioPrimos = 0;

dato = prompt("INGRESE UN NÚMERO \n (OPRIMA CANCELAR CUANDO QUIERA TERMINAR)")
while (dato != undefined) {
    dato = parseInt(dato);
    console.log(dato);
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

alert(`La cantidad de Números ingresados fue de ${cantNumeros} \n La cantidad de Números primos es ${cantPrimos} \n La suma total de Números primos fue de ${sumaPrimos} \n El promedio de Números primos fue de ${promedioPrimos}`); */

/* ------------------------------------------------------------ */
/* EJERCICIOS  CLASS  4                                                      */
/* ------------------------------------------------------------ */
/*escribir una funcion que acepte un numero y que me diga si es primo o no
    CONSIGNA
        Calcular el promedio de los números PRIMOS ingresados por el USUARIO
        El USUARIO puede detener el programa cuando oprima 'CANCELAR'
        Debe mostrar:
            La cantidad de números ingresados
            La cantidad de primos ingresados
            El promedio de los números primos ingresados
*/

/* let dato;
let cantNumeros = 0;
let cantPrimos = 0;
let sumaPrimos = 0;
let promedioPrimos = 0;

function verificarPrimo() {
    if (dato > 1) {
        primo = true;
        for (let i = 2; i < dato; i++) {
            if (dato % i == 0) {
                primo = false;
            }
        }
    } else {
        primo = false;
    }
}


dato = prompt("INGRESE UN NÚMERO \n (OPRIMA CANCELAR CUANDO QUIERA TERMINAR)")
while (dato != undefined) {
    dato = parseInt(dato);
    console.log(dato);
    cantNumeros++;
    verificarPrimo();
    if (primo) {
        cantPrimos++;
        sumaPrimos += dato;
    }
    dato = prompt("INGRESE UN NÚMERO \n (OPRIMA CANCELAR CUANDO QUIERA TERMINAR)")
}

if (cantPrimos != 0){
    promedioPrimos = sumaPrimos / cantPrimos;
}

alert(`La cantidad de Números ingresados fue de ${cantNumeros} \n La cantidad de Números primos es ${cantPrimos} \n La suma total de Números primos fue de ${sumaPrimos} \n El promedio de Números primos fue de ${promedioPrimos}`); 

console.log(`La cantidad de Números ingresados fue de ${cantNumeros} \n La cantidad de Números primos es ${cantPrimos} \n La suma total de Números primos fue de ${sumaPrimos} \n El promedio de Números primos fue de ${promedioPrimos}`
);
 */

/* ------------------------------------------------------------ */
/* DESAFÍO GENÉRICO  CLASS  5                                        */
/* ------------------------------------------------------------ */

// class Producto{
//     constructor(categoria, nombre, precio, stock){
//         this.nombre = nombre;
//         this.categoria = categoria;
//         this.precio = precio;
//         this.sctock = stock;
//     }
//     aplicarDescuento(){
//         if(this.precio > 1000){
//             this.precio = this.precio*0.9;
//         }
//         return this.preciofinal;
//     }
//     comprar(cantidad){
//         if (this.stock >= cantidad) {
//             this.stock -= cantidad;
//             return `EL PRECIO FINAL DE SU COMPRA DE ${this.nombre} AL VALOR UNITARIO DE ${this.precio} TIENE UN VALOR TOTAL DE ${this.precio * cantidad}`;
//         } else {
//             return `NO HAY SUFICIENTE STOCK DE ESE PRODUCTO, LOS SENTIMOS MUCHO`;
//         }
//     }
// }

// const prod1 = new Producto("OFERTAS","CAMPERA",25000,10);
// const prod2 = new Producto("OFERTAS","REMERA",250,15);
// const prod3 = new Producto("OFERTAS","PANTALÓN",2500,3);
// const prod4 = new Producto("OFERTAS","MEDIAS",25,8);
// prod1.aplicarDescuento;
// prod2.aplicarDescuento;
// prod3.aplicarDescuento;
// prod4.aplicarDescuento;
// let articulo;
// let cantidad;
// alert(` ${prod1.nombre} \n ${prod2.nombre} \n ${prod3.nombre} \n ${prod4.nombre}`)
// do {
//     articulo = prompt("Elija el producto que quiere comprar");
//     if (articulo === null) 
//     {
//         if (confirm("¿DESEA INTERRUMPIR SU COMPRA?")) 
//         {
//             alert("LAMENTAMOS NO HAYA ENCONTRADO EL PRODUCTO DE SU AGRADO");
//             break;
//         } else {
//             continue
//         }
//     } else {
//         articulo = articulo.toUpperCase();
//         if ( articulo == prod1.nombre || articulo == prod2.nombre || articulo == prod3.nombre || articulo == prod4.nombre) 
//         {
//            cantidad = prompt("Elija la cantidad que quiere comprar");
//             switch (articulo) {
//                 case prod1.nombre:
//                     alert(prod1.comprar(cantidad));
//                     break;
//                 case prod2.nombre:
//                     alert(prod2.comprar(cantidad));
//                     break;
//                 case prod3.nombre:
//                     alert(prod3.comprar(cantidad));
//                     break;
//                 case prod4.nombre:
//                     alert(prod4.comprar(cantidad));
//                     break;
//             }
//         } else {
//             alert(`LO SENTIMOS NO TENEMOS ${articulo}`)
//         }
//     }
// } while (true);


/* ------------------------------------------------------------ */
/* DESAFÍO GENÉRICO  CLASS  6                                        */
/* ------------------------------------------------------------ */

// let equipos = ["TEAM 1", "TEAM 2", "TEAM-3"];
// let programadoras = ["ANA", "DANIELA", "SOL"];
// let asignaciones = [];
// for (let index = 0; index < equipos.length; index++) {
//     let literal = {equipo: equipos[index].toLowerCase(), programadora: programadoras[index].toLowerCase()}
//     console.log(literal)
//     literal.programadora = literal.programadora.replace(literal.programadora[0], literal.programadora[0].toUpperCase());
//     console.log(literal.programadora);
//     asignaciones.push(literal);
// }
// console.log(asignaciones[2])

// class Producto{
//     constructor(categoria, nombre, precio, stock){
//         this.nombre = nombre;
//         this.categoria = categoria;
//         this.precio = precio;
//         this.sctock = stock;
//     }
//     aplicarDescuento(){
//         if(this.precio > 1000){
//             this.precio = this.precio*0.9;
//         }
//         return this.preciofinal;
//     }
//     comprar(cantidad){
//         if (this.stock >= cantidad) {
//             this.stock -= cantidad;
//             return `EL PRECIO FINAL DE SU COMPRA DE ${this.nombre} AL VALOR UNITARIO DE ${this.precio} TIENE UN VALOR TOTAL DE ${this.precio * cantidad}`;
//         } else {
//             return `NO HAY SUFICIENTE STOCK DE ESE PRODUCTO, LOS SENTIMOS MUCHO`;
//         }
//     }
// }

// do {
    
// } while (true);
// const prod1 = new Producto("OFERTAS","CAMPERA",25000,10);
// const prod2 = new Producto("OFERTAS","REMERA",250,15);
// const prod3 = new Producto("OFERTAS","PANTALÓN",2500,3);
// const prod4 = new Producto("OFERTAS","MEDIAS",25,8);
// prod1.aplicarDescuento;
// prod2.aplicarDescuento;
// prod3.aplicarDescuento;
// prod4.aplicarDescuento;
// let articulo;
// let cantidad;
// alert(` ${prod1.nombre} \n ${prod2.nombre} \n ${prod3.nombre} \n ${prod4.nombre}`)
// do {
//     articulo = prompt("Elija el producto que quiere comprar");
//     if (articulo === null) 
//     {
//         if (confirm("¿DESEA INTERRUMPIR SU COMPRA?")) 
//         {
//             alert("LAMENTAMOS NO HAYA ENCONTRADO EL PRODUCTO DE SU AGRADO");
//             break;
//         } else {
//             continue
//         }
//     } else {
//         articulo = articulo.toUpperCase();
//         if ( articulo == prod1.nombre || articulo == prod2.nombre || articulo == prod3.nombre || articulo == prod4.nombre) 
//         {
//            cantidad = prompt("Elija la cantidad que quiere comprar");
//             switch (articulo) {
//                 case prod1.nombre:
//                     alert(prod1.comprar(cantidad));
//                     break;
//                 case prod2.nombre:
//                     alert(prod2.comprar(cantidad));
//                     break;
//                 case prod3.nombre:
//                     alert(prod3.comprar(cantidad));
//                     break;
//                 case prod4.nombre:
//                     alert(prod4.comprar(cantidad));
//                     break;
//             }
//         } else {
//             alert(`LO SENTIMOS NO TENEMOS ${articulo}`)
//         }
//     }
// } while (true);

/* ------------------------------------------------------------ */
/* DESAFÍO GENÉRICO  CLASS  7                                        */
/* ------------------------------------------------------------ */


