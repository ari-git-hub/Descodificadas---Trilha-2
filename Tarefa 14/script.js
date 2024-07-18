// Exercício 1: Média de 3 Números
document.getElementById('exercise1Form').addEventListener('submit', function(event) {
    event.preventDefault();
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let numero3 = parseFloat(document.getElementById('numero3').value);
    let media = (numero1 + numero2 + numero3) / 3;
    document.getElementById('resultado1').innerText = 'A média é: ' + media.toFixed(2);
});

// Exercício 2: Verificar Menoridade
document.getElementById('exercise2Form').addEventListener('submit', function(event) {
    event.preventDefault();
    let idade = parseInt(document.getElementById('idade').value);
    if (idade < 18) {
        alert('Você é menor de idade.');
    } else {
        alert('Você é maior de idade.');
    }
});

// Exercício 3: Mês Correspondente
document.getElementById('exercise3Form').addEventListener('submit', function(event) {
    event.preventDefault();
    let mes = parseInt(document.getElementById('mes').value);
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    if (mes >= 1 && mes <= 12) {
        document.getElementById('resultado3').innerText = 'O mês é: ' + meses[mes - 1];
    } else {
        document.getElementById('resultado3').innerText = 'Número inválido.';
    }
});
