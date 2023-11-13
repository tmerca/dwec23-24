//QUERY SELECTOR (querySelector)
/*
    Pide como parámetro un selector CSS
*/
// const para = document.querySelector('p');
// console.log(para);

//QUERY SELECTOR ALL (querySelectorAll)
/*
    Pide como parámetro un selector CSS
*/
// const paras = document.querySelectorAll('p');
// console.log(paras);
// console.log(paras[2]);

// paras.forEach(para => {
//     console.log(para);
// });

// GET ELEMENT BY ID (getElementById)
/*
    El parámetro no es un selector, es el nombre del identificador (id)
*/    
// const titulo = document.getElementById('titulo');
// console.log(titulo);


// GET ELEMENTS BY CLASS NAME (getElementsByClassName)
/*
    El parámetro es el nombre de la clase asociada a ese elemento
*/ 
// const errors = document.getElementsByClassName('error');
// console.log(errors);

// GET ELEMENTS BY TAG NAME
// getElementsByTagName
/*
    El parámetro es el nombre del tag del elemento
*/

// const paras = document.getElementsByTagName('p');
// console.log(paras);

// Modificar el contenido de la página
//innerHTML
// let paras = document.querySelectorAll('p');
// let p1 = paras[0];
// let contenidoP1 = p1.innerText;
// console.log(contenidoP1);
// p1.innerHTML = "Requete";
// contenidoP1 = p1.innerHTML;
// console.log(contenidoP1);


// OBTENER Y ESTABLECER ATRIBUTOS
// let enlace = document.querySelector('a');
// let url = enlace.getAttribute("href");
// console.log(url);

// enlace.setAttribute('href', 'http://www.seat.es');
// url = enlace.getAttribute("href");
// console.log(url);


// AÑADIR Y ELIMINAR ESTILOS
// style
// let error = document.querySelector('body > div.error');
// error.style.backgroundColor = "teal";
// error.style.backgroundColor = "";

// AÑADIR ELIMINAR Y ACTUALIZAR CLASES
// let error = document.querySelector('body > div.error');
// error.classList.add("paco");
// error.classList.remove("error");    

let paras = document.getElementsByTagName('p');
let hijo = paras[1];
console.log(hijo);
let padre = hijo.parentNode;
console.log(padre);
let primerHermano = padre.firstElementChild;
console.log(primerHermano);
let siguienteHermano = hijo.nextElementSibling;
console.log(siguienteHermano);