//Algoritmo de Búsqueda Lineal
function busquedaLineal(arr, elemento) { 
  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] === elemento) { 
      return i; // Retorna el índice del elemento encontrado 
    } 
  } 
  
  return -1; // Retorna -1 si el elemento no se encuentra en el arreglo 
} 
 
const arreglo = [10, 5, 3, 8, 2, 6]; 
const elementoBuscado = 8; 
const indice = busquedaLineal(arreglo, elementoBuscado); 
console.log(`El  elemento  ${elementoBuscado}  se  encuentra  en  el índice ${indice}.`); 
// Output: 
// El elemento 8 se encuentra en el índice 3