let cliente = "Juan Pérez"; // Variable global
const DESCUENTO = 0.10; // Constante global

function calcularTotal(precio, cantidad) {
    let subtotal = precio * cantidad; // Variable local
    let descuentoAplicado = subtotal * DESCUENTO; // Variable local
    let total = subtotal - descuentoAplicado; // Variable local
    return total;
}

function generarFactura(cliente, producto, precio, cantidad) {
    let totalPagar = calcularTotal(precio, cantidad); // Llamada a función
    let factura = {
        cliente: cliente,
        producto: producto,
        cantidad: cantidad,
        total: totalPagar
    };
    return factura;
}

// Ejecución del programa
let productoComprado = "Smartphone";
let precioUnitario = 500;
let cantidadComprada = 2;
let facturaFinal = generarFactura(cliente, productoComprado, precioUnitario, cantidadComprada);

console.log(facturaFinal);
