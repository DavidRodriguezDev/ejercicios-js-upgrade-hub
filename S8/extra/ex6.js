/*

# Descripción

En este ejercicio vamos a simular una batalla de rol, con dados y estadísticas por doquier!

De nuevo, tendremos una api local que deberemos ejecutar con json-server. La url en cuestión de los personajes sería
`http://localhost:3000/characters`. Ten en cuenta que como usamos imágenes locales tienes que hacer el ejercicio en esta misma carpeta o llevarte la carpeta /public (carpeta con imágenes) donde tengas tus propios ejercicios.

En este caso vamos a realizar una batalla entre dos razas a elegir por el usuario. Por lo tanto, lo primero que
deberíamos hacer es una petición a personajes para imprimir sus datos en la página web. Tanto nombre, como imágenes y
estadísticas.

Cuando el usuario elija dos personajes, aparecerá un botón que diga "Luchar!". Una vez que el usuario haga click en el
botón luchar se realizarán una serie de tiradas de dados que decidirán que raza es la ganadora (puedes simular estas
tiradas haciendo un time out para que no salgan todos los resultados directamente).

# Condiciones de victoria

Para que una raza gane el combate tiene que dejar al contrincante con 0 puntos de vida (vitality). Para ello, Los
personajes lanzarán los dados que tengan sus características (damage) de forma ordenada (primero una raza, luego la
otra) y teniendo en cuenta las siguientes condiciones.

Si la raza tiene tiene por ejemplo este daño:

`"damage": ["2d6","1d10","2d20"]`

Significa que tendrá que lanzar 2 dados de 6 caras, 1 de 10 caras y 2 de 20 caras por turno. Para simular una tirada
aleatoria de dados podéis utilizar el siguiente código ``Math.floor(Math.random() * 10) + 1;``. Donde 10 es el numero
máximo del dado.

Por cada dado, tendremos que comprobar si el resultado coincide con el valor de la propiedad .critic del personaje. En
caso afirmativo, el daño de ESE dado se multiplicará x2.

````
Ejemplo de resultado de una tirada de humano:

4
2
8
10 x2 = 20
20
10 x2 = 20

Daño total = 74
````

Una vez que tengamos el daño completo, le restaremos el valor de la propiedad .defense del adversario.

`Ejemplo de la anterior tirada contra un enano que tiene 15 de defensa: 74 - 15 = 59`

Ese resultado, será el daño que el ha hecho el personaje al adversario, por lo cual, el resultado habría que restárselo
a la vitalidad del adversario (vitality).

`Ejemplo de vida restante del enano después del primer golpe del humano: 325 - 59 = 266`

Una vez concluido el golpe de un personaje pasaríamos al otro que haría el mismo proceso.

Este proceso se debería hacer constantemente hasta que uno de los personajes tenga 0 o menos puntos de vida. En cuyo
caso, el adversario sería el ganador.

Lo ideal es que una vez concluya una batalla, mostremos un botón para poder resetear el juego.

Para terminar y por hacer más justa la batalla, que raza ataca primero se decidirá de manera aleatoria.
 */

const characters$$ = document.querySelector("[data-function='characters']")
const arena$$ = document.querySelector("[data-function='arena']")
let playerOne;
let playerTwo;


async function init() {
    const characters = await getCharacters();
    printCharacters(characters);
}

async function getCharacters() {
    try {
        const res = await fetch("http://localhost:3000/characters");
        return await res.json();
    } catch (e) {
        console.error(e)
    }
}

function printCharacters(characters) {
    for (const character of characters) {
        const div$$ = document.createElement("div");
        div$$.classList.add("c-characters__item")
        div$$.innerHTML = `
            <img src="${character.avatar}"/>
            <h2>${character.name}</h2>
        `

        div$$.addEventListener("click", () => { selectPlayer(character) })
        characters$$.appendChild(div$$)
    }
}

function selectPlayer(character) {
    if (playerOne) {
        playerTwo = character;
        readyForBattle();
    } else {
        playerOne = character;
    }
}

function readyForBattle() {
    const button$$ = document.createElement("button");
    button$$.innerHTML = "Fight!"
    button$$.addEventListener('click', battle)
    characters$$.appendChild(button$$)
}

function battle() {
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    if (randomNumber === 1) {
        round(playerOne, playerTwo);
    } else {
        round(playerTwo, playerOne);
    }
}

function round(playerFighting, playerDefending) {
    let roundDamage = 0;
    for (const dice of playerFighting.damage) {
        roundDamage += rollADice(dice, playerFighting.critic);
    }

    finalDamage(roundDamage, playerDefending);

    if (playerDefending.vitality > 0) {
        setTimeout(() => { round(playerDefending, playerFighting) }, 250);
    }
    console.log(playerFighting.name + " pegando");
    console.log(playerDefending.name + " vida: " + playerDefending.vitality);
}

function finalDamage(damage, playerDefending) {
    const finalDamage = damage - playerDefending.defense;
    playerDefending.vitality -= finalDamage;
}

function rollADice(dice, critic) {
    const indexOfD = dice.indexOf("d");
    const timesToRoll = dice.substring(0, indexOfD);
    const sides = dice.substring(indexOfD + 1, dice.length);
    let diceDamage = 0;

    for (let index = 0; index < timesToRoll; index++) {
        rollingDamage = Math.floor(Math.random() * Number(sides)) + 1;
        diceDamage += rollingDamage === critic ? rollingDamage * 2 : rollingDamage;
    }

    return diceDamage;
}

init();