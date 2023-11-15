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

// let paras = document.getElementsByTagName('p');
// let hijo = paras[1]; // Ponemos que hijo sea la segunda ocurrencia del tag P
// console.log(hijo);
// let padre = hijo.parentNode; // Ponemos a padre la etiqueta superior a hijo
// console.log(padre);
// let primerHermano = padre.firstElementChild; // Ponemos a primerHermano la primera etiqueta dentro de esta
// console.log(primerHermano);
// let siguienteHermano = hijo.nextElementSibling; // Ponemos a siguienteHermano la siguiente etiqueta de primerHermano
// console.log(siguienteHermano);


// EVENTOS
// Acciones que ocurren en la página web (clicks, mover/poner el ratón, entradas del teclado)

//Referenciamos el elemento del DOM
// const par = document.querySelector('p');
//Creamos un evento para ese elemento
// par.addEventListener('click', (e) => {
//     // escribeLog();
//     console.log(e.target.innerText);
//     e.target.innerText = "Texto cambiado";
//     console.log(e.target.innerText);
// });

// par.addEventListener('mouseover',() =>{
//     console.log("He pasado el raton por encima");    
// });

// function escribeLog(){
//     console.log('He hecho click sobre el primer parráfo');
// }

// document.addEventListener("keydown", (e) => {
//     console.log("Tecla presionada: " + e.key);
// });