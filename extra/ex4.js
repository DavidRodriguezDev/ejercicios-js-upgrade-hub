/*Segun la siguiente lista, ordena los elementos en base a la propiedad .order.

```js
const list = [
    {name: "La tulipán", gender: "pop", order: 3},
    {name: "Calle falsa 123", gender: "rap", order: 2},
    {name: "Z balvin", gender: "reggeaton", order: 4},
    {name: "Neng de castefa", gender: "pop", order: 1}
]
```*/

const list = [
    {name: "La tulipán", gender: "pop", order: 3},
    {name: "Calle falsa 123", gender: "rap", order: 2},
    {name: "Z balvin", gender: "reggeaton", order: 4},
    {name: "Neng de castefa", gender: "pop", order: 1}
]

list.sort((a,b) => {
    if(a.order < b.order) {
        return -1
    }
    if(a.order > b.order) {
        return 1
    }
    return 0
})

console.log(list);

