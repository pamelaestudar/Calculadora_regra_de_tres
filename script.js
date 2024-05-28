function calculate() {
    // Obtém os valores de A, B e C
    const valueA = document.getElementById('valueA').value;
    const valueB = document.getElementById('valueB').value;
    const valueC = document.getElementById('valueC').value;

    // Verifica se os valores são válidos
    if (valueA && valueB && valueC) {
        // Calcula o valor de D usando a regra de três
        const valueD = (valueB * valueC) / valueA;

        // Exibe o resultado no campo de valor D
        document.getElementById('valueD').value = valueD.toFixed(2);
    } else {
        // Alerta o usuário se algum campo estiver vazio
        alert('Por favor, preencha todos os campos.');
    }
}
