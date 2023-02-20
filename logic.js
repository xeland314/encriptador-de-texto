function esUnTextoValido(texto) {
    // Verificar que el texto no está vacío
    if (texto.trim() === "") {
        return false;
    }

    // Verificar que el texto contiene al menos una letra
    if (!/[a-z]/i.test(texto)) {
        return false;
    }

    // Verificar que el texto solo contiene letras minúsculas
    const regex = /^[a-z\n\r\s]+$/;
    return regex.test(texto);
}


function encriptar(texto) {

    const llaves = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
    };

    let textoEncriptado = "";
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        if (llaves[letra]) {
            textoEncriptado += llaves[letra];
        } else {
            textoEncriptado += letra;
        }
    }
    return textoEncriptado;
}

function desencriptar(texto) {
    // Convertir cada llave de encriptación según su letra original
    let desencriptado = texto.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return desencriptado;
}

function mostrarResultado() {
    var resultado = document.getElementById("resultado");
    resultado.style.display = "block";
    var defaultText = document.querySelector(".default-text");
    defaultText.style.display = "none";
}

function ocultarResultado() {
    var resultado = document.getElementById("resultado");
    resultado.value = "";
    resultado.style.display = "none";
    var defaultText = document.querySelector(".default-text");
    defaultText.style.display = "block";
}

function encriptarTexto() {
    const texto = document.getElementById("texto").value;
    if (esUnTextoValido(texto)) {
        const textoEncriptado = encriptar(texto);
        document.getElementById("resultado").value = textoEncriptado;
        mostrarResultado();
    } else {
        alert('El texto ingresado no es válido. Por favor ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
    }
}

function desencriptarTexto() {
    const texto = document.getElementById("resultado").value;
    if (esUnTextoValido(texto)) {
        const textoDesencriptado = desencriptar(texto);
        document.getElementById("resultado").value = textoDesencriptado;
        mostrarResultado();
    } else {
        alert('El texto ingresado no es válido. Por favor ingrese solo letras minúsculas sin acentos ni caracteres especiales.');
    }
}

function copiar() {
    let resultadoTextarea = document.getElementById("resultado");
    // Selecciona el contenido del textarea
    resultadoTextarea.select();
    try {
        // Copia el contenido seleccionado al portapapeles
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    } catch (err) {
        alert('No se pudo copiar el texto');
    }
}

function limpiar() {
    ocultarResultado();
    document.getElementById("texto").value = "";
}
