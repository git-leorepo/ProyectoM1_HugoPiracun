/*ELEMENTOS DEL DOM*/

//Elemento Contenedor del DOM
const divContenedor = document.querySelector('.contenedor')
//Elemento Agregar Color del DOM
const btnAgregarItem = document.getElementById('botonAgregarColor')
//Elemento Generar Paleta en DOM
const btnGenerarPaleta = document.getElementById('botonGenerarPaleta')
//Arreglo de colores para paletas 
const paleta_1 = ["#FFC2D1","#FFE5B4","#FFF4BD","#C2F0D5","#BDEFF4","#D1E9FF","#E0D7FF","#F4D7F4","#E6E9ED"]
const paleta_2 = ["#0077B6","#00B4D8","#90E0EF","#CAF0F8","#F4D35E","#E9C46A","#F4A261","#D4A373","#FAF9F6"]
const paleta_3 = ["#06130B", "#112A1B", "#1E422B", "#2C5A3E", "#3B7351", "#5A9470", "#80B594", "#A9D6BB", "#D4F7E3"]
const paleta_4 = ["#240B36", "#3C1053", "#5A1874", "#821D88", "#AB2396", "#C23BA0", "#D953AA", "#EE70B5", "#FF8DC0"]
const paleta_5 = ["#3D342B", "#5C4F41", "#7C6A58", "#9C8771", "#B7A18A", "#D1BBA5", "#E6D4C1", "#F2E6D9", "#FAF5F0"]
const paleta_6 = ["#0B1D26", "#14303D", "#1D4554", "#285C6B", "#357482", "#51909E", "#75B0BC", "#A2D0D8", "#D4F0F2"]
const paleta_7 = ["#3E1C11", "#5D2A1A", "#7D3B26", "#9D4D34", "#BD6145", "#D07D63", "#E19B84", "#F0BBA9", "#FADED2"]
const paleta_8 = ["#210B2C", "#351246", "#4C1A63", "#652281", "#7F2BA1", "#9B4CC0", "#B772DD", "#D19DF5", "#EBC9FF"]
const paleta_9 = ["#4A2D05", "#6F4407", "#945C0A", "#B9740D", "#DF8C0F", "#EBA33D", "#F2BC6E", "#F9D69F", "#FFF0D1"]
const paleta_10 = ["#121417", "#23272E", "#363C46", "#4B535F", "#626B79", "#818A98", "#A4ADB9", "#CBD2DA", "#F0F2F5"]
const paleta_11 = ["#3A0E1A", "#5A1629", "#7A1E38", "#9A2647", "#BA3359", "#C95B7A", "#D8869C", "#E7B1BD", "#F6DDE2"]
const paleta_12 = ["#0D0D0D", "#1A1A1A", "#FF003C", "#FF0055", "#00E5FF", "#00FFAA", "#F3EC19", "#F7F7F7", "#FFFFFF"]
const paleta_13 = ["#1F130B", "#362214", "#4E311D", "#664126", "#7E5130", "#9A6F4F", "#B68F72", "#D3B198", "#EFD4C1"]
const paleta_14 = ["#051923", "#003554", "#006494", "#0582CA", "#00A6FB", "#4CC9F0", "#72EFDD", "#94FBAB", "#B5FFD9"]
const paleta_15 = ["#2D0320", "#4D0537", "#6E074E", "#8F0A65", "#B00C7C", "#C34098", "#D46EB2", "#E59CCC", "#F6CAE6"]
const paleta_16 = ["#1E261F", "#2D392E", "#3E4D3E", "#4F624F", "#617761", "#809780", "#A2B7A2", "#C5D7C5", "#E9F7E9"]
const paleta_17 = ["#1D1135", "#321E5C", "#4B2D8A", "#FF6B6B", "#FF8E8E", "#FFB0B0", "#4ECDC4", "#A6F1E0", "#F7FFF7"]
const paleta_18 = ["#2A0812", "#430D1D", "#5C1228", "#751733", "#8E1C3E", "#A5415B", "#BB677A", "#D28D9A", "#E9B4BB"]
const paleta_19 = ["#362210", "#523418", "#6F4620", "#8B5928", "#A86B30", "#C08D59", "#D6B086", "#EAD2B4", "#F9F4EE"]
const paleta_20 = ["#03071E", "#370617", "#6A040F", "#9D0208", "#D00000", "#DC2F02", "#E85D04", "#F48C06", "#FAA307"]
const paleta_21 = ["#312244", "#4D3866", "#6C528C", "#927CAF", "#B8A6D1", "#D2C4E3", "#E6DBF1", "#F3EDF9", "#FFFFFF"]
const paleta_22 = ["#1A1D1A", "#2B2F2B", "#3C413C", "#4E544E", "#606860", "#828C82", "#A4B0A4", "#C9D4C9", "#F0F5F0"]    

/*FUNCIONES*/

//Funcion Añadir Item: Genera un nuevo div con propiedades definidas

// el contador empieza en 6 porque inicialmente la paleta tiene 5 colores
let contadorColor = 6
// creo la variable let que va a cambiar con la funcion añadirItem
let nuevoItem

function anadirItem(){
    //maximo puedo adicionar 9 colores
    if(contadorColor<10){
        //Crear un nuevo Div
        const nuevoItem = document.createElement('div')
        //Crear el item, asigno el nombre item
        nuevoItem.textContent = 'item '+contadorColor
        //Asigno la clase colores al nuevo item
        nuevoItem.classList.add('colores')
        //le asigno un atributo name a la columna colores
        nuevoItem.setAttribute('name', 'c'+contadorColor);
        //le asigno un color vacio
        nuevoItem.style.backgroundColor = "";
        //crea el objeto Item
        divContenedor.appendChild(nuevoItem)
        
        contadorColor++
    }else{
        //AL haber añadido maximo 9 solores me genera un mensaje de alerta
        alert('No puedes generar mas colores')
    }
}


//Funcion cambiar color: Cambia de paleta de colores al darle clic al boton

function cambiarColor() {
    // Seleccionamos TODOS los elementos que tengan la clase 'colores' en este instante
    const todosLosColores = document.querySelectorAll('.colores');

    // Usamos un bucle para asignar los colores de la paleta dinámicamente
    todosLosColores.forEach((elemento, index) => {
        // Verificamos que exista un color en la paleta para este índice
        if (paletaUno[index]) {
            elemento.style.backgroundColor = paletaDos[index];
        }
    });
}


/*LLAMADO DE LAS FUNCIONES*/

//Al hacer click en Generar Paleta se acciona el addEventListener
btnGenerarPaleta.addEventListener('click', cambiarColor);
//Al hacer click en Añadir Item se acciona el addEventListener
btnAgregarItem.addEventListener('click', anadirItem)




