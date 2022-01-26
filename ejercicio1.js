/*Dado un arreglo de números enteros, Imprimir solamente aquellos que
son denominados números primos, (usar arreglo denominado como
"ejercicio1"). */



const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];
 
console.log("Arreglo ejercicio1 ==>", ejercicio1);

  for (let i = 0 ; i < ejercicio1.length ; i++) {
    if(ejercicio1[i]%2 !== 0) {
      console.log(`El ${ejercicio1[i]} es un numero primo`)
    } ejercicio1[0]++;
  }

// ejercicio1.forEach((i) =>
//   console.log(`El ${ejercicio1[i]} es un numero primo`)




