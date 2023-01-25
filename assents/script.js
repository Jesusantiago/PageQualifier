const central = document.querySelector("[data-tipo='div-central']");
const n1 = document.querySelector("[data-tipo='n1']");
const n2 = document.querySelector("[data-tipo='n2']");
const n3 = document.querySelector("[data-tipo='n3']");
const n4 = document.querySelector("[data-tipo='n4']");
const n5 = document.querySelector("[data-tipo='n5']");
const button = document.querySelector("[data-tipo='button']");

const divgracias = document.querySelector("[data-tipo='gracias']");
const segundapagina = document.querySelector("[data-tipo='calificacion]");



const select1 = n1.innerHTML;
const select2 = n2.innerHTML;
const select3 = n3.innerHTML;
const select4 = n4.innerHTML;
const select5 = n5.innerHTML;

const textoGracias = divgracias;


// const gracias = () => {
//     alert("Hola")
//     textoGracias.classList.add("div-central-gracias");
// }

const calificacion = () => {
    central.style.display = "none";
}

const juego = () =>{
    // gracias();
    calificacion();

    alert(textoGracias)    
}

    n1.addEventListener("click", juego);
    n2.addEventListener("click", juego);
    n3.addEventListener("click", juego);
    n4.addEventListener("click", juego);
    n5.addEventListener("click", juego);


    button.addEventListener("click", juego);