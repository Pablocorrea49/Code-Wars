Titulo: Kata1: Crea un programa que filtre una lista de cadenas y devuelva una lista que solo contenga el nombre de tus amigos.
Si un nombre tiene exactamente 4 letras, puedes estar seguro de que es un amigo tuyo. De lo contrario, puedes estar seguro de que no lo es...

  https://www.codewars.com/kata/55b42574ff091733d900002f/solutions/javascript?filter=me&sort=best_practice&invalids=false

function friend(friends){
  new_friends = [];
  for(let i = 0; i < friends.length; i++){
    if (friends[i].length === 4){
      new_friends.push(friends[i]);
    }
  }
  return new_friends
}
