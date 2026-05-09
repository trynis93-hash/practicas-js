//crea una variable para cada operacion arimetrica
let a = 12;
let b = 5;

const c = 18;
const d = 3;

//crea una variable para cada tipo de operacion de asignacion
//de las variables utilizadas para las operaciones aritmeticas, haz una operacion de asignacion con cada una de ellas
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b);

console.log(c + d);
console.log(c - d);
console.log(c * d);
console.log(c / d);
console.log(c ** d);
console.log(c % d);

//imprime 5 comparaciones verdades con diferentes operadores de comparacion
console.log(a > b);
console.log(a < c);
console.log(d <= b);
console.log(d >= a);
console.log(c === a);
console.log(a == d);
//imprime 5 comparaciones falsas con diferentes operadores de comparacion
console.log(a < b);
console.log(a > c);
console.log(d > b);
console.log(d < a);
console.log(c !== a);
console.log(a !== d);
//utiliza el operador logico AND
console.log(a > b && c > d);
//utiliza el operador logico OR
console.log(a > b || c > d);
//combina ambos operadores logicos
console.log((a > b && c > d) || a < b || c < d);
//añade alguna negacion
console.log(!(a > b));

//utiliza operacion ternario
const value = true;
value ? console.log("Es verdadero") : console.log("Es falso");
//combina operadores aritmeticos con comparacion y logicos
console.log(!(a + b == c - d && a * b === c / d));
