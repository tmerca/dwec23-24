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