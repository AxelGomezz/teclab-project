let num = 1
let texto = 'este es un texto'

const arrayFrutas = ['manzana','banana','naranja','mandarina','sandia']


console.log(num,texto)
console.table(arrayFrutas)

/*
---- Conventional function ----

function iterarArrayFrutas(){
    for(let i=0;i <= arrayFrutas.length; i++){
        if(i === 1 || i === 3){
            continue;
        }
        console.log(arrayFrutas[i])
    }
}

iterarArrayFrutas();
*/

const arroww = (array) => {
    for(let i=0;i <= array.length; i++){
        if(i === 1 || i === 3){
            continue;
        }
        console.log(array[i])
    }
}

arroww(arrayFrutas);