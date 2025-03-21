let nombre = "Carlos";
const PI = 3.1416; 

function calcularArea(radio) {
    let area = PI * radio * radio;
    return area;
}

function saludo() {
    let mensaje = "Hola, " + nombre;
    return mensaje;
}

let resultado = calcularArea(5);
let mensajeSaludo = saludo();