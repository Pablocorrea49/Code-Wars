Dado un conjunto de números, devuelve el inverso aditivo de cada uno. 
Cada positivo se convierte en negativo y los negativos en positivos.

https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/solutions/javascript

function invert(array) {
  let size_array = array.length
  if (size_array == 0){
    return []
  }
  for (let i = 0; i < size_array; i++){
    array[i] = array[i] * -1
  }  
  return array;
}
