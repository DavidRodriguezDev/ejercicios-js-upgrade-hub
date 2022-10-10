/*
Dado el siguiente html usa querySelector para mostrar por consola el 3 personaje
 con el atributo data-function="testMe".
*/

const tercerPersonaje$ = document.querySelectorAll("[data-function = 'testMe']");

console.log(tercerPersonaje$[2]);