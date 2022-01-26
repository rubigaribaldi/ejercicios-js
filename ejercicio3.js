/* 
EJERCICIO 3
Con ayuda de ciclos imprime los primeros 50 números de la suceción de
fibonacci, (1,1,2,3,5,8,13,21)
*/

const sucesionfibonacci = (limite) => {
    const fibonacci = [1,2,];
    for (let i=2 ; i<limite; i++){
      fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
     return fibonacci;
    }


    console.log(sucesionfibonacci(10));
    
    // let serieFibonacci = sucesionfibonacci(50);
    // console.log(serieFibonacci);