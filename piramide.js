//genere un patron de asteriscos en forma de piramide
//funcion 

let valor = parseInt(prompt('ingrese una altura para la pirademi de guiza'));

const pirademe =(valor)=>{
    for(i = 1 ; i<valor ; i++){
        let asteriscos ="";
        for(let a =1;a<= valor-i;a++){
            asteriscos+= "";
        }
        for (let z = 1;z<i*2;z++){
            asteriscos+= "*";
        }
        console.log(asteriscos);
    }
}
pirademe(valor);


