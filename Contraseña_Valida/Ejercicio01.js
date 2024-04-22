function contrasenaValida(){
    let contrasena=prompt('Ingrese la contraseña');

    if (contrasena==="eoZiugBf&g9" || contrasena==="2Fj(jjbFsuj") {
        return true;
    } else {
        return false;
    }
}

let esValida = contrasenaValida();
alert("La contraseña es válida: " + esValida);