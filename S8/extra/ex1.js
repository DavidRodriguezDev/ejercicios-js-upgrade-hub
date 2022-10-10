/*
En base a la api de Breaking Bad (https://breakingbadapi.com/), vamos a desarrollar una página dinámicamente en la que 
visualizar una galería con las imagenes y los nombres de los personajes de la serie.
 Para ellos es necesario usar el endpoint 'https://breakingbadapi.com/api/characters'.

Si te fijas en la respuesta de la api, la imagen está en la propiedad 'img' y el título en la propiedad 'name'.
*/

const baseUrl = 'https://breakingbadapi.com/api/characters';

fetch(baseUrl)
    .then(resp => resp.json())
    .then(data =>{drawCharacter(data)})

const drawCharacter = (data) => {
        for (const character of data) {
        const figure$$ = document.createElement("figure");
        
        figure$$.innerHTML = `<figcaption>${character.name}</figcaption><img src="${character.img}"></img>`
        
        document.body.appendChild(figure$$);
        }
}