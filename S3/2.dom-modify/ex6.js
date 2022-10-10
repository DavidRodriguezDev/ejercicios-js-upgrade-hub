/*
Basandote en el siguiente array crea una lista ul > li con los textos del array.

```js
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
```
*/

const list$$ = document.createElement("ul");

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

for (let i = 0; apps.length; i++) {
    const app = apps[i];
    
    const li$$ = document.createElement("li");
    li$$.textContent = app;
    list$$.appendChild(li$$);    
}


document.body.appendChild(list$$);