class MichiNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <div class="container mx-auto px-6 py-4 flex justify-between items-center relative">
                <a href="/index.html" class="flex items-center space-x-2 hover:opacity-80 transition z-50">
                    <span class="text-2xl">🐾</span>
                    <span class="font-bold text-xl tracking-tighter text-michi">MICHI CAFÉ</span>
                </a>

                <!-- Botón Hamburguesa (Visible en móvil) -->
                <button id="menu-btn" class="block md:hidden focus:outline-none z-50 p-2">
                    <i class="fas fa-bars text-2xl text-michi"></i>
                </button>

                <!-- Menú Desktop -->
                <div class="hidden md:flex space-x-8 font-medium text-[#54372B] items-center">
                    <a href="/index.html#experiencia" class="hover:text-michi-dark transition">Experiencia</a>
                    <a href="/menu.html" class="hover:text-michi-dark transition">Nuestra Carta</a>
                    <a href="#ubicacion" class="hover:text-michi-dark transition">Visítanos</a>
                    <a href="https://www.instagram.com/michicafes" target="_blank" class="bg-michi text-white px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition">Comunidad Michi</a>
                </div>

                <!-- Menú Móvil (Oculto por defecto) -->
                <div id="mobile-menu" class="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 text-xl font-medium text-[#221518] transform translate-x-full transition-transform duration-300 ease-in-out md:hidden">
                    <a href="/index.html#experiencia" class="hover:text-michi transition mobile-link">Experiencia</a>
                    <a href="/menu.html" class="hover:text-michi transition mobile-link">Nuestra Carta</a>
                    <a href="#ubicacion" class="hover:text-michi transition mobile-link">Visítanos</a>
                    <a href="https://www.instagram.com/michicafes" target="_blank" class="bg-michi text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition">Comunidad Michi</a>
                </div>
            </div>
        </nav>
        `;

        const menuBtn = this.querySelector('#menu-btn');
        const mobileMenu = this.querySelector('#mobile-menu');
        const mobileLinks = this.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                isMenuOpen = !isMenuOpen;
                if (isMenuOpen) {
                    mobileMenu.classList.remove('translate-x-full');
                    menuBtn.innerHTML = '<i class="fas fa-times text-2xl text-michi"></i>';
                } else {
                    mobileMenu.classList.add('translate-x-full');
                    menuBtn.innerHTML = '<i class="fas fa-bars text-2xl text-michi"></i>';
                }
            });
        }

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('translate-x-full');
                menuBtn.innerHTML = '<i class="fas fa-bars text-2xl text-michi"></i>';
            });
        });
    }
}

class MichiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer id="ubicacion" class="bg-[#221518] text-white pt-16 pb-8 border-t border-[#54372B]">
            <div class="container mx-auto px-6 grid md:grid-cols-2 gap-12">
                <div>
                    <h4 class="font-bold text-lg mb-4 text-michi-accent font-bold">Encuéntranos</h4>
                    <p class="text-gray-300 mb-2 italic">"El rincón favorito de los gatos y el buen café"</p>
                    <p class="text-white font-medium"><i class="fas fa-map-marker-alt mr-2 text-michi-accent"></i> Jr. Guillermo Urrelo 1628, Cajamarca, Perú.</p>
                    <p class="text-white mt-2 font-medium"><i class="fas fa-clock mr-2 text-michi-accent"></i> Lun - Sáb: 9:00 AM - 9:00 PM</p>
                </div>
                <div class="text-right">
                    <p class="text-sm text-gray-400">© 2026 Michi Café. Cajamarca, Perú.</p>
                    <p class="text-xs text-gray-500 mt-1">Estrategia Digital SOSTAC Fase I.</p>
                </div>
            </div>
        </footer>
        `;
    }
}

class MichiMenuItem extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute('name');
        const description = this.getAttribute('description');
        const price = this.getAttribute('price');
        const whatsapp = this.getAttribute('whatsapp') || `Hola Michi Café, quisiera pedir un ${name}`;
        const encodedWhatsapp = encodeURIComponent(whatsapp);

        this.innerHTML = `
        <div class="flex justify-between items-start border-b border-gray-100 pb-3">
            <div class="pr-4">
                <h3 class="font-bold text-lg text-[#221518]">${name}</h3>
                <p class="text-[#54372B] text-sm leading-tight">${description}</p>
            </div>
            <div class="flex flex-col items-end">
                <span class="font-bold text-michi whitespace-nowrap">S/ ${price}</span>
                <a href="https://wa.me/51976622179?text=${encodedWhatsapp}" target="_blank" class="text-xs text-green-600 hover:underline mt-1"><i class="fab fa-whatsapp"></i> Pedir</a>
            </div>
        </div>
        `;
    }
}

class MichiProductCard extends HTMLElement {
    connectedCallback() {
        const image = this.getAttribute('image');
        const title = this.getAttribute('title');
        const description = this.getAttribute('description');
        const whatsapp = this.getAttribute('whatsapp') || `Hola Michi Café, quisiera pedir un ${title}`;
        const encodedWhatsapp = encodeURIComponent(whatsapp);

        this.innerHTML = `
        <div class="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition group" data-aos="fade-up">
            <div class="h-64 bg-gray-200 relative overflow-hidden">
                <img src="${image}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="${title}" loading="lazy">
            </div>
            <div class="p-8">
                <h3 class="text-xl font-bold mb-2 text-[#221518]">${title}</h3>
                <p class="text-[#54372B] mb-4">${description}</p>
                <div class="flex justify-between items-center">
                    <a href="/menu.html" class="text-michi font-bold hover:underline text-sm">Ver en carta →</a>
                    <a href="https://wa.me/51976622179?text=${encodedWhatsapp}" target="_blank" class="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-green-600 transition flex items-center gap-2">
                        <i class="fab fa-whatsapp"></i> Pedir
                    </a>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('michi-nav', MichiNav);
customElements.define('michi-footer', MichiFooter);
customElements.define('michi-menu-item', MichiMenuItem);
customElements.define('michi-product-card', MichiProductCard);