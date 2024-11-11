/*let num = 1
let texto = 'este es un texto'

const arrayFrutas = ['manzana','banana','naranja','mandarina','sandia']


console.log(num,texto)
console.table(arrayFrutas)


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


const arroww = (array) => {
    for(let i=0;i <= array.length; i++){
        if(i === 1 || i === 3){
            continue;
        }
        console.log(array[i])
    }
}

arroww(arrayFrutas);


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
}*

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
}*/    

const botones = document.querySelectorAll('button')

console.log(botones)

/*Funcion template string + literals.*/ 
const productos = [
    { imagen: '🍎', nombre: 'Manzana', precio: 1.99 },
    { imagen: '🍌', nombre: 'Plátano', precio: 0.99 },
    { imagen: '🍓', nombre: 'Fresa', precio: 2.99 }
];

const container = document.querySelector('div.container')

function retornarCardHtml(producto){
    return`<div class="card">
                <div class="card-image">${producto.imagen}</div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="" title="Clic para agregar al carrito">+</button>
                </div>
            </div>`
}

function cargarProductos(array){
    container.innerHTML = ""
    array.forEach(producto => {
        container.innerHTML += retornarCardHtml(producto)
    });
}