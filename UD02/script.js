// function saluda() {
//     console.log("Hola cara de bola");
// }

// var  let  const

let uno = 1; let dos = 2;
console.log(uno + dos);

// String

let nombre = "Andreu";
let apellido = 'Mercadal';
let nombreCompleto = "Andreu Mercadal, alumno de DWEC";
let comillas = 'Texto \'entrecomillado\'';

console.log(comillas);


// Numeros 

let edad = 26;
let masEdad = 66;

// null
let valor = null;
console.log(typeof valor);



// undefined
let hola;

// NaN
let miEdad = "26";
console.log(miEdad / 2);


// typeOf, delete
let persona = {
    nombre : "Andreu",
    edad : 19
}

console.log(persona.edad);
delete persona.edad;
console.log(persona.edad);


// booleanos
let messi = true;
let penaldo = false; //falsy

// null
// "" (String vacio)
// undefined
// 0
// NaN

let indefinida;

if(!indefinida){
    console.log("Hola");
} else{
    console.log("Adios");
}

// operadores aritmeticos
// -> Operaciones Matemáticas

// +  a + b
// -  a - b
// *  a * b
// /  a / b
// %  a % b (módulo)

// ++ incremento a++, ++a;

// -- decremento a--, --a;

// += suma y asigna  a+=b -> a = a + b;

// -= resta y asigna a-=b -> a = a - b;

// *= multiplica y asigna a*=b -> a = a * b;

// /= divide y asigna a/=b -> a = a / b;

// %= modula y asigna a%=b -> a = a % b;

// - cambio de signo // a = 5, b = -a, b = -5;



// Conversión de tipos 
let a = "5";
let b = "6";

console.log(typeof a, typeof b);

// let A = +a;
// let B = +b;

let c = "4.52";
let C = +c;

console.log(+a + +b);
console.log(typeof a, typeof b);


// Operadores de comparación 
// -> Comparar dos valores y devolver un resultado booleano

// > mayor que
//console.log(5 > 4);

// < menor que
//console.log(5 < 4);

// >= mayor o igual que
//console.log(5 >= 4);

// <= menor o igual que
//console.log(5 <= 4);

// == igual que (comparación a valor)
//let d = 5;
//let e = 6;
//console.log(4 == 4);

// != distinto que 
// === igual en valor y tipo que
// !== distinto en valor o tipo que
// console.log(d !== e);


// Operadores booleanos 
// -> Permiten comparar expresiones booleanas con las que se construyen condiciones
// que se pueden aplicar en funciones, bucles, etc.

// && AND solo devuelve true cuando ambos operadores lo son
/*
    true && true -> true
    true && false -> false
    false && true -> false
    false &&  false -> false
*/


// || OR Devuelve true si cualquiera de ambos operadores lo es

/*
    true || true -> true
    true || false -> true 
    false || true ->  true
    false || false -> false

*/ 

// let f = true;
// let h = true;
// console.log(f && h);

// let cadena;
// if(cadena){
//     console.log(cadena.length);
// }else {
//     console.log("la cadena está vacía");
// }

// ! NOT Devuelve lo contrario al operando
// let g = true;
// console.log(!g);