/*
Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name
 y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

```js
const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];
```
*/

const users = [{id: 1, name: 'Abel'},
 {id:2, name: 'Julia'},
 {id:3, name: 'Pedro'},
  {id:4, name: 'Amanda'}
];

let user = users.map((user)=> {
    if(user.name[0] === "A") {
        return user.name = "Anacleto";
    } else {
        return user.name;
    }
}) 

console.log(user);