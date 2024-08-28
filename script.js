// Função para validar o texto de entrada
function isValidInput(text) {
    const regex = /^[a-z ]+$/; // Permite apenas letras minúsculas e espaços
    return regex.test(text);
}

// Função para criptografar o texto
function encryptText() {
    const inputText = document.querySelector(".textarea").value;
    const errorMessage = document.querySelector(".informacao h6");

    if (!isValidInput(inputText)) {
        errorMessage.innerText = "Por favor, insira apenas letras minúsculas e sem acentos.";
        document.querySelector(".mensagem").value = "";
        return;
    }

    errorMessage.innerText = "Apenas letras minúsculas e sem acentos."; // Restaura a mensagem padrão
    const encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.querySelector(".mensagem").value = encryptedText;
}

// Função para descriptografar o texto
function decryptText() {
    const inputText = document.querySelector(".textarea").value;
    const errorMessage = document.querySelector(".informacao h6");

    if (!isValidInput(inputText)) {
        errorMessage.innerText = "Por favor, insira apenas letras minúsculas e sem acentos.";
        document.querySelector(".mensagem").value = "";
        return;
    }

    errorMessage.innerText = "Apenas letras minúsculas e sem acentos."; // Restaura a mensagem padrão
    const decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.querySelector(".mensagem").value = decryptedText;
}

// Função para copiar o texto da área de mensagem para a área de transferência
function copyToClipboard() {
    const outputText = document.querySelector(".mensagem").value;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado para a área de transferência!");
    });
}

// Adiciona os eventos aos botões após o carregamento do DOM
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".btn-encriptar").addEventListener("click", encryptText);
    document.querySelector(".btn-desencriptar").addEventListener("click", decryptText);
    document.querySelector(".btn-copiar").addEventListener("click", copyToClipboard);
});
