const textArea = document.querySelector(".area-texto");
const mensaje = document.querySelector(".mensaje");
const imagenDetective = document.querySelector(".respuesta");
const instruccionDos = document.querySelector(".segunda-instruccion");
const btnCopiar = document.querySelector(".boton-copiar");
const instruccionUno = document.querySelector(".instruccion");



//condiciones al ingresar texto en mayuscula o caracteres especiales
textArea.addEventListener("input", validarEntrada);
function validarEntrada() {
    const value = textArea.value;

    if (value == value.toUpperCase()) {
        instruccionUno.textContent = "Todo el texto debe estar en minúscula.";
    } 
    else if (/[$\.¿\áéíóú\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/.test(value)) {
        instruccionUno.textContent = "No se permiten acentos ni caracteres especiales."; 
    } 
    else {
        instruccionUno.textContent = "";
    }

}


//funcion del boton encriptar
function botonEncriptar(params) {
        const textoEncripado = encriptar(textArea.value);
        mensaje.value = textoEncripado;
        textArea.value = "";
        imagenDetective.style.backgroundImage = "none";
        instruccionDos.remove();
        btnCopiar.style.visibility = "inherit";

}

    // Si no hay texto ingresado, no hacemos nada
    function botonEncriptar() {
        const textoIngresado = textArea.value.trim();
        if (textoIngresado) {
            const textoEncriptado = encriptar(textoIngresado);
            mensaje.value = textoEncriptado;
            textArea.value = "";
            imagenDetective.style.backgroundImage = "none";
            instruccionDos.remove();
            btnCopiar.style.visibility = "inherit";
        }
    
    }


//funcion de encriptacion de texto
function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a", "ai"],["o", "ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }
    }
    
    return stringEncriptado;
}

// funcion del boton desencriptar
function botonDesencriptar() {
    const textoEncripado = desencriptar(textArea.value);
    mensaje.value = textoEncripado;
    textArea.value = "";
    
}


// funcion de desncriptacion
function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a", "ai"],["o", "ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);       
        } 
        
    }
    return stringDesencriptado;
}


//funcion del boton copiar
btnCopiar.addEventListener("click", ()=>{
    let textArea = mensaje;
    mensaje.select();
    navigator.clipboard.writeText(textArea.value);
})

