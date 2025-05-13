// Algoritmo de ordenamiento rápido
function ordenamientoRapido(arr) { 
  if (arr.length <= 1) { 
    return arr; 
  } 
  const pivot = arr[arr.length - 1];  
  // En muchos casos también se utiliza pivot = arr[0] 
  let menores = []; 
  let mayores = []; 
  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] < pivot) { 
      menores.push(arr[i]); 
    } else { 
      mayores.push(arr[i]); 
    } 
  } 
  return [...ordenamientoRapido(menores), pivot, 
...ordenamientoRapido(mayores)]; 
} 
const arreglo = [5, 3, 8, 2, 6]; 
const arregloOrdenado = ordenamientoRapido(arreglo); 
console.log(arregloOrdenado); // Output: [2, 3, 5, 6, 8] 