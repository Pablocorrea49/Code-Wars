Titulo: Dado un mes como un número entero del 1 al 12, devuelva a qué trimestre del año pertenece como un número entero.
Por ejemplo: el mes 2 (febrero), es parte del primer trimestre; el mes 6 (junio), es parte del segundo trimestre; y el mes 11 (noviembre), 
es parte del cuarto trimestre

https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/solutions/javascript

const quarterOf = (month) => {
    const mes = {1: 1, 2: 1, 3: 1, 4: 2, 5: 2, 6: 2, 7: 3, 8: 3, 9: 3, 10: 4, 11: 4, 12: 4}
    return mes[month]
 } 
