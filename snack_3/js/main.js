/*Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che 
hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.*/

//funzione con filter
const myArray = [4,8,24,28,7,33,37,44,21,36,49,50,2];
let newArray = filterArray(myArray, 4,7);
console.log(myArray);
console.log(newArray);


function filterArray(array, a, b){
  return array.filter((i) => {
      return a <= i && b >= i});
}
//funzione con forEach
const forEachArray = [3,8,24,22,10,34,37,44,21,39,51,2];
let arrayTarget = arrayForEach(forEachArray,2,8);
console.log(arrayTarget);

function arrayForEach(array,a,b){

  const newArray2 = [];

  array.forEach((value, i) => {
      console.log(value);
      if(a < i && b > i){
          newArray2.push(value);
      }
  });

  return newArray2;
}