
function verificarDatos(nroHermanos) {

    if(isNaN(nroHermanos)){
        return alert("El dato ingresado no es un numero");   
    }
}

function generarHermanos() {

    const hermanos = [];

    const nroHermanos = Number(prompt("Ingresa la cantidad de hermanos a registrar."));

    verificarDatos(nroHermanos);

    let contador = 0;

    while (contador < nroHermanos) {
        contador++;
        const nombreHermano = prompt("Ingresa el nombre nro " + contador + ":");
        hermanos.push(nombreHermano);        
    }

    console.log(hermanos);

}

function generarColorHex() {
    // Genera un número aleatorio entre 0 y 16777215 (el número máximo en base 16 para 6 dígitos hexadecimales)
    let colorAleatorio = Math.floor(Math.random() * 16777215).toString(16);
    
    // Asegurarse de que el valor tenga siempre 6 dígitos añadiendo ceros al principio si es necesario
    return "#" + colorAleatorio.padStart(6, '0');
}

function limpiarBloques() {

    document.getElementById("contenedor").innerHTML = '';

}

function generarBloques() {

    limpiarBloques();

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