Titulo: Dada una cadena, debes devolver una cadena en la que cada carácter (sensible a mayúsculas y minúsculas) se repita una vez.

Ejemplos (Entrada -> Salida):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "


https://www.codewars.com/kata/56b1f01c247c01db92000076/solutions/javascript

function doubleChar(str) {
 let str_new = [];
  for (let i = 0; i < str.length; i++){
    str_new.push(str[i].repeat(2));
  }
  return str_new.join();

}
console.log(doubleChar("abcd"))
