Titulo: Escriba una función sort_cards()que ordene una lista barajada de cartas, de modo que cualquier lista dada de 
cartas esté ordenada por rango, sin importar la colección inicial. Todas las cartas de la lista se representan como cadenas, 
por lo que la lista ordenada de cartas se ve así:

['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

https://www.codewars.com/kata/56f399b59821793533000683/solutions/javascript?filter=me&sort=best_practice&invalids=false

const cartas = {
  'A':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, 'T':10, 'J':11, 'Q':12, 'K':13}

function sortCards(array){
   return array.sort(function(a, b){
    if(cartas[a] > cartas[b])
      return 1;
    if(cartas[a] < cartas[b])
      return -1;
    return 0;
  } )
  
}
