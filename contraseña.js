// 01. Contraseña válida

// Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.


contra1 = "2Fj(jjbFsuj";
contra2 = "eoZiugBf&g9";

let password = prompt("ingrese la contraseña");
function contraseña(contra1,contra2) {
    if (password == "2Fj(jjbFsuj" ) {
        return (true);
    }else if (password == "eoZiugBf&g9"){
        return(true);
    }else{
        return (false);
    }
}

let respuesta = contraseña(password);
console.log(respuesta);