/*
    ESRUCTURAS DE CONTROL

    Se utilizan para controlar el flujo de un programa
*/


/*

    if

    Se utilitza para ejecutar un bloque de codigo
    si se cumple una condición

*/

// let edad = 18;
// let esMayorDeEdad = (edad >= 18);

// let a = 10;
// let b = 20;

// //OPERADOR TERNARIO
// let resultado = (a > b) ? (a - b) : (b - a);

// console.log(resultado);


// if (esMayorDeEdad){
//     console.log("Eres mayor de edad");
// } else if (edad > 12) {
//     console.log("Teenager");
// } else if (edad > 5){
//     console.log("Estás en primaria");
// } else {
//     console.log("Eres un renacuajo");
// }

/* Estructura SWITCH - Case

    La usaremos cuando se quiera hacer una estructura condicional según el valor
    que tenga una variable o expresión

*/

// let nombre = "Gandalf";
// let edad;

// switch (nombre) {
//     case "Gandalf":
//         edad = 1230;
//         break;
    
//     case "Aragorn":
//         edad = 532;    
//         break;

//     case "Frodo":
//         edad = 50;
//         break;
//     default:
//         edad = -1;
//         break;  
// }

// console.log("Nombre: " + nombre + ", edad: " + edad);


/*
    ITERACIONES
    Se utilizan para repetir una porción de código varias veces
*/

// while
// Repetir un bloque entre llaves mientras se cumpla una condición 

// let contador = 0;

// while (contador < 5){
//     console.log(contador);
//     contador += 1;
// }


// do while
// Repetir un bloque de código almenos una vez 

// let contador = 20;

// do {
//     console.log(contador);
//     contador--;
// }while (contador > 10);


/* FOR
 repetir un bloque de código un número específico de veces
 break / continue
 break: detener la ejecución del bucle
 continue: saltar a la siguiente iteración
*/

// for(let i = 0; i < 5; i++){
//     if(i == 2){
//         continue; // Salta a la siguiente iteración cuando I es 2
//     }
//     console.log(i);
// }
