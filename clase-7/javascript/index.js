/*
Abastracion: antes de meternos en el tema de hoy, necesitamos mirar un poco atras. Empezemos a analizar el siguiente codigo

let total = 0
for(let i = 1; i <= 10; i++) {
total += i
}
// console.log(total)

Abstracion : es la manera en la cual podemos reducir la complejidad y permitir una implementacion y diseño eficiente de datos.

1. vamos a evitar el duplicado de codigo
2. poder crear multiples instancias con una sola abstraccion
3. encapsular datos
4. evitamos codigo de bajo nivel

*/
// function sumar(a, b){
//     return a + b
// }
// console.log(sumar(3,5))
 

// Funciones de orden superior
/*
es una funcion que toma una o mas funciones como argumentos o devuelve una funcion como resultado

*/



//una funcion puede contener dentro otras funciones

// function asignarOperacion(operacion) {
//     if(operacion === 'sumar'){
//         return function(numero1, numero2){
//             return numero1 + numero2
//         }    
//     }else if(operacion === 'restar'){
//         return(numero1, numero2) => numero1 - numero2
//     }
// }
// let sumar = asignarOperacion('sumar');
// let restar = asignarOperacion('restar');

// console.log(restar(10,6))


/* function que tome 2 numeros, operacion*/
//es para que se entienda que una funcion padre puede llamar a otras funciones y ejecutar cosas.

// function operar(num1, num2, operacion) {
//     return operacion(num1, num2)
// }

// function suma(a, b) {
//     return a + b;
// }
// function resta(a, b) {
//     return a - b;
// }
// function multiplicar(a, b) {
//     return a * b;
// }
// function dividir(a, b) {
//     return a / b;
// }
// console.log(operar(5,3,suma))
// console.log(operar(5,3,resta))
// console.log(operar(5,3,multiplicar))


// ******** METODOS DE BUSQUEDA Y TRANSFORMACON *********

/*javascript incorpora nativamente varias funciones de orden superior. existen metodos para operar sobre arrays que trabajan con esta logica.arraysLos siguientes, funcionan siempre iterando sobre el array correspondiente. reciben una funcion por parametros, la cual recibe a la vez el elemento del array que se esta iterando*/

/* Metodo forEach: Es una funcion q se utiliza para iterar sobre elemntos de un rray. Y permite ejecutar una funcion especifica para cada elemeto del array

Parametros:

1- elemento = elemento actual de array que se procesa
2- indice (opcional) el indice actual del elemento
3- arreglo (opcional)
*/

// const frutas = ['manzana', 'pera', 'kiwi', 'naranja'];

// frutas.forEach(function(frutas, indice){
//     console.log(`${indice}: ${frutas}`)
// })


// const numeros = [2,4,6,8]
// let suma = 0

// numeros.forEach(numero => {
//     suma += numero
// })
// console.log(suma)

// const PERSONAS = [
//     {
//         nombre: 'pedro',
//         edad: '25'
//     },
//     {
//         nombre: 'juan',
//         edad: '30'
//     },
//     {
//         nombre: 'maria',
//         edad: '19'
//     },
//     {
//         nombre: 'cristian',
//         edad: '18'
//     },
//     {
//         nombre: 'cristofer',
//         edad: '16'
//     }
// ]

// const NOMBRES = []

// PERSONAS.forEach(persona => {
//     NOMBRES.push(persona.nombre)
// })
// console.log(NOMBRES)

/*
METODO FIND : devuelve el primer elemento de una arreglo que cumpla con una condiion dada, ahora si no cumple ningun elemento con la condicion devuelve undefined

*/

// const numeros = [2,5,6,7,8]
// const primerPar = numeros.find(num => num % 2 === 0);
// console.log(primerPar)

// const PERSONAS = [
//     {
//         nombre: 'pedro',
//         edad: '25'
//     },
//     {
//         nombre: 'juan',
//         edad: '30'
//     },
//     {
//         nombre: 'maria',
//         edad: '19'
//     },
//     {
//         nombre: 'cristian',
//         edad: '18'
//     },
//     {
//         nombre: 'cristofer',
//         edad: '16'
//     }
// ]

// const NOMBRE_BUSCADO = "maria";

// let estudianteEncontrado = PERSONAS.find(persona => persona.nombre === NOMBRE_BUSCADO);
// console.log(estudianteEncontrado)
// if (estudianteEncontrado) {
//     console.log(`estudiante encontrado: ${estudianteEncontrado}`)
// }

/*
METODO FILTER: nos va adevolver un nuevo arreglo, con todos los elementos que pasen las condiciones dadas por el programador.


*/

// let edad = [15,20,22,16,40];

// let mayoresDeEdad = edad.filter(edad => edad >= 18 && edad <=30);
// console.log(mayoresDeEdad)

/*
METODO SOME: verifica si un elemento en el arrego cumple o no con una condicion dada. devuelve true si al menos un elemento pasa la prueba y false si no lo pasan

*/

// const numeros = [1,3,5,8];
// const par = numeros.some(num => num % 2 === 0)
// console.log(par)

/*
METODO  MAP: este metodo nos devuelve un nuevo arry con los resultados de aplicar una funcion sobre los elementos del array original

*/

const PRECIOS_CARRITO = [100,200,150,300];

// let precioAumentos = PRECIOS_CARRITO.map(precio => precio * 1.5);
// console.log(precioAumentos)

/*
METODO REDUCE: este metodo reduce un array a una unica expresion 

*/

// const totalCarrito = PRECIOS_CARRITO.reduce((acum, num) => acum + num,0);
// console.log(totalCarrito)

// let totalVentas = 0;
// for (let i = 0; i < PRECIOS_CARRITO.length; i++) {
//     totalVentas += PRECIOS_CARRITO[i];
// }
// console.log(totalVentas)


/*
METODO SORT: nos permite ordenar un array, se debe generar una funcion de comparacion
nota: los ordena por el sistema unicode, osea empezando desde el 1 progresivamente
*/

const numeros = [5,4,10,25,30];

// numeros.sort((a,b)=> a - b); // aqui los valores los ordena de manera creciente
numeros.sort((a,b)=> b - a); // aqui los valores los ordena de manera decreciente
console.log(numeros)


//caso en poder usar el metodo sort

const string = ["manzana", "Banana", "anana", "kiwi"]
string.sort((a,b)=> a.localeCompare(b)) // funcion comparativa. aqui eleimina el sistema unicode
console.log(string)
