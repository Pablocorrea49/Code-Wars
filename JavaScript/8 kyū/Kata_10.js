Titulo: Mi quinto kata y el primero de una serie planificada de katas con temática de escalada en roca.
En escalada en roca ( boulder, en concreto), los grados de escalada V/Vermin (EE. UU.) comienzan en 'VB'(el grado más fácil) y 
luego van 'V0', 'V0+', 'V1', 'V2', 'V3', 'V4', 'V5'etc. hasta 'V17'(el grado más difícil). Se le proporcionará un list( lst) 
de grados de escalada y debe escribir una función ( sort_grades) para returnun listde los grados ordenados del más fácil al más difícil.

Si la entrada es un vacío list, returnun vacío list; de lo contrario, la entrada siempre será válida listde uno o más grados.

https://www.codewars.com/kata/58a08e622e7fb654a300000e/solutions/javascript?filter=me&sort=best_practice&invalids=false

const escala = {
  'VB':1, 'V0':2, 'V0+':3, 'V1':4, 'V2':5, 'V3':6, 'V4':7, 'V5':8, 'V6':9, 'V7':10, 'V8':11, 'V9':12, 'V10':13, 'V11':14, 
  'V12':15, 'V13': 16, 'V14':17, 'V15':18, 'V16':19, 'V17': 20}

function sortGrades(lst){
  return lst.sort(function(a, b){
    return escala[a] - escala[b]
  } )
}
