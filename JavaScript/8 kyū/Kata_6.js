Titulo: Simplemente busque el valor más cercano a cero en la lista. Observe que hay números negativos en la lista. La 
lista no siempre está vacía y solo contiene números enteros. Devuelve el valor Nonesi no es posible definir solo uno de 
esos valores. Y, por supuesto, esperamos que 0 sea el valor más cercano a cero.

https://www.codewars.com/kata/59887207635904314100007b/solutions/javascript?filter=me&sort=best_practice&invalids=false

function closest(arr){
  let i = 0;
  let valor_a_devolver = arr[i];
  let valor_anterior = Math.abs(arr[i]);

  for (i; i < arr.length; i++){
    if (arr[i] === 0){
      return 0;
    }
    if(Math.abs(arr[i]) < valor_anterior){
      valor_anterior = Math.abs(arr[i]);
      valor_a_devolver = arr[i];
    }
    if(arr[i] + valor_a_devolver == 0){
      valor_a_devolver = null;
    }    
  }
  return valor_a_devolver;
}
