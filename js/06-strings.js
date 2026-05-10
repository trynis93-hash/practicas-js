//strings
let mynombre = "johan";
let greeting = "hola ," + mynombre + "ADSO";
console.log(mynombre);
console.log(greeting);
console.log(typeof greeting);

//longitud
console.log(greeting.length);

//acceso a caracteres
console.log(greeting[0]);
console.log(greeting[5]);

//metodos comunes
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.includes("hola"));
console.log(greeting.startsWith("hola"));
console.log(greeting.endsWith("!"));
console.log(greeting.indexOf("berrio"));
console.log(greeting.replace("hola", "hello"));
console.log(greeting.slice(0, 4));

//template literals (plantillas literales)
let name = `johan como estas
bien y tu?
a estado muy soleado`;
console.log(name);

let email = "trynis93@gmail.com";
console.log(`hola, ${mynombre}! tu email es ${email}`);
