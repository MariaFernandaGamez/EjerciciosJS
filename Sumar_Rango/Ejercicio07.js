// Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función
// debe retornar la suma de los números en ese rango (incluyéndolos).
// Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.

function sumarRango(numero1, numero2) {
   let suma=0;
   for (let i=numero1; i<=numero2; i++) {
    suma+=i;
   }
   return suma;
}

let numero1= parseInt(prompt('Escriba un numero'));
let numero2= parseInt(prompt('Escriba el segundo numero'));

let totalSuma=sumarRango(numero1, numero2); 
alert('La suma del rango es: ' + totalSuma)