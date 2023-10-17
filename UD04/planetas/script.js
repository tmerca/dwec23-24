//Array con los nombres de los planetas que he elegido
let nombrePlaneta= ["Mercurio", "Venus", "Marte", "Jupiter", "Urano"];
// El array distanciaAlSol está en Km
let distanciaAlSol = [58000000, 108000000, 228000000, 750000000, 3000000000];
// Número de planeta Tierra que se necesitan para igualar el diámetro
let tamañoRelativo = [0.38, 0.86, 2, 11, 63];

let fecha = new Date();
let fechaDescubrimiento = [fecha.getDate(), fecha.getTime(), fecha.getTime(), fecha.getTime(), fecha.getTime()];

//CONSTRUCTOR DE PLANETAS

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

for(i = 0; i < distanciaAlSol.length; i++){
    planetas[i] = new Planeta();
    planetas[i].nombrePlaneta = nombrePlaneta[i];
    planetas[i].distanciaAlSol = distanciaAlSol[i];
    planetas[i].tamañoRelativo = tamañoRelativo[i];
    planetas[i].fechaDescubrimiento = fechaDescubrimiento[i];
    console.log(planetas[i].muestraInformacion());
}
