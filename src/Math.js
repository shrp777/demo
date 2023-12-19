export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
export const square = (a) => multiply(a, a);
export const divide = (a, b) => (b === 0 ? new Error("Can't divide 0") : a / b);
