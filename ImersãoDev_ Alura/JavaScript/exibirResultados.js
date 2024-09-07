function exibirResultados() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    //Obtém a valor onde a imagem será aplicada
    let background = document.getElementById("background-image"); // Elemento de fundo

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        section.innerHTML = `<p class="alerta">Nada foi encontrado.<br> Você precisa digitar o nome de um modelo</p>`;
        section.style.setProperty("--background-image", "none"); // Remove o fundo caso a pesquisa esteja vazia
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let modelo = "";
    let descricao = "";
    let motor = "";
    let imagem = "";
    let fundoAlterado = false; // Variável para controlar a alteração de fundo

    // Itera sobre os dados e faz a pesquisa
    for (let item of dados) {
        console.log(item.modelo.includes(campoPesquisa));

        modelo = item.modelo;
        descricao = item.descricao;
        motor = item.motor;
        imagem = item.imagem;

        // Se o modelo ou descrição contiver o texto pesquisado, adicione aos resultados
        if (modelo.includes(campoPesquisa)) {
            //Cria o elemento no código HTML
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <p>${modelo}</p>
                    </h2>
                    <p class="descricao-meta"><strong>Motor:</strong> ${motor}</p>
                    <p class="descricao-meta">${descricao}</p>                    
                    <a href="https://www.carrobrasil.com.br/noticia/a-historia-do-fusca-no-brasil" target="_blank">Mais informações</a>
                </div>
            `;

        // Altera o fundo com a imagem correspondente apenas na primeira ocorrência encontrada
        if (!fundoAlterado) {           
            section.style.setProperty("--background-image", `url('/Projetos Web/ImersãoDev_ Alura/Imagens/Fundos/${imagem}')`);
            fundoAlterado = true; // Marca o fundo como alterado para evitar múltiplas alterações
        }

        }
    }

    // Se nenhum resultado for encontrado, exibe uma mensagem
    if (!resultados) {
        resultados = `<p class="alerta">Nada foi encontrado</p>`;
        section.style.setProperty("--background-image", "none"); // Remove o fundo se nenhum resultado for encontrado
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

// Adiciona um listener para o botão de pesquisa
document.addEventListener('DOMContentLoaded', () => {
    const campoPesquisa = document.getElementById('campo-pesquisa');
    const botaoPesquisar = document.querySelector('.btn-azul');
    botaoPesquisar.addEventListener('click', exibirResultados);

    // Adiciona o evento de teclado ao campo de pesquisa
    campoPesquisa.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita o comportamento padrão (por exemplo, o envio do formulário)
            botaoPesquisar.click(); // Simula um clique no botão de pesquisa
        }
    });
});