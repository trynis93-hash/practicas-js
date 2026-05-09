//operadores
//operadores aritméticos
let a = 6;
let b = 1505;
console.log(a + b); //suma
console.log(a - b); //resta
console.log(a / b); //division
console.log(a * b); //multiplicacion

console.log(a ** b); //exponente
console.log(a % b); //modulo

console.log(a == "6"); //igualdad por valor
console.log(a === "6"); //igualdad por valor y tipo
console.log(a != "6"); //diferente por valor
console.log(a !== "6"); //diferente por valor y tipo
console.log(a > b); //mayor que
console.log(a < b); //menor que
console.log(a >= b); //mayor o igual que
console.log(a <= b); //menor o igual que
console.log(0 == false);
console.log(0 === false);
console.log(1 == true);
console.log(1 === true);
console.log(2 == false);
console.log(2 === false);
console.log(0 == "");
console.log(0 == null);
console.log(0 == undefined);
console.log(false == "");
console.log(false == null);
console.log(false == undefined);
console.log("" == null);
console.log("" == undefined);
console.log(null == undefined);
console.log(undefined == null);
console.log(undefined === null);
console.log(0 == "hola");

// truthy values (valores verdaderos)

//todos los numeros positivos y negativos menos el cero
//todas las cadenas de texto menos vacias
//todos ls boolean

//falsy values (valores falsos)

//0
//0n
//null
//undefined
//NaN
//el boolean false
//cadenas de texto vacias

//operadores logicos

//and (&&)
console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);
console.log(5 < 10 && 15 > 20);
//or (||)
console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 < 10 || 15 > 20);

console.log((5 > 10 && 15 > 20) || 5 < 10 || 20 < 21);

//not (!)
console.log((5 > 10 && 15 > 20) || 5 < 10 || 20 < 21);
console.log(!((5 > 10 && 15 > 20) || 5 < 10 || 20 < 21));
console.log(!true);
console.log(!false);

// operadores ternarios
const israining = false;
israining ? console.log("esta lloviendo") : console.log("no esta lloviendo");
