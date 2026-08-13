// TIPOS DE DATOS

// Tipos de datos Primitivos

const texto = 'hola';
const numero = 42;
const booleano = true; // false
const nulo = null;
const indefinido = undefined;
const simbolo = Symbol('id'); 
const grande = 123n;

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof booleano);
console.log(typeof nulo); //devuelve objetc por un error historico en el lenguaje. No se corrige para que no se rompa internet
console.log(typeof indefinido);
console.log(typeof simbolo);
console.log(typeof grande);


// Tipos de datos Complejos: Objetos, Funciones y Array

const objeto = { nombre: 'Juan', edad: 30};

const arreglo = [1,2,3,'string'];

const funcion = function () {};