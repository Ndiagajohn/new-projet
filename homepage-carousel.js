/**
 * Afficher les produits par catégorie sur la page d'accueil
 */

document.addEventListener('DOMContentLoaded', () => {
    // Charger et afficher les produits depuis products.js
    if (window.products) {
        displayCategoryProducts();
    } else {
        console.error('Produits non chargés');
    }
});

function displayCategoryProducts() {
    const categories = ['vetements', 'cosmetiques', 'chaussures', 'accessoires'];
    
    categories.forEach(category => {
        // Filtrer les produits par catégorie
        const categoryProducts = window.products.filter(p => p.category === category);
        
        // Afficher max 4-5 articles par catégorie
        const productsToShow = categoryProducts.slice(0, 5);
        
        // Trouver le carousel pour cette catégorie
        const carousel = document.getElementById(`${category}-carousel`);
        if (!carousel) return;

        // Effacer le carousel
        carousel.innerHTML = '';
        
        // Ajouter les cartes produits
        productsToShow.forEach(product => {
            const productCard = createProductCard(product);
            carousel.appendChild(productCard);
        });
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            <div class="product-overlay">
                <button class="btn btn-primary add-to-cart" data-product-id="${product.id}">
                    <i class="fas fa-cart-plus"></i> Ajouter
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <span class="product-price">${window.productUtils?.formatPrice(product.price) || product.price + ' FCFA'}</span>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <span>4.5</span>
                </div>
            </div>
        </div>
    `;
    
    // Ajouter écouteur pour l'ajout au panier
    const addBtn = card.querySelector('.add-to-cart');
    addBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        addToCartFromCard(product);
    });
    
    return card;
}

function addToCartFromCard(product) {
    // Obtenir le panier du localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Chercher si le produit existe déjà
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Sauvegarder le panier
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Afficher une notification
    showNotification(`${product.name} ajouté au panier!`, 'success');
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}
