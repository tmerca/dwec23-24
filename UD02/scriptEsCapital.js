let esCapital = false;
let numeroCiudadanos = 200001;
let impuestoPorCiudadano = 301;
const Metropolis = false;

if(esCapital == true && numeroCiudadanos > 100000){
    console.log(!Metropolis);

}else if ((numeroCiudadanos > 200000) && ((numeroCiudadanos * impuestoPorCiudadano * 12) > 720000000)){
    console.log(!Metropolis);

}else{
    console.log(Metropolis);

}