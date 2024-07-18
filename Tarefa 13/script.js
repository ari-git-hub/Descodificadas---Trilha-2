document.getElementById('mediaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos campos de entrada
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let numero3 = parseFloat(document.getElementById('numero3').value);
    let numero4 = parseFloat(document.getElementById('numero4').value);
    let numero5 = parseFloat(document.getElementById('numero5').value);

    // Calcula a média aritmética
    let media = (numero1 + numero2 + numero3 + numero4 + numero5) / 5;

    // Exibe o resultado
    document.getElementById('resultado').innerText = 'A média aritmética é: ' + media;
});
