Titulo: Dejas caer una pelota desde una altura determinada. Después de cada rebote, la pelota vuelve a una proporción fija de su 
altura anterior. Si la pelota rebota hasta una altura de 1 o menos, consideramos que ha dejado de rebotar.  Calcula el número de 
rebotes que tarda la pelota en dejar de moverse.

https://www.codewars.com/kata/5a40c250c5e284a76400008c/solutions/javascript?filter=me&sort=best_practice&invalids=false

function bouncingBall(initial, proportion) {
  let contador = 0;
  do{
    contador += 1;
    initial = initial * proportion;
  }while(initial > 1)
  return contador;
};
