//Inserta dinamicamente en un html un div que contenga una p con javascript.

const divContainer$$ = document.createElement("div");
const p$$ = document.createElement("p");

divContainer$$.appendChild(p$$);

document.body.appendChild(divContainer$$);

console.log(divContainer$$)