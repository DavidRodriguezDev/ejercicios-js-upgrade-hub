/*
Vamos a usar de nuevo JSON SERVER para crear un listado de personajes de la serie Dragon Ball.

Para ello, ejecutemos ``json-server --watch exercise-4.json``.
 En este caso el endpoint con los personajes es `http://localhost:3000/characters`.

La idea es crear una galería con los planetas, que podemos obtener del endpoint `http://localhost:3000/planets` 
y, que si el usuario hace click en alguno de los planetas,
salga debajo los personajes que están asociados por el .idPlanet a ese planeta en cuestión,
mostrando tanto sus imágenes .avatar como sus nombres .name. Para poder obtener la información de los personajes
podemos hacer un filtro de los personajes llamando a la url, 
por ejemplo ``http://localhost:3000/characters?idPlanet=1`` 
y, teniendo en cuenta que el idPlanet variará dependiendo del planeta seleccionado.
 
Además de esto, agrega un buscador para poder filtrar los personajes una vez que has seleccionado el planeta.
 Por lo tanto, deberemos incluir el input debajo del planeta y encima de los personajes listados.

*/

//Fetch de Planetas.
const baseUrlPlanets = "http://localhost:3000/planets";

fetch(baseUrlPlanets)
.then(resp => resp.json())
.then(planets => {
    console.log(planets)
    createGalery(planets);
})

const createGalery = (planets) => {
    for (const planet of planets) {
        const div$$ = document.createElement("div");
        div$$.innerHTML = `<img height="200" src="${planet.image}">`

        document.body.appendChild(div$$)

        div$$.addEventListener("click",  () => {
            showCharacters(planet.id);
            createSearchBar();
            
        })

    }
}

//Fetch de Personajes

const showCharacters = (idPlanet) => {
    //Fetch de Personajes
    const baseUrlCharacters = "http://localhost:3000/characters?idPlanet=" + idPlanet;

    fetch(baseUrlCharacters)
    .then(resp => resp.json())
    .then(characters => {
        for (const character of characters) {
            
            const divCharacter$$ = document.createElement("div");
            const h2$$ = document.createElement("h2");

            h2$$.textContent = character.name;
            divCharacter$$.innerHTML = `<img height="200" src="${character.avatar}">`

            divCharacter$$.appendChild(h2$$);
            document.body.appendChild(divCharacter$$);
            
            console.log(character)

        }
    })
}

//Buscador de personajes por planeta

createSearchBar = () => {
    const input$$ = document.createElement("input");

    document.body.appendChild(input$$)

    input$$.addEventListener("change", (character) => {
        if(input$$.value === character.name) {
            console.log("ajifjakfjaokfaksofjnsakof");
        }
    })

}

