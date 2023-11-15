const start = document.querySelector('.start');
const wrapper = document.querySelector('.wrapper-popup');
const close = document.querySelector('.close-popup');


start.addEventListener('click', () => {
    wrapper.style.display = 'block';
});

close.addEventListener('click', () => {
    wrapper.style.display = 'none';
});

wrapper.addEventListener('click', () => {
    wrapper.style.display = 'none';
});

// Array de objetos llamado questions
const questions = [
    {
        questio: "Quin país té més població?",
        respostaCorrecta: "La Xina",
        respostaIncorrecta: "L'India",
    },
    {
        questio: "El primer astronàuta a trepitjar la Lluna va ser?",
        respostaCorrecta: "Neil Amstrong",
        respostaIncorrecta: "Louis Amstrong",
    },
    {
        questio: "2 + 2...?",
        respostaCorrecta: "4",
        respostaIncorrecta: "5",
    },
    {
        questio: "Quànts cors tenen els pops?",
        respostaCorrecta : "3",
        respostaIncorrecta : "1"
    }
];

let indexQuestioActual = 0;
let respostesCorrectes = 0;
let respostesIncorrectes = 0;

const question = document.getElementById("question");
const btnLeft = document.getElemenyById("btnLeft");
const btnRight = document.getElementById("btnRight");
const message = document.getElementById("message");
const btnRestart = document.getElementById("btnRestart")

function barrejaRespostes(correcta, incorrecta){
    //Array con correcta e incorrecta
    const respostes = [correcta, incorrecta];
    //Funcion flecha para ordenar al azar
    respostes.sort(() => Math.random() - 0.5);
    return respostes;
}