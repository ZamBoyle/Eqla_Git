def Add(_number1, _number2):
    return _number1 + _number2


def Substract(_number1, _number2):
    return _number1 - _number2


n1 = float(input("Entrez le premier nombre:"))
n2 = float(input("Entrez le deuxieme nombre:"))

print(f"La somme est égale à {Add(n1,n2)}")
print(f"La soustraction est égale à {Substract(n1,n2)}")
