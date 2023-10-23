//Array con los nombres de los planetas que he elegido
let nombrePlaneta= ["Jupiter", "Urano", "Marte", "Mercurio", "Venus"];
// El array distanciaAlSol está en Km
let distanciaAlSol = [750000000, 3000000000, 228000000,58000000, 108000000];
// Número de planeta Tierra que se necesitan para igualar el diámetro
let tamañoRelativo = [0.38, 63, 2, 1321, 0.86];

let fecha = new Date();
let fechaDescubrimiento = [fecha.getTime(), fecha.getTime(), fecha.getTime(), fecha.getTime(), fecha.getTime()];

// CLASE PLANETA
// ponemos las propiedades necesarias para luego coger los datos del array y tambien
// una funcion para retornar toda la información de la clase
class Planeta {
    constructor(nombre, distancia, tamaño){
        this.nombre = nombre;
        this.distancia = distancia;
        this.tamaño = tamaño;
    }

    muestraInformacion(){
        console.log(`Planeta llamado ${this.nombre} con una distancia al sol de ${this.distancia} kilómetros y un tamaño de ${this.tamaño} tierras`);
    }

}

let planetas = [];

for(i = 0; i < distanciaAlSol.length; i++){
    planetas[i] = new Planeta(nombrePlaneta[i], distanciaAlSol[i], tamañoRelativo[i]);
}
