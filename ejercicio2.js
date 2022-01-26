 /* EJERCICIO 2
Ramón quiere hacer una fiesta privada en donde solo entre un número
exclusivo de personas, ayudale al portero a solo dejar pasar a
aquellas personas mayores de edad que sean familiares de Ramón. (con
imprimir los usuarios que se admitirán basta, usar el arreglo
denominado como "ejercicio2").
*/

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];



console.log("Arreglo ejercicio2 ==>", ejercicio2);

let resultado = ejercicio2.filter(function (persona) {
  if(persona.edad>=18 && persona.esFamiliar==true){
     return persona; 
  }} )
console.log("PUEDEN PASAR A LA FIESTA =>", resultado);

let resultado2 = ejercicio2.filter(function (persona) {
  if(persona.edad<18 || persona.esFamiliar==false){
     return persona; 
  }} )
console.log("NO PUEDEN PASAR =>", resultado2);
