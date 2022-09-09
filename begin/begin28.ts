// Given a number A, compute a power A**15 using five multiplying operators for computing A**2, A**3, A**5, A**10, A**15 sequentially.
// Output all obtained powers of the number A

// Дано число A. Вычислить A**15, используя две вспомогательные переменные и пять операций умножения. Для этого последовательно находить A**2, A**3, A**5, A**10, A**15. 
// Вывести все найденные степени числа A

const a: number = 2;
console.log("a = ", a);

let b: number = a * a;
console.log("a**2 = ", b);

let c: number = b * a;
console.log("a**3 = ", c);

b = b * c;
console.log("a**5 = ", b);

c = b * b;
console.log("a**10 = ", c);

b = b * c;
console.log("a**15 = ", b);
