// Algoritmo de búsqueda binaria
function busquedaBinaria(arr, elemento) { 
  let inicio = 0; 
  let fin = arr.length - 1; 
  while (inicio <= fin) { 
    let medio = Math.floor((inicio + fin) / 2); 
    if (arr[medio] === elemento) { 
      return medio; // Retorna el índice del elemento encontrado 
    } else if (arr[medio] < elemento) { 
      inicio = medio + 1; 
    } else { 
      fin = medio - 1; 
    } 
  } 
  return -1; // Retorna -1 si el elemento no se encuentra en el arreglo 
} 
 
const arregloOrdenado = [2, 3, 5, 6, 8, 10]; 
const elementoBuscado = 6; 
const indice = busquedaBinaria(arregloOrdenado, 
elementoBuscado); 
console.log(`El  elemento  ${elementoBuscado}  se  encuentra  en  el índice ${indice}.`);