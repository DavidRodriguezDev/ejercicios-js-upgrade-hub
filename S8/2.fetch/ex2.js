/*
Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api
 cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text">
    <button>Consultar</button>
</body>
</html>
```

```js
const baseUrl = 'https://api.nationalize.io?name=';
```


*/

const baseUrl = 'https://api.nationalize.io?name=';
const input$$ = document.querySelector("input");
const button$$ = document.querySelector("button");


const searchName = (name) => {
    fetch(baseUrl + name)
    .then(resp => resp.json())
    .then(data => console.log(data))
}

button$$.addEventListener("click", ()=> searchName(input$$.value));