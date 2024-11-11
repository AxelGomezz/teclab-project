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

/*
class producto{
    constructor(id,precio,stock){
        this.id = id
        this.precio = precio
        this.stock = stock
    }
    descontarDeStock(unidad){
        if(typeof unidad != 'number'){
            console.error("Error: El valor a descontar debe ser un número.")
            return;
        }
        if((this.stock - unidad) < 0){
            console.error("Error: La cantidad a descontar es mayor que el stock disponible.")
            return;
        }

        this.stock -= unidad
        return this.stock;
    }
}*/

const paisesDelSur = ['argentina', 'uruguay', 'brasil', 'venezuela', 'chile']

function agregarElemento(pais){
    let paisNormalizado = pais.toLowerCase()
    if(paisesDelSur.includes(paisNormalizado)){
        console.error("Error: El pais ingresado ya existe en la lista.")
        return;
    }else{
        paisesDelSur.push(paisNormalizado)
        console.log("El pais fue agregado exitosamente!.")
    }
    
}