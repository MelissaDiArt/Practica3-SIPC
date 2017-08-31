function comprobar1() {

    document.getElementById('ename').innerHTML = "";
    document.getElementById('email').innerHTML = "";
    document.getElementById('mipass').innerHTML = "";

    var name = document.getElementById('name').value;

    for (var i = 0; i < name.length; i++) {
        if(name.charCodeAt(i) < 65 || name.charCodeAt(i) > 122){
            document.getElementById('ename').innerHTML = "Can not contain numbers or special characters";
            return false;
        }
    }

    var mail = document.getElementById('mail').value;

    var a = mail.indexOf('@');
    var ext = mail.lastIndexOf('.');

    if(a < 1 || ext - a < 2 || mail.length - ext < 2 || ext == -1){
        document.getElementById('email').innerHTML = "Incorect format";
        return false;
    }

    var pass = document.getElementById('pass').value;
    var mayus = 0;
    var num = 0;
/* Comprobar si tiene mas de 6 caracteres */
    if (pass.length < 6) {
        document.getElementById('mipass').innerHTML = "Must have 6 characters";
    }
/*Comprueba si tiene mayuscula y un numero con un intervalo unicode*/
    for (var i = 0; i < pass.length; i++) {
        if(pass.charCodeAt(i) > 64 && pass.charCodeAt(i) < 91){
            mayus = 1;
        }else if(pass.charCodeAt(i) > 47 && pass.charCodeAt(i) < 57){
            num = 1;
        }
    }

    /* Debe tener una mayuscula y un numero*/
    if(!mayus){
        document.getElementById('mipass').innerHTML = "Must have at least an uppercase letter";
        return false;
    }
    if(!num){
        document.getElementById('mipass').innerHTML = "Must have at least one number";
        return false;
    }

    return true;
}
