// if=> sentencia que nos dice si una condicion se cumple.

// if(condicion) {
//     la instruccion o lo que queremos que se devuelva
// }

//asignamos
// let a, b, c, d;

//inicializamos
// a = 18;

/*

= asigancion

== operador de igualdad (solo vamos a comparar valores y no el tipo de dato)
ejemplo:

=== operador de igualdad estricto

!= distinto

!== distinto estricto
 */
// a = 18;
// if (a == "18") {
//     console.log("es un 18")
// }

// if(a === 18) {
//     console.log("me devolves 18?")
// }else {
//     console.log("no me va a funcionar pq no es igual al tipo numerico")
// }

//  nota: cuando uno introduce un dato por un promp lo agarra o identifica como string, hay q parsearlo con parseInt para que lo tome como valor numerico
// let edad = parseInt(prompt("por favor ingresa tu edad para ingresar al cheboli"));

//cuntos años tengo:
// if (edad > 18) {
//     console.log ("el pibe puede entrar")
// }else {
//     console.log("el pibe no tiene 18")
// }

// else if => cuando nosotros queremos comparar o hacer multiples condiciones

// notas de evaluacion

// 90 => el examen es optimo
// 75 =>el examen es correcto
// 60 => el examen es bajo
// -60=> el examen esta desaprobado

// let nota = parseInt(prompt("Ingresa nota del alumno"))

//  if (nota >= 90) {
//     console.log("el pibe es crack saco optimo con " + nota)
//  }else if (nota>=75) {
//     console.log("el pibe tiene un correcto")
//  }else if (nota>=60) {
//     console.log("el pibe tiene nota baja")
//  }else {
//     console.log("ni el chatgpt lo ayudo")
//  }


/*
operador logico and &&
este operador va a devolver true, siempre y cuando las condiciones que se cumplan sean verdaderas
*/

// let edad = 18;
// let tieneLicencia = true;

//para que una persona pueda manejar debe ser mayor de edad y tener registro

// if(edad >=18 && tieneLicencia === true) {
//     console.log("el chico puede manejar")
// }else {
//     console.log("el chico no puede manejar")
// }

// operador OR se expresa con ||  se va a ejecutar en el bloque de codigo
// si al manos una condicion es verdadera

// let nombre = "Pedro";
// let apellido ="Di santo";
// let edad = 25;

// if(nombre === "Juan" || apellido === "Perez" || edad >=18) {
//     console.log("la persona cumple con los criterios para llenar la encuesta")
// }else {
//     console.log("la persona NO cumpe con los criterios")
// }

// operador NOT
/*
se identifica con el simbolo de exclamacion !
se llama conversion boleana

true => !true =>false
false => !false =>verdadero

*/

// let campoNombre = "";

// if (!campoNombre) {
//     console.log("el camp nombre esta vacio por favor completa el campo")
// }else {
//     console.log("el campo completado")
// }

// let nota1 = parseInt(prompt("Ingrese la nota del primer trimeste"))
// let nota2 = parseInt(prompt("Ingrese la nota del segundo trimeste"))
// let nota3 = parseInt(prompt("Ingrese la nota del tercer trimeste"))
// let promedio = (nota1 + nota2 + nota3) / 3
// console.log("Tu promedio de es año es: " + promedio)