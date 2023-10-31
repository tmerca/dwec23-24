<<<<<<< HEAD
let numeros = prompt("Escrib    e un número de 4 cifras con dos diferentes como mínimo");
=======
let numeros = prompt("Escibre un número de 4 cifras con dos diferentes como mínimo");
>>>>>>> 4254365b474556409d2116bf947691cdc218802d

comprobarNumero(numeros);

function comprobarNumero(numero){
    
    if(numero.length == 4){

        // DOS VARIABLES AUXILIARES PARA COMPROBAR QUE NO SE REPITA MAS DE DOS VECES UN DIGITO
        let contador = 0;
        let aux = [...numero];

        // FUNCION FLECHA PARA ORDENAR EL ARRAY AUXILIAR
        aux.sort((a,b) => {
            return a - b;
        });

        //COMPROBACIÓN + MENSAJE
        for(i = 0; i < aux.length; i++){
            if(aux[i] == aux[i + 1]){
                contador += 1;
            }
        }

        if(contador >= 2){
            alert('El numero contiene 3 cifras o mas iguales');
        }

        let intentos = 1;
        const kaprekar = 6174;
        let resultadoResta = [];
        let arrayNumero = [...numero];
        

        do{
            
            let arrayMayorAMenor = [...arrayNumero];
            arrayMayorAMenor.sort((a, b) =>{
                return b - a;
            });
            
            console.log(arrayMayorAMenor);

            let mayorAMenor = "";
            
            for(i = 0; i < arrayMayorAMenor.length; i++){
                mayorAMenor = mayorAMenor.concat(arrayMayorAMenor[i]);
            }

            let arrayMenorAMayor = [...arrayNumero];
            arrayMenorAMayor.sort((a, b) =>{
                return a - b;
            });

            console.log(arrayMenorAMayor);

            let menorAMayor = "";

            for(i = 0; i < arrayMenorAMayor.length; i++){
                menorAMayor = menorAMayor.concat(arrayMenorAMayor[i]);
            }

            // console.log("Vuelta número " + intentos + ": Ordenado de menor a mayor: " + menorAMayor);
            // console.log("Vuelta número " + intentos + ": Ordenado de mayor a menor: " + mayorAMenor);
            
            resultadoResta = mayorAMenor - menorAMayor;

            console.log("Resultado de la resta: " + resultadoResta);

            arrayNumero = [...resultadoResta];

            if(resultadoResta == kaprekar){
                console.log("Proceso finalizado en " + intentos + " vueltas");
                intentos = 8;
            }
            
            intentos++;

        }while(intentos < 8 &&  resultadoResta != kaprekar);

    }
    else{alert('El número introducido no es de 4 cifras');}

}
