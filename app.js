
function generarHermanos() {

    const hermanos = [];

    const nroHermanos = Number(prompt("Ingresa la cantidad de hermanos a registrar."));
    console.log(nroHermanos);

    let contador = 0;

    while (contador < nroHermanos) {
        const nombreHermano = prompt("Ingresa el nombre");
        hermanos.push(nombreHermano);
        contador++;
    }

    console.log(hermanos);

}