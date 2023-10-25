let numero = prompt("Escibre un número de 4 cifras con dos diferentes como mínimo");

comprobarNumero(numero);

function comprobarNumero(numero){
    
    if(numero.length == 4){

        // DOS VARIABLES AUXILIARES PARA COMPROBAR QUE NO SE REPITA MAS DE DOS VECES UN DIGITO
        let contador = 0;
        let aux = [...numero];

        // FUNCION FLECHA PARA ORDENAR EL ARRAY AUXILIAR
        aux.sort((a,b) => {
            return a - b;
        });

        //COMPROBAMOS QUE NO SE REPITA MAS DE DOS VECES LA MISMA CIFRA
        for(i = 0; i < aux.length; i++){
            if(aux[i] == aux[i + 1]){
                contador += 1;
            }
        }

        // MENSAJE POR SI EL CONDICIONAL SE CUMPLE
        if(contador >= 2){
            alert('El numero contiene 3 cifras o mas iguales');
        }

        let intentos = 0;
        let kaprekar = 6174;
        let resultadoResta;

        while(intentos < 7 || resultadoResta != kaprekar){
            /*
                Pongo la variable numero en un array y lo ordeno de menor a mayor
            */
            let menorAMayor = [...numero];
            menorAMayor.sort((a, b) =>{
                return a - b;
            });
    
    
            /*
                Pongo la variable numero en un array y lo ordeno de mayor a menor
            */
            let mayorAMenor = [...numero];
            mayorAMenor.sort((a, b) =>{
                return b - a;
            });

            resultadoResta = parseInt(mayorAMenor) - parseInt(menorAMayor);

            intentos++;
        }


    }
    else{alert('El número introducido no es de 4 cifras');}

}
