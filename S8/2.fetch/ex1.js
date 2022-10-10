/*
Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() 
y recibir los datos que devuelve. Imprimelo mediante un console.log().
 Para ello, es necesario que crees un .html y un .js.
*/


const api = "https://api.agify.io?name=michael"
fetch(api)
    .then(resp => resp.json())
    .then(data => console.log(data))

