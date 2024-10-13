//Funciones de orden superior 2
/*
OBJETO MATH : nos permite a nosotros a travaes de propiedades y metodos, realizar operaciones complejas


MIN Y MAX : devuelven el valor minimo y maximo respectivamente entre los numeros proporcionados


*/

let minimo = Math.min(5,10,-3,7);
console.log(minimo)

let maximo = Math.max(5,10,4,20);
console.log(maximo)

//ceil : lo usamos cuando queremos redondear hacia arriba un numero decimal

let numero = 4.2;

let redondeo = Math.ceil(numero)
console.log(redondeo)

//floor : nos permite redondear un numero hacia abajo

let redondeoAbajo = Math.floor(numero);
console.log(redondeoAbajo)

//round : cuando queremos q se redondee al numero entero mas cercano
//si tenemos un numero esta justo en la mitad 0.5 : siempre redondea hacia arriba

let redondeJs = Math.round(numero)
console.log(redondeJs)

//RANDOM : genera un numero pseudoaleatorio que va entre el 0 y el 1;

let aleatorio = Math.random();
console.log(aleatorio)

//queremos que los numeros vayan entre el 1 y 10

let numerosEntreUnoYDiez = Math.round(Math.random()*(10))+1;
console.log(numerosEntreUnoYDiez)

//redondear precios.


let precioOriginales = [

    {
        nombre:"jordan",
        precio: 750.30
    },
    {
        nombre:"Nike",
        precio: 850.75
    },
    {
        nombre:"adidas",
        precio: 345.1
    },
    {
        nombre:"new balance",
        precio: 235.30
    }

]





// let preciosRedondeados = precioOriginales.map(precios => Math.floor(precios.precio));
// console.log(preciosRedondeados)

// let sumaTotal = preciosRedondeados.reduce((acumulador, precio)=> acumulador + precio, 0)
// console.log(sumaTotal)

let sumaTotal = precioOriginales.reduce((acumulador,precios)=> acumulador + Math.floor(precios.precio),0);

console.log(sumaTotal)