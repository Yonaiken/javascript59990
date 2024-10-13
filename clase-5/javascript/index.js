//funciones anonimas y funciones flecha

/*

FUNCION ANONIMA=> no posee un nombre especifico y se puede definir en el moemnto y se puede asignar a una variable
Las funciones anonimas se utilizan en callback de funciones de orden superior en la creacion de modulos cuando sabemos que la funcion no la vamos a volver a utilizar

function nombre (parametros) {
    return
}
    nombre(argumentos)


*/
// let suma = function(a,b) {
//     return a + b;
// }
// console.log(suma(5,3));

/*

Funcion de tipo flecha o funcion flecha

let suma = (a,b) => {
    return a + b
    }

Es una sintaxis mucho mas consisa.(se utilizan mas que nada en funcionaes cortas)
no posee argumentos
no es necesario poner return lo tiene implicito
y cuando la funcion se epresa en una sola linea no es necesario ponerle las llaves {}

funciones normales vs funciones flechas

funciones flecha
sintaxis limpia y consisa
necesitamos mantener el contexto de this (objetos
y cuando trabajamos con metodos arrays (mas adelante))

funciones normales
hablamos de de un contexto propio this
cuando necesitamos acceder a argumentos
cuando creamos un objeto (lovemos ahora)
cuando son funciones complejas

*/

// let sumaDos = (a,b) => a + b;
// console.log(sumaDos(3,4));


//OBJETOS 
/*
es algo que tiene varias caracteristicas => una coleccion de proiedades, donde cada propiedad se compone de una clave y un valor.
en javascript nosotros lo utilizamos para almacenar datos y funciones.

let nombre = {
    clave:valor,
    clave1: valor1,

}
*/

// let persona = {
//     nombre: "Pedro",
//     edad: "31",
//     estudios: "Programacion"
// }
// console.log(persona);
// console.log(persona.estudios);

// //////////////////////////

// let producto = {
//     id: 1,
//     nombre: "jarron manuela",
//     material: "marmol",
//     color: "blanco",
//     precio: 15000
// }
// console.log(producto.precio)
// //tambien se puede modificar el objeto de la siguiente manera

// producto.color = "negro"
// console.log(producto)

//OBJETOS CONSTRUCTORES

/*
nos permite crear objetos a partir de plantillas, que se definen a partir de una funcion.
instanciar y crear multiples objetos

1- tenemos que definir una funcion, que inicia las propiedas del objeto.
2- tenemos que pasarle informacion a traves de una palabra clave llamada new

para reconocer un objeto constructor escribimos su primera letra es mayuscula

this => es una palabra que drefiere al contexto de ejecucion. el valor puede cambiar dependiendo de como invoquemos a la funcion

instanciar refiere al proceso de crear un objeto a partir de una clave

*/

// function Auto(marca, modelo, año) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.año = año;
//     this.info = function(){
//         return `la marca del coche es ${this.marca}, su modelo es ${this.modelo}, año ${this.año}`
//     }
// }
// let auto1 = new Auto('toyota', 'corolla', 2021)
// let auto2 = new Auto('honda', 'civic', 2020)
// console.log(auto1);
// console.log(auto1.info());
// console.log(auto2);


// clases son una manera mas moderna de hacer objetos
/*
es una manera mas facil en cuanto a la sintaxis y mas clara.

las clases funciona de la siguiente manera:
dentro de las clases se crea un constructor que nos sirve para inicializar las propiedades del objeto


*/
// class Auto {
//     constructor(marca, modelo, año){
//     this.marca = marca;
//     this.modelo = modelo;
//     this.año = año;
//     }
//     info(){
//         return `${this.marca}, ${this.modelo}, ${año}`
//     }
// }

// let auto1 = new Auto('honda','civic', 2021);
// console.log(auto1)

///////////////////////////////////////


class Persona {
    constructor(nombre, edad, calle, ciudad, codigoPostal, habilidades) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = {
            calle: calle,
            ciudad: ciudad,
            codigoPostal: codigoPostal
        }
        this.habilidades = habilidades;
    }
    mostrarInfo() {
        console.log(`nombre $this.nombre`)
    }
} 

let juan = new Persona (
    "Juan",
    30,
    "guido",
    "mar de plata",
    7600,
    "tocar el piano"
)
console.log(juan)