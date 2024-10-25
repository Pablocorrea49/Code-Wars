Titulo: Debes crear una función que convierta un número entero dado como cadena en letras mayúsculas ASCII o espacios.
Todos los caracteres ASCII tienen su orden numérico en la tabla.

https://www.codewars.com/kata/589ebcb9926baae92e000001/solutions/javascript?filter=me&sort=best_practice&invalids=false

function convert(number){
  let lista = [];
  for (let i = 0; i < number.length; i += 2){
    lista.push(String.fromCharCode(number[i] + number[i+1]));
  }  
  return lista.join('');
}
