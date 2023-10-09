// Variables 2010
let any2010Juny = 25.8;
let any2010Juliol = 28.6;
let any2010Agost = 30.1;

// Variables 2015
let any2015Juny = 26.5;
let any2015Juliol = 29.3;
let any2015Agost = 30.8;

//Variables 2020
let any2020Juny = 27.2;
let any2020Juliol = 29.9;
let any2020Agost = 31.5;


// Calculo de variables de temperatura mediana para cada año
let mitjanaAny2010 = ((any2010Juny + any2010Juliol + any2010Agost) / 3);
mitjanaAny2010 > 30 ? "Temperatura mayor que 30" : "Temperatura menor que 30";
let mitjanaAny2015 = (any2015Juny + any2015Juliol + any2020Agost) / 3;
mitjanaAny2015 > 30 ? "Temperatura mayor que 30" : "Temperatura menor que 30";
let mitjanaAny2020 = (any2020Juny + any2020Juliol + any2020Agost) / 3;
mitjanaAny2020 > 30 ? "Temperatura mayor que 30" : "Temperatura menor que 30";


//Convertir la temperatura mediana de Celsius a Fahrenheit y Kelvin
let mitjanaAny2010Fahrenheit = (mitjanaAny2010 * 9/5) + 32;
let mitjanaAny2010Kelvin = (mitjanaAny2010 + 273.15); 

let mitjanaAny2015Fahrenheit = (mitjanaAny2015 * 9/5) + 32;
let mitjanaAny2015Kelvin = (mitjanaAny2015 + 273.15); 

let mitjanaAny2020Fahrenheit = (mitjanaAny2020 * 9/5) + 32;
let mitjanaAny2020Kelvin = (mitjanaAny2020 + 273.15);

//Utilizar variables booleanas para representar si
//la temperatura media supera los 30 grados Celsius cada año

let superatAny2010 = mitjanaAny2010 > 30 ? true : false;
let superatAny2015 = mitjanaAny2010 > 30 ? true : false;
let superatAny2020 = mitjanaAny2010 > 30 ? true : false;


//Mostrar por consola las temperaturas medianas en celsius, fahrenheit y kelivin para cada año
console.log("Temperatura media 2010 en Celsius: " + mitjanaAny2010)
console.log("Temperatura media 2010 en Fahrenheit: " + mitjanaAny2010Fahrenheit)
console.log("Temperatura media 2010 en Kelvin: " + mitjanaAny2010Kelvin);
if(superatAny2010){
    console.log("La temperatura media en 2010 ha sido mayor a 30 grados");
} else {
    console.log("La temperatura media en 2010 ha sido menor a 30 grados");
}

console.log("Temperatura media 2015 en Celsius: " + mitjanaAny2015)
console.log("Temperatura media 2015 en Fahrenheit: " + mitjanaAny2015Fahrenheit)
console.log("Temperatura media 2015 en Kelvin: " + mitjanaAny2015Kelvin);
if(superatAny2015){
    console.log("La temperatura media en 2015 ha sido mayor a 30 grados");
} else {
    console.log("La temperatura media en 2015 ha sido menor a 30 grados");
}

console.log("Temperatura media 2020 en Celsius: " + mitjanaAny2020)
console.log("Temperatura media 2020 en Fahrenheit: " + mitjanaAny2020Fahrenheit)
console.log("Temperatura media 2020 en Kelvin: " + mitjanaAny2020Kelvin);
if(superatAny2020){
    console.log("La temperatura media en 2020 ha sido mayor a 30 grados");
} else {
    console.log("La temperatura media en 2020 ha sido menor a 30 grados");
}