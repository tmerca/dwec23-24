// FUNCIONES
// setInterval() y setTimeOut()


/*
    setTimeOut(funcionALlamar, milisegundos)
    ejecuta la función funcionALlamar transcurrido el tiempo
    indicado en el segundo parámetro


    setInterval(funcionALlamar, milisegundos)
    Ejecuta la función funcionALlamar de manera periódica,
    según el tiempo del segundo parámetro

    
    clearInterval()
    detiene la ejecución iniciada con setInterval()


    clearTimeOut()
    Detiene la ejecucion iniciada con setTimeOut()
*/


function crono() {
    let elCrono;
    let miFecha = new Date();
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();
    let ampm = "pm";

    if(horas > 12){
        ampm = "pm";
    }else{
        ampm = "am";
    }

    if(horas < 10){horas = "0" + horas;}
    if(minutos < 10){minutos = "0" + minutos;}
    if(segundos < 10){segundos = "0" + segundos};

    let laHora = document.getElementById("laHora");
    
    laHora.innerHTML = horas + ":" + minutos + ":" + segundos + " " + ampm;  

}

window.onload = function(){
    elCrono = setInterval(crono,1000);        
    }