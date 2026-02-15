/**
 * COURA SHOP - Cart API Client
 * Synchronise le panier avec le backend pour les utilisateurs authentifiés
 */

class CartClient {
    constructor() {
        this.baseURL = 'https://localhost:8080/api/cart';
        this.localStorageKey = 'cart';
        this.cart = [];
        this.loadCart();
    }

    /**
     * Charger le panier depuis localStorage
     */
    loadCart() {
        try {
            const saved = localStorage.getItem(this.localStorageKey);
            this.cart = saved ? JSON.parse(saved) : [];
        } catch (error) {
            console.error('Erreur chargement panier:', error);
            this.cart = [];
        }
    }

    /**
     * Sauvegarder le panier dans localStorage
     */
    saveCart() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cart));
    }

    /**
     * Récupérer le panier depuis le backend (authentifié)
     */
    async fetchCartFromBackend() {
        if (!window.authClient || !window.authClient.isAuthenticated()) {
            return {
                success: false,
                message: 'Authentification requise'
            };
        }

        try {
            const response = await fetch(this.baseURL, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${window.authClient.getToken()}`
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Erreur');
            }

            this.cart = data.items;
            this.saveCart();

            return {
                success: true,
                items: data.items,
                total: data.total,
                count: data.count
            };
        } catch (error) {
            console.error('Erreur fetch panier:', error);
            return {
                success: false,
                message: error.message || 'Erreur'
            };
        }
    }

    /**
     * Ajouter un article au panier
     */
    async addItem(product) {
        // Ajouter localement
        const existing = this.cart.find(item => item.product_id === product.id);
        
        if (existing) {
            existing.quantity += (product.quantity || 1);
        } else {
            this.cart.push({
                id: `local_${Date.now()}`,
                product_id: product.id,
                product_name: product.name,
                product_category: product.category,
                product_image: product.image,
                quantity: product.quantity || 1,
                price_per_unit: product.price,
                total_price: product.price * (product.quantity || 1)
            });
        }

        this.saveCart();

        // Synchroniser avec le backend si authentifié
        if (window.authClient && window.authClient.isAuthenticated()) {
            try {
                const response = await fetch(this.baseURL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${window.authClient.getToken()}`
                    },
                    body: JSON.stringify({
                        product_id: product.id,
                        product_name: product.name,
                        product_category: product.category,
                        product_image: product.image,
                        quantity: product.quantity || 1,
                        price_per_unit: product.price
                    })
                });

                const data = await response.json();

                if (!response.ok) {
                    console.warn('Erreur sync panier:', data.message);
                }
            } catch (error) {
                console.error('Erreur sync panier:', error);
            }
        }

        return {
            success: true,
            message: `${product.name} ajouté au panier`,
            cart: this.cart
        };
    }

    /**
     * Mettre à jour la quantité
     */
    async updateQuantity(itemId, quantity) {
        // Mettre à jour localement
        const item = this.cart.find(i => i.id === itemId);
        if (item) {
            if (quantity <= 0) {
                this.cart = this.cart.filter(i => i.id !== itemId);
            } else {
                item.quantity = quantity;
            }
            this.saveCart();
        }

        // Synchroniser avec le backend si authentifié
        if (window.authClient && window.authClient.isAuthenticated()) {
            try {
                const response = await fetch(`${this.baseURL}/${itemId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${window.authClient.getToken()}`
                    },
                    body: JSON.stringify({ quantity })
                });

                const data = await response.json();

                if (!response.ok) {
                    console.warn('Erreur mise à jour quantité:', data.message);
                }
            } catch (error) {
                console.error('Erreur mise à jour quantité:', error);
            }
        }

        return {
            success: true,
            message: 'Quantité mise à jour',
            cart: this.cart
        };
    }

    /**
     * Supprimer un article
     */
    async removeItem(itemId) {
        // Supprimer localement
        this.cart = this.cart.filter(i => i.id !== itemId);
        this.saveCart();

        // Synchroniser avec le backend si authentifié
        if (window.authClient && window.authClient.isAuthenticated()) {
            try {
                const response = await fetch(`${this.baseURL}/${itemId}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${window.authClient.getToken()}`
                    }
                });

                const data = await response.json();

                if (!response.ok) {
                    console.warn('Erreur suppression:', data.message);
                }
            } catch (error) {
                console.error('Erreur suppression:', error);
            }
        }

        return {
            success: true,
            message: 'Article supprimé',
            cart: this.cart
        };
    }

    /**
     * Vider le panier
     */
    async clearCart() {
        // Vider localement
        this.cart = [];
        this.saveCart();

        // Synchroniser avec le backend si authentifié
        if (window.authClient && window.authClient.isAuthenticated()) {
            try {
                const response = await fetch(this.baseURL, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${window.authClient.getToken()}`
                    }
                });

                const data = await response.json();

                if (!response.ok) {
                    console.warn('Erreur vidage panier:', data.message);
                }
            } catch (error) {
                console.error('Erreur vidage panier:', error);
            }
        }

        return {
            success: true,
            message: 'Panier vidé',
            cart: []
        };
    }

    /**
     * Récupérer le panier
     */
    getCart() {
        return this.cart;
    }

    /**
     * Obtenir le nombre total d'articles
     */
    getCartCount() {
        return this.cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    /**
     * Obtenir le total du panier
     */
    getCartTotal() {
        return this.cart.reduce((sum, item) => sum + (item.quantity * item.price_per_unit), 0);
    }

    /**
     * Vérifier si le panier est vide
     */
    isEmpty() {
        return this.cart.length === 0;
    }
}

// Initialiser le client global
window.cartClient = new CartClient();

// Synchroniser le panier au login
document.addEventListener('DOMContentLoaded', () => {
    if (window.authClient && window.authClient.isAuthenticated()) {
        window.cartClient.fetchCartFromBackend().then(result => {
            if (result.success) {
                console.log('✅ Panier synchronisé depuis le backend');
            }
        });
    }
});
