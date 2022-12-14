/*
Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
`removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

*/


let arrayPrueba = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

const findArrayIndex = (array, text) => {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element === text){
            return i;
        }
    }
}

const index = findArrayIndex(arrayPrueba, "Caracol");




const removeItem = (array, text) => {
    const index = findArrayIndex(array, text);
    array.splice(index, 1);
    return array;
}

console.log(removeItem(arrayPrueba, "Mosquito"))
console.log(removeItem(arrayPrueba, "Caracol"))
