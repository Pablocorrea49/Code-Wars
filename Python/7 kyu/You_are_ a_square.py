Title: Eres un cuadrado!
#Link: https://www.codewars.com/kata/54c27a33fb7da0db0100040e/solutions/python

def is_square(n):
    if (n >= 0):
        if (abs(n ** 0.5) - abs(int(n ** 0.5)) == 0):
            return True
    return False
