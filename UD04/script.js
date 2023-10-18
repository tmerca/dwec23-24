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
    // let paco = ['joan', 'amparo', 'esther', 'amparo', 'Zoraida', 'Barbara', 'Ángel'];
    // console.log(paco.sort((a, b) => {
        //     return (a.toLowerCase() > b.toLowerCase()) ? 1 : 
        //     (a.toLowerCase() < b.toLowerCase()) ? -1 : 0;
        // }));
        
    //     console.log(paco.sort((a, b) => {
    //         return a.localeCompare(b);
    //     }));
    // let otros = [1,4,6,3,10,-10];



    // FUNCIONES

    // function diHola(){
    //     console.log("Hola");
    // }
    // diHola();

    // let resultado = multiplica(3,10);
    // console.log(resultado);
    // function multiplica(c, d){
    //     let a = 10;
    //     let b = 20;
        
    //     return (a * b * c * d);
    // }




    // OBJETOS

    // let unCliente = {
    //     //clave   //valor
    //     nombre : "Peter",
    //     apellido : "Jackson",
    //     "dirección fiscal" : "C/ Desconocida", 
    //     '-+-+-+' : "boquepasa",
    //     pago : {
    //         tipo: "Visa",
    //         tarjeta: "123456789",
    //         "fecha de caducidad" : "nunca"
    //     },
    //     vencimiento : 30
    // }
    // unCliente["vencimiento"] = 60;
    
    // unCliente.apellido = "Garcia";
    // console.log(unCliente.apellido);
    // console.log(unCliente);


    // METODOS COMO ELEMENTOS
    // let estudiante = {
    //     id: 2,
    //     nombre: "Joan",
    //     notas: [10,0,5],
    //     muestraMedia: function(){
    //         let notaMedia = (estudiante.notas[0] + estudiante.notas[1] + estudiante.notas[2]) / 3;
    //         return "La nota media de " + estudiante.nombre + " es de " + notaMedia
    //     }
    // }
    // estudiante.apellido = "Melsión";

    // estudiante.diAdios = function(){
    //     return "Adios";
    // }

    // console.log(estudiante.diAdios());



    // PALABRA RESERVADA THIS
    // let factura = {
    //     descripcion : "Factura de prueba",
    //     precio : 100.0,
    //     iva : 21.0,
    //     subtotal : function(){
    //         return this.precio;
    //     },
    //     total: function() {
    //         return this.precio + (this.precio * this.iva)/100;
    //     }
    // }

    // console.log(factura);
    // console.log(factura.total());



    //CONSTRUCTORES

    // function Web(){
    //     this.url = "http://localhost";
    //     this.nombre = "Localhost";
    //     this.muestraInformacion = function(){
    //         return "Url: " + this.url + "\n" + "Web: " + this.nombre;
    //     }
    // }
    
    // Web.prototype.visitas = 2;
    // Web.prototype.miFuncion = function(){
    //     return "Hola";
    // }

    // let otraInstancia = new Web();
    // otraInstancia.url = "http://tracker.gg";
    // otraInstancia.nombre = "Ver estadísticas"

    // console.log(otraInstancia.visitas);
    // console.log(otraInstancia.miFuncion());

// const ciudades = [
//     {
//         municipio: "Zaragoza",
//         provincia: "Zaragoza"
//     },
//     {
//         municipio: "Ávila",
//         provincia: "Ávila" 
//     },
//     {
//         municipio: "Madrid",
//         provincia: "Madrid" 
//     },
//     {
//         municipio: "Barcelona",
//         provincia: "Barcelona" 
//     }
// ];

// console.log(ciudades);

// ciudades.sort((a, b) => {
//     return a.provincia.localeCompare(b.provincia);
// });

// console.log(ciudades);



//  ES6

// const miArray = ["A", "b", "C"];
// miArray.push("D");
// console.log(miArray);
// miArray[1] = "B";
// console.log(miArray);

// DESESTRUCTURACIÓN

// const numeros = [1, 2, 3, 4];
// const [a, b, c] = numeros;
// console.log(a, b, c);

// const persona = {
//     nombre : "Andreu",
//     edad : 33
// };

// const {nombre, edad} = persona;

// console.log(nombre);

// const nombre = "Josep";
// const edad = 33;

// const persona = {
//     nombre,
//     edad
// }

// console.log(persona);

// TEMPLATE STRINGS - PLANTILLAS DE CADENAS
// Operador de interpolación ${}

// const nombre = "Bob";
// const edad = 32;

// const mensaje = `Hola, mi nombre es ${nombre} y mi edad es ${edad}`;
// console.log(mensaje);


// OPERADOR SPREAD
// const numeros = [1, 2, 3];
// const nuevosNumeros = [...numeros, 4, 5];

// console.log(nuevosNumeros);


// PARAMETROS POR DEFECTO
// function saludar(nombre = "Invitado") {
//     console.log(`Hola, ${nombre}`);
// }

// saludar();


// PARAMETROS REST (REST PARAMETER)
// function sumar(...numeros){
//     let resultado = 0;

//     for(let numero of numeros){
//         resultado += numero;
//     }

//     return resultado;
// }

// console.log(sumar(5, 4, -1, 6, 3, 65, 1001, -666));



// FUNCIONES FLECHA () => {}

// function sumar(a,b){
//     return a + b; 
// }

// const sumar = (...numeros) => {
    
//     let resultado = 0;

//     for(let numero of numeros){
//         resultado += numero;
//     }

//     return resultado;
// };

// console.log(sumar(3, 5, 9 ,10));


// MÉTODOS DE ARRAYS
// FOR EACH -> Ejecuta una función (nuestra) una vez por cada elemento del array

// const multiplica = (n) => {
//     return n * 2;
// };

// numeros.forEach((numero) => {
    //     console.log(multiplica(numero));
// });

// console.log(numeros);


// METODO MAP()
// Crea un nuevo array con los resultados de aplicar una funcion a cada elemento del array
// const dobleNumero = numeros.map((numero) => {
    //     return numero * 2;
    // });
    
    // const dobleNumero = numeros.map((numero) => {
        //     return multiplica(numero);
        // });
        
        // console.log(dobleNumero);
        
        
        // FILTER()
        // crea un nuevo array con todos los elementos que cumplan una condicion determinada
        
        // const numerosPares = numeros.filter((numero) => {
            //     return numero % 2 === 0;
            // });
            
            
            // REDUCE()
            // Aplica una funcion a un acumulador y a cada
            // elemento del array (de izquierda a derecha) para
            // a un ÚNICO valor
            
            // const suma = numeros.reduce((acumulador, numero) => {
//     return acumulador + numero;
// }, 0);

// console.log(suma);


// FIND()
// Devuelve el primer elemento del array que cumpla una determinada condicion
// const numeroEncontrado = numeros.find((numero) => {
//     return numero < 3;
// });
    
// console.log(numeroEncontrado);

const numeros = [1, 2, 3, 4, 5];

// FINDINDEX()
// Devuelve el primer elemento del array que cumple con una función de prueba o
// retornará -1 si no encuentra nada

// const indiceEncontrado = numeros.findIndex((numero) => {
//     return numero < 3;
// });

// console.log(indiceEncontrado);



// SOME()
// Comprueba si almenos un elemento del array cumple una condicion determinada

const tieneNumeroPar = numeros.some((numero) => {
    return numero % 2 === 0;
});

//console.log(tieneNumeroPar);

// if(numeros.some((numero) => {
//     return numero % 2 === 0;
// })) {
//     console.log("Funciona");
// }

// EVERY()
// Comprueba si TODOS los elementos del array cumplen una condición

const todosNumerosPares = numeros.every((numero) => {
    return numero % 2 === 0;
});

console.log(todosNumerosPares);