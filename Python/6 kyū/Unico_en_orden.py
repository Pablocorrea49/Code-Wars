'''Implementa la función unique_in_order que toma como argumento una secuencia y devuelve una lista de elementos 
sin ningún elemento con el mismo valor uno al lado del otro y conservando el orden original de los elementos.'''

# https://www.codewars.com/kata/54e6533c92449cc251001667/solutions/python

def unique_in_order(sequence):
    if (len(sequence) == 0):
        return []
    lista = [sequence[0]]
    for letra in sequence:
        if (letra != lista[-1]):
            lista.append(letra)
    return lista


print(unique_in_order("AAAABBBCCDAABBB"))
print(unique_in_order("ABBCcA"))
