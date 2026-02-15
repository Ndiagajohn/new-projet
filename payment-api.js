/**
 * COURA SHOP - Payment API Client
 * Gère la communication avec le backend pour les paiements et commandes
 */

class PaymentAPI {
    constructor() {
        this.baseURL = 'https://localhost:8080/api';
    }

    /**
     * Vérifier la connexion au backend
     */
    async checkHealth() {
        try {
            const response = await fetch(`${this.baseURL}/health`, {
                method: 'GET'
            });
            return await response.json();
        } catch (error) {
            console.error('Erreur santé backend:', error);
            return { status: 'error', message: error.message };
        }
    }

    /**
     * Créer une commande
     */
    async createOrder(orderData) {
        try {
            const headers = {
                'Content-Type': 'application/json'
            };

            // Ajouter le token s'il est disponible
            if (window.authClient && window.authClient.getToken()) {
                headers['Authorization'] = `Bearer ${window.authClient.getToken()}`;
            }

            const response = await fetch(`${this.baseURL}/orders`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(orderData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Erreur création commande');
            }

            return {
                success: true,
                order: data.order
            };
        } catch (error) {
            console.error('Erreur création commande:', error);
            return {
                success: false,
                message: error.message || 'Erreur'
            };
        }
    }

    /**
     * Récupérer une commande
     */
    async getOrder(orderId) {
        try {
            const headers = {};

            // Ajouter le token s'il est disponible
            if (window.authClient && window.authClient.getToken()) {
                headers['Authorization'] = `Bearer ${window.authClient.getToken()}`;
            }

            const response = await fetch(`${this.baseURL}/orders/${orderId}`, {
                method: 'GET',
                headers: headers
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Commande non trouvée');
            }

            return {
                success: true,
                order: data.order
            };
        } catch (error) {
            console.error('Erreur récupération commande:', error);
            return {
                success: false,
                message: error.message || 'Erreur'
            };
        }
    }

    /**
     * Récupérer l'historique des commandes de l'utilisateur
     */
    async getUserOrders() {
        if (!window.authClient || !window.authClient.getToken()) {
            return {
                success: false,
                message: 'Authentification requise'
            };
        }

        try {
            const userId = window.authClient.getUserId();
            const response = await fetch(`${this.baseURL}/users/${userId}/orders`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${window.authClient.getToken()}`
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Erreur');
            }

            return {
                success: true,
                orders: data.orders
            };
        } catch (error) {
            console.error('Erreur récupération historique:', error);
            return {
                success: false,
                message: error.message || 'Erreur'
            };
        }
    }

    /**
     * Initier un paiement Wave Money
     */
    async initiateWavePayment(paymentData) {
        try {
            const headers = {
                'Content-Type': 'application/json'
            };

            // Ajouter le token s'il est disponible
            if (window.authClient && window.authClient.getToken()) {
                headers['Authorization'] = `Bearer ${window.authClient.getToken()}`;
            }

            const response = await fetch(`${this.baseURL}/payment/wave/initiate`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(paymentData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Erreur paiement');
            }

            return {
                success: true,
                payment: data.payment,
                order: data.order
            };
        } catch (error) {
            console.error('Erreur paiement Wave:', error);
            return {
                success: false,
                message: error.message || 'Erreur'
            };
        }
    }

    /**
     * Vérifier le statut d'un paiement
     */
    async verifyPayment(orderId) {
        try {
            const headers = {};

            // Ajouter le token s'il est disponible
            if (window.authClient && window.authClient.getToken()) {
                headers['Authorization'] = `Bearer ${window.authClient.getToken()}`;
            }

            const response = await fetch(`${this.baseURL}/payment/verify/${orderId}`, {
                method: 'GET',
                headers: headers
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Erreur');
            }

            return {
                success: true,
                orderStatus: data.order_status,
                payment: data.payment
            };
        } catch (error) {
            console.error('Erreur vérification paiement:', error);
            return {
                success: false,
                message: error.message || 'Erreur'
            };
        }
    }

    /**
     * Paiement test (développement)
     */
    async testPayment(orderId, amount = 1000) {
        try {
            const headers = {
                'Content-Type': 'application/json'
            };

            if (window.authClient && window.authClient.getToken()) {
                headers['Authorization'] = `Bearer ${window.authClient.getToken()}`;
            }

            const response = await fetch(`${this.baseURL}/payment/test`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ order_id: orderId, amount: amount })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Erreur test paiement');
            }

            return {
                success: true,
                message: data.message,
                order: data.order
            };
        } catch (error) {
            console.error('Erreur test paiement:', error);
            return {
                success: false,
                message: error.message || 'Erreur'
            };
        }
    }
}

// Initialiser le client global
window.paymentAPI = new PaymentAPI();

// Vérifier la connexion au démarrage
document.addEventListener('DOMContentLoaded', async () => {
    const health = await window.paymentAPI.checkHealth();
    if (health.status === 'online') {
        console.log('✅ Backend connecté');
    } else {
        console.warn('⚠️ Backend indisponible');
    }
});
