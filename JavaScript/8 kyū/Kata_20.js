Titulo: Escriba una función que verifique si una cadena dada (sin distinguir entre mayúsculas y minúsculas) es un palíndromo .

https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/solutions/javascript
  
function isPalindrome(x) {
  return x.toUpperCase().split('').reverse().join('') === x.toUpperCase()
}

console.log(isPalindrome("Abba"))
console.log(isPalindrome("hello"))
