// Seleciona o elemento <select>, o <body> e o <h1>
const colorPicker = document.getElementById('colorPicker');
const body = document.body;
const title = document.querySelector('h1');
const footer = document.getElementById('rodapé');

// Define as cores de fundo e texto para cada cor selecionada
const colors = {
    'fusca-vermelho': { background: 'var(--fusca-vermelho)', text: 'var(--fusca-bege)', title: 'var(--fusca-bege)' },
    'fusca-azul': { background: 'var(--fusca-azul)', text: 'var(--fusca-bege)', title: 'var(--fusca-bege)' },
    'fusca-bege': { background: 'var(--fusca-bege)', text: 'var(--fusca-preto)', title: 'var(--fusca-preto)' },
    'fusca-verde': { background: 'var(--fusca-verde)', text: 'var(--fusca-bege)', title: 'var(--fusca-bege)' },
    'fusca-branco': { background: 'var(--fusca-branco)', text: 'var(--fusca-preto)', title: 'var(--fusca-preto)' },
    'fusca-preto': { background: 'var(--fusca-preto)', text: 'var(--fusca-bege)', title: 'var(--fusca-bege)' },
    'fusca-cinza': { background: 'var(--fusca-cinza)', text: 'var(--fusca-preto)', title: 'var(--fusca-preto)' },
    'fusca-amarelo': { background: 'var(--fusca-amarelo)', text: 'var(--fusca-preto)', title: 'var(--fusca-preto)' },
    'fusca-laranja': { background: 'var(--fusca-laranja)', text: 'var(--fusca-preto)', title: 'var(--fusca-preto)' },
    'fusca-roxo': { background: 'var(--fusca-roxo)', text: 'var(--fusca-bege)', title: 'var(--fusca-bege)' },
    'fusca-rosa': { background: 'var(--fusca-rosa)', text: 'var(--fusca-preto)', title: 'var(--fusca-preto)' },
};

function updateColors(color) {
    if (colors[color]) {
        body.style.backgroundColor = colors[color].background;
        body.style.color = colors[color].text;
        title.style.color = colors[color].title;
        footer.style.color = colors[color].text;

        // Atualiza a classe do body para garantir a cor do texto correta
        if (colors[color].text === '#F5F7F8') {
            body.classList.add('light-text');
            body.classList.remove('dark-text');
        } else {
            body.classList.add('dark-text');
            body.classList.remove('light-text');
        }
    }
}

// Adiciona um ouvinte de evento para o seletor de cor
colorPicker.addEventListener('change', function() {
    const selectedColor = this.value;
    updateColors(selectedColor);
});

// Define a cor inicial (opcional)
updateColors(colorPicker.value || 'fusca-bege');