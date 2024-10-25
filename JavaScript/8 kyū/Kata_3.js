Titulo:   Se le proporciona una cadena de palabras y números. Extraiga la expresión que incluye:
el operador: ya sea suma ( "gains") o resta ( "loses") los dos números con los que estamos operando Devuelve el resultado del cálculo.

https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/solutions/javascript?filter=me&sort=best_practice&invalids=false

function calculate(string) {
  let lista = string.split(' ');
  let valor1;
  let valor2;
  let operador;
  for(let i= 0; i < lista.length; i++){
    if (parseInt(lista[i])){
      if (!(valor1)){
        valor1 = parseInt(lista[i])
      }
      else{
        valor2 = parseInt(lista[i])
        break;
      }
    }
    if (lista[i] == 'loses' || lista[i] == 'gains'){
      operador = lista[i]
    }
    
  } 
  if(operador == 'loses'){
    return valor1 - valor2
  }
  return valor1 + valor2

