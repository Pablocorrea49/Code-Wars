Titulo: Dada una cadena, escribe en mayúsculas las letras que ocupan índices pares e impares por separado y devuelve lo que 
 se muestra a continuación. El índice 0se considerará par. Por ejemplo, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].

https://www.codewars.com/kata/55b42574ff091733d900002f/solutions/javascript?filter=me&sort=best_practice&invalids=false

function capitalize(s){
  let array_impar = s.split('');
  let array_par = s.split('');
  let i = 0;
  while(s[i]){
    if( i % 2 == 0){
      array_par[i] = array_par[i].toUpperCase();
    }
    else{
      array_impar[i] = array_impar[i].toUpperCase();
    }
    i++;
  }
  return [array_par.join(''), array_impar.join('')];
};
