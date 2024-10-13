//sentencia switch

// switch(expresion) {
//     case valor1:
//         //codigo ejecucuion
//     case valor2:
//         //codigo ejecucuion
//     case valor3:
//         //codigo ejecucuion
//         break;

//         default;
//         //codigo ejecucion en caso de que no se cumpla ninguna cindicion
// }

// ejemplos

const NUM1 = parseFloat(prompt("ingrese un numero"));
const OPERACION = prompt("ingrese la operacion que quiera hacer : * ")
const NUM2 = parseFloat(prompt("ingrese otro numero"))

if('OPERACION === *') {
   resultado =  NUM1 * NUM2
    
    
}
console.log(resultado);


// let resultado;

// switch (OPERACION) {
//      case "+":
//         resultado = NUM1 + NUM2;
//         break;
//     case "-":
//         resultado = NUM1 - NUM2;
//         break;
//     case "*":
//         resultado = NUM1 * NUM2;
//         break;
//     case "/":
//         resultado = NUM1 / NUM2;
//         break;
//     default:
//         alert("no estas ingresando una operacion valida")
    
// }
// alert("resultado es :" + resultado);

//FUNCIONES......!!!!!

/*
es un bloque de codigo reutilizable.
que va a ejecutar una funcion especifica.
las funciones se utilizan para agrupar conjuntos de instrucciones se van a ejecutar cuando se llamen

las funciones nos sirven para dividir tareas en bloques de codigo mas pequeños

en general:
 - reutilizar codigo
 - modularizar y organizarlo
 - facilitar el mantenimiento y actualizaciones

 ESTRUCTURA:

 function nombreFunction(parametros){
    escribir el codigo a ejecutar
 }
    nombreFunction();

    las funciones suelen ser verbos de acciones tambien se escriben en camelCase
*/

// function saludar() {
//     console.log("buenas noches pibes todos sufran con esto")
//     console.log("buenas noches pibes todos sufran con esto")
//     console.log("buenas noches pibes todos sufran con esto")
// }
// saludar();
// saludar();
//  function sumar() {
//     let num1 = parseInt(prompt("ingrese un numero"))
//     let num2 = parseInt(prompt("ingrese otro numero"))

//     let suma = num1 + num2;
//     console.log("la suma es: " + suma)
//  }
//  sumar();
//  sumar();

// function ingresarNombre (nombre) {
//     nombres = nombre;
//     console.log("el nombre ingreado es ", nombres);

// }
// ingresarNombre("pedro");
// ingresarNombre("maxi");

// function saludar() {
//     let nombreIngresado = prompt("ingresa un nombre")
//     console.log("hola" + nombreIngresado)
// }
// saludar();
// saludar();
// let nombreIngresado = prompt("ingresa tu nombre");

// function datosPersona(nombre, apellido, edad)// aqui van los parametros
//  {
//     console.log("esta persona se llama " + nombre + " y su apellido es " + apellido + " y tiene " + edad)
// }

// // cuando llamamos a una funcion los datos que se usan se llaman argumentos
// //estos argumentos ingresan a la funcion como parametros
// datosPersona(nombreIngresado, 'carlo', 25)
// atosPersona('mathias', 'caligari', 27)


// function calcular (montoInicial) {
//     let tasaInteres = 0.05;

//     function calcularIntereses () {
//         return montoInicial * tasaInteres;
//     }
//     let intereses = calcularIntereses();
//     let total = montoInicial + intereses

//     return total
// }
// // el return va a devolver un valor dentro del codigo que lo llamo. el reurn devuelve un valor y va al final de la funcion
// console.log(calcular(100))
// console.log(calcular(70))




