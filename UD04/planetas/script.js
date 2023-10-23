//Array con los nombres de los planetas que he elegido
let nombrePlaneta= ["Jupiter", "Urano", "Marte", "Mercurio", "Venus"];
// El array distanciaAlSol está en Km
let distanciaAlSol = [750000000, 3000000000, 228000000,58000000, 108000000];
// Número de planeta Tierra que se necesitan para igualar el diámetro
let tamañoRelativo = [0.38, 63, 2, 1321, 0.86];

let fecha = new Date();
let fechaDescubrimiento = [fecha.getTime(), fecha.getTime(), fecha.getTime(), fecha.getTime(), fecha.getTime()];

// CONSTRUCTOR DE PLANETAS
// ponemos las propiedades necesarias para luego coger los datos del array y tambien
// una funcion para retornar toda la información del Objeto
function Planeta(){
    this.nombrePlaneta;
    this.distanciaAlSol;
    this.tamañoRelativo;
    this.fechaDescubrimiento;
    this.muestraInformacion = function(){
        return "Nombre del planeta: " + this.nombrePlaneta + "\n" + 
        "Distancia al Sol(Km): " + this.distanciaAlSol + "\n"+
        "Tamaño relativo respecto a la tierra: " + this.tamañoRelativo + "\n" +
        "Fecha: " + this.fechaDescubrimiento + "\n";
    }
}

let planetas = [];

// Bucle For para poder rellenar el array vacío llamado planetas y
for(i = 0; i < distanciaAlSol.length; i++){
    planetas[i] = new Planeta();
    planetas[i].nombrePlaneta = nombrePlaneta[i];
    planetas[i].distanciaAlSol = distanciaAlSol[i];
    planetas[i].tamañoRelativo = tamañoRelativo[i];
    planetas[i].fechaDescubrimiento = fechaDescubrimiento[i];
}

// Método para ordenar los planetas por distancia al sol
planetas.sort((a,b) => {
    return a.distanciaAlSol - b.distanciaAlSol;
});

// Bucle para mostrar la información de los planetas ordenados por distancia
for(i = 0; i < planetas.length; i++){
    console.log(planetas[i].muestraInformacion());
}