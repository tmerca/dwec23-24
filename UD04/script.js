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

// let letras = [..."Hola amiguitos"];
// let aux = "";
// for(let letra of letras){
//     aux += letra;
//  }

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


// METODOS DE ARRAYS


// METODO POP
// Elimina el ultimo elemento del array y lo devuelve

// let paco = ['joan', 'amparo', 'esther'];
// let otros = ['valentin', 'pepe'];
// let combinacion = paco.concat(otros);
// console.log(paco);
// let elementoEliminado = paco.pop();
// console.log(elementoEliminado);


// METODO SHIFT
// elimina el primer elemento y lo devuelve
// let elementoEliminado = paco.shift();
// console.log(elementoEliminado);

// METODO UNSHIFT
// agrega uno o más elementos al principio del array
// paco.unshift('valentin', 'pepe');
// console.log(paco);

// METODO CONCAT
// combina dos o mas arrays y devuelve un nuevo array
// console.log(combinacion);
// console.log(otros.concat(paco));

// METODO SLICE
// devuelve una copia llamada superficial de una porcion del array
// let copiaPaco = paco.slice(0,3);
// console.log(copiaPaco);

// METODO SPLICE
// cambia el contenido de un array eliminando, reemplazando o agregando elementos
// paco.splice(2,0, ...otros);
// console.log(paco);

// METODO INDEXOF()
// devuelve el primer índice en el que se encuentra un elemento dado.
// Devuelve -1 si no lo ecuentra
// let indice = paco.indexOf('amparo');
// let cadena = 'Hola cara de bola';
// indice = cadena.indexOf('a');
// indice = paco.lastIndexOf('esther');
// console.log(indice);

// METODO JOIN
// une todos los elementos de un array en una cadena (utilizando un separador)
// let cadena = paco.join('');
// console.log(cadena);

// METODO SORT
// ordena los elementos de un array alfabeticamente si son cadenas
// numericamente si son numeros 
let otros = [1,4,6,3,10,-10];
// console.log(paco.sort());
// console.log(otros.sort());

// Ordenar correctamente con sort => uso de parámetro
// Se trata de una función 
// La función debe recibir dos valores a comparar
// Como resultado debe:
//   - Devolver un valor positivo(1) si el primer valor es superior al segundo
//   - Devolver un valor negativo(-1) si el primer valor es inferior al segundo
//   - Devolver un valor cero(0) si los dos valores son iguales o equivalentes para la ordenacion

// SORT() en NUMEROS
// let numeros = [10, 5, 8, 3, 1];
// console.log(numeros.sort(function(a, b) {
//     return a - b;
// }));

// FUNCION FLECHA
// console.log(numeros.sort((a, b) => {
//   return a - b;
// }));

// SORT() en CADENAS
let paco = ['joan', 'amparo', 'esther', 'amparo', 'Zoraida', 'Barbara', 'Ángel'];
// console.log(paco.sort((a, b) => {
//     return (a.toLowerCase() > b.toLowerCase()) ? 1 : 
//     (a.toLowerCase() < b.toLowerCase()) ? -1 : 0;
// }));

console.log(paco.sort((a, b) => {
    return a.localeCompare(b);
}));