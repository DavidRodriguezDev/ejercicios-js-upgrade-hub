/*
En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado
 y que si el usuario hace click en este botón eliminemos el parrafo asociado.
*/

const baseUrl = 'https://api.nationalize.io?name=';
const input$$ = document.querySelector("input");
const button$$ = document.querySelector("button")


const searchName = (name) => {
    fetch(baseUrl + name)
    .then(resp => resp.json())
    .then(myJson => drawPs(myJson))
}


const drawPs = (data)=> {
    for (let i = 0; i < data.country.length; i++) {
        const {name, country} = data;
        const {country_id, probability} = country[i]
        const p$$ = document.createElement("p");
        p$$.textContent = "El nombre " + name + " tiene un " + probability * 100 + " porciento de ser de " + country_id ;
        
        const btnRemove$$ = document.createElement("button");
        btnRemove$$.textContent = "X";
        p$$.appendChild(btnRemove$$);
        document.body.appendChild(p$$);
        btnRemove$$.addEventListener("click", ()=> p$$.remove())
    }
}



button$$.addEventListener("click", () => searchName(input$$.value));

