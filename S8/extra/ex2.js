/*
Ahora vamos a trabajar con JSON SERVER para simular una api. Es muy fácil de usar.
 Simplemente instálalo de manera global usando el comando  `npm i -g json-server` y una vez lo tengas instalado, ejecuta este comando `json-server --watch exercise-2.json` en la posición donde esté el archivo exercise-2.json. Los datos que nos brindará serán los alojados en el archivo exercise-2.json y estarán accesibles por defecto en la url localhost:3000.
 
Para este ejercicio vamos a obtener y pintar en el html una serie de notas del diario de nuestro queridísimo Eliot. 
Para ello deberemos ejecutar el comando que comentabamos anteriormente y hacer un .fetch() a la url `http://localhost:3000/diary`.

Una vez tengas los datos tenemos que ordenarlos por fecha de menor a mayor con la propiedad .date.
 Nuestro carismático personaje es un poco caótico y escribe las notas en páginas salteadas...
  
Cuando lo tengas crea un div para cada nota del diario e introduce 
un ``<h3>``, un  ``<h5>`` y un ``<p>`` para su .title, .date y .description respectivamente.
  
Finalmente añade un botón para poder eliminar las notas del diario. En concreto hay una que a Eliot no le apetece recordar mucho...
*/

const baseUrl = " http://localhost:3000/diary"

fetch(baseUrl)
.then(resp => resp.json())
.then(diary => {
    console.log(diary);
    orderedDates(diary);
    addDiv(diary)       
    
})

const orderedDates = (diary) => {
    return diary.sort((a,b) => new Date(a.date) - new Date(b.date))
}

const addDiv = (diaryNotes) => {
    for (const diary of diaryNotes) {
        const div$$ = document.createElement("div");
        const h3$$ = document.createElement("h3");
        const h5$$ = document.createElement("h5");
        const p$$ = document.createElement("p");
        const btn$$ = document.createElement("button");

        h3$$.textContent = diary.title;
        h5$$.textContent = diary.date;
        p$$.textContent = diary.description;
        btn$$.textContent = "Delete Note";


        div$$.appendChild(h3$$);
        div$$.appendChild(h5$$);
        div$$.appendChild(p$$);
        div$$.appendChild(btn$$);

        btn$$.addEventListener("click", ()=> {
            div$$.remove();
        })

        document.body.appendChild(div$$);
    }
}

