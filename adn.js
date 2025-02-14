

// Transcribir ADN a ARN


// Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).
// Los complementos son los siguientes:
// G -> C
// C -> G
// T -> A
// A -> U


// Object [Complementos] = [
// G == C,
// C == G,
// T == A,
// A == U,
// ]
// alert("Poner 4 Letras G C T A U ")
// let Pregunta = prompt("")
// function trasncribir(string) {
// }




let cadena = prompt(" ingrese la cadena de adn ");
// let n = []

function trascribir(cadena) {
    for (let i = 0; i < array.length; i++) {
        // const element = array[i];
        if (cadena == "a" || cadena == "A") {
            console.log("U");
        }else if (cadena == "C" || cadena == "c") {
            console.log("G");
        }else if (cadena == "T" || cadena == "t") {
            console.log("C");
        }else if (cadena == "G" || cadena == "g") {
            console.log("C")
        }else{
            (false,prompt("Vuelve a retomar la cadena"));
        }
    }
}


 resultados = trascribir(cadena);
 console.log(resultados);























function transcribir(string) {
    let complemento = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    };

    return string.split('').map(nucleotide => complemento[nucleotide] || nucleotide).join('');
}

// Ejemplo de uso
let adn = prompt("Ingrese una cadena de ADN");
console.log(transcribir(adn));