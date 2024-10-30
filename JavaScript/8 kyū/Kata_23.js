Titulo: Es bastante sencillo. Tu objetivo es crear una función que elimine el primer y el último carácter de una cadena. Se te proporciona 
un parámetro, la cadena original. No tienes que preocuparte por cadenas con menos de dos caracteres.

https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/solutions/javascript

function removeChar(str){
  let str_new = str.split('');
  str_new.pop()
  str_new.shift();
  return str_new.join(''); 
 };

 
 console.log(removeChar('eloquent'))
