/*ELEMENTOS DEL DOM*/

//Elemento article class: class-container
const seccionContenedor = document.querySelector(".contenedor")

//Elemento Generar Paleta en DOM
const btnGenerarPaleta = document.getElementById('botonGenerarPaleta')

//Btn Generar Card
const btnGenerarCard = document.querySelector("#botonGenerarCard")

//Radio Button Colores
const radioBtnColor = document.querySelector("#contenedor-radio-colores")


/*FUNCIONES*/

//Funcion generar aleatorio
function generarAleatorio(){
    let aleatorio_paleta = Math.floor(Math.random()*23);
    return aleatorio_paleta;
}

//Funcion Añadir Card: Genera una nueva card basandome en el valor enviado en los radio Buttons
function anadirCard(){
    let i = 0;    
    seccionContenedor.innerHTML = "";
    //Añado el valor del radio button seleccionado a una variable, si no hay ninguno seleccionado, se asigna un valor por defecto de 6
    const radioBtnSeleccionado = document.querySelector('input[name="palette-size"]:checked');
    const valor = radioBtnSeleccionado ? radioBtnSeleccionado.value : 6;
    do{
        crearCard()
        i++;
        console.log(i)
    }while(i<parseInt(valor))
    i=1;
}


function valoresRadio(){
    console.log(event.target.value)
}

function crearCard(){
    //Creo el article que contiene la card    
        const nuevoArticle = document.createElement("article");
        nuevoArticle.classList.add("class-container");
        // creo el div que es la card
        const nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("layer-top")
        //creo el parrafo que tiene el nombre del color
        const parrafoColor = document.createElement("p");        
        parrafoColor.classList.add("texto-color");
        parrafoColor.textContent = "color"

        seccionContenedor.appendChild(nuevoArticle);
        nuevoArticle.appendChild(nuevoDiv);
        nuevoArticle.appendChild(parrafoColor);
}

radioBtnColor.addEventListener('change', anadirCard)

// Generar cards por defecto cuando carga la página
anadirCard()










//Funcion cambiar color: Cambia de paleta de colores al darle clic al boton







