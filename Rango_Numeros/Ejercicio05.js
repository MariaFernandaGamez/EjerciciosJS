function contarRango(n1,n2){
    let contador=0;
    for(let i=n1+1; i<n2; i++){
        contador++;
        
    }
    return contador;
}

let n1=parseInt(prompt('Escribe el primer numero'));
let n2=parseInt(prompt('Escribe el segundo numero, mayor que el anterior'));

let rango=contarRango(n1, n2);
alert('El rango de numeros entre: ' + n1 + ' y ' + n2 + ' es: ' + rango);