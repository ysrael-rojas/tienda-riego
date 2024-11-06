
const inputNroHermanos = document.getElementById("input-numero-hermanos");
const inputNombreHermano = document.getElementById("input-nombre-hermano");
const areaListadoHermanos = document.getElementById("area-listado-hermanos");

const hermanos = [];

function verificarDatos(nroHermanos) {

    if(isNaN(nroHermanos)){
        return alert("El dato ingresado no es un numero");   
    }
}

function agregarNombreHermanoLista() {

    if(hermanos.length < inputNroHermanos.value){

        hermanos.push(inputNombreHermano.value);
        listarHermanos(hermanos);

    }else {
        alert("LLENASTE LISTA HERMANOS");
    }

    
}



function listarHermanos(hermanos) {

    areaListadoHermanos.innerHTML = "";

    const ul = document.createElement("ul");     

    for(hermano of hermanos) {
        const li = document.createElement("li");
        li.textContent = hermano;
        ul.appendChild(li);
    }

    areaListadoHermanos.appendChild(ul);
}

function procesarHermanos() {

    document.getElementById("input-numero-hermanos").disabled = true;
    document.getElementById("btn-procesar-hermanos").disabled = true;
    document.getElementById("input-nombre-hermano").disabled = false;
    document.getElementById("btn-agregar-nombre-hermano").disabled = false;

}

function verificarParaDesabilitar() {

    if(hermanos.length===inputNroHermanos){
        inputNombreHermano.disabled = true;
        
    }

}

function generarHermanos() {

   

    const nroHermanos = Number(inputNroHermanos.value);
    console.log(nroHermanos);

    //verificarDatos(nroHermanos);

    let contador = 0;
/* 
    while (contador < nroHermanos) {
        contador++;
        const nombreHermano = prompt("Ingresa el nombre nro " + contador + ":");
        hermanos.push(nombreHermano);        
    }

    console.log(hermanos); */

}

function generarColorHex() {
    // Genera un número aleatorio entre 0 y 16777215 (el número máximo en base 16 para 6 dígitos hexadecimales)
    let colorAleatorio = Math.floor(Math.random() * 16777215).toString(16);
    
    // Asegurarse de que el valor tenga siempre 6 dígitos añadiendo ceros al principio si es necesario
    return "#" + colorAleatorio.padStart(6, '0');
}

function limpiarContenedor() {

    document.getElementById("contenedor").innerHTML = '';

}

function generarBloques() {

    limpiarContenedor();

    const nroBloques = Number(prompt("Ingresar el numero de bloques a generar"));

    let contador = 0;    
    
    const contenedor = document.getElementById("contenedor");    

    while(contador < nroBloques) {

        const nuevoElemento = document.createElement("div"); 
        nuevoElemento.style.backgroundColor = generarColorHex();
        nuevoElemento.style.height = '100px';
        nuevoElemento.style.width = '100px';
        contenedor.appendChild(nuevoElemento);
        
        contador++;
    }


}

function generarOpcionMaquina() {

    // Math.random() genera un número decimal entre 0 (inclusive) y 1 (exclusivo)
    // Multiplicamos por 3 para obtener un número entre 0 y 2.9999...
    // Math.floor() redondea hacia abajo, obteniendo un número entero entre 0 y 2
    return Math.floor(Math.random() * 3);
}

function anunciaResultado(resultado, opcionJugador, opcionMaquina) {

    return alert(resultado+'!!! \nJUGADOR ELIGIO: '+opcionJugador+'\nMAQUINA ELIGIO: '+opcionMaquina);

}

function competirJuego() {

    const opcionJugador = prompt('Elige entre: piedra, papel o tijera');

    const opciones = ['piedra','papel','tijera'];

    const opcionMaquina = opciones[generarOpcionMaquina()];

    if(opcionJugador === 'piedra') {
        if(opcionMaquina === 'piedra'){
            anunciaResultado('EMPATARON', opcionJugador, opcionMaquina);
        }
        if(opcionMaquina === 'papel') {
            anunciaResultado('GANA MAQUINA', opcionJugador, opcionMaquina);
        }
        if(opcionMaquina === 'tijera') {
            anunciaResultado('GANASTE', opcionJugador, opcionMaquina);
        }
    }

    if(opcionJugador === 'papel') {
        if(opcionMaquina === 'papel'){
            anunciaResultado('EMPATARON', opcionJugador, opcionMaquina);

        }
        if(opcionMaquina === 'piedra') {
            anunciaResultado('GANASTE', opcionJugador, opcionMaquina);
        }
        if(opcionMaquina === 'tijera') {
            anunciaResultado('GANA MAQUINA', opcionJugador, opcionMaquina);
        }
    }

    if(opcionJugador === 'tijera') {
        if(opcionMaquina === 'tijera'){
            anunciaResultado('EMPATARON', opcionJugador, opcionMaquina);
        }
        if(opcionMaquina === 'piedra') {
            anunciaResultado('GANA MAQUINA', opcionJugador, opcionMaquina);
        }
        if(opcionMaquina === 'papel') {
            anunciaResultado('GANASTE', opcionJugador, opcionMaquina);
        }
    }
}

function determinarEdad() {

    const anioNacimiento = Number(prompt("INGRESA EL AÑO DE NACIMIENTO"));
    return alert(calcularEdad(anioNacimiento));

}

function calcularEdad(anioNacimiento) {    

    const fecha = new Date();
    const anioActual = fecha.getFullYear();

    return `TIENES ${anioActual-anioNacimiento} AÑOS`;
}

function convertirTemperatura() {

    const temperaturaCelcius = Number(prompt("INGRESA TEMPERATURA EN °C"));

    return alert(convertirFahrenheit(temperaturaCelcius));

}

function convertirFahrenheit(temperaturaCelcius) {

    const temperaturaFahrenheit = (temperaturaCelcius*9/5) + 32;
    
    return `${temperaturaCelcius}°C SON ${temperaturaFahrenheit}°F`;

}

function contarVocales() {

    const texto = prompt("INGRESA UN TEXTO:").toLowerCase();

    return alert(verificarVocalesTexto(texto));
    
}

function verificarVocalesTexto(texto) {

    const vocales = ["a","e","i","o","u"];
    let contadorVocales = 0;

    for(let i=0 ; i<vocales.length ; i++) {
        for(let x=0 ; x<texto.length ; x++){
            if (vocales[i] === texto[x]) {
                contadorVocales++;
            }
        }
    }
    return `TU TEXTO TIENE ${contadorVocales} VOCALES`;

}

function generarTablaMultiplicar() {

    limpiarContenedor();

    const numero = Number(prompt("INGRESA NUMERO A GENERAR TABLA DE MULTIPLICAR:"));

    const tabla = [];

    for(let i = 0; i < 10; i++) {

        tabla.push(`${numero} X ${i + 1} = ${(i + 1)*numero}`);

    }

    mostrarTablaConsola(numero, tabla);
    mostarTablaDom(numero, tabla);

}

function mostrarTablaConsola(numero, tabla) {

    console.log(`TABLA DEL NUMERO: ${numero}`);

    for(elemento of tabla) {
        console.log(`==> ${elemento}`);
    }
}

function mostarTablaDom(numero, tabla) {

    const contenedor = document.getElementById("contenedor");

    const nuevoElementoTitulo = document.createElement("h2");
    nuevoElementoTitulo.innerHTML = `TABLA DEL NUMERO: ${numero}`;

    
    const nuevoElementoParrafo = document.createElement("p");

    for(elemento of tabla) {

        nuevoElementoParrafo.innerHTML += `==> ${elemento}<br>`;
        
    }
    contenedor.appendChild(nuevoElementoTitulo);
    contenedor.appendChild(nuevoElementoParrafo);
}