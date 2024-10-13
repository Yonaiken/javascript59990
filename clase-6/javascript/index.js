/*
un array es una lista o estructura de datos que se utiliza para almacenar una colecion de valores.
los valores array pueden ser de cualquier tipo, numeros, cadena de texto, objetos y podemos tener array dentro de otras funciones



// let array = []; // un array vacio sin informacion
el corchete se hace con la tecla alt 91

los arrys siempre inician con el indice posicion 0 cero

por console podemos ver una palabrita llamada length => que nos dice la longitud del array
*/

// let strings = ["numero", "perro", "jaime","tyron"];
// let numeros = [1,2,3,4,5]
// let boolean = [true, false, true, false]
// let mixto = [1, "numero", false, 2]
// let pokemon = [
//    {
//     pokemon: "pikachu",
//     tipo: "electrico"
//    },
//    {
//     pokemon: "ivi",
//     tipo: "normal"
//    }, 
//    {
//     pokemon: "lugia",
//     tipo: "legendario"
//    }
// ]

// console.log(strings)
// console.log(numeros)
// console.log(boolean)
// console.log(mixto)
// console.log(pokemon)
// console.log(strings[2])

// for(let i = 0; i < pokemon.length; i++) {
//     console.log(pokemon[i]) // este me devuelve el objeto entero
//     console.log(pokemon[i].pokemon)
// }

//length no es un metodo, es una propiedad. Sirve para devolvernos la cantidad de elemntos que posee el arrays
/*
Metodos en arrays son funciones incorporadas en js que nos van a permitir realizar algunos operaciones

*/
// let strings = ["numero", "perro", "jaime","tyron"];
/*
METODO PUSH : nos permite agregar uno o mas elementos al final del arrays
*/
// strings.push("Juan Pablo", "pepe");
// console.log(strings);


/*

METODO POP : me va eliminar un elemnto o varios del arrays siempre y cuando esten al final
*/

/*
METODO UNSHIFT : agregar elemento al inicio del array
METODO SHIFT : elimina elentos al inicio del arrays

*/
// strings.pop();
// console.log(strings)

// strings.unshift("brian sarmiento");
// console.log(strings)
// strings.shift();
// console.log(strings)

/* 
METODO SPLICE: se utiliza para modificar el arrays eliminando agregando o reemplazando elementos en posiciones especificas

*/
// let strings = ["numero", "perro", "jaime","tyron"];

// let miNuevoArray = strings.splice(1,2);
// console.log(miNuevoArray);
// console.log(strings);


/*
METODO JOINS : nos convierte los elemntos de un arrays en una cadena de texto y los une a travez de un separador
*/

// let strings = ["numero", "perro", "jaime","tyron"];
// let pasoAstrings = strings.join(" - ");

// console.log(pasoAstrings)

/*
METODO indexOf : nos sirve para buscar el primer elemento de un arrays que se repita
nota: nos devuelve el indice si existe, ahora si no existe devuelve -1
*/

// let frutas = ["manzana", "pera", "banana", "manzana"];

// let indice = frutas.indexOf("pera");

// console.log("el indice de manzana es: " + indice);

/*
METODO INCLUDES: me dice si un elemnto existe o no en el arrays y nos devuelve un booleano

*/

// let existe = frutas.includes("banana");
// console.log(existe);

// /*
// METODO REVERSE: nos ayuda a inverir el orden de los elemntos del arrays

// */

// let frutaInvertida = frutas.reverse();
// console.log(frutaInvertida);

/*

METODO CONCAT : se utiliza para combinar dos o mas arrays en uno nuevo
*/

// let array1 = [1,2,3,4]
// let array2 = [5,6,7,8]
// let array3 = [9,10,11,12]

// let arrayCombinado = array1.concat(array2,array3)

// console.log(arrayCombinado)

/*
METODO SLICE : se utiliza para extraer una porcion de un array y devolverlo en un nuevo array, no modifica el array original

*/

// let alumnos = ["franco", "stafany", "natalia", "jonathan"];

// let aprobadas = alumnos.slice(1,3)

// console.log(aprobadas)
// console.log(alumnos)

// let desaprobados = [alumnos[0], alumnos[alumnos.length-1]];
// console.log(desaprobados)

// let listaNueva = [].concat(alumnos.slice(0,1), alumnos.slice(-1));
// console.log(listaNueva)

/*
METODO FOR OF : es una estructura de control que se utiliza para recorrer y operar en elementos de un iterable

*/

// const lenguajes = ["ingles", "italiano", "español", "frances"];

// for (const lenguaje of lenguajes) {
//     console.log(lenguaje);
// }


// Ejemplo: carrito de productos que suman el total de los precios de los productos

// const productos =  [
//     {
//         producto: "camiseta",
//         precio: 20
//     },
//     {
//         producto: "zapatillas",
//         precio: 30
//     },
//     {
//         producto: "pantalones",
//         precio: 40
//     }
// ]

// let precioTotal = 0;
// for (const PRODUCTO of productos) {
//     precioTotal += PRODUCTO.precio;
// }

// console.log("el precio total del carrito es: " + precioTotal)

