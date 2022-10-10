/*
Dado el siguiente string

const text = "gracioso-pero-no-gracioso-de-risa-gracioso-de-raro"


transfórmalo en el siguiente (Mayúsculas incluidas)

"Gracioso Pero No Gracioso De Risa Gracioso De Raro"
*/

const text = "gracioso-pero-no-gracioso-de-risa-gracioso-de-raro";

let separatedText = text.split(/-/);  //Aquí tengo un array con las palabras sueltas.

let arrayUpperCaseWords = [];

for (let i = 0; i < separatedText.length; i++) {  //Bucle para obtener cada palabra del array
    const word = separatedText[i];
    arrayUpperCaseWords.push(word[0].toLocaleUpperCase() + word.slice(1)); //Primera letra en mayúscula
    
}

console.log(arrayUpperCaseWords.join(" "));  //Separar por espacio cada palabra.
