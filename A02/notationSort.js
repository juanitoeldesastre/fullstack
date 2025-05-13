// Algoritmo de Ordenamiento Notation (Notation Sort) 
function notationSort(arr) { 
  const sortedIndices = arr 
    .map((value, index) => index) 
    .sort((a, b) => { 
      const lengthA = arr[a].length; 
      const lengthB = arr[b].length; 
      return lengthA - lengthB; 
    }); 
 
  const result = []; 
  for (const index of sortedIndices) { 
    result.push(arr[index]); 
  } 
   
  return result; 
} 
// Ejemplo de uso 
const palabras = ["manzana", "perro", "gato", "banana"]; 
const palabrasOrdenadas = notationSort(palabras); 
console.log(palabrasOrdenadas); // Output: ["gato", "perro", "banana", "manzana"] 