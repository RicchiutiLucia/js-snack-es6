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

let indiceBiciPiuLeggera = 0;
for(let i= 0; i < listaBici.length; i++){
    if(listaBici[i].peso < listaBici[indiceBiciPiuLeggera].peso){
        indiceBiciPiuLeggera = i;
    }
}

console.log(indiceBiciPiuLeggera);

const {nome , peso} = listaBici[indiceBiciPiuLeggera];

const biciDom = document.getElementById('bici');
biciDom.innerHTML = `La bici più leggera è: ${nome} che pesa ${peso} kg`


