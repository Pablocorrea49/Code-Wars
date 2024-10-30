Titulo: Tu tarea en este kata es implementar una función que calcule la suma de los números enteros dentro de una cadena. Por ejemplo, 
en la cadena "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", la suma de los números enteros es 3635.

https://www.codewars.com/kata/598f76a44f613e0e0b000026/solutions/javascript

function sumOfIntegersInString(s) {
  const numeros = s.match(/\d+/g);
  let sumatoria = 0;
  if (numeros){
    numeros.map(x => sumatoria += parseInt(x))
  }
  return sumatoria;
}
