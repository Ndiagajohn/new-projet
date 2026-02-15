// Script pour les pages de catégories dédiées

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    initializeCategoryPage();
});

// Initialiser la page de catégorie
function initializeCategoryPage() {
    setupNavigation();
    setupMobileMenu();
    setupSearch();
    setupCategoryFilters();
    loadCategoryProducts();
    setupScrollEffects();
    setupBackToTop();
    updatePageTitle();
}

// Mettre à jour le titre de la page selon la catégorie
function updatePageTitle() {
    const path = window.location.pathname;
    const pageName = path.split('/').pop().replace('.html', '');
    const titles = {
        'vetements': 'Collection Vêtements',
        'cosmetiques': 'Collection Cosmétiques', 
        'chaussures': 'Collection Chaussures',
        'accessoires': 'Collection Accessoires'
    };
    
    const pageTitle = titles[pageName] || 'Collection';
    
    // Mettre à jour le breadcrumb
    const breadcrumb = document.querySelector('.breadcrumb-current');
    if (breadcrumb) {
        breadcrumb.textContent = pageTitle;
    }
}

// Charger les produits de la catégorie actuelle
function loadCategoryProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const categoryFilter = document.getElementById('categoryFilter');
    const subcategoryFilter = document.getElementById('subcategoryFilter');
    const colorFilter = document.getElementById('colorFilter');
    const brandFilter = document.getElementById('brandFilter');
    const sortBy = document.getElementById('sortBy');
    const searchInput = document.getElementById('searchInput');
    
    if (!productsGrid) return;
    
    // Obtenir la catégorie actuelle depuis l'URL
    const currentCategory = getCurrentCategory();
    
    // Filtrer les produits par catégorie
    let filteredProducts = products.filter(product => product.category === currentCategory);
    
    // Appliquer les filtres supplémentaires
    if (subcategoryFilter && subcategoryFilter.value) {
        filteredProducts = filterBySubcategory(filteredProducts, subcategoryFilter.value);
    }
    
    if (colorFilter && colorFilter.value) {
        filteredProducts = filteredProducts.filter(product => product.color === colorFilter.value);
    }
    
    if (brandFilter && brandFilter.value) {
        filteredProducts = filteredProducts.filter(product => product.brand === brandFilter.value);
    }
    
    if (searchInput && searchInput.value) {
        const searchTerm = searchInput.value.toLowerCase();
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            (product.brand && product.brand.toLowerCase().includes(searchTerm))
        );
    }
    
    // Trier les produits
    if (sortBy && sortBy.value) {
        filteredProducts = window.productUtils.sortProducts(filteredProducts, sortBy.value);
    }
    
    // Afficher les produits
    displayCategoryProducts(filteredProducts);
}

// Obtenir la catégorie actuelle depuis l'URL
function getCurrentCategory() {
    const path = window.location.pathname;
    const pageName = path.split('/').pop().replace('.html', '');
    
    const categoryMap = {
        'vetements': 'vetements',
        'cosmetiques': 'cosmetiques',
        'chaussures': 'chaussures',
        'accessoires': 'accessoires'
    };
    
    return categoryMap[pageName] || 'vetements';
}

// Filtrer par sous-catégorie
function filterBySubcategory(products, subcategory) {
    // Mapping des sous-catégories vers les mots-clés dans les noms/descriptions
    const subcategoryKeywords = {
        'robes': ['robe', 'dress'],
        'chemises': ['chemise', 'shirt'],
        'pantalons': ['pantalon', 'jean', 'cargo', 'pants'],
        'vestes': ['veste', 'blazer', 'manteau', 'veston'],
        'tops': ['t-shirt', 'top', 'débardeur', 'pull', 'sweater'],
        'sport': ['sport', 'running', 'training', 'gym'],
        'maquillage': ['rouge', 'mascara', 'fond', 'palette', 'maquillage'],
        'soins': ['crème', 'sérum', 'soin', 'hydratant', 'lotion'],
        'parfums': ['parfum', 'fragrance', 'eau'],
        'outils': ['pinceaux', 'outils', 'accessoires'],
        'sportswear': ['sport', 'running', 'training', 'athletic'],
        'elegant': ['escarpin', 'elegant', 'dress', 'formal'],
        'casual': ['casual', 'décontracté', 'confort'],
        'bottes': ['botte', 'boot'],
        'sandales': ['sandale', 'tong', 'slipper'],
        'sacs': ['sac', 'bag', 'cartable'],
        'bijoux': ['bijou', 'collier', 'bracelet', 'bague'],
        'lunettes': ['lunette', 'soleil', 'sunglasses'],
        'montres': ['montre', 'watch', 'horloge'],
        'ceintures': ['ceinture', 'belt'],
        'chapeaux': ['chapeau', 'hat', 'casquette']
    };
    
    const keywords = subcategoryKeywords[subcategory] || [];
    
    return products.filter(product => {
        const searchText = (product.name + ' ' + product.description).toLowerCase();
        return keywords.some(keyword => searchText.includes(keyword.toLowerCase()));
    });
}

// Afficher les produits de la catégorie
function displayCategoryProducts(productsToShow) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) return;
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3>Aucun produit trouvé</h3>
                <p>Essayez de modifier vos critères de recherche ou de filtrage.</p>
                <button class="cta-button" onclick="resetAllFilters()" style="margin-top: 1rem;">Réinitialiser les filtres</button>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="product-card fade-in-up">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                ${product.color ? `<p class="product-color"><i class="fas fa-palette"></i> ${product.color}</p>` : ''}
                ${product.size ? `<p class="product-size"><i class="fas fa-ruler"></i> Taille: ${product.size}</p>` : ''}
                ${product.brand ? `<p class="product-brand"><i class="fas fa-tag"></i> ${product.brand}</p>` : ''}
                <div class="product-price">${window.productUtils.formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="cart.addItem(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                        <i class="fas fa-cart-plus"></i> Ajouter
                    </button>
                    <button class="view-details-btn" onclick="showProductDetails(${product.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Ajouter l'animation d'entrée
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in-up');
        }, index * 100);
    });
}

// Configuration des filtres de catégorie
function setupCategoryFilters() {
    const subcategoryFilter = document.getElementById('subcategoryFilter');
    const colorFilter = document.getElementById('colorFilter');
    const brandFilter = document.getElementById('brandFilter');
    const sortBy = document.getElementById('sortBy');
    const searchInput = document.getElementById('searchInput');
    
    if (subcategoryFilter) {
        subcategoryFilter.addEventListener('change', loadCategoryProducts);
    }
    
    if (colorFilter) {
        colorFilter.addEventListener('change', loadCategoryProducts);
    }
    
    if (brandFilter) {
        brandFilter.addEventListener('change', loadCategoryProducts);
    }
    
    if (sortBy) {
        sortBy.addEventListener('change', loadCategoryProducts);
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(loadCategoryProducts, 300));
    }
    
    // Remplir les filtres de marques selon la catégorie
    populateBrandFilter();
}

// Remplir le filtre des marques
function populateBrandFilter() {
    const brandFilter = document.getElementById('brandFilter');
    const currentCategory = getCurrentCategory();
    
    if (!brandFilter) return;
    
    // Obtenir les marques uniques de la catégorie
    const brands = [...new Set(products
        .filter(product => product.category === currentCategory)
        .map(product => product.brand)
        .filter(brand => brand)
    )].sort();
    
    // Vider le select et ajouter les options
    brandFilter.innerHTML = '<option value="">Toutes les marques</option>';
    brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
}

// Réinitialiser tous les filtres
function resetAllFilters() {
    const subcategoryFilter = document.getElementById('subcategoryFilter');
    const colorFilter = document.getElementById('colorFilter');
    const brandFilter = document.getElementById('brandFilter');
    const searchInput = document.getElementById('searchInput');
    
    if (subcategoryFilter) subcategoryFilter.value = '';
    if (colorFilter) colorFilter.value = '';
    if (brandFilter) brandFilter.value = '';
    if (searchInput) searchInput.value = '';
    
    loadCategoryProducts();
}

// Navigation fluide (même fonction que main.js)
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Si c'est un lien vers une autre page
            if (targetId.includes('.html')) {
                window.location.href = this.getAttribute('href');
                return;
            }
            
            // Sinon, navigation dans la même page
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Menu mobile
function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
        
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });
    }
}

// Recherche
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    
    function performSearch() {
        if (searchInput) {
            loadCategoryProducts();
        }
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
}

// Effets de défilement
function setupScrollEffects() {
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
    
    const sections = document.querySelectorAll('.product-card, .subcategory-card');
    sections.forEach(section => observer.observe(section));
}

// Bouton retour en haut
function setupBackToTop() {
    const backToTop = document.createElement('div');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Fonction debounce
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Afficher les détails d'un produit
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>${product.name}</h3>
                <button class="close-modal" onclick="this.closest('.modal').classList.remove('active'); document.body.removeChild(this.closest('.modal'));">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div style="padding: 2rem;">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 1.5rem;">
                <p style="margin-bottom: 1rem; line-height: 1.6;">${product.description}</p>
                ${product.color ? `<p style="margin-bottom: 0.5rem;"><strong>Couleur:</strong> ${product.color}</p>` : ''}
                ${product.size ? `<p style="margin-bottom: 0.5rem;"><strong>Taille:</strong> ${product.size}</p>` : ''}
                ${product.brand ? `<p style="margin-bottom: 1rem;"><strong>Marque:</strong> ${product.brand}</p>` : ''}
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--primary-color); margin: 1.5rem 0;">
                    ${window.productUtils.formatPrice(product.price)}
                </div>
                <button class="add-to-cart-btn" style="width: 100%; padding: 1rem; margin-bottom: 1rem;" onclick="cart.addItem(${JSON.stringify(product).replace(/"/g, '&quot;')}); this.closest('.modal').classList.remove('active'); setTimeout(() => document.body.removeChild(this.closest('.modal')), 300);">
                    <i class="fas fa-cart-plus"></i> Ajouter au panier
                </button>
                <button class="view-details-btn" style="width: 100%; padding: 1rem;" onclick="this.closest('.modal').classList.remove('active'); setTimeout(() => document.body.removeChild(this.closest('.modal')), 300);">
                    <i class="fas fa-times"></i> Fermer
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Fermer le modal en cliquant sur l'overlay
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => document.body.removeChild(modal), 300);
        }
    });
}

// Animation du header au défilement
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.pageYOffset > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0,0,0,0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});