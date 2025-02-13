// 
// numeros de likes

// escribe una funcion llamada likes que reciba un numero y restorne  una string ustilizando el formato de k para miles y m para millonoes 

// por ejemplo 
// 1400 sen convierte en 1 k
// 34.567 se convierte en 34k
// 7´456,345 se convierte en 7M

//  sie el numero es  menor  a 1000  se debe devolver el mismo numero como un string 

// let valor = parseInt(prompt("ingrese el numero de likes"));

// const likes =  (valor) =>{
//     if( valor >= 1400){
//         console.log(`${valor}M`);
//          // return valor += "K";
//     }else if (valor >>=) {
            
//     } else {
            
//     }
    
// }
    
let numero = parseInt(prompt("ingrese el numero de likes"));

const likes = (numero) =>{
    if(numero < 1000){
        console.log(`${valor}M`);
    }else if ( numero  < 140000){
        console.log(`${Math.round(valor/1000).toFixed(0)}M`);
    }else{
        console.log(`${Math.round(valor/10000000).toFixed(0)}M`);
    }
}


likes(numero);
    
