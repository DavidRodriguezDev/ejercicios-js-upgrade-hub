/* 
Elimina el último elemento del array y muestra el primero y el último por consola.
```js
const RickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
```
*/

const RickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

RickAndMortyCharacters.pop();

console.log(RickAndMortyCharacters);

console.log(RickAndMortyCharacters.slice(0,1));
console.log(RickAndMortyCharacters.slice(4,5));
console.log(RickAndMortyCharacters[0], RickAndMortyCharacters[RickAndMortyCharacters.length -1]);
