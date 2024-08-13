
#Dado n, se toma la suma de los dígitos de n. Si ese valor tiene más de un dígito, se continúa reduciendo de esta manera 
#hasta que se obtenga un número de un solo dígito. La entrada será un entero no negativo.

https://www.codewars.com/kata/541c8630095125aba6000c00/solutions/python

def digital_root(n):
    if (n <= 9):
        return n
    else:
        n = str(n)
        suma = 0
        for i in n:
            suma += int(i)
        return digital_root(suma)

print(digital_root(16))
print(digital_root(942))
print(digital_root(132189))
