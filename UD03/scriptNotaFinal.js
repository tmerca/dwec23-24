let nomEstudiant = "Andreu";
let notaExamen1 = 7.90;
let notaExamen2 = 6.80;
let notaProjecte = 6.77;

//Variable que hace el cálculo para saber la nota final con los porcentajes indicados en el enunciado
let notaFinal = (notaExamen1 * 0.2) + (notaExamen2 * 0.2) + (notaProjecte * 0.6);

console.log("Nom de l'alumne: " + nomEstudiant);
console.log("Nota de l'examen 1: " + notaExamen1);
console.log("Nota de l'examen 2: " + notaExamen2);
console.log("Nota del projecte: " + notaProjecte);
console.log("");
console.log("Nota final: " + notaFinal);


//Condicional que muestra mensaje dependiendo de la nota final del alumno
if(notaFinal >= 7){
    console.log("Enhorabona " + nomEstudiant + " has aprovat el mòdul!");
}else{
    console.log("Em sap greu " + nomEstudiant + " però has suspés el mòdul");
}

