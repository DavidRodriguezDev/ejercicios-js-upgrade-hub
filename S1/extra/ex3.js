/*
Usa un bucle para crear 3 arrays de peliculas filtrados por categorias.
Pelicula pequeña, menos de 100 minutos,
pelicula mediana, igual o mas de 100 minutos 
y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.
```js
const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];
```
*/

const movies = [
        {name: "Your Name", durationInMinutes: 130},
        {name: "Pesadilla antes de navidad", durationInMinutes: 225},
        {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967},
        {name: "Solo en casa", durationInMinutes: 214},
        {name: "El jardin de las palabras", durationInMinutes: 40}
    ];

let peliculaPequeña = [];
let peliculaMediana = [];
let peliculaGrande = [];

for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    
    if(movie.durationInMinutes < 100) {
        peliculaPequeña.push(movie);
    } else if(movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
        peliculaMediana.push(movie);
    } else {
        peliculaGrande.push(movie);
    }
}

console.log(peliculaPequeña);
console.log(peliculaMediana);
console.log(peliculaGrande);
