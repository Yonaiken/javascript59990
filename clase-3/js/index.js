// realiza un programa que permita ingresar 3 notas diferentes para ciertos alumnos de nivel secundario
// Debe calcularse y mostrarse la nota promedio

// let nota1 = parseInt(prompt("Ingrese la nota del primer trimeste"));
// let nota2 = parseInt(prompt("Ingrese la nota del segundo trimeste"));
// let nota3 = parseInt(prompt("Ingrese la nota del tercer trimeste"));

// let suma = (nota1 + nota2 + nota3);

// let promedio = suma / 3
// console.log("el promdedio es igual: " + promedio);


// Realiza un programa que permita ingresar un numero entero
// debe mostrarse el numero ingresado
// a. Multiplicado por 5
// b. Dividido por 2

// let numeroEntero = parseInt(prompt("ingrese tu numero crack: "));
// console.log(numeroEntero);

// let multiplicar = numeroEntero * 5;
// console.log(multiplicar);

// let dividir = multiplicar / 2;

// console.log("el resultado es " + dividir);


// ciclo por conteo: 
// - sabemos cuntas veces necesitamos que quiere el codigo
// - usa algo llamado contador
// - y el ejemplo clasico es el ciclo "for"

// ciclo por condicion

// - no sabemos cuantas veces se va a repetir, pero sabemos que si se cumple una condicion frena
// -los ejemplos clasicos de los cilcos condicionales son el while y el do while


// +++++++ciclo por conteo++++++++
// operadores importantes => incremento / decremento

// cuando queremos incrementar algo => i++ => i+1
// cuando queremos decrementar algo => i-- => i-1



// i ++ => post-incremento el valor de la variable se va incrementar despues que se utilice la expresion actual

// let x = 5;
// let y = x++;

//  console.log(y);
//  console.log(x);
//  ++i => pre-incremento el valor de la variable se incrementa antes que se utilice

//  let a = 6;
//  let b = ++a;

//  console.log(b);

//  ciclo for: nosotros le vamos a decir cuantas veces queremos que se ejecute el ciclo
 
//  ciclo por conteo

//  posee 3 partes =>

//     -inicializacion(desde) nos va a dar la variable de control inicial. se expresa con una variable
//     -condicion(hasta) se verifica antes de cada iteracion si la condicion es verdadra el ciclo continua y si es falsa termina
//     -actualizacion. es la parte donde se incrementa o decrementa de la variable

 

//     for(inicializacion; condicion; actualizacion)
// ejemplo vamos a imprimir 10 veces un mensaje

// for(let i = 1; i <= 10; i++) {
//     console.log("se imprimio el mensaje", i);
// }

// como hacer una tabla de multiplicar
// ejemplo vamos a generar la  tabla del 5

// let tablaDelcinco = 5;

// for(i = 1; i<=10; i++) {
//     let resultado = tablaDelcinco * i;
//     console.log(tablaDelcinco + " x " + i + " = " + resultado);
// }

// for(let i = 1; i <= 10; i++){
//     // sentencia  que se llama continue. se utiliza para saltar una iteracion y continua con la siguiente
//     // sentencia break si se utiliza automaticamente se frena el bucle y se sale

//     if (i === 8) {
//         break;
//     }
//         console.log(i)
    
// }

// /*
// while => es una estructura de control, que va a repetir un conjunto de instrucciones mientras se cumpla una condicion especifica
// while (condicion) {
// bloque de codigo a ejecutar
// }

// */

// let contador = 1;

// while (contador <=10) {
//     console.log("numero:" + contador);
//     contador++
// }

// /*
// do while => se utiliza para ejecutar un bloque de codigo, al menos una vez y luego repetirlo mientras se cumpla una condicion especifica

// do {

//     bloque de codigo a ejecutar

// } while (condicion)

// */

// let clave;
// let intentos = 0;
// const MAX_INTENTOS = 3;

// do {

//     clave = prompt('ingresa la contraseña');
//     intentos ++;
//     if(clave === 'clave123') {
//         console.log("la contraseña es correcta");
//         break; // si el usuario pone la contraseña directamente se corta el bucle
//     }

//     if(intentos >= MAX_INTENTOS) {
//         console.log("la cantidad de intentos se alcanzo")
//         break;
//     }

// } while(true); // el true hace que se controle el do while por condiciones declaradas





