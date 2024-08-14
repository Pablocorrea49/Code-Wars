#Se le proporcionará una serie de números. 
#Debe ordenar los números impares en orden ascendente y dejar los números pares en sus posiciones originales.

https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/solutions/python

Comentario:  Lo tengo que rehacer.-

def sort_array(source_array):
    if (len(source_array) == 0):
        return []
    
    nueva_lista = []
    for n in range(len(source_array)):
        if (source_array[n] % 2 != 0):
            nueva_lista.append(source_array[n])
    nueva_lista.sort()
    
    for n in range(len(source_array)):
        if (source_array[n] % 2 != 0):
            source_array[n] = nueva_lista[0]
            nueva_lista.pop(0)

    return source_array
