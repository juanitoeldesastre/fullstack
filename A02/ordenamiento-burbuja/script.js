const numeros = [];
// Agrega un número al array si es válido
function agregarNumero() {
  const input = document.getElementById('numeroInput');
  const valor = parseInt(input.value);

  if (!isNaN(valor)) {
    numeros.push(valor);
    input.value = '';
    mostrarNumeros();
    console.log("Array",numeros); // Muestra el array en la consola
  } else {
    alert("Por favor ingresa un número válido.");
  }
}

// Muestra los números actuales en pantalla
function mostrarNumeros() {
  const display = document.getElementById('numeros');
  display.textContent = "Números: [" + numeros.join(", ") + "]";
}

// Ordena el array usando el algoritmo de burbuja
function ordenarNumeros() {
  for (let i = 0; i < numeros.length - 1; i++) {
    for (let j = 0; j < numeros.length - 1 - i; j++) {
      if (numeros[j] > numeros[j + 1]) {
        // Intercambio de valores
        let temp = numeros[j];
        numeros[j] = numeros[j + 1];
        numeros[j + 1] = temp;
      }
    }
  }

  const resultado = document.getElementById('resultado');
  resultado.textContent = "Ordenado: [" + numeros.join(", ") + "]";
}