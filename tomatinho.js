document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('searchForm');
    const btnPesquisar = document.getElementById('btnpesquisar');
    const btnLimpar = document.getElementById('btnlimpar'); // Adicionando referência ao botão Limpar

    const apiKey = '9fb86db190a370246325de823dcb86928091858bd2a49d0646fd07a0ae7544cca50e7d52'; // Substitua 'SUA_CHAVE_DE_API_AQUI' pela sua chave de API

    btnPesquisar.addEventListener('click', async function(event) {
        event.preventDefault(); // Evita o comportamento padrão do botão

        const SKU = document.getElementById('SKU').value;

        const url = `https://bling.com.br/Api/v2/produto/${SKU}/json/&apikey=${apiKey}&estoque=S&imagem=S`; // URL da requisição
        console.log('URL da requisição:', url); // Imprime a URL da requisição no console

        try {
            const response = await fetch(url); // Faz a requisição
            const data = await response.json(); // Converte a resposta para JSON

            console.log('Retorno JSON:', data); // Imprime o retorno JSON no console

            // Verifica se há erro na resposta
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            }

            // Verifica se há produtos retornados no JSON
            if (data.retorno && data.retorno.produtos && data.retorno.produtos.length > 0) {
                const produto = data.retorno.produtos[0].produto; // Acessa o primeiro produto retornado

                // Atualiza os elementos HTML com as informações do produto
                document.getElementById('produto').textContent = `${produto.descricao}`;
                document.getElementById('preco').textContent = `${parseFloat(produto.preco).toFixed(2)}`;
                document.getElementById('localizacao').textContent = produto.localizacao;
                
                // Atualiza a imagem do produto
                if (produto.imagem && produto.imagem.length > 0) {
                    document.querySelector('.img-fluid').src = produto.imagem[0].link; // Assume a primeira imagem do array de imagens
                } else {
                    // Se não houver uma imagem, define uma imagem padrão
                    document.querySelector('.img-fluid').src = 'https://images2.imgbox.com/2e/e2/f9OCL2X0_o.png';
                }

                // Atualiza as informações de estoque
                produto.depositos.forEach(deposito => {
                    const nomeDeposito = deposito.deposito.nome;
                    const saldo = deposito.deposito.saldo;
                    const idDeposito = deposito.deposito.id;
                  
                    // Monta os IDs dos elementos HTML
                    const labelId = `label-${idDeposito}`;
                    const unidId = `unid-${idDeposito}`;

                    // Seleciona os elementos HTML correspondentes
                    const labelElement = document.getElementById(labelId);
                    const unidElement = document.getElementById(unidId);

                    // Verifica o saldo e adiciona a classe apropriada
                    if (saldo > 3) {
                        if (labelElement) labelElement.classList.add('estoque-alto');
                        if (unidElement) unidElement.classList.add('estoque-alto');
                    } else if (saldo >= 1 && saldo <= 3) {
                        if (labelElement) labelElement.classList.add('estoque-medio');
                        if (unidElement) unidElement.classList.add('estoque-medio');
                    } else {
                        if (labelElement) labelElement.classList.add('estoque-baixo');
                        if (unidElement) unidElement.classList.add('estoque-baixo');
                    }

                    // Atualiza as informações do estoque para o depósito específico
                    document.getElementById(`unid-${idDeposito}`).textContent = `${saldo} Un`;
                });
            } else {
                console.log('Nenhum produto encontrado.');
            }
        } catch (error) {
            console.error('Erro ao buscar o produto:', error.message);
        }
    });

    // Adicionando o ouvinte de evento ao botão Limpar
    btnLimpar.addEventListener('click', function(event) {
        // Evita o comportamento padrão do botão
        event.preventDefault();
        
        // Redefine os valores dos elementos HTML para os valores iniciais
        document.getElementById('produto').textContent = 'PRODUTO SELECIONADO';
        document.getElementById('preco').textContent = '0,00';
        document.getElementById('localizacao').textContent = 'X-X-X';

        // Remove todas as classes de estilo adicionadas dinamicamente
        const elements = document.querySelectorAll('.estoque-alto, .estoque-medio, .estoque-baixo');
        elements.forEach(element => {
            element.classList.remove('estoque-alto', 'estoque-medio', 'estoque-baixo');
        });

        // Limpa o campo de entrada SKU
        document.getElementById('SKU').value = '';

        // Define a imagem padrão
        document.querySelector('.img-fluid').src = 'https://images2.imgbox.com/a0/45/HS68g3ya_o.png';

        // Redefine os valores de estoque para o valor padrão (00 Un)
        const unidElements = document.querySelectorAll('[id^="unid-"]');
        unidElements.forEach(unidElement => {
            unidElement.textContent = '00 Un';
        });
    });
  // Adiciona um ouvinte de evento de clique ao primeiro botão
  document.getElementById("btnpesquisar").addEventListener("click", function() {
    // Espera 5 segundos (5000 milissegundos) e então clica no segundo botão
    setTimeout(function() {
      document.getElementById("btnlimpar").click();
        document.getElementById("SKU").focus();
    }, 7000); // 5000 milissegundos = 5 segundos
  });
});
