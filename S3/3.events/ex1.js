/*
Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log
con la información del evento del click
*/

const btn$$ = document.getElementById("btnToClick");

function handleButton(e){
    console.log(e);
}

btn$$.addEventListener("click", handleButton);
