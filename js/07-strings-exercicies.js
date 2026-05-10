// contatena dos cadenas de texto
let mynombre = "johan sneider";
let myapellido = "berrio ramos";
let greeting =
  "hola , mi nombre es " + mynombre + " y mi apellido es " + myapellido;
console.log(mynombre);
console.log(myapellido);
console.log(greeting);
console.log(typeof mynombre);
//muestra la logica de una cadena de texto
console.log(greeting.length);
//muestra el primer y ultimo caracter de un strings
console.log(greeting[1]);
console.log(greeting[15]);
//convierte un string a mayusculas y minusculas
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
//crea una cadena de texto en varias lineas
let multilineString = "esta es una cadena de texto\nque ocupa varias lineas";
console.log(multilineString);
//interpola el valor de una variable de un string
let age = 25;
let message = `tengo ${age} años`;
console.log(message);
//reemplaza todos los espacios en blanco de un string por guiones
let stringWithSpaces = "esta es una cadena con espacios";
let stringWithDashes = stringWithSpaces.replace(/ /g, "-");
console.log(stringWithDashes);
//comprueba si una cadena de texto contiene una palabra especifica
let text = "esta es una cadena de texto";
let containsWord = text.includes("cadena");
console.log(containsWord);
//comprueba si dos strings son iguales
let string1 = "hola";
let string2 = "hola";
let areEqual = string1 === string2;
console.log(areEqual);
//comprueba si dos strings tienen la misma longitud
let length1 = string1.length;
let length2 = string2.length;
let sameLength = length1 === length2;
console.log(sameLength);
