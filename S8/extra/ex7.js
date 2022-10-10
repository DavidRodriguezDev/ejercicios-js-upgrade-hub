
const basUrl = "https://ghibliapi.herokuapp.com/films"

fetch(basUrl)
.then(resp => resp.json())
.then(data => {
    
    const containerGallery$$ = document.createElement("div"); //Contenedor Galería
    containerGallery$$.classList.add("b-gallery")

    for (const movie of data) {
        
        const div$$ = document.createElement("div");  
        const h3$$ = document.createElement("h3");
        const img$$ = document.createElement("img")

        img$$.setAttribute("src", movie.image);
        h3$$.textContent = movie.title;
        
        div$$.classList.add("b-gallery__item");
        h3$$.classList.add("b-gallery__title");
        img$$.classList.add("b-img");

        div$$.appendChild(img$$);
        div$$.appendChild(h3$$);
        containerGallery$$.appendChild(div$$);

        document.body.appendChild(containerGallery$$)
    }
})

