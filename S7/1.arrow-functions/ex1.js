/*
Crea una arrow function que tenga dos parametros a y b y que por defecto el valor de a = 10 y de b = 5.
 Haz que la función muestre por consola la suma de los dos parametros. 

- Ejecuta esta función sin pasar ningún parametro
- Ejecuta esta función pasando un solo parametro
- Ejecuta esta función pasando dos parametros

*/

const arrowF = (a = 10, b = 5) => {
    return a + b;
}

console.log(arrowF());
console.log(arrowF(7,8));
console.log(arrowF(2,89));

