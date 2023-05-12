//Utilizare dos metodos para cambiar las letras una en la funcion encriptar y otra en la funcion desencriptar... esto lo hago con fines de aprender y practicar ambos metodos, no se cual de los dos funcione mejor, de momento ambos me funcionan perfecto//

function limpiar() {
    var mensaje = document.getElementById("inputTexto");
    var textoPredeterminado = "Ingrese el texto aquí";
    if (mensaje.value == textoPredeterminado) {
        mensaje.value = "";
    }
}

function textoDefault() {
    var mensaje = document.getElementById("inputTexto");
    var textoPredeterminado = "Ingrese el texto aquí";
    if (mensaje.value == "") {
        mensaje.value = textoPredeterminado;
    }
}

function encriptar(){
    var mensaje = document.getElementById("inputTexto").value;
    if (mensaje === "Ingrese el texto aquí"){
        alert("Por favor ingresa un texto para encriptar.");
        return;
    }
    else {
        const texto = document.getElementById("inputTexto").value.toLowerCase();
        var textoCifrado = "";
        for (let i = 0; i< texto.length; i++) {
            switch (texto[i]){
                case "a":
                    textoCifrado += "ai";
                    break;
                case "e":
                    textoCifrado += "enter";
                    break;
                case "i":
                    textoCifrado += "imes";
                    break;
                case "o":
                    textoCifrado += "ober";
                    break;
                case "u":
                    textoCifrado += "ufat";
                    break;
                default:
                    textoCifrado += texto[i];
                    break;
            }
        }
    }
        document.getElementById("imgDer").style.display = "none";
        document.getElementById("texto").style.display = "none";
        document.getElementById("texto2").innerHTML = `${textoCifrado}`;
        document.getElementById("botonCopiar").style.display = "show";
        document.getElementById("botonCopiar").style.display = "inherit";
        document.getElementById("texto2").className = "estilo2";
        document.getElementById("inputTexto").className = "ingreseTexto2";
}
function desencriptar(){
    var mensaje = document.getElementById("inputTexto").value;
    if (mensaje === "Ingrese el texto aquí"){
        alert("Por favor ingresa un texto para Desencriptar.");
        return;
    }
    else {
        var texto = document.getElementById("inputTexto").value.toLowerCase();
        var textoCifrado = texto.replaceAll("enter","e");
        var textoCifrado = textoCifrado.replaceAll("ober","o");
        var textoCifrado = textoCifrado.replaceAll("imes","i");
        var textoCifrado = textoCifrado.replaceAll("ai","a");
        var textoCifrado = textoCifrado.replaceAll("ufat","u");
        
        document.getElementById("imgDer").style.display = "none";
        document.getElementById("texto").style.display = "none";
        document.getElementById("texto2").innerHTML = `${textoCifrado}`;
        document.getElementById("botonCopiar").style.display = "show";
        document.getElementById("botonCopiar").style.display = "inherit";
        document.getElementById("texto2").className = "estilo2";
        document.getElementById("inputTexto").className = "ingreseTexto2";
    }
}

function copiar(){
    var contenido = document.getElementById("texto2");
    var seleccionar = window.getSelection();
    var rango = document.createRange();
    rango.selectNodeContents(texto2);
    seleccionar.removeAllRanges();
    seleccionar.addRange(rango);
    document.execCommand("copy");
    alert("El texto ha sido copiado al portapapeles.");
}