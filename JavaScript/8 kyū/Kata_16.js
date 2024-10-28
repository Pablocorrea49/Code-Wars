titulo: El ácido desoxirribonucleico (ADN) es la principal molécula de almacenamiento de información en los sistemas biológicos. 
Está compuesto por cuatro bases de ácidos nucleicos: guanina ('G'), citosina ('C'), adenina ('A') y timina ('T').
El ácido ribonucleico, ARN, es la molécula mensajera principal de las células. El ARN difiere ligeramente del ADN en su estructura 
química y no contiene timina. En el ARN, la timina es reemplazada por otro ácido nucleico, el uracilo ('U').
Crea una función que traduzca una cadena de ADN dada en ARN.
Por ejemplo:
"GCAT"  =>  "GCAU"

https://www.codewars.com/kata/5556282156230d0e5e000089/solutions/javascript

function DNAtoRNA(dna) {
    return dna.replaceAll('T','U')
  }
