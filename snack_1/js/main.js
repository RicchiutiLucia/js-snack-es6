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

let pesoMinore = listaBici[0].peso;

listaBici.forEach((element) =>{
    const {peso} = element;
    if(peso < pesoMinore){
        pesoMinore = element;
    }
});

console.log(pesoMinore);

const {nome,peso} = pesoMinore;
document.getElementById('bici').innerHTML = `
<p>La bici con il peso minore tra quelle presenti all'interno della lista è la seguente:</p>
<ul>
    <li>Nome : ${nome}</li>
    <li>Peso : ${peso / 1000} kg</li>
</ul> `;