
const padreImput = document.querySelector("[data-tipo='PadreImput']");
// const usuarioInput = document.querySelector("[data-tipo='calificacionImput']");
const n1 = document.querySelectorAll(".numero");
const actualRating = document.querySelector(".rating")

n1.forEach((numero) => {
    numero.addEventListener("click", () => {
        actualRating.innerHTML = numero.innerHTML
    })
})


const central = document.querySelector("[data-tipo='div-central']");
const button = document.querySelector("[data-tipo='button']");
const tarjeta2 = document.querySelector("[data-tipo='tarjeta2']");
const cambio = document.getElementById("cambio")
const segundapagina = document.querySelector("[data-tipo='calificacion]");
const img = document.getElementById("img");

    // const problema = tarjeta2.innerHTML;

const gracias = () => {
    
    const cambio1 = cambio.classList.replace("adios", "div-central-gracias")
    const cambioImg = img.classList. replace("adios", "img-celular")
   }

const calificacion = () => {
    central.style.display = "none";
    gracias();

}
    
button.addEventListener("click", calificacion);