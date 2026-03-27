const menuData = [
    // MASSAS FRESCAS (CRUAS)
    { id: 1, cat: 'frescas', nome: 'Massa para Lasanha', preco: 44.90, desc: 'Preço por KG' },
    { id: 2, cat: 'frescas', nome: 'Espaguete / Talharim', preco: 44.90, desc: 'Preço por KG' },
    { id: 3, cat: 'frescas', nome: 'Gnochi', preco: 54.90, desc: 'Preço por KG' },
    { id: 4, cat: 'frescas', nome: 'Ravioli Carne ou Ricota', preco: 55.90, desc: 'Preço por KG' },
    { id: 5, cat: 'frescas', nome: 'Ravioli Verde de Ricota', preco: 57.90, desc: 'Preço por KG' },
    { id: 6, cat: 'frescas', nome: 'Capelete', preco: 55.90, desc: 'Preço por KG' },

    // MASSAS PRONTAS
    { id: 7, cat: 'prontas', nome: 'Lasanha Pronta', preco: 67.90, desc: 'Preço por KG' },
    { id: 8, cat: 'prontas', nome: 'Canelone Pronto', preco: 67.90, desc: 'Preço por KG' },
    { id: 9, cat: 'prontas', nome: 'Rondele Pronto', preco: 69.90, desc: 'Preço por KG' },
    { id: 10, cat: 'prontas', nome: 'Gnochi Pronto', preco: 61.90, desc: 'Preço por KG' },
    { id: 11, cat: 'prontas', nome: 'Ravioli Carne ou Ricota Pronto', preco: 63.90, desc: 'Preço por KG' },
    { id: 12, cat: 'prontas', nome: 'Espaguete / Talharim Pronto', preco: 49.90, desc: 'Preço por KG' },
    { id: 20, cat: 'prontas', nome: 'Ravioli Verde Pronto', preco: 64.90, desc: 'Preço por KG' },

    // CARNES & ASSADOS
    { id: 13, cat: 'carnes', nome: 'Lagarto Acebolado', preco: 98.90, desc: 'Preço por KG' },
    { id: 14, cat: 'carnes', nome: 'Carne ao molho de Cerveja Preta', preco: 91.90, desc: 'Preço por KG' },
    { id: 15, cat: 'carnes', nome: 'Lombo ou Costela Suína', preco: 91.90, desc: 'Preço por KG' },
    { id: 16, cat: 'carnes', nome: 'Frango Assado Simples', preco: 44.00, desc: 'Unidade' },
    { id: 17, cat: 'carnes', nome: 'Frango Assado Recheado', preco: 46.00, desc: 'Unidade' },
    { id: 18, cat: 'carnes', nome: 'Meio Frango', preco: 28.00, desc: 'Unidade' },
    { id: 19, cat: 'carnes', nome: 'Maionese ou Farofa', preco: 57.90, desc: 'Preço por KG' },

    // FRIOS
    { id: 21, cat: 'frios', nome: 'Mussarela', preco: 72.90, desc: 'Preço por KG' },
    { id: 22, cat: 'frios', nome: 'Queijo Prato', preco: 82.90, desc: 'Preço por KG' },
    { id: 23, cat: 'frios', nome: 'Presunto', preco: 76.00, desc: 'Preço por KG' },
    { id: 24, cat: 'frios', nome: 'Peito de Peru', preco: 130.00, desc: 'Preço por KG' },

    // MASSAS DE PIZZA
    { id: 25, cat: 'pizzas', nome: 'Massa Pizza Média ou Grande', preco: 38.00, desc: 'Preço por KG' },
    { id: 26, cat: 'pizzas', nome: 'Massa Pizza Pequena (10 unid.)', preco: 48.00, desc: 'Pacote' },

    // TORTAS SALGADAS
    { id: 27, cat: 'tortas-salgadas', nome: 'Torta Frango ou Palmito', preco: 42.00, desc: 'Unidade' },
    { id: 28, cat: 'tortas-salgadas', nome: 'Torta de Camarão', preco: 53.00, desc: 'Unidade' },
    { id: 29, cat: 'tortas-salgadas', nome: 'Fogazas', preco: 35.00, desc: 'Unidade' },

    // DOCES & TORTAS
    { id: 30, cat: 'doces', nome: 'Torta de Limão', preco: 45.00, desc: 'Unidade' },
    { id: 31, cat: 'doces', nome: 'Torta Ricota (Pastiera)', preco: 45.00, desc: 'Unidade' },
    { id: 32, cat: 'doces', nome: 'Torta de Morango', preco: 48.90, desc: 'Unidade' },
    { id: 33, cat: 'doces', nome: 'Torta Banana (Banoffe)', preco: 48.90, desc: 'Unidade' },
    { id: 34, cat: 'doces', nome: 'Pudim de Leite Condensado', preco: 35.00, desc: 'Unidade' },
    { id: 35, cat: 'doces', nome: 'Mil Folhas', preco: 46.00, desc: 'Preço por KG' },
    { id: 36, cat: 'doces', nome: 'Bombas', preco: 12.00, desc: 'Unidade' },
    { id: 37, cat: 'doces', nome: 'Quindim', preco: 13.00, desc: 'Unidade' },
    { id: 38, cat: 'doces', nome: 'Mini Quindim (Caixa com 4)', preco: 20.00, desc: 'Caixa' },
    { id: 39, cat: 'doces', nome: 'Fatia de Tortas ou Pudim', preco: 10.00, desc: 'Unidade' },
    { id: 40, cat: 'doces', nome: 'Brigadeiro / Queijadinha', preco: 6.00, desc: 'Unidade' }
];

let cart = JSON.parse(localStorage.getItem('speni_cart')) || [];

function renderProducts(filterCat = 'todas') {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    const filtered = filterCat === 'todas' ? menuData : menuData.filter(p => p.cat === filterCat);
    filtered.forEach(p => {
        grid.innerHTML += `
            <div class="product-card">
                <div>
                    <h3>${p.nome}</h3>
                    <p>${p.desc}</p>
                </div>
                <div>
                    <span class="product-price">R$ ${p.preco.toFixed(2).replace('.', ',')}</span>
                    <button class="add-to-cart" onclick="addToCart(${p.id})">ADICIONAR</button>
                </div>
            </div>`;
    });
}

window.addToCart = function(id) {
    const item = menuData.find(p => p.id === id);
    const inCart = cart.find(p => p.id === id);
    if (inCart) { inCart.qty++; } else { cart.push({ ...item, qty: 1 }); }
    updateCart();
};

window.remove = function(id) {
    cart = cart.filter(p => p.id !== id);
    updateCart();
};

function updateCart() {
    localStorage.setItem('speni_cart', JSON.stringify(cart));
    const container = document.getElementById('cart-items');
    let total = 0; let count = 0;
    container.innerHTML = '';
    cart.forEach(item => {
        total += item.preco * item.qty;
        count += item.qty;
        container.innerHTML += `
            <div style="display:flex; justify-content:space-between; margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
                <div><b>${item.nome}</b><br><small>${item.qty}x R$ ${item.preco.toFixed(2).replace('.',',')}</small></div>
                <button onclick="remove(${item.id})" style="border:none; background:none; color:red; cursor:pointer; font-size:18px;">&times;</button>
            </div>`;
    });
    document.getElementById('cart-total').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    document.getElementById('cart-count').innerText = count;
}

window.filter = function(cat) {
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    renderProducts(cat);
};

window.toggleCart = function() {
    document.getElementById('cart-sidebar').classList.toggle('active');
};

window.checkout = function() {
    if (cart.length === 0) return alert("Seu carrinho está vazio!");
    let msg = "*Pedido Massas Speni*\n\n";
    cart.forEach(i => msg += `• ${i.qty}x ${i.nome} (R$ ${i.preco.toFixed(2)})\n`);
    msg += `\n*Total: ${document.getElementById('cart-total').innerText}*`;
    const obs = document.getElementById('obs').value;
    if (obs) msg += `\n\n*Obs:* ${obs}`;
    window.open(`https://wa.me/5513997440012?text=${encodeURIComponent(msg)}`);
};

// Iniciar
renderProducts();
updateCart();