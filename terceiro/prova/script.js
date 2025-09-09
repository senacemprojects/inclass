window.addEventListener('load', function() {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    const perfilNome = document.getElementById('perfil-nome');
    const perfilBtn = document.getElementById('perfil-btn');
    
    if (usuarioLogado && perfilNome) {
        perfilNome.textContent = usuarioLogado;
    }

    if (perfilBtn) {
        perfilBtn.addEventListener('click', function() {
            const usuarioLogado = localStorage.getItem('usuarioLogado');
            if (usuarioLogado) {
                const confirmar = confirm('Deseja fazer logout?');
                if (confirmar) {
                    localStorage.removeItem('usuarioLogado');
                    perfilNome.textContent = 'Entrar';
                    window.location.href = 'login.html';
                }
            } else {
                window.location.href = 'login.html';
            }
        });
    }
});

function adicionarAoCarrinho(produtoId) {
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    
    const itemExistente = carrinho.find(item => item.id === produtoId);
    
    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({
            id: produtoId,
            quantidade: 1
        });
    }
    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    alert('Produto adicionado ao carrinho!');
    
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const total = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
        cartCount.textContent = total;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('.produto-card button');
    botoes.forEach((botao, index) => {
        const produtos = ['fone-bluetooth', 'smartwatch', 'luminaria-led', 'caixa-som', 'teclado-mecanico', 'mouse-gamer'];
        botao.addEventListener('click', function() {
            adicionarAoCarrinho(produtos[index % produtos.length]);
        });
    });
    
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    const total = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = total;
    }
});

