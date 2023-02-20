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

function mostrarAlerta(titulo, info) {
    const popup = document.getElementById("mi-popup");
    document.getElementById("popup-titulo").textContent = titulo;
    document.getElementById("popup-info").textContent = info;
    popup.style.display = "block";
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
        mostrarAlerta(
            "Texto Inválido",
            "Por favor ingrese solo letras minúsculas sin acentos ni caracteres especiales."
        );
    }
}

function desencriptarTexto() {
    const texto = document.getElementById("texto").value;
    if (esUnTextoValido(texto)) {
        const textoDesencriptado = desencriptar(texto);
        document.getElementById("resultado").value = textoDesencriptado;
        mostrarResultado();
    } else {
        mostrarAlerta(
            "Texto Inválido",
            "Por favor ingrese solo letras minúsculas sin acentos ni caracteres especiales."
        );
    }
}

function copiar() {
    const textarea = document.getElementById("resultado");
    const texto = textarea.value.trim();

    if (texto.length > 0) {
        textarea.select();
        document.execCommand('copy');
        mostrarAlerta("Texto Copiado", "Texto copiado al portapapeles.");
    } else {
        mostrarAlerta("Sin Texto", "No hay texto que copiar.");
    }
}

function limpiar() {
    ocultarResultado();
    document.getElementById("texto").value = "";
}
