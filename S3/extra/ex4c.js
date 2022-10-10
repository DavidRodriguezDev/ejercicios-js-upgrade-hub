/*Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos
 de las listas que elimine ese mismo elemento del html.*/



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
    
    const button$$ = document.createElement("button");
    button$$.textContent = "Remover elemento";
    div$$.appendChild(button$$);
   
    listDivs$$.appendChild(div$$)
    button$$.addEventListener("click", function removeElement(){ 
        div$$.remove();
    })
}

document.body.appendChild(listDivs$$)
