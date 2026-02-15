// Gestion du panier
class Cart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartCount();
    }

    // Charger le panier depuis le localStorage
    loadCart() {
        const cart = localStorage.getItem('couraShopCart');
        return cart ? JSON.parse(cart) : [];
    }

    // Sauvegarder le panier dans le localStorage
    saveCart() {
        localStorage.setItem('couraShopCart', JSON.stringify(this.items));
    }

    // Ajouter un produit au panier
    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                ...product,
                quantity: quantity
            });
        }
        
        this.saveCart();
        this.updateCartCount();
        this.showToast(`${product.name} ajouté au panier!`);
    }

    // Retirer un produit du panier
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartCount();
        this.renderCart();
    }

    // Mettre à jour la quantité
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.renderCart();
            }
        }
    }

    // Obtenir le total du panier
    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    // Obtenir le nombre d'articles
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    // Mettre à jour le compteur du panier
    updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            cartCount.textContent = this.getItemCount();
            cartCount.style.display = this.getItemCount() > 0 ? 'flex' : 'none';
        }
    }

    // Afficher le panier
    renderCart() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        
        if (!cartItems || !cartTotal) return;

        if (this.items.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                    <p>Votre panier est vide</p>
                    <small>Commencez vos achats!</small>
                </div>
            `;
            cartTotal.textContent = '0 FCFA';
            return;
        }

        cartItems.innerHTML = this.items.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${window.productUtils.formatPrice(item.price)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="cart.removeItem(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');

        cartTotal.textContent = window.productUtils.formatPrice(this.getTotal());
    }

    // Vider le panier
    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartCount();
        this.renderCart();
    }

    // Afficher une notification toast
    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => document.body.removeChild(toast), 300);
        }, 3000);
    }
}

// Initialiser le panier
window.cart = new Cart();

// Gestion du bouton de panier
document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.getElementById('cartBtn');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    const overlay = document.getElementById('overlay');
    const checkoutBtn = document.getElementById('checkoutBtn');

    // Ouvrir le panier
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            cartSidebar.classList.add('active');
            overlay.classList.add('active');
            cart.renderCart();
        });
    }

    // Fermer le panier
    function closeCartSidebar() {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    if (closeCart) {
        closeCart.addEventListener('click', closeCartSidebar);
    }

    if (overlay) {
        overlay.addEventListener('click', closeCartSidebar);
    }

    // Paiement
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.items.length === 0) {
                cart.showToast('Votre panier est vide!');
                return;
            }
            
            closeCartSidebar();
            showPaymentModal();
        });
    }

    // Afficher le modal de paiement
    function showPaymentModal() {
        const modal = document.getElementById('paymentModal');
        const closeModal = document.getElementById('closeModal');
        const paymentMethods = document.querySelectorAll('.payment-method');

        modal.classList.add('active');

        if (closeModal) {
            closeModal.addEventListener('click', function() {
                modal.classList.remove('active');
            });
        }

        paymentMethods.forEach(method => {
            method.addEventListener('click', function() {
                const paymentMethod = this.dataset.method;
                modal.classList.remove('active');
                
                // Simuler le processus de paiement
                setTimeout(() => {
                    cart.showToast(`Paiement par ${paymentMethod} en cours de traitement...`);
                    
                    // Simuler une confirmation après 2 secondes
                    setTimeout(() => {
                        cart.clearCart();
                        cart.showToast('Commande confirmée! Merci pour votre achat!');
                    }, 2000);
                }, 500);
            });
        });
    }
});