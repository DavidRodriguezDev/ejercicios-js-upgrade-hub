/*
Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:

```js
function findArrayIndex(array, text) {}
```

Ej array:
````js
['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
````


*/

let arrayPrueba = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

const findArrayIndex = (arrayTexto, texto) => {
    for (let i = 0; i < arrayTexto.length; i++) {
        const element = arrayTexto[i];
        if(element === texto){
            return i;
        }
    }
}

const index = findArrayIndex(arrayPrueba, "Caracol");
const index2 = findArrayIndex(arrayPrueba, "Salamandra");
const index3 = findArrayIndex(arrayPrueba, "Fernandito");

console.log(index);
console.log(index2);
