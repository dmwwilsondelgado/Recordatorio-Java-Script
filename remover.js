let c = [1,2,0,3,6,50,8,0,4,0,9]
// remover ceros 


function removerceros() {
    let resultado  = []
    for (let i = 0; i < c.length; i++) {
        if (c[i] !== 0) {
            resultado.push(c[i]);
        }
    }return resultado;
}


console.log(removerceros(c));