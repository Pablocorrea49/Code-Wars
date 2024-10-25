Titulo: Escriba una función, isItLettero is_it_lettero IsItLetter, que nos diga si un carácter dado es una letra o no.


function isItLetter(character) {
  return character.toLowerCase().match(/[a-z]/g) ? true: false
}
