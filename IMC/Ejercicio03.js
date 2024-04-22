function bmi(peso,altura){
    if ( imc < 18.5 ){
        alert(' Usted se encuentra Bajo de peso');
    } else if ( imc >= 18.5  &&  imc <= 24.9 ){
        alert(' Su IMC es normal');
    } else if ( imc >= 25 && imc <= 29.9 ){
        alert(' Usted se encuentra en Sobrepeso');
    } else {
        alert(' Usted se encuentra en Sobrepeso')
    }
}

let peso =parseFloat(prompt('Ingrese su peso en kg'));
let altura =parseFloat(prompt('Ingrese su altura en m'));
let imc = (peso / (altura^2));

let imcCalculado= bmi(peso, altura)