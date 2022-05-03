/* Encuentra el máximo */

let numbers =[1,2]
export function maxOfTwoNumbers(a,b){
if (a>b) {
    return a;
} else {
    return b;
}}

/* Busca la palabra más larga */
export function findLongestWord(array){
if (array.length===0){
    return undefined;
}
let longestWord="";
for (let i=0; i<array.length; i++){
    if(array[i].length > longestWord.length||0)
   longestWord = array [i];
}
return longestWord;
}


/*suma los valores de un array*/
export function sumArray(array){
    let suma = 0;
    for (let i =0; i<array.length; i++){
        suma+= array [i]
    }
    return suma;
}

//ternary conditions
// return !array.length ? undefined : sumaArray(array)/array.length;

/*Busca el promedio de números*/
export function averageNumbers(array){
    if (array.length === 0){
    return undefined;}

    return sumArray(array/array.length);
}

/*Busca media */
export function averageWordLength(){}

/*Busca unificar el Array*/
export function uniquifyArray(){}

/*La palabra existe?*/
export function doesWordExist(array, palabra){
let resultado =false;
for(let i=0; i<array.length;i++){
    if(array[i]===palabra){
        resultado = true;
    }
}}
//busco si palabra esta dentro de array devuelvo true
//si no devuelve false

/*Busca cuantas veces*/
export function howManyTimes(){}

/*Busca el mejor producto*/
export function greatestProduct(){}