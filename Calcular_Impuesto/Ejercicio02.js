function calcularImpuestos (edad, ingresos) {
    
    if (edad >=18 && ingresos>=1000) {
        let impuesto= ingresos*0.40;
        return impuesto;
    } else {
        return 0;
    }
}

let edad= parseInt(prompt('Ingrese su edad'));
let ingresos= parseFloat(prompt('Cantidad de ingresos'));
let impuestoCalculado=calcularImpuestos(edad, ingresos);
alert("Sus impuestos son: " + impuestoCalculado);