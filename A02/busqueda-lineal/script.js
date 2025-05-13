const nombres = ["Juan", "Ana", "Pedro", "Lucía", "Carlos"];
// Muestra el array en la consola
console.log(nombres);

function buscarNombre() {
    const input = document.getElementById("buscar").value.trim();
    const resultado = document.getElementById("resultado");

    let encontrado = false;
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i].toLowerCase() === input.toLowerCase()) {
            resultado.textContent = `${i}`;
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        resultado.textContent = "Nombre no encontrado.";
    }
}