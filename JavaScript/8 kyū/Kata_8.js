Titulo: Crea una función que verifique si el primer argumento n es divisible por todos los demás argumentos 
(devuelve verdadero si no hay otros argumentos)

https://www.codewars.com/kata/558ee8415872565824000007/solutions/javascript?filter=me&sort=best_practice&invalids=false

function isDivisible(...args){
  multiplo = args[0];
  for (numero of args){
    if(multiplo % numero != 0)
      return false
  }
  return true
}
