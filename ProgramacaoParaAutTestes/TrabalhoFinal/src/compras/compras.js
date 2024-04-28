function calcularTotal(ferramentas, comprar) {
    if (ferramentas.length > 0 && comprar.length > 0) {

        var valorTotalPagar = 0;
        const qtdFerramentas = ferramentas.length;
        const qtdComprar = comprar.length;

        for (let indiceF = 0; indiceF < qtdFerramentas; indiceF++) {
            for (let indiceC = 0; indiceC < qtdComprar; indiceC++) {
                if (ferramentas[indiceF].nome == comprar[indiceC]) {
                    valorTotalPagar = valorTotalPagar + ferramentas[indiceF].preco;
                }
            }
        }

        if (valorTotalPagar === 0) {
            throw new Error("Nenhuma ferramenta desejada encontrada.");
        }

        return `O valor a pagar pelas ferramentas (${comprar.join(", ")}) é R$ ${valorTotalPagar.toFixed(2)}`;

    } else {
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }

}

module.exports = {
    calcularTotal
}
