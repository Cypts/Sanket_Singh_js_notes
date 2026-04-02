import math

#define the function
def f(x): 
    return x**2 - 4
#Bisection method with iteration table
def bisection(a, b, tol):
    if f(a) * f(b) >= 0:
        print("Bisection method fails.")
        return None
    
    iteration = 1

    #Table header
    print("Iter\t a\t\t b\t\t c\t\t Error")
    print("-"*75)

    while (b - a) / 2 > tol:
        c = (a + b) / 2
        error =  (b - a) / 2
        
        #Print iteration values
        print(f"{iteration}\t {a:.6f}\t {b:.6f}\t {c:.6f}\t {f(c):.6f}\t{error:.6f}")

        if f(c) == 0:
            return c
        elif f(a) * f(c) < 0:
            b = c
        else:
            a = c
        iteration += 1

    return (a + b) / 2

#input interval and tolerance
root = bisection(0 ,3, 1e-6)
print(root)