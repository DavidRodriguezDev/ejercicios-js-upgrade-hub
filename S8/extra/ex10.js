/*
Dado el siguiente javascript, crea una función `attack` a la que le pases como parametro las dos naves 
y simule un disparo.
Esta función generara un numero aleatorio de 1 al numero de la propiedad `.damage` de la primera nave
y le restará el resultado al valor de la propiedad `.pv` de la segunda nave.
Ejecuta la función tantas veces como quieras.
```js
const ship1 = {name: "Banca rota", damage: 44, pv: 150};
const ship2 = {name: "Cacique pero no", damage: 66, pv: 124}
```
*/

const ship1 = {name: "Banca rota", damage: 44, pv: 150};
const ship2 = {name: "Cacique pero no", damage: 66, pv: 124}


getRandomNumber = (min, max)=> {   //Función para crear un número aleatorio.

    let number = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(number + " hp de vida te he quitado machote.");
    return number;

} 



const attack = (ship1, ship2) => {   //Función ataque
     numAleatorio = getRandomNumber(1, ship1.damage)
     return ship2.pv - numAleatorio;
    
}

console.log("¡¡¡¡¡CAÑONAZO!!!!!!!")
console.log(attack(ship1, ship2) + " --> hp. te quedan de vida JoseFrancisco");
console.log("piiiiiiummm!")
console.log(attack(ship2, ship1) + " --> hp. te quedan de vida barco de mierda 1");