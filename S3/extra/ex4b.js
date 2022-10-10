//Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista.


const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
                     {title: 'mANOLO', imgUrl: 'https://picsum.photos/300/200?random=2'},
                     {title: 'ESPAÑA', imgUrl: 'https://picsum.photos/300/200?random=3'},
                     {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
                     {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];            

const listDivs$$ = document.createElement("ul");

for (let i = 0; i < countries.length; i++) {
    const country = countries[i];

    const div$$ = document.createElement("div");
    
    div$$.innerHTML = `<h4>${country.title}</h4><img src="${country.imgUrl}"/>`

    listDivs$$.appendChild(div$$)
}

document.body.appendChild(listDivs$$)

const button$$ = document.querySelector("button");

button$$.addEventListener("click", function(){
    const allDivs$$ = document.querySelectorAll("div");
    allDivs$$[allDivs$$.length - 1].remove();
})
