let tabla1 = new Array(11);

for(let i = 0; i < tabla1.length; i++){
    tabla1[i] = new Array(11);
}

for(let fila = 0; fila < tabla1.length; fila++){
    console.log("Números impares de la tabla del " + fila + ":");
    let arrayInterior = tabla1[fila];
    for(let col = 0; col < arrayInterior.length; col++){
        arrayInterior[col] = fila * col;
        if(arrayInterior[col] % 2 != 0){
            console.log(arrayInterior[col]);
        }        
    }
}