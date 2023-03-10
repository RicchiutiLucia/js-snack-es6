/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */

const listaBici = [
    {
        nome : 'Bianchi',
        peso : 14968
    },
    {
        nome : 'Cannondale',
        peso : 10341
    },
    {
        nome : 'Santa Cruz',
        peso : 15960
    },
];

console.log(listaBici);


const valoreMinore =  Math.min.apply(null, listaBici.map(biciclette => biciclette.peso));

listaBici.forEach(bicicletta =>{
    if(bicicletta.peso == valoreMinore){
        console.log(`La bicicletta con il peso minore è la ${bicicletta.nome} con un peso di ${bicicletta.peso}`);
    }
});


