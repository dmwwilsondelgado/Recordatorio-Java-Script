// 1. Diseñar un programa que permita validar el tipo de tarjeta de crédito que
// registra el operador, para ello debemos tener en cuenta que las diferentes
// tarjetas tienen diferentes nomenclaturas:
// * American Express: 15 dígitos y empieza por (34 – 37)
// * Diners Club: tiene 14 dígitos y empieza por (300 – 305 o 36 - 38)
// * Discover: tiene 16 dígitos y empieza por (6011)
// * Mastercard: tiene 16 dígitos y empieza por (51 – 55)
// * Visa: tiene: 16 dígitos y empieza por (4)
// El programa solo se debe permitir el ingreso de enteros positivos y máximo
// 16 caracteres, si el operador ingresa un carácter no permitido se debe
// mostrar por pantalla el error y solicitar nuevamente el número de su tarjeta
// de crédito.
// Para este ejercicio se solicita trabajar con módulos, expresiones regulares y
// condicionales. Si está permitido solicitar al operador el tipo de su tarjeta de
// crédito.

function validarTarjeta(numero) {
    const regex = /^[0-9]{14,16}$/;
    if (!regex.test(numero)) {
        return "Número de tarjeta inválido. Debe contener solo dígitos y tener entre 14 y 16 caracteres.";
    }

    if (/^3[47][0-9]{13}$/.test(numero)) {
        return "American Express";
    } else if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(numero)) {
        return "Diners Club";
    } else if (/^6011[0-9]{12}$/.test(numero)) {
        return "Discover";
    } else if (/^5[1-5][0-9]{14}$/.test(numero)) {
        return "Mastercard";
    } else if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(numero)) {
        return "Visa";
    } else {
        return "Número de tarjeta no corresponde a ninguna tarjeta conocida.";
    }
}

let numeroTarjeta = prompt("Ingrese el número de su tarjeta de crédito:");
let resultado = validarTarjeta(numeroTarjeta);
console.log(resultado);