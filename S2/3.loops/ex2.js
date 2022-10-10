//Usa un foin para imprimir por consola los datos del alienigena.


const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {
    
    console.log(`El alienígena tiene al propiedad ${key} con el valor ${alien[key]}.`);

}
