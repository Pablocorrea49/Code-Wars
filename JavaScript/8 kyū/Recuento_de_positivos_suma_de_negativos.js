Dada una matriz de números enteros.

Devuelve una matriz, donde el primer elemento es el recuento de números positivos y el segundo elemento 
  es la suma de números negativos. 0 no es ni positivo ni negativo.

Si la entrada es una matriz vacía o es nula, devuelve una matriz vacía.

https://www.codewars.com/kata/576bb71bbbcf0951d5000044/solutions/javascript

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0){
    return []
    }
  let positivo = 0
  let negativo = 0
  for (let i = 0; i < input.length; i++){
    if (input[i] > 0){
      positivo +=1
    }
    else{
      negativo += input[i]
    }
  }
  return [positivo,negativo]
  
}
