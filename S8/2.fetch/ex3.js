/*
En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...
'El nombre X tiene un Y porciento de ser de Z' etc etc.

EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.




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
        document.body.appendChild(p$$);
    }
}

button$$.addEventListener("click", () => searchName(input$$.value));

