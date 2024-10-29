Titulo: Esta vez aprenderemos dos métodos para dividir o fusionar cadenas: split()y concat(). 
También aprenderemos un buen amigo del método split(): join(). Es un método Array. Su uso:

https://www.codewars.com/kata/57280481e8118511f7000ffa

function splitAndMerge(string, separator) {
  let new_tring = string.split(' ');
  let retornar_string = []
  for (let i = 0; i < new_tring.length; i++){
    retornar_string.push(new_tring[i].split('').join(separator))
  }
  return retornar_string.join(' ')
}

console.log(splitAndMerge("My name is John"," "))
console.log(splitAndMerge("My name is John","-"))
