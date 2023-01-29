
const padreImput = document.querySelector("[data-tipo='PadreImput']");
// const usuarioInput = document.querySelector("[data-tipo='calificacionImput']");
const n1 = document.querySelector("[data-tipo='n1']");
const n2 = document.querySelector("[data-tipo='n2']");
const n3 = document.querySelector("[data-tipo='n3']");
const n4 = document.querySelector("[data-tipo='n4']");
const n5 = document.querySelector("[data-tipo='n5']");

// const valorDigitado = [select1, select2, select3, select4, select5];

// for(let i = 0; i < valorDigitado.length, i++) {
    

// }

const select1 = n1.innerHTML;
const select2 = n2.innerHTML;
const select3 = n3.innerHTML;
const select4 = n4.innerHTML;
const select5 = n5.innerHTML;

const valorObtenido = document.createElement("h1");
valorObtenido.classList.add("calificacion-titulo")
valorObtenido.textContent = ("You select " + select1 + " of 5.");

padreImput.appendChild(valorObtenido);




n1.addEventListener("click", valorIngresado);
n2.addEventListener("click", valorIngresado);
n3.addEventListener("click", valorIngresado);
n4.addEventListener("click", valorIngresado);
n5.addEventListener("click", valorIngresado);

function impirmirTitulo1 () {
    
} 

const central = document.querySelector("[data-tipo='div-central']");
const button = document.querySelector("[data-tipo='button']");
const tarjeta2 = document.querySelector("[data-tipo='tarjeta2']");
const cambio = document.getElementById("cambio")
const segundapagina = document.querySelector("[data-tipo='calificacion]");
const img = document.getElementById("img");

    const problema = tarjeta2.innerHTML;

const gracias = () => {
    
    const cambio1 = cambio.classList.replace("adios", "div-central-gracias")
    const cambioImg = img.classList. replace("adios", "img-celular")
   }

const calificacion = () => {
    central.style.display = "none";
    gracias();
    console.log(select1)
}
    
button.addEventListener("click", calificacion);