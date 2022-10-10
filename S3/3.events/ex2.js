/*
Basandote en el siguiente html, añade un evento 'focus' que ejecute un console.log con el valor del input.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <input type="text"/>
</body>
</html>
```
*/

const input$$ = document.querySelector("input");

function focusInput(e){
    console.log(e.target.value); // Para poder reutilizar la función en vez de poner directamente $input$$.value, en ese caso solo cogería un elemento input
}

input$$.addEventListener("focus", focusInput);