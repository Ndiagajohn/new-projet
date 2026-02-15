# 🛍️ COURA SHOP - Boutique de Mode en Ligne

Une boutique e-commerce moderne et élégante pour des produits de mode (vêtements, cosmétiques, chaussures et accessoires) avec un système de panier fonctionnel et des méthodes de paiement multiples.

## ✨ Fonctionnalités

### 🏠 Page d'Accueil
- **Hero section** avec arrière-plan animé et call-to-action
- **Navigation claire** avec menu responsive
- **Présentation des catégories** cliquables
- **Recherche de produits** en temps réel
- **Affichage des produits** avec filtres et tri
- **Système de panier** global avec notification

### 🛍️ Catégories de Produits
- **Vêtements** (10 articles) - Robes, chemises, pantalons, vestes, etc.
- **Cosmétiques** (10 articles) - Maquillage, soins, parfums
- **Chaussures** (10 articles) - Sport, élégant, casual
- **Accessoires** (10 articles) - Sacs, bijoux, montres, etc.

### 🛒 Système de Panier
- **Ajout/Réduction/Suppression** d'articles
- **Mise à jour en temps réel** du compteur
- **Calcul automatique** du total
- **Conservation des données** via localStorage
- **Notifications** d'ajout d'articles

### 💳 Méthodes de Paiement
- **PayPal** - Paiement en ligne sécurisé
- **Mastercard** - Carte bancaire
- **Orange Money** - Mobile money (Afrique)
- **Wave** - Mobile money (Afrique)

### 📱 Responsive Design
- **Mobile-first** approche
- **Breakpoints adaptatifs** pour tous les écrans
- **Menu hamburger** sur mobile
- **Grilles fluides** et flexibles

## 🗂️ Structure des Fichiers

```
coura-shop/
├── index.html                    # Page d'accueil principale
├── pages/
│   ├── vetements.html            # Page catégorie Vêtements
│   ├── cosmetiques.html          # Page catégorie Cosmétiques
│   ├── chaussures.html           # Page catégorie Chaussures
│   └── accessoires.html          # Page catégorie Accessoires
├── css/
│   ├── style.css                 # Styles principaux
│   └── responsive.css            # Styles responsives
├── js/
│   ├── products.js               # Catalogue de produits
│   ├── cart.js                   # Gestion du panier
│   └── main.js                   # Script principal
└── README.md                     # Documentation
```

## 🛍️ Catalogue de Produits

### Vêtements (10 articles)
- Robe d'été élégante - 25 000 FCFA
- Chemise habillée premium - 18 000 FCFA
- Jupe crayon sophistiquée - 22 000 FCFA
- T-shirt graphique artistique - 12 000 FCFA
- Veston blazer chic - 55 000 FCFA
- Pantalon cargo urbain - 28 000 FCFA
- Pull en laine doux - 35 000 FCFA
- Short sportif léger - 15 000 FCFA
- Robe de soirée glamour - 75 000 FCFA
- Combinaison jumpsuit - 42 000 FCFA

### Cosmétiques (10 articles)
- Rouge à lèvres mat premium - 8 000 FCFA
- Palette de fards professionnelle - 15 000 FCFA
- Crème hydratante aloe vera - 10 000 FCFA
- Eau de parfum florale - 35 000 FCFA
- Mascara volume intense - 12 000 FCFA
- Sérum anti-âge avancé - 25 000 FCFA
- Kit de pinceaux professionnels - 18 000 FCFA
- Baume à lèvres nourrissant - 5 000 FCFA
- Fond de teint fluide HD - 20 000 FCFA
- Démaquillant bi-phase - 9 000 FCFA

### Chaussures (10 articles)
- Sneakers urbaines premium - 30 000 FCFA
- Escarpins talons aiguilles - 28 000 FCFA
- Bottes en cuir véritable - 45 000 FCFA
- Sandales plates confort - 18 000 FCFA
- Mocassins cuir verni - 32 000 FCFA
- Baskets running sport - 38 000 FCFA
- Espadrilles traditionnelles - 12 000 FCFA
- Boots militaires - 40 000 FCFA
- Chaussons maison doux - 8 000 FCFA
- Derbies brodées - 35 000 FCFA

### Accessoires (10 articles)
- Sac à main cuir luxe - 40 000 FCFA
- Montre classique automatique - 35 000 FCFA
- Écharpe en soie imprimée - 15 000 FCFA
- Lunettes de soleil UV400 - 20 000 FCFA
- Ceinture cuir tressé - 18 000 FCFA
- Collier chaîne or - 45 000 FCFA
- Chapeau Fedora classique - 25 000 FCFA
- Portefeuille cuir premium - 22 000 FCFA
- Bracelet perles naturelles - 12 000 FCFA
- Cravate soie italienne - 16 000 FCFA

## 🎯 Navigation

### URLs Principales
- **Accueil** - `/index.html`
- **Vêtements** - `/pages/vetements.html`
- **Cosmétiques** - `/pages/cosmetiques.html`
- **Chaussures** - `/pages/chaussures.html`
- **Accessoires** - `/pages/accessoires.html`

### Navigation Inter-Pages
Les catégories sur la page d'accueil sont cliquables et redirigent vers les pages dédiées :
```html
<a href="pages/vetements.html" class="category-card-link">
    <div class="category-card" data-category="vetements">
        <!-- Contenu de la carte -->
    </div>
</a>
```

## 🛒 Utilisation du Panier

### Ajouter un produit
```javascript
// Via le système global
cart.addItem(product);

// Via le bouton HTML
<button class="add-to-cart" data-product-id="1">
    <i class="fas fa-cart-plus"></i> Ajouter
</button>
```

### Afficher le panier
```javascript
// Afficher les articles
cart.renderCart();

// Obtenir le total
const total = cart.getTotal();

// Obtenir le nombre d'articles
const count = cart.getItemCount();
```

## 🎨 Styles et Design

### Thème de Couleurs
- **Couleur primaire** : #ff6b6b (rouge corail)
- **Couleur secondaire** : #4ecdc4 (turquoise)
- **Couleur d'accent** : #ffe66d (jaune)
- **Texte sombre** : #2c3e50
- **Texte clair** : #7f8c8d

### Effets et Animations
- **Transitions fluides** sur tous les éléments interactifs
- **Effet de survol** sur les cartes produits
- **Animations d'entrée** pour les produits
- **Notifications toast** pour les actions utilisateur

## 📱 Responsive Breakpoints

- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

## 🔧 Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec variables CSS
- **JavaScript ES6+** - Classes et modules
- **Font Awesome** - Icônes
- **Google Fonts** - Typographie

## 🚀 Installation et Lancement

1. **Cloner ou télécharger** le projet
2. **Ouvrir** `index.html` dans un navigateur web
3. **Naviguer** entre les différentes pages
4. **Tester** le système de panier

## ⚠️ Notes Importantes

- Les produits sont stockés dans `window.products` (JavaScript global)
- Le panier utilise `localStorage` pour la persistance
- Les prix sont en **FCFA** (Franc CFA)
- Les images sont hébergées sur des CDN externes

## 🎨 Personnalisation

### Ajouter un nouveau produit
```javascript
// Dans js/products.js
window.products.push({
    id: 41,
    name: "Nouveau produit",
    description: "Description du produit",
    price: 25000,
    category: "accessoires",
    image: "https://url-image.com",
    badge: "Nouveau"
});
```

### Modifier les couleurs
```css
/* Dans css/style.css */
:root {
    --primary-color: #votre-couleur;
    --secondary-color: #votre-couleur;
}
```

## 📞 Support

Pour toute question ou problème :
- Vérifiez la console JavaScript pour les erreurs
- Assurez-vous que tous les fichiers sont bien liés
- Testez sur différents navigateurs et appareils

---

**COURA SHOP** - Votre style, notre passion ✨