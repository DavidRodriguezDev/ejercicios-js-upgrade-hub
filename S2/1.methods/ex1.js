/*
Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
Usa la función .includes de javascript.

```js
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
```
*/

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta',
 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if(product.includes("Camiseta")){
        console.log("Este producto contiene la palabra Camiseta -> " + product);
    }
    
}