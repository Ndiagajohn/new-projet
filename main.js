// COURA SHOP - Main JavaScript
class CouraShop {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.products = [];
        this.filteredProducts = [];
        this.init();
    }

    // Products Data with specific images and realistic prices
    loadProducts() {
        this.products = [
            // Vêtements
            {
                id: 1,
                name: "Robe d'été élégante",
                category: "vetements",
                price: 89,
                image: "https://images.unsplash.com/photo-1515372039744-b8bc02b2d84e?w=400&h=300&fit=crop",
                description: "Robe légère et confortable parfaite pour l'été. Taille disponible: S, M, L, XL"
            },
            {
                id: 2,
                name: "Costume formel homme",
                category: "vetements",
                price: 299,
                image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=300&fit=crop",
                description: "Costume élégant pour occasions spéciales. 100% laine italienne"
            },
            {
                id: 3,
                name: "Jean slim premium",
                category: "vetements",
                price: 129,
                image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop",
                description: "Jean de haute qualité, coupe slim moderne. Stretch confortable"
            },
            {
                id: 4,
                name: "Pull en cachemire",
                category: "vetements",
                price: 199,
                image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=300&fit=crop",
                description: "Pull doux et chaud en cachemire pur. Disponible en plusieurs couleurs"
            },
            // Cosmétiques
            {
                id: 5,
                name: "Soin anti-âge premium",
                category: "cosmetiques",
                price: 119,
                image: "https://images.unsplash.com/photo-1556228578-8d89e6adf883?w=400&h=300&fit=crop",
                description: "Crème anti-âge formulée avec des ingrédients naturels. 50ml"
            },
            {
                id: 6,
                name: "Rouge à lèvres mat",
                category: "cosmetiques",
                price: 49,
                image: "https://images.unsplash.com/photo-1586497746892-3025fad82c9e?w=400&h=300&fit=crop",
                description: "Rouge à lèvres longue tenue, fini mat élégant. Multiple teintes"
            },
            {
                id: 7,
                name: "Palette de fards à paupières",
                category: "cosmetiques",
                price: 79,
                image: "https://images.unsplash.com/photo-1590156209529-6415f7f4de31?w=400&h=300&fit=crop",
                description: "Palette complète avec des teintes naturelles et vibrantes. 12 couleurs"
            },
            {
                id: 8,
                name: "Parfum floral élégant",
                category: "cosmetiques",
                price: 169,
                image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
                description: "Parfum féminin aux notes florales délicates. 100ml"
            },
            // Chaussures
            {
                id: 9,
                name: "Basket lifestyle",
                category: "chaussures",
                price: 139,
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
                description: "Baskets confortables et tendance pour tous les jours. Cuir premium"
            },
            {
                id: 10,
                name: "Escarpins hauts de gamme",
                category: "chaussures",
                price: 179,
                image: "https://images.unsplash.com/photo-1543163521-3186826dbb0d?w=400&h=300&fit=crop",
                description: "Escarpins élégants pour soirées et événements. Talon 8cm"
            },
            {
                id: 11,
                name: "Boots en cuir",
                category: "chaussures",
                price: 219,
                image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&h=300&fit=crop",
                description: "Boots robustes en cuir véritable. Imperméables et confortables"
            },
            {
                id: 12,
                name: "Sandales d'été",
                category: "chaussures",
                price: 69,
                image: "https://images.unsplash.com/photo-1465850108601-6e8e4150634c?w=400&h=300&fit=crop",
                description: "Sandales légères et confortables pour l'été. Semelle amortissante"
            },
            // Accessoires
            {
                id: 13,
                name: "Montre de luxe",
                category: "accessoires",
                price: 399,
                image: "https://images.unsplash.com/photo-1524592094714-0f2b75847518?w=400&h=300&fit=crop",
                description: "Montre élégante avec mouvement automatique. Acier inoxydable"
            },
            {
                id: 14,
                name: "Sac à main premium",
                category: "accessoires",
                price: 249,
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
                description: "Sac en cuir véritable avec finition luxueuse. Plusieurs compartiments"
            },
            {
                id: 15,
                name: "Lunettes de soleil",
                category: "accessoires",
                price: 119,
                image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop",
                description: "Lunettes UV400 avec design moderne. Protection complète"
            },
            {
                id: 16,
                name: "Ceinture en cuir",
                category: "accessoires",
                price: 89,
                image: "https://images.unsplash.com/photo-1627123424574-7c80a57f3b2b?w=400&h=300&fit=crop",
                description: "Ceinture réversible en cuir italien. Boucle en métal"
            }
        ];
        
        this.filteredProducts = [...this.products];
        this.displayProducts();
    }

    // Event Listeners
    setupEventListeners() {
        // Navigation
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        hamburger?.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Cart
        const cartBtn = document.getElementById('cart-btn');
        const cartModal = document.getElementById('cart-modal');
        const closeCart = document.getElementById('close-cart');
        
        cartBtn?.addEventListener('click', () => {
            cartModal.classList.add('show');
            this.displayCartItems();
        });

        closeCart?.addEventListener('click', () => {
            cartModal.classList.remove('show');
        });

        // Continue shopping
        document.getElementById('continue-shopping')?.addEventListener('click', () => {
            cartModal.classList.remove('show');
        });

        // Checkout
        const checkoutBtn = document.getElementById('checkoutBtn');
        const checkoutModal = document.getElementById('checkoutModal');
        const closeCheckout = document.getElementById('closeCheckout');
        const checkoutForm = document.getElementById('checkoutForm');
        
        checkoutBtn?.addEventListener('click', () => {
            const cartItems = this.cart || window.cartClient?.getCart() || [];
            if (cartItems.length === 0) {
                this.showNotification('Votre panier est vide', 'error');
                return;
            }
            
            // Afficher le résumé de la commande
            this.updateCheckoutSummary(cartItems);
            checkoutModal.classList.add('show');
        });
        
        closeCheckout?.addEventListener('click', () => {
            checkoutModal.classList.remove('show');
        });
        
        // Checkout form submit
        checkoutForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.processOrder();
        });

        // Category cards
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const category = card.dataset.category;
                document.getElementById('category-filter').value = category;
                this.filterProducts();
                this.scrollToSection('products');
            });
        });

        // Filters
        document.getElementById('category-filter')?.addEventListener('change', () => this.filterProducts());
        document.getElementById('price-filter')?.addEventListener('change', () => this.filterProducts());
        document.getElementById('sort-filter')?.addEventListener('change', () => this.filterProducts());

        // Search
        const searchInput = document.getElementById('search-input');
        let searchTimeout;
        searchInput?.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.searchProducts(e.target.value);
            }, 300);
        });

        // Contact form
        document.getElementById('contact-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleContactForm(e);
        });

        // Newsletter form
        document.getElementById('newsletter-form')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleNewsletterForm(e);
        });

        // Close modals on outside click
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('show');
            }
        });

        // Add to cart buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.add-to-cart')) {
                const productId = parseInt(e.target.closest('.add-to-cart').dataset.productId);
                this.addToCart(productId);
            }
        });
    }

    // Display Products
    displayProducts() {
        const productsGrid = document.getElementById('products-grid');
        if (!productsGrid) return;

        productsGrid.innerHTML = '';
        
        if (this.filteredProducts.length === 0) {
            productsGrid.innerHTML = '<p class="no-products">Aucun produit trouvé.</p>';
            return;
        }

        this.filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card fade-in-up';
            productCard.innerHTML = `
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-overlay">
                        <button class="btn btn-primary add-to-cart" data-product-id="${product.id}">
                            <i class="fas fa-cart-plus"></i> Ajouter
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-category">${this.getCategoryName(product.category)}</p>
                    <p class="product-price">${product.price} €</p>
                    <p class="product-description">${product.description}</p>
                </div>
            `;
            productsGrid.appendChild(productCard);
        });

        // Add animation
        this.animateProducts();
    }

    // Filter Products
    filterProducts() {
        const categoryFilter = document.getElementById('category-filter')?.value;
        const priceFilter = document.getElementById('price-filter')?.value;
        const sortFilter = document.getElementById('sort-filter')?.value;

        this.filteredProducts = [...this.products];

        // Filter by category
        if (categoryFilter && categoryFilter !== 'all') {
            this.filteredProducts = this.filteredProducts.filter(p => p.category === categoryFilter);
        }

        // Filter by price
        if (priceFilter && priceFilter !== 'all') {
            const [min, max] = priceFilter.split('-').map(p => p === '200+' ? Infinity : parseInt(p));
            this.filteredProducts = this.filteredProducts.filter(p => {
                if (max === Infinity) return p.price >= min;
                return p.price >= min && p.price <= max;
            });
        }

        // Sort products
        switch (sortFilter) {
            case 'name':
                this.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'price-asc':
                this.filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                this.filteredProducts.sort((a, b) => b.price - a.price);
                break;
        }

        this.displayProducts();
    }

    // Search Products
    searchProducts(query) {
        if (!query.trim()) {
            this.filteredProducts = [...this.products];
        } else {
            this.filteredProducts = this.products.filter(product => 
                product.name.toLowerCase().includes(query.toLowerCase()) ||
                product.description.toLowerCase().includes(query.toLowerCase()) ||
                product.category.toLowerCase().includes(query.toLowerCase())
            );
        }
        this.displayProducts();
    }

    // Cart Management
    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({
                ...product,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartCount();
        this.showNotification(`${product.name} ajouté au panier !`);
        
        // Add animation to cart button
        const cartBtn = document.getElementById('cart-btn');
        cartBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartBtn.style.transform = 'scale(1)';
        }, 200);
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartCount();
        this.displayCartItems();
    }

    updateQuantity(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.displayCartItems();
            }
        }
    }

    updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCount) {
            cartCount.textContent = totalItems;
        }
    }

    displayCartItems() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        
        if (!cartItems || !cartTotal) return;

        if (this.cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; padding: 2rem;">Votre panier est vide.</p>';
            cartTotal.textContent = '0 €';
            return;
        }

        cartItems.innerHTML = '';
        let total = 0;

        this.cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${item.price} €</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="couraShop.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="couraShop.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                    <button class="remove-item" onclick="couraShop.removeFromCart(${item.id})">Supprimer</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = `${total} €`;
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    // Payment Processing
    displayPaymentInfo(method) {
        const paymentInfo = document.getElementById('payment-info');
        if (!paymentInfo) return;

        const paymentMethods = {
            paypal: {
                title: "PayPal",
                description: "Vous serez redirigé vers PayPal pour finaliser le paiement.",
                icon: "fab fa-paypal"
            },
            mastercard: {
                title: "Mastercard",
                description: "Paiement sécurisé par carte bancaire.",
                icon: "fab fa-cc-mastercard"
            },
            "orange-money": {
                title: "Orange Money",
                description: "Veuillez entrer votre numéro de téléphone Orange Money.",
                icon: "fas fa-mobile-alt"
            },
            wave: {
                title: "Wave",
                description: "Veuillez entrer votre numéro de téléphone Wave.",
                icon: "fas fa-money-bill-wave"
            }
        };

        const methodInfo = paymentMethods[method];
        if (methodInfo) {
            paymentInfo.innerHTML = `
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <i class="${methodInfo.icon}" style="font-size: 2rem; color: var(--primary-color);"></i>
                    <div>
                        <h4>${methodInfo.title}</h4>
                        <p>${methodInfo.description}</p>
                        ${method === 'orange-money' || method === 'wave' ? 
                            '<input type="tel" placeholder="Numéro de téléphone" required style="margin-top: 1rem;">' : ''}
                    </div>
                </div>
            `;
        }
    }

    async processOrder() {
        const form = document.getElementById('checkoutForm');
        if (!form.checkValidity()) {
            this.showNotification('Veuillez remplir tous les champs obligatoires', 'error');
            return;
        }
        
        try {
            const formData = new FormData(form);
            
            // Récupérer les articles du panier global
            const cartItems = this.cart || window.cartClient?.getCart() || [];
            
            if (cartItems.length === 0) {
                this.showNotification('Votre panier est vide', 'error');
                return;
            }
            
            // Construire les items pour l'API
            const items = cartItems.map(item => ({
                id: item.id || item.product_id,
                name: item.name || item.product_name,
                price: item.price || item.price_per_unit,
                quantity: item.quantity,
                category: item.category
            }));
            
            // Calculer le montant total
            const total_amount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            // Construire les données de commande
            const orderData = {
                items: items,
                total_amount: total_amount,
                customer_name: formData.get('name'),
                customer_email: formData.get('email'),
                customer_phone: formData.get('phone'),
                shipping_address: formData.get('address'),
                shipping_city: formData.get('city'),
                payment_method: formData.get('payment_method')
            };
            
            // Créer la commande via l'API
            const result = await window.paymentAPI.createOrder(orderData);
            
            if (result.success) {
                this.showNotification('Commande confirmée ! Vous recevrez un email de confirmation.', 'success');
                
                // Vider le panier
                this.cart = [];
                this.saveCart();
                this.updateCartCount();
                
                // Vider le cart-client aussi si disponible
                if (window.cartClient) {
                    window.cartClient.clearCart();
                }
                
                // Fermer le modal
                const modal = document.getElementById('checkoutModal');
                if (modal) {
                    modal.classList.remove('show');
                }
                
                // Réinitialiser le formulaire
                form.reset();
                
                // Scroll vers le haut
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                this.showNotification(result.message || 'Erreur lors de la création de la commande', 'error');
            }
        } catch (error) {
            console.error('Erreur processOrder:', error);
            this.showNotification('Une erreur est survenue: ' + error.message, 'error');
        }
    }

    // Utility Functions
    getCategoryName(category) {
        const categories = {
            vetements: 'Vêtements',
            cosmetiques: 'Cosmétiques',
            chaussures: 'Chaussures',
            accessoires: 'Accessoires'
        };
        return categories[category] || category;
    }

    showNotification(message, type = 'success') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    updateCheckoutSummary(cartItems) {
        const summaryItems = document.getElementById('summaryItems');
        const summaryTotal = document.getElementById('summaryTotal');
        
        if (!summaryItems) return;
        
        let html = '';
        let total = 0;
        
        cartItems.forEach(item => {
            const itemTotal = (item.price || item.price_per_unit) * item.quantity;
            total += itemTotal;
            html += `
                <div class="summary-item">
                    <span>${item.name || item.product_name} x${item.quantity}</span>
                    <span>${itemTotal.toLocaleString('fr-FR')} FCFA</span>
                </div>
            `;
        });
        
        summaryItems.innerHTML = html;
        if (summaryTotal) {
            summaryTotal.textContent = total.toLocaleString('fr-FR') + ' FCFA';
        }
    }

    setupScrollEffects() {
        // Scroll to top button
        const scrollTopBtn = document.createElement('button');
        scrollTopBtn.className = 'scroll-top';
        scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.appendChild(scrollTopBtn);

        // Show/hide scroll to top button
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }

            // Header scroll effect
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);

        // Observe product cards and other elements
        document.querySelectorAll('.product-card, .category-card, .feature').forEach(el => {
            observer.observe(el);
        });
    }

    animateProducts() {
        const products = document.querySelectorAll('.product-card');
        products.forEach((product, index) => {
            product.style.animationDelay = `${index * 0.1}s`;
        });
    }

    handleContactForm(e) {
        e.preventDefault();
        const form = e.target;
        
        this.showNotification('Message envoyé avec succès ! Nous vous répondrons rapidement.', 'success');
        form.reset();
    }

    handleNewsletterForm(e) {
        e.preventDefault();
        const form = e.target;
        
        this.showNotification('Merci pour votre inscription à notre newsletter !', 'success');
        form.reset();
    }

    // Method to initialize the shop
    init() {
        this.loadProducts();
        this.setupEventListeners();
        this.updateCartCount();
        this.setupScrollEffects();
        
        // Add some CSS for product overlay
        const style = document.createElement('style');
        style.textContent = `
            .product-image-container {
                position: relative;
                overflow: hidden;
                border-radius: 12px 12px 0 0;
            }
            
            .product-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: all 0.3s ease;
            }
            
            .product-card:hover .product-overlay {
                opacity: 1;
            }
            
            .no-products {
                text-align: center;
                padding: 3rem;
                color: var(--text-light);
                font-size: 1.2rem;
                grid-column: 1 / -1;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize the shop when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.couraShop = new CouraShop();
});

// Global functions for HTML onclick events
function scrollToSection(sectionId) {
    window.couraShop?.scrollToSection(sectionId);
}