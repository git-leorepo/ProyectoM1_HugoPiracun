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

//Funcion para generar colores aleatorios en formato hexadecimal
function generarHexadecimal() {
    const caracteresHexadecimales = "0123456789ABCDEF";
    let hexadecimal = "#";
    for (let i = 0; i < 6; i++) {
        hexadecimal += caracteresHexadecimales[Math.floor(Math.random() * 16)];
    }
    return hexadecimal;
}

//Funcion para convertir de hexadecimal a HSL
function hexToHSL(hex) {
  // 1. Eliminar el '#' si existe y convertir a valores RGB
    hex = hex.replace(/^#/, '');
    
    let r = parseInt(hex.substring(0, 2), 16) / 255;
    let g = parseInt(hex.substring(2, 4), 16) / 255;
    let b = parseInt(hex.substring(4, 6), 16) / 255;

    // 2. Encontrar el máximo y mínimo para calcular la luminosidad
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // Acromático (gris)
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    // 3. Formatear los resultados
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return `hsl(${h}, ${s}%, ${l}%)`;
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

//Funcion para crear el elemento card y todo lo que conlleva adentro del article, como el div y el parrafo con el nombre del color
function crearCard(){
    //Creo el article que contiene la card    
        const nuevoArticle = document.createElement("article");
        nuevoArticle.classList.add("class-container");
        // creo el div que es la card
        const nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("layer-top");
        const colorAleatorio = generarHexadecimal();
        nuevoDiv.style.backgroundColor = colorAleatorio;

        //creo el parrafo que tiene el nombre del color
        const parrafoColor = document.createElement("p");        
        parrafoColor.classList.add("texto-color");
        parrafoColor.textContent = hexToHSL(colorAleatorio);

        seccionContenedor.appendChild(nuevoArticle);
        nuevoArticle.appendChild(nuevoDiv);
        nuevoArticle.appendChild(parrafoColor);
}

radioBtnColor.addEventListener('change', anadirCard)

// Generar cards por defecto cuando carga la página
anadirCard()








