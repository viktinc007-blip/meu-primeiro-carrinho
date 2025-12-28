let total = 0;
// começa o total com 0

function adicionarAoCarrinho(nome, preco) {
    // função que roda quando clica no botão

    const lista = document.getElementById("lista-carrinho");
    // pega a lista do html

    const item = document.createElement("li");
    // cria um item novo

    item.textContent = nome + " - R$ " + preco;
    // texto que vai aparecer

    lista.appendChild(item);
    // coloca o item na lista

    total = total + preco;
    // soma o preço no total

    document.getElementById("total").textContent = total;
    // mostra o total atualizado
}