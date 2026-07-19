// Array de frases interactivas alusivas a PedroYoGames CC Gran Bazar, Maracaibo
const ROTATING_QUOTES = [
    "¿Todavía aceptan juegos usados como parte de pago?",
    "¡El parche de día uno pesa más que el juego!",
    "¿Tienen servicio técnico para controles con drift?",
    "¿En qué planta del CC Gran Bazar están ubicados?",
    "¡Se fue la luz, guardé la partida a tiempo!",
    "¿Tienen delivery para la zona norte?"
];

let currentQuoteIndex = 0;

// Función para cambiar de frase suavemente cada 5 segundos
function startQuoteRotation() {
    const quoteElement = document.getElementById('rotatingQuoteBox');
    if (!quoteElement) return;

    setInterval(() => {
        quoteElement.classList.add('fade-out');

        setTimeout(() => {
            currentQuoteIndex = (currentQuoteIndex + 1) % ROTATING_QUOTES.length;
            quoteElement.textContent = `"${ROTATING_QUOTES[currentQuoteIndex]}"`;
            quoteElement.classList.remove('fade-out');
        }, 500);

    }, 5000);
}

const PRODUCT_DATABASE = [
    {
        id: 'p1',
        category: 'consola',
        name: 'PlayStation 5 Slim',
        desc: 'La consola más rápida de Sony, ahora más compacta. Incluye control DualSense.',
        price: 450,
        badge: 'DESTACADO',
        badgeType: 'cyan',
        icon: `<svg viewBox="0 0 24 24" class="product-icon-svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M6 12h4M8 10v4M15 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm3 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
        </svg>`
    },
    {
        id: 'p2',
        category: 'consola',
        name: 'Nintendo Switch OLED',
        desc: 'Pantalla OLED vibrante de 7", base mejorada con puerto LAN incorporado.',
        price: 320,
        badge: 'POPULAR',
        badgeType: 'cyan',
        icon: `<svg viewBox="0 0 24 24" class="product-icon-svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="5" width="18" height="14" rx="3"></rect>
            <line x1="9" y1="5" x2="9" y2="19"></line>
            <line x1="15" y1="5" x2="15" y2="19"></line>
            <circle cx="6" cy="12" r="1.5"></circle>
            <circle cx="18" cy="12" r="1.5"></circle>
        </svg>`
    },
    {
        id: 'p3',
        category: 'consola',
        name: 'Xbox Series S',
        desc: 'Potencia de nueva generación totalmente digital, 120 FPS de rendimiento.',
        price: 280,
        originalPrice: 320,
        badge: 'OFERTA',
        badgeType: 'red',
        icon: `<svg viewBox="0 0 24 24" class="product-icon-svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6" stroke-dasharray="4 2"></circle>
        </svg>`
    },
    {
        id: 'p4',
        category: 'accesorio',
        name: 'DualSense PS5',
        desc: 'Mando con retroalimentación háptica inmersiva y gatillos adaptables.',
        price: 75,
        badge: '',
        icon: `<svg viewBox="0 0 24 24" class="product-icon-svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 12h4M8 10v4M14 12h.01M17 12h.01M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
        </svg>`
    },
    {
        id: 'p5',
        category: 'juego',
        name: 'Spider-Man 2 (PS5)',
        desc: 'La aventura definitiva de Peter Parker y Miles Morales en la Nueva York de Marvel.',
        price: 60,
        badge: 'FÍSICO',
        badgeType: 'cyan',
        icon: `<svg viewBox="0 0 24 24" class="product-icon-svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            <path d="M2 12h20"></path>
        </svg>`
    },
    {
        id: 'p6',
        category: 'juego',
        name: 'Zelda: Tears of the Kingdom',
        desc: 'La secuela épica de Breath of the Wild. Explora los cielos y tierras de Hyrule.',
        price: 55,
        badge: '',
        icon: `<svg viewBox="0 0 24 24" class="product-icon-svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 22 22 2 22"></polygon>
            <circle cx="12" cy="14" r="3"></circle>
        </svg>`
    },
    {
        id: 'p7',
        category: 'componente',
        name: 'SSD NVMe 1TB PS5',
        desc: 'Amplía el almacenamiento ultra rápido de tu consola. Compatible con heatsink.',
        price: 85,
        badge: '',
        icon: `<svg viewBox="0 0 24 24" class="product-icon-svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="10" width="18" height="4" rx="1"></rect>
            <line x1="5" y1="12" x2="6" y2="12"></line>
            <line x1="8" y1="12" x2="10" y2="12"></line>
            <line x1="12" y1="12" x2="14" y2="12"></line>
        </svg>`
    },
    {
        id: 'p8',
        category: 'pc',
        name: 'PC Gaming RGB Entry',
        desc: 'Ryzen 5 7600 + RTX 4060 + 16GB DDR5. Armado impecable y garantizado.',
        price: 800,
        badge: 'NUEVO',
        badgeType: 'yellow',
        icon: `<svg viewBox="0 0 24 24" class="product-icon-svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2"></rect>
            <circle cx="12" cy="18" r="1.5"></circle>
            <line x1="9" y1="6" x2="15" y2="6"></line>
            <line x1="9" y1="10" x2="15" y2="10"></line>
        </svg>`
    }
];

const SERVICE_DATABASE = [
    {
        id: 's1',
        category: 'servicio',
        name: 'Consolas Modernas',
        price: 15,
        desc: 'Servicio técnico especializado para PS5, Xbox Series y Nintendo Switch.',
        bullets: [
            'Mantenimiento preventivo completo',
            'Cambio de metal líquido',
            'Reparación de puerto HDMI',
            'Cambio de fuente de poder integrado',
            'Reparación de lectora de discos'
        ],
        icon: `<svg viewBox="0 0 24 24" class="service-icon-svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>`
    },
    {
        id: 's2',
        category: 'servicio',
        name: 'Controles y Accesorios',
        price: 8,
        desc: '¿Tus mandos tienen Drift o botones atascados? Te los reparamos al momento.',
        bullets: [
            'Reparación y calibración de stick drift',
            'Reemplazo de botones atascados o rotos',
            'Cambio de gomas conductivas internas',
            'Instalación de puerto de carga USB-C',
            'Reemplazo de cables de alimentación'
        ],
        icon: `<svg viewBox="0 0 24 24" class="service-icon-svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 12h4M8 10v4M14 12h.01M17 12h.01M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
        </svg>`
    },
    {
        id: 's3',
        category: 'servicio',
        name: 'Consolas Retro',
        price: 12,
        desc: 'Restauración, limpieza química profunda y chipeo de sistemas clásicos.',
        bullets: [
            'Mantenimiento PS3 FAT / Slim',
            'Restauración de lentes PlayStation 2',
            'Reparación de bisagras Nintendo 3DS / DS',
            'Calibración de cabezales láser',
            'Chipeo y desbloqueo seguro'
        ],
        icon: `<svg viewBox="0 0 24 24" class="service-icon-svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
            <path d="M12 17h.01M12 13.5a2.5 2.5 0 0 0 2.5-2.5c0-1.5-2.5-3-2.5-3s-2.5 1.5-2.5 3a2.5 2.5 0 0 0 2.5 2.5z"></path>
        </svg>`
    },
    {
        id: 's4',
        category: 'servicio',
        name: 'Mandos y Cables Clásicos',
        price: 5,
        desc: 'Recuperamos tus gamepads descontinuados y adaptamos cables a HDMI.',
        bullets: [
            'Restauración estética de mandos PS1/PS2',
            'Reparación de sensores mandos Wii/WiiU',
            'Adaptación de cables multiconsola antiguos',
            'Conversión de cables analógicos AV a HDMI',
            'Reparación de soldaduras en placas de mandos'
        ],
        icon: `<svg viewBox="0 0 24 24" class="service-icon-svg" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="6" y1="12" x2="18" y2="12"></line>
            <line x1="12" y1="6" x2="12" y2="18"></line>
        </svg>`
    }
];

let cart = JSON.parse(localStorage.getItem('pedroyo_games_cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
    renderProducts('todos');
    renderServices();
    updateCartUI();
    startQuoteRotation(); // Inicializar el rotador de frases gamer

    // Lógica para toggle de Menú de Hamburguesa Móvil
    const menuToggleBtn = document.getElementById('menuToggleButton');
    const navMenu = document.getElementById('navMenu');
    const bodyOverlay = document.getElementById('cartBackdrop');

    const toggleMobileMenu = () => {
        const isOpen = navMenu.classList.toggle('open');
        if (isOpen) {
            bodyOverlay.classList.add('show');
            menuToggleBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            `;
        } else {
            bodyOverlay.classList.remove('show');
            menuToggleBtn.innerHTML = `
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            `;
        }
    };

    const closeMobileMenu = () => {
        navMenu.classList.remove('open');
        bodyOverlay.classList.remove('show');
        menuToggleBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        `;
    };

    menuToggleBtn.addEventListener('click', toggleMobileMenu);

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Configurar botones de filtro
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const filterValue = e.target.getAttribute('data-filter');
            renderProducts(filterValue);
        });
    });

    // Configuración de la apertura y cierre del carrito lateral
    const cartSidebar = document.getElementById('cartSidebar');
    const cartBackdrop = document.getElementById('cartBackdrop');
    const cartOpenBtn = document.getElementById('cartOpenButton');
    const cartCloseBtn = document.getElementById('cartCloseButton');

    const openCart = () => {
        closeMobileMenu();
        cartSidebar.classList.add('open');
        cartBackdrop.classList.add('show');
    };

    const closeCart = () => {
        cartSidebar.classList.remove('open');
        cartBackdrop.classList.remove('show');
    };

    cartOpenBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);
    
    cartBackdrop.addEventListener('click', () => {
        closeCart();
        closeMobileMenu();
    });

    document.getElementById('checkoutBtn').addEventListener('click', triggerCheckout);
});

function renderProducts(filter) {
    const container = document.getElementById('productGridContainer');
    container.innerHTML = '';

    const filteredProducts = filter === 'todos' 
        ? PRODUCT_DATABASE 
        : PRODUCT_DATABASE.filter(p => p.category === filter);

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-category', product.category);

        let badgeHTML = '';
        if (product.badge) {
            badgeHTML = `<span class="card-badge badge-${product.badgeType || 'cyan'}">${product.badge}</span>`;
        }

        let priceHTML = `<span class="product-price">$${product.price}</span>`;
        if (product.originalPrice) {
            priceHTML = `<span class="product-price"><small>$${product.originalPrice}</small>$${product.price}</span>`;
        }

        card.innerHTML = `
            ${badgeHTML}
            <div class="product-image-container">
                ${product.icon}
            </div>
            <div class="product-details">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-footer">
                    ${priceHTML}
                    <button class="btn-card-buy" onclick="addToCart('${product.id}', 'product')">+ CARRITO</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderServices() {
    const container = document.getElementById('servicesGridContainer');
    container.innerHTML = '';

    SERVICE_DATABASE.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';

        let bulletsHTML = '';
        service.bullets.forEach(bullet => {
            bulletsHTML += `<li><span class="bullet-arrow">▸</span> ${bullet}</li>`;
        });

        card.innerHTML = `
            <div class="service-icon-container">
                ${service.icon}
            </div>
            <span class="service-price-tag">DESDE $${service.price}</span>
            <h3 class="service-title">${service.name}</h3>
            <p class="service-desc">${service.desc}</p>
            <ul class="service-bullets">
                ${bulletsHTML}
            </ul>
            <button class="btn-service-request" onclick="addToCart('${service.id}', 'service')">+ SOLICITAR SERVICIO</button>
        `;
        container.appendChild(card);
    });
}

function addToCart(itemId, type) {
    let item;
    if (type === 'product') {
        item = PRODUCT_DATABASE.find(p => p.id === itemId);
    } else {
        item = SERVICE_DATABASE.find(s => s.id === itemId);
    }

    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            category: item.category,
            quantity: 1
        });
    }

    saveAndRefreshCart();
    
    const cartTrigger = document.getElementById('cartOpenButton');
    cartTrigger.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartTrigger.style.transform = 'scale(1)';
    }, 200);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveAndRefreshCart();
}

function updateQuantity(itemId, amount) {
    const item = cart.find(item => item.id === itemId);
    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        saveAndRefreshCart();
    }
}

function saveAndRefreshCart() {
    localStorage.setItem('pedroyo_games_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById('cartItemsContainer');
    const totalElement = document.getElementById('cartTotalValue');
    const badgeCountElement = document.getElementById('cartBadgeCount');

    const totalItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
    badgeCountElement.textContent = totalItemsCount;

    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty-msg">
                <div class="cart-empty-icon">🛒</div>
                <p>Tu carrito de cotización está vacío.</p>
                <p style="font-size:0.95rem; color:var(--text-secondary);">Agrega consolas o solicita servicios técnicos para empezar.</p>
            </div>
        `;
        totalElement.textContent = '$0.00';
        return;
    }

    let cartTotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        cartTotal += itemTotal;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" aria-label="Eliminar ítem">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
            <div class="cart-item-info">
                <h4 class="cart-item-name">${item.name}</h4>
                <div class="cart-item-category">${item.category}</div>
                <div class="cart-item-footer">
                    <span class="cart-item-price">$${itemTotal}</span>
                    <div class="quantity-controls">
                        <button class="qty-btn" onclick="updateQuantity('${item.id}', -1)">-</button>
                        <div class="qty-num">${item.quantity}</div>
                        <button class="qty-btn" onclick="updateQuantity('${item.id}', 1)">+</button>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(cartItemDiv);
    });

    totalElement.textContent = `$${cartTotal}.00`;
}

function triggerCheckout() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío. Agrega productos o servicios primero.");
        return;
    }

    const clientName = document.getElementById('clientNameInput').value.trim();
    const clientNameText = clientName ? `Cliente: ${clientName}\n` : 'Cliente: No especificado\n';
    
    const phone = "584141651944"; 
    
    let message = `👾 *PEDROYOGAMES - SOLICITUD DE ORDEN* 👾\n`;
    message += `===============================\n`;
    message += clientNameText;
    message += `Ubicación: Maracaibo, Venezuela\n`;
    message += `===============================\n\n`;
    
    let total = 0;
    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        message += `${index + 1}. *[${item.category.toUpperCase()}]* ${item.name}\n`;
        message += `   Cant: ${item.quantity} | Subtotal: $${subtotal}\n\n`;
    });
    
    message += `===============================\n`;
    message += `💰 *TOTAL ESTIMADO: $${total}.00*\n`;
    message += `===============================\n\n`;
    message += `_Este mensaje fue generado automáticamente desde el catálogo local para iniciar mi pedido. ¿Me confirman disponibilidad y métodos de pago?_`;

    const encodedText = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phone}?text=${encodedText}`;

    window.open(whatsappURL, '_blank');
}