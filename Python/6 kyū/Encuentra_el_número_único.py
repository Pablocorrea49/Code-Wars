https://www.codewars.com/kata/585d7d5adb20cf33cb000235/solutions/python

def find_uniq(arr):
    arr.sort()
    return arr[0] if (arr[0] != arr[1]) else arr[-1]
  
       

print(find_uniq([ 1, 1, 1, 2, 1, 1 ]))
print(find_uniq([ 0, 0, 0.55, 0, 0 ]))
print(find_uniq([ 3, 10, 3, 3, 3 ]))
