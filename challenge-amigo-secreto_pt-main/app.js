// Passo 1: Declaração do array para armazenar os nomes dos amigos
let amigos = [];

// Passo 2: Função para adicionar amigos ao array
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let nomeAmigo = document.getElementById('amigo').value.trim();

    // Valida se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Limpa o campo de entrada
    document.getElementById('amigo').value = "";

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();

    console.log("Amigo adicionado:", nomeAmigo);
    console.log("Lista de amigos:", amigos);
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpa a lista atual

    // Adiciona cada amigo à lista
    amigos.forEach(function(amigo) {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

// Passo 3: Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    // Valida se há amigos no array
    if (amigos.length === 0) {
        alert("Não há amigos para sortear. Adicione alguns amigos primeiro.");
        return;
    }

    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado do sorteio
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "O amigo sorteado é: " + amigoSorteado;

    console.log("Amigo sorteado:", amigoSorteado);
}