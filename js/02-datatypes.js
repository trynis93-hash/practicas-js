//tipos de datos primitivos
//string (cadena de texto)
let name = "johan";
let alias = "berrio";
let email = "trynis";

//numeros(number)
let age = 23; //entero
let height = 1.7; //decimal

//booleanos(boolean)
let isstudent = true;
let isteacher = false;

//undefined
let undefinedvalue;
console.log(undefinedvalue);

//null
let nullvalue = null;

//symbol
let mysymbol = Symbol("mysimbol");

//bigint
let mybigint = 9007199254740991n; //el n al final indica que es un bigint
let mybigint2 = BigInt(9007199254740991); //otra forma de declarar un bigint

//mostramos los tipos de datos
console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof isstudent); //boolean
console.log(typeof undefinedvalue); //undefined
console.log(typeof nullvalue); //object, esto es un error en javascript, null no es un objeto
console.log(typeof mysymbol); //symbol
console.log(typeof mybigint); //bigint
console.log(typeof mybigint2); //bigint
