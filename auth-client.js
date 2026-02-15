/**
 * COURA SHOP - Authentication API Client
 * Gère la connexion, inscription et gestion des tokens
 */

class AuthClient {
    constructor() {
        this.baseURL = 'https://localhost:8080/api/auth';
        this.tokenKey = 'coura_auth_token';
        this.userKey = 'coura_user_data';
        this.token = localStorage.getItem(this.tokenKey);
        this.user = JSON.parse(localStorage.getItem(this.userKey) || '{}');
    }

    /**
     * S'inscrire (créer un compte)
     */
    async register(userData) {
        try {
            const response = await fetch(`${this.baseURL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Erreur d\'inscription');
            }

            // Sauvegarder le token et l'utilisateur
            this.setToken(data.token);
            this.setUser(data.user);

            return {
                success: true,
                message: 'Inscription réussie',
                user: data.user,
                token: data.token
            };
        } catch (error) {
            console.error('Erreur inscription:', error);
            return {
                success: false,
                message: error.message || 'Erreur lors de l\'inscription'
            };
        }
    }

    /**
     * Se connecter
     */
    async login(email, password) {
        try {
            const response = await fetch(`${this.baseURL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Erreur de connexion');
            }

            // Sauvegarder le token et l'utilisateur
            this.setToken(data.token);
            this.setUser(data.user);

            return {
                success: true,
                message: 'Connexion réussie',
                user: data.user,
                token: data.token
            };
        } catch (error) {
            console.error('Erreur connexion:', error);
            return {
                success: false,
                message: error.message || 'Erreur de connexion'
            };
        }
    }

    /**
     * Se déconnecter
     */
    logout() {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.userKey);
        this.token = null;
        this.user = null;
        console.log('✅ Déconnexion réussie');
    }

    /**
     * Récupérer le profil de l'utilisateur connecté
     */
    async getCurrentUser() {
        if (!this.token) {
            return {
                success: false,
                message: 'Pas de token d\'authentification'
            };
        }

        try {
            const response = await fetch(`${this.baseURL}/me`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Erreur');
            }

            this.setUser(data.user);
            return {
                success: true,
                user: data.user
            };
        } catch (error) {
            console.error('Erreur récupération profil:', error);
            // Si le token est invalide, déconnecter
            this.logout();
            return {
                success: false,
                message: error.message || 'Erreur'
            };
        }
    }

    /**
     * Vérifier si l'utilisateur est connecté
     */
    isAuthenticated() {
        return !!this.token;
    }

    /**
     * Sauvegarder le token
     */
    setToken(token) {
        this.token = token;
        localStorage.setItem(this.tokenKey, token);
    }

    /**
     * Sauvegarder les données utilisateur
     */
    setUser(user) {
        this.user = user;
        localStorage.setItem(this.userKey, JSON.stringify(user));
    }

    /**
     * Récupérer le token
     */
    getToken() {
        return this.token;
    }

    /**
     * Récupérer l'utilisateur
     */
    getUser() {
        return this.user;
    }

    /**
     * Récupérer l'ID d'utilisateur
     */
    getUserId() {
        return this.user ? this.user.id : null;
    }

    /**
     * Récupérer l'email de l'utilisateur
     */
    getUserEmail() {
        return this.user ? this.user.email : null;
    }
}

// Initialiser le client global
window.authClient = new AuthClient();

// Vérifier si l'utilisateur est déjà connecté au chargement
document.addEventListener('DOMContentLoaded', () => {
    if (window.authClient.isAuthenticated()) {
        console.log('✅ Utilisateur connecté:', window.authClient.getUser().name);
    } else {
        console.log('Not authenticated');
    }
});
