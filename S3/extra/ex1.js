/*
Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

```js
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
```
*/

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const listCountries$$ = document.createElement("ul");

for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        
        const li$$ = document.createElement("li");
        li$$.textContent = country;
        document.body.appendChild(li$$);
}


document.body.appendChild(listCountries$$)
console.log(listCountries$$)