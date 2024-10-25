Titulo: Se le proporcionará una cadena de caracteres como entrada. Complete la función que devuelve una lista de cadenas: (a) en el 
  orden inverso de la cadena original y (b) con cada cadena sucesiva comenzando con un carácter más adelante del final de la cadena original.

https://www.codewars.com/kata/586efc2dcf7be0f217000619/solutions/javascript?filter=me&sort=best_practice&invalids=false
    
function reverseSlice(str) {
  let lista_str = str.split('').reverse();
  let lista_new_str = [];
  for (let i=0; i < str.length;i++){
    lista_new_str.push(lista_str.join(''));
    lista_str.shift();
  }
  return lista_new_str;
}
