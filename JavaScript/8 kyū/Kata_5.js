Titulo: Consideremos la palabra "abode". Podemos ver que la letra aestá en la posición 1y bestá en la posición 2. En el alfabeto, 
ay btambién están en las 
posiciones 1y 2. Observe también que dy een abodeocupan las posiciones que ocuparían en el alfabeto, que son las posiciones 4y 5.
Dada una matriz de palabras, devuelve una matriz con la cantidad de letras que ocupan sus posiciones en el alfabeto para cada palabra

https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/solutions/javascript?filter=me&sort=best_practice&invalids=false

function solve(arr){
  let codigo_ascci = 65;
  let arr_resuelto = [];
  let contador = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(codigo_ascci - arr[i][j].toUpperCase().charCodeAt() == 0){
        contador += 1;
      }
      codigo_ascci += 1;
    }
    arr_resuelto.push(contador);
    contador = 0;
    codigo_ascci = 65;
  } 
  return arr_resuelto
};
