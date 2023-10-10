// Arrays

// Definir arrays

//let vacio = []; //No tiene elementos
//let primos = [2, 3, 5, 7, 11]; //Array con 5 elementos numéricos
//let miscelanea = [1.1, true, "a", ]; //Varios tipos y coma by the face

// Los valores de los elementos no tienen porque ser constantes

// let n = 1024;
// let tabla = [n, n + 1, n + 2, n + 3];

// let contador = [,,,,];
// console.log(contador.length);


// OPERADOR Spread
// let a = [1, 2, 3];
// let b = [0, ...a ,4];
// console.log(b);
// console.log(b.length);

// let original = [1, 2, 3];
// let copia = [...original];
// original[0] = 9;
// console.log(original[0]);
// console.log(copia[0]);

// let digitos = [..."0123456789ABCDEF"];
// console.log(digitos);

// Constructor de array

//let a = new Array(10); //Array con 10 elementos
//let b = Array.of(10); //Array Of 10 le pone el valor 10
//console.log("Longitud de a " + a.length);
//console.log(a);
//console.log("Longitud de b " + b.length)
//console.log(b);;
//console.log(Array.of(10));

// METODO PUSH (añade el valor al final del array)
//a.push(5);
//console.log(a[a.length-1]);


// let a = [1, 2, 3];
// console.log(a);
// delete a[2];
// console.log(a);
// let i = 2;
// if(a[i]){
//     console.log(a[i]);
// } else {
//     console.log("Slot vacio");
// }

// Iterando Arrays

let letras = [..."Hola amiguitos"];
let aux = "";
for(let letra of letras){
    aux += letra;
 }

// // console.log(aux);

// aux = "";
// let suma = 0;
// for(let [index,letra] of letras.entries()){
//     // suma+= index;
//     // aux = letra;
//     if(index % 2 === 0) aux += letra;
// }

// console.log(aux);
// console.log(suma);

// let index = 0;
// let mayusculas = "";
// console.log(letras);
// letras.forEach(letra => {
//     if(index % 2 === 0){
//         mayusculas = letra.toUpperCase();
//     } else{
//         mayusculas +=letra;
//     }
//     index++;
    
// });

// console.log(mayusculas);

// let letra = "";
// let vocales = "";
// for(let i = 0; i < letras.length ; i++){
//     letra = letras[i];
//     if(/[aeiou]/.test(letra)){
        
//         vocales += letra;
//     }
// } 

// ARRAYS MULTIDIMENSIONALES
// let tabla = new Array(10);

// for(let i = 0; i < tabla.length; i++){
//     tabla[i] = new Array(5); // Cada fila va a tener 5 columnas
// }

// for(let fila = 0; fila < tabla.length; fila++){
//     let arrayInterior = tabla[fila];
//     for(let col = 0; col < arrayInterior.length; col++){
//         arrayInterior[col] = fila*col;
//     }
// }

// console.log(tabla);


