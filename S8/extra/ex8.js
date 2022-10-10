const btnCreateCat = document.createElement("button");
btnCreateCat.textContent = "Show me a minino";

document.body.appendChild(btnCreateCat);



const getCat = () => {
    
    const baseUrl = "https://api.thecatapi.com/v1/images/search";
    
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        printCat(data);
    })
}


const printCat = (data) => {
    const divContainer$$ = document.createElement("div");
    const img$$ = document.createElement("img");
    const btnRemove$$ = document.createElement("button");
    
    for (const minino of data) {
        img$$.setAttribute("src", minino.url)
        btnRemove$$.textContent = "Elimina al minino";

        divContainer$$.appendChild(img$$);
        divContainer$$.appendChild(btnRemove$$)

        document.body.appendChild(divContainer$$);

        btnRemove$$.addEventListener("click", () => {
            divContainer$$.remove();
        })
    }
    
}

btnCreateCat.addEventListener("click", getCat);

