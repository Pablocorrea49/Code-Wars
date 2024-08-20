'''Se le dará una determinada matriz de longitud n, tal que n > 4, tendrá números enteros positivos y negativos, 
pero no habrá ceros y todos los elementos aparecerán una vez en ella. Podemos obtener una cantidad de nsubmatrices 
de longitud n - 1, eliminando un elemento a la vez (de izquierda a derecha). Para cada submatriz, calculamos el producto 
y la suma de sus elementos con el valor absoluto correspondiente del cociente q = SubProduct/SubSum(si es posible, SubSum no puede ser 0). Luego seleccionamos la matriz con el valor más bajo de |q|(valor absoluto)
'''
https://www.codewars.com/kata/581bb3c1c221fb8e790001ef/solutions/python

def select_subarray(arr):
    SubSum = 0
    SubProduct = 1
    dic_resultado = {}
    respuesta = []
    respuesta2 = []
    for i in range(len(arr)):
        for j in range(len(arr)):
            if arr[i] != arr[j]:
                SubSum += arr[j]
                SubProduct *= arr[j]
        if SubSum != 0:
            q = abs(SubProduct / SubSum)
        dic_resultado[i] = q
        SubSum = 0
        SubProduct = 1
    minimo = min(dic_resultado.values())

    for clave, valor in dic_resultado.items():
        if valor == minimo:
            respuesta = [clave, arr[clave]]
            respuesta2.append(respuesta)


    return respuesta2 if len(respuesta2) > 1 else respuesta

print(select_subarray([1, 23, 2, -8, 5]))
print(select_subarray([1, 3, 23, 4, 2, -8, 5, 18]))
print(select_subarray([2, -8, 5, 18]))
print(select_subarray([10, 20, -30, 100, 200])) #, [[3, 100], [4, 200]])
