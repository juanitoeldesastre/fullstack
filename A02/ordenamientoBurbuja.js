// Algoritmo de Ordenamiento Burbuja
function ordenamientoBurbuja(arr) { 
  const n = arr.length; 
  for (let i = 0; i < n; i++) { 
    for (let j = 0; j < n - i - 1; j++) { 
      if (arr[j] > arr[j + 1]) { 
 
        // Intercambio de elementos 
        const temp = arr[j] 
        arr[j] = arr[j + 1] 
 
        arr[j + 1] = temp 
      } 
    } 
  } 
  return arr; 
} 
 
const arreglo = [5, 3, 8, 2, 6]; 
const arregloOrdenado = ordenamientoBurbuja(arreglo); 
console.log(arregloOrdenado); // Output: [2, 3, 5, 6, 8]