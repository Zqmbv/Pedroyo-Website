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
        icon: `<img class="product-img" src="img/productos/PS5 Slim.jpg" alt="">`
    },
    {
        id: 'p2',
        category: 'consola',
        name: 'Nintendo Switch OLED',
        desc: 'Pantalla OLED vibrante de 7", base mejorada con puerto LAN incorporado.',
        price: 320,
        badge: 'POPULAR',
        badgeType: 'cyan',
        icon: `<img class="product-img" src="img/productos/Nintendo Switch.jpg" alt="">`
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
        icon: `<img class="product-img" src="img/productos/XBOX Series X.jpg" alt="">`
    },
    {
        id: 'p4',
        category: 'juego',
        name: 'Super Mario Odyssey',
        desc: 'Mario viaja por el mundo para salvar a Peach.',
        price: 75,
        badge: '',
        icon: `<img class="product-img" src="img/productos/Super Mario Odyssey.jpg" alt="">`
    },
    {
        id: 'p5',
        category: 'juego',
        name: 'FIFA 23',
        desc: 'MBAPPE.',
        price: 60,
        badge: 'FÍSICO',
        badgeType: 'cyan',
        icon: `<img class="product-img" src="img/productos/Fifa 23.jpg" alt="">`
    },
    {
        id: 'p6',
        category: 'accesorio',
        name: 'Control de XBOX Series X',
        desc: 'Mando con retroalimentación háptica inmersiva y gatillos adaptables.',
        price: 55,
        badge: '',
        icon: `<img  class="product-img" src="img/productos/Control  de XBOX.jpg" alt="">`
    },
    {
        id: 'p7',
        category: 'consola-retro',
        name: 'Nintendo Entertainment System',
        desc: 'La primera consola de Nintendo.',
        price: 800,
        badge: 'NUEVO',
        badgeType: 'yellow',
        icon: `<img class="product-img" src="img/productos/NES.jpg" alt="">`
    },
    {
        id: 'p8',
        category: 'consola-retro',
        name: 'Super Nintendo Entertainment System',
        desc: 'La segunda consola de Nintendo.',
        price: 800,
        badge: 'NUEVO',
        badgeType: 'yellow',
        icon: `<img class="product-img" src="img/productos/SNES.jpg" alt="">`
    },
        {
        id: 'p9',
        category: 'consola-retro',
        name: 'Ninentdo 64',
        desc: 'La tercera consola de Nintendo.',
        price: 800,
        badge: 'NUEVO',
        badgeType: 'yellow',
        icon: `<img class="product-img" src="img/productos/N64.jpg" alt="">`
    },
        {
        id: 'p10',
        category: 'juego-retro',
        name: 'Zelda A Link to the Past',
        desc: 'Un juego de Zelda bien hecho.',
        price: 800,
        badge: 'NUEVO',
        badgeType: 'yellow',
        icon: `<img class="product-img" src="img/productos/Zelda A Link to the Past.jpg" alt="">`
    },
    {
        id: 'p11',
        category: 'juego-retro',
        name: 'Metroid',
        desc: 'El que redefinió la industria.',
        price: 800,
        badge: 'NUEVO',
        badgeType: 'yellow',
        icon: `<img class="product-img" src="img/productos/Metroid.jpg" alt="">`
    },
    {
        id: 'p12',
        category: 'juego-retro',
        name: 'Mario Kart 64',
        desc: 'El juego de carrera por excelencia.',
        price: 800,
        badge: 'NUEVO',
        badgeType: 'yellow',
        icon: `<img class="product-img" src="img/productos/Mario Kart 64.jpg" alt="">`
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
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none"><g transform="scale(1.33333)"><path d="M7.75,2.25h2.5c.552,0,1,.448,1,1v1.336c0,.265-.105,.52-.293,.707l-1.604,1.604c-.195,.195-.512,.195-.707,0l-1.604-1.604c-.188-.188-.293-.442-.293-.707v-1.336c0-.552,.448-1,1-1Z" fill="none" stroke="#FE4A49" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M15.75,7.75v2.5c0,.552-.448,1-1,1h-1.336c-.265,0-.52-.105-.707-.293l-1.604-1.604c-.195-.195-.195-.512,0-.707l1.604-1.604c.188-.188,.442-.293,.707-.293h1.336c.552,0,1,.448,1,1Z" fill="none" stroke="#FE4A49" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M10.25,15.75h-2.5c-.552,0-1-.448-1-1v-1.336c0-.265,.105-.52,.293-.707l1.604-1.604c.195-.195,.512-.195,.707,0l1.604,1.604c.188,.188,.293,.442,.293,.707v1.336c0,.552-.448,1-1,1Z" fill="none" stroke="#FE4A49" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M2.25,10.25v-2.5c0-.552,.448-1,1-1h1.336c.265,0,.52,.105,.707,.293l1.604,1.604c.195,.195,.195,.512,0,.707l-1.604,1.604c-.188,.188-.442,.293-.707,.293h-1.336c-.552,0-1-.448-1-1Z" fill="none" stroke="#FE4A49" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></g></svg>`
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
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none"><path d="M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z" stroke="#FE4A49" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.25 11H7.75C6.79 11 6 10.21 6 9.25V6.75C6 5.79 6.79 5 7.75 5H16.25C17.21 5 18 5.79 18 6.75V9.25C18 10.21 17.21 11 16.25 11Z" stroke="#FE4A49" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.3 15.28L8 17.58" stroke="#FE4A49" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.03003 15.3101L10.33 17.61" stroke="#FE4A49" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.49 15.3301H16.51" stroke="#FE4A49" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.49 17.5V17.48" stroke="#FE4A49" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>`
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
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.65845 3.45374C6.1639 3.27447 6.67734 3.25 7.10257 3.25H7.71504C8.74784 3.25 9.7552 3.5704 10.5982 4.16702L11.1001 4.52223C11.3633 4.70844 11.6777 4.80844 12 4.80844C12.3224 4.80844 12.6368 4.70844 12.8999 4.52222L13.4018 4.16703C14.2448 3.5704 15.2522 3.25 16.2849 3.25H16.8974C17.3227 3.25 17.8361 3.27447 18.3415 3.45373C19.7848 3.96561 20.9262 5.14191 21.6779 7.04514C22.4219 8.92876 22.8039 11.5642 22.7439 15.1153C22.7312 15.8648 22.6377 16.7048 22.3495 17.4614C22.0576 18.2279 21.5475 18.9504 20.6893 19.3608C20.2011 19.5943 19.6257 19.75 18.9733 19.75C18.1864 19.75 17.5391 19.5233 17.0312 19.1905C16.5588 18.8808 16.1457 18.4805 15.7928 18.1385C15.7498 18.0968 15.7077 18.0561 15.6665 18.0164C15.2616 17.6267 14.9212 17.3226 14.5435 17.1267C14.4477 17.077 14.3497 17.0321 14.25 16.992V18C14.25 18.8816 13.5981 19.611 12.75 19.7323V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V19.7323C10.4019 19.611 9.75 18.8816 9.75 18V16.992C9.6503 17.0321 9.55235 17.077 9.45652 17.1267C9.07878 17.3226 8.73837 17.6267 8.33351 18.0164C8.29232 18.0561 8.25024 18.0968 8.20726 18.1385C7.85433 18.4805 7.44123 18.8808 6.96877 19.1905C6.46087 19.5233 5.81363 19.75 5.02671 19.75C4.37431 19.75 3.79887 19.5943 3.31066 19.3608C2.45248 18.9504 1.94246 18.2279 1.65049 17.4614C1.36232 16.7048 1.26883 15.8648 1.25615 15.1153C1.19607 11.5643 1.57809 8.92876 2.32207 7.04515C3.0738 5.14192 4.2152 3.96561 5.65845 3.45374ZM11.25 16.75V18C11.25 18.1381 11.3619 18.25 11.5 18.25H12.5C12.6381 18.25 12.75 18.1381 12.75 18V16.75H11.25ZM7.10257 4.75C6.71943 4.75 6.41628 4.77651 6.15985 4.86745C5.2204 5.20065 4.35098 5.99156 3.71719 7.59618C3.07565 9.22042 2.69746 11.6334 2.75593 15.0899C2.76714 15.7524 2.85078 16.3985 3.05225 16.9275C3.24992 17.4465 3.54206 17.8088 3.95781 18.0076C4.26356 18.1538 4.61904 18.25 5.02671 18.25C5.51183 18.25 5.87475 18.114 6.14651 17.9359C6.49227 17.7093 6.79957 17.4125 7.16871 17.0559C7.20944 17.0165 7.25091 16.9765 7.29328 16.9357C7.69425 16.5497 8.1737 16.1022 8.76598 15.7951C9.45661 15.4369 10.2232 15.25 11.0012 15.25H12.9989C13.7768 15.25 14.5434 15.4369 15.234 15.7951C15.8263 16.1022 16.3058 16.5497 16.7067 16.9357C16.7491 16.9765 16.7906 17.0165 16.8313 17.0559C17.2004 17.4125 17.5077 17.7093 17.8535 17.9359C18.1253 18.114 18.4882 18.25 18.9733 18.25C19.381 18.25 19.7364 18.1538 20.0422 18.0076C20.458 17.8088 20.7501 17.4465 20.9478 16.9275C21.1492 16.3985 21.2329 15.7524 21.2441 15.0899C21.3025 11.6334 20.9244 9.22041 20.2828 7.59618C19.649 5.99155 18.7796 5.20064 17.8401 4.86745C17.5837 4.77651 17.2806 4.75 16.8974 4.75H16.2849C15.5626 4.75 14.858 4.9741 14.2683 5.39141L13.7664 5.74661C13.25 6.11214 12.6328 6.30844 12 6.30844C11.3673 6.30844 10.7501 6.11215 10.2336 5.74662L9.73171 5.39142C9.14205 4.97411 8.43744 4.75 7.71504 4.75H7.10257ZM7.5 8.25C7.91422 8.25 8.25 8.58579 8.25 9V9.75H9C9.41422 9.75 9.75 10.0858 9.75 10.5C9.75 10.9142 9.41422 11.25 9 11.25H8.25V12C8.25 12.4142 7.91422 12.75 7.5 12.75C7.08579 12.75 6.75 12.4142 6.75 12V11.25H6C5.58579 11.25 5.25 10.9142 5.25 10.5C5.25 10.0858 5.58579 9.75 6 9.75H6.75V9C6.75 8.58579 7.08579 8.25 7.5 8.25Z" fill="#FE4A49"></path><path d="M19 10.25C19 10.6642 18.6642 11 18.25 11C17.8358 11 17.5 10.6642 17.5 10.25C17.5 9.83579 17.8358 9.5 18.25 9.5C18.6642 9.5 19 9.83579 19 10.25Z" fill="#FE4A49"></path><path d="M16 10.25C16 10.6642 15.6642 11 15.25 11C14.8358 11 14.5 10.6642 14.5 10.25C14.5 9.83579 14.8358 9.5 15.25 9.5C15.6642 9.5 16 9.83579 16 10.25Z" fill="#FE4A49"></path><path d="M16.75 8C17.1642 8 17.5 8.33579 17.5 8.75C17.5 9.16421 17.1642 9.5 16.75 9.5C16.3358 9.5 16 9.16421 16 8.75C16 8.33579 16.3358 8 16.75 8Z" fill="#FE4A49"></path><path d="M16.75 11C17.1642 11 17.5 11.3358 17.5 11.75C17.5 12.1642 17.1642 12.5 16.75 12.5C16.3358 12.5 16 12.1642 16 11.75C16 11.3358 16.3358 11 16.75 11Z" fill="#FE4A49"></path></svg>`
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

        /*
        let priceHTML = `<span class="product-price">$${product.price}</span>`;
        if (product.originalPrice) {
            priceHTML = `<span class="product-price"><small>$${product.originalPrice}</small>$${product.price}</span>`;
        }                    ${priceHTML}*/

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

        /*<span class="service-price-tag">DESDE $${service.price}</span> */
        card.innerHTML = `
            <div class="service-icon-container">
                ${service.icon}
            </div>
            
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
            /*price: item.price,*/
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
    /*const totalElement = document.getElementById('cartTotalValue');*/
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
        /*totalElement.textContent = '$0.00';*/
        return;
    }

    let cartTotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        cartTotal += itemTotal;

        /*<span class="cart-item-price">$${itemTotal}</span>*/

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

    /*totalElement.textContent = `$${cartTotal}.00`;*/
}

function triggerCheckout() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío. Agrega productos o servicios primero.");
        return;
    }

    const clientName = document.getElementById('clientNameInput').value.trim();
    const clientNameText = clientName ? `Cliente: ${clientName}\n` : 'Cliente: No especificado\n';
    
    const phone = "584141651944"; 
    
    let message = `*PEDROYOGAMES - SOLICITUD DE ORDEN*\n`;
    message += clientNameText;
    message += `Ubicación: Maracaibo, Venezuela\n`;
    message += `\n`;

    
    let total = 0;
    cart.forEach((item, index) => {
        /*Subtotal: $${subtotal}
        const subtotal = item.price * item.quantity;
        total += subtotal;*/
        message += `${index + 1}. *[${item.category.toUpperCase()}]* Cant: ${item.quantity}\n`;
        message += `    ${item.name}\n\n`;
    });
    
    /*
    message += `===============================\n`;
    message += `💰 *TOTAL ESTIMADO: $${total}.00*\n`;
    message += `===============================\n\n`;*/
    message += `Hola, ¿Me confirman disponibilidad y métodos de pago?`;

    const encodedText = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phone}?text=${encodedText}`;

    window.open(whatsappURL, '_blank');
}