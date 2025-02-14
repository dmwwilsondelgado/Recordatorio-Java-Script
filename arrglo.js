// escribir una funcion llamada sumar arrglo que reciba  tres aargumentos 
//  un arrglo de numeros la pocicion inicial y la pocicion final
//  la funcion debe retornar  la suma de todos los numeros dentro del rango (la pocicion inicial y la pocicion final incluyendolas)
// y que estan dentro de los limites del arreglo



// nota  puedes asumir que la pocicion  inicial va a ser menor o igaul ala pocicion  final y que esten  dentro de los limites de arrglo




let a = parseInt(prompt("ingrese una inicial"));
let b = parseInt(prompt("ingrese un final"));
const c = [1 ,20 ,50 ,40 ,4 ,6 ,9 ,88 ,51];
const sumararreglo = (a, b,c) =>{
    if (a < c.length && b > a  && a>0 ){
        
    }
    else{
        throw new Error("los rangos superan el limite  del arreglo ");
        
    }
    return a ;
}


let resultado = sumararreglo(a,b,b);

console.log(resultado)