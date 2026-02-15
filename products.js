// Catalogue étendu de produits COURA SHOP
window.products = [
    // VÊTEMENTS (10 articles)
    {
        id: 1,
        name: "Robe d'été élégante",
        description: "Robe légère et fluide parfaite pour l'été, avec des motifs floraux délicats",
        price: 15000,
        category: "vetements",
        image: "https://i.pinimg.com/1200x/c9/bb/a9/c9bba9ff287d25719f9b0f54064f1f41.jpg",
        badge: "Nouveau",
        color: "Blanc",
        size: "L - XL"
    },
    {
        id: 2,
        name: "Chemise habillée premium",
        description: "Chemise en coton égyptien pour homme, coupe slim fit idéale pour le bureau",
        price: 12000,
        category: "vetements",
        image: "https://i.pinimg.com/736x/5e/b7/f3/5eb7f343d054b60ba1ca2c946e814e52.jpg",
        badge: "Populaire",
        color: "Bleu ciel",
        size: "S-M-L-XL"
    },
    {
        id: 3,
        name: "Jupe crayon sophistiquée",
        description: "Jupe tailleur coupe droite au genou, parfaite pour le bureau et les occasions formelles",
        price: 8000,
        category: "vetements",
        image: "https://i.pinimg.com/736x/04/c4/63/04c4639ad7d5718dc0d21b3cbb864550.jpg",
        badge: null,
        color: "Noir",
        size: "M-L-XL"
    },
    {
        id: 4,
        name: "T-shirt graphique artistique",
        description: "T-shirt moderne avec impression artistique unique et design contemporain",
        price: 5000,
        category: "vetements",
        image: "https://i.pinimg.com/1200x/20/90/d8/2090d87fe2d17855b29f69a74f4107f7.jpg",
        badge: "Solde",
        color: "Noir",
        size: "S-M-L-XL"
    },
    {
        id: 5,
        name: "Veston blazer chic",
        description: "Blazer ajusté en laine, parfait pour les occasions professionnelles et élégantes",
        price: 15000,
        category: "vetements",
        image: "https://i.pinimg.com/1200x/f4/84/02/f48402d03368406b1b1b8c8f58c471e6.jpg",
        badge: "Luxe",
        color: "Noir",
        size: "M-L-XL"
    },
    {
        id: 6,
        name: "Pantalon cargo urbain",
        description: "Pantalon cargo moderne avec multiples poches, confortable et tendance",
        price: 10000,
        category: "vetements",
        image: "https://i.pinimg.com/1200x/bb/95/cf/bb95cf78d360ea0a96ab5b011e4b6d95.jpg",
        badge: "Tendance",
        color: "Kaki",
        size: "S-M-L-XL"
    },
    {
        id: 7,
        name: "Pull en laine doux",
        description: "Pull-over en laine mérinos, chaud et doux pour l'hiver",
        price: 13000,
        category: "vetements",
        image: "https://i.pinimg.com/1200x/9e/89/66/9e896683f6c1111f30da633e3946ff48.jpg",
        badge: null,
        color: "Marron",
        size: "S-M-L-XL"
    },
    {
        id: 8,
        name: "Short sportif léger",
        description: "Short de sport léger et respirant, idéal pour les activités physiques",
        price: 4000,
        category: "vetements",
        image: "https://i.pinimg.com/1200x/ac/e0/df/ace0dfabb7bd9381ca49df963c4870da.jpg",
        badge: "Sport",
        color: "Noir",
        size: "S-M-L-XL"
    },
    {
        id: 9,
        name: "Robe de soirée glamour",
        description: "Robe longue élégante pour soirées et événements spéciaux, avec détails en dentelle",
        price: 25000,
        category: "vetements",
        image: "https://i.pinimg.com/736x/f2/dd/e7/f2dde7692a7bb8acae37fce8f99857bc.jpg",
        badge: "Élégant",
        color: "Rouge",
        size: "L-XL"
    },
    {
        id: 10,
        name: "Combinaison jumpsuit",
        description: "Combinaison une pièce moderne et confortable, parfaite pour un look décontracté chic",
        price: 12000,
        category: "vetements",
        image: "https://i.pinimg.com/1200x/16/b8/a8/16b8a8a4ba9f9d35ff9ab3559ea5bbff.jpg",
        badge: "Décontracté",
        color: "Navy",
        size: "L-XL"
    },

    // COSMÉTIQUES (10 articles)
    {
        id: 11,
        name: "Rouge à lèvres mat premium",
        description: "Rouge à lèvres longue tenue 12h, disponible en teintes vibrantes",
        price: 5000,
        category: "cosmetiques",
        image: "https://i.pinimg.com/736x/af/b7/3e/afb73e18ee61ce07b7e18f2de4aeb85b.jpg",
        badge: "Nouveau",
        brand: "Luxe Beauty"
    },
    {
        id: 12,
        name: "Palette de fards professionnelle",
        description: "Palette complète avec 16 teintes mates et nacrées pour maquillage artistique",
        price: 15000,
        category: "cosmetiques",
        image: "https://i.pinimg.com/1200x/3e/b6/db/3eb6db9cfb585988390c60c59f703820.jpg",
        badge: "Best-seller",
        brand: "Pro Makeup"
    },
    {
        id: 13,
        name: "Crème hydratante aloe vera",
        description: "Crème nourrissante pour peau sèche, enrichie à l'aloe vera bio",
        price: 10000,
        category: "cosmetiques",
        image: "https://i.pinimg.com/1200x/c8/9c/21/c89c21503ddfb51c3a7f1465dba1f092.jpg",
        badge: null,
        brand: "Nature Care"
    },
    {
        id: 14,
        name: "Eau de parfum florale",
        description: "Parfum féminin avec notes florales de rose, jasmin et vanille",
        price: 17000,
        category: "cosmetiques",
        image: "https://i.pinimg.com/1200x/4b/6c/a0/4b6ca06578e8db0cf364024b0cb31f3a.jpg",
        badge: "Exclusif",
        brand: "Maïssa Paris Jasmin Mysterieux"
    },
    {
        id: 15,
        name: "Mascara volume intense",
        description: "Mascara noir avec brosse incurvée pour un volume spectaculaire",
        price: 10000,
        category: "cosmetiques",
        image: "https://i.pinimg.com/736x/c3/8e/4f/c38e4f61c417b38aef334093bf975593.jpg",
        badge: "Populaire",
        brand: "Lash Luxe"
    },
    {
        id: 16,
        name: "Sérum anti-âge avancé",
        description: "Sérum concentré avec vitamine C et acide hyaluronique pour peau jeune",
        price: 15000,
        category: "cosmetiques",
        image: "https://i.pinimg.com/1200x/b3/ea/4f/b3ea4fd025c854255ea5862d11479f08.jpg",
        badge: "Premium",
        brand: "Youth Lab"
    },
    {
        id: 17,
        name: "Kit de pinceaux professionnels",
        description: "Ensemble de 10 pinceaux de maquillage de haute qualité avec manches ergonomiques",
        price: 12000,
        category: "cosmetiques",
        image: "https://i.pinimg.com/1200x/42/e0/26/42e026e8a4191b8ec9b339bf9a59c36e.jpg",
        badge: "Pro",
        brand: "Artist Tools"
    },
    {
        id: 18,
        name: "Baume à lèvres nourrissant",
        description: "Baume hydratant à la menthe poivrée pour des lèvres douces toute la journée",
        price: 5000,
        category: "cosmetiques",
        image: "https://i.pinimg.com/736x/c6/2b/2d/c62b2d2b2f285c0b42b73418ed4abf41.jpg",
        badge: null,
        brand: "Lip Care"
    },
    {
        id: 19,
        name: "Fond de teint fluide HD",
        description: "Fond de teint haute définition avec couvrance modulable pour un fini parfait",
        price: 8000,
        category: "cosmetiques",
        image: "https://i.pinimg.com/1200x/f2/a0/b7/f2a0b702e917853b8fc8f951dcfc29cd.jpg",
        badge: "HD",
        brand: "HD Beauty"
    },
    {
        id: 20,
        name: "Démaquillant bi-phase",
        description: "Démaquillant efficace pour peau sensible, enlève même le maquillage waterproof",
        price: 7000,
        category: "cosmetiques",
        image: "https://i.pinimg.com/736x/a0/aa/6b/a0aa6b7dd4e4bf3c0ba8f7c5f7ae9a18.jpg",
        badge: "Doux",
        brand: "Gentle Clean"
    },

    // CHAUSSURES (10 articles)
    {
        id: 21,
        name: "KIKO KOSTADINOV x GEL-KIRIL III",
        description: "La sneaker GEL-KIRIL™ III fait évoluer les influences de la sneaker GEL-KIRIL™ et combine divers détails des chaussures de travail ASICS",
        price: 25000,
        category: "chaussures",
        image:"https://www.asics-france.com/wp-content/uploads/2025/10/kiko-kostadinov-x-gel-kiril-iii-3.webp",
        badge: "Mode",
        brand: "Urban Step"
    },
    {
        id: 22,
        name: "GEL-QUANTUM 180 VIII",
        description: "S’inspire des chaussures de course archivées des années 2000 et combine ces influences avec des outils techniques.",
        price: 15000,
        category: "chaussures",
        image: "https://www.asics-france.com/wp-content/uploads/2025/10/gel-quantum-180-viii-3.webp",
        badge: "Mode",
        brand: "Street Style"
    },
    {
        id: 23,
        name: "Asics Gel-Kayano 14",
        description: "Bottes hautes en cuir premium avec fermeture éclair latérale",
        price: 25000,
        category: "chaussures",
        image: "https://www.asics-france.com/wp-content/uploads/2025/10/gel-kayano-14-1-3.webp",
        badge: "Mode",
        brand: "Leather Craft"
    },
    {
        id: 24,
        name: "BOUCLIER GEL-VENTURE 6",
        description: "Sandales ergonomiques avec semelle en mousse memory foam",
        price: 18000,
        category: "chaussures",
        image: "https://www.asics-france.com/wp-content/uploads/2025/10/bouclier-gel-venture-6-2-5.webp?w=400",
        badge: "Mode",
        brand: "Comfort Step"
    },
    {
        id: 25,
        name: "DIME x GEL-QUANTUM 360 VIII GTX",
        description: "Mocassins classiques en cuir verni, parfaits pour le bureau",
        price: 20000,
        category: "chaussures",
        image: "https://www.asics-france.com/wp-content/uploads/2025/10/dime-x-gel-quantum-360-viii-gtx-1-1.webp",
        badge: "Mode",
        brand: "Leather Style"
    },
    {
        id: 26,
        name: "Asics GEL-1130",
        description: "Chaussures de running avec technologie d'amorti et respirabilité",
        price: 15000,
        category: "chaussures",
        image: "https://www.asics-france.com/wp-content/uploads/2025/10/gel-1130-7-3.webp",
        badge: "Sport",
        brand: "Run Pro"
    },
    {
        id: 27,
        name: "Asics GEL-K1011",
        description: "Chaussures de running avec technologie d'amorti et respirabilité",
        price: 15000,
        category: "chaussures",
        image: "https://www.asics-france.com/wp-content/uploads/2025/10/gel-k1011-3-3.webp",
        badge: "Sport",
        brand: "Run Style"
    },
    {
        id: 28,
        name: "Asics GEL-KAYANO 20",
        description: "Reconnue pour ses capacités d’amorti structurelles lors de courses sur de longues distances.",
        price: 35000,
        category: "chaussures",
        image: "https://www.asics-france.com/wp-content/uploads/2025/10/gel-kayano-20-3-3.webp",
        badge: "Sportif",
        brand: "Tough Boot"
    },
    {
        id: 29,
        name: "Asics GEL-LYTE III OG",
        description: "La sneaker GEL-LYTE® III OG refait surface une fois de plus avec sa forme et sa construction originales qu’elle présentait au début des années 1990",
        price: 18000,
        category: "chaussures",
        image: "https://www.asics-france.com/wp-content/uploads/2025/10/gel-lyte-iii-og-3-4.webp",
        badge: "Confort",
        brand: "Home Comfort"
    },
    {
        id: 30,
        name: "GEL-NIMBUS 10.1",
        description: "Derbies classiques avec broderies détaillées pour un look sophistiqué",
        price: 25000,
        category: "chaussures",
        image: "https://www.asics-france.com/wp-content/uploads/2025/10/gel-nimbus-10-1-3-1.webp",
        badge: "Mode",
        brand: "Art Craft"
    },

    // ACCESSOIRES (10 articles)
    {
        id: 31,
        name: "Sac à main LV Christopher MM",
        description: "Sac élégant en cuir véritable avec compartiments multiples et fermeture dorée",
        price: 30000,
        category: "accessoires",
        image: "https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-christopher-mm-x-the-darjeeling-limited--N40864_PM2_Front%20view.png?wid=730&hei=730",
        badge: "Luxe",
        brand: "Luxe Bag"
    },
    {
        id: 32,
        name: "Montre Festina Squelette Blanc",
        description: "Montre mécanique avec bracelet en acier inoxydable et boîtier doré",
        price: 35000,
        category: "accessoires",
        image: "https://www.histoiredor.com/dw/image/v2/BCQS_PRD/on/demandware.static/-/Sites-THOM_CATALOG/default/dwa8ac7761/images/70580088425-master_HO.jpg?sw=1024&sh=1024",
        badge: "Classique",
        brand: "Time Keeper"
    },
    {
        id: 33,
        name: "Chapeau Fedora Vérone Feutre Laine Rouille - Traclet",
        description: "Un chapeau fedora 100% feutre laine de la marque Traclet . Couvre-chef qui se porte en hiver pour un style élégant et raffiné.",
        price: 25000,
        category: "accessoires",
        image: "https://media2.chapellerie-traclet.com/92521-large_default/chapeau-fedora-verone-feutre-laine-rouille-traclet.jpg",
        badge: null,
        brand: "Classic Style"
    },
    {
        id: 34,
        name: "Chapeau Fedora Nelles Feutre Noir - Bailey",
        description: "Un magnifique chapeau forme fedora dans un coloris noir pouvant s'accorder avec de nombreuses tenues. ",
        price: 20000,
        category: "accessoires",
        image: "https://media2.chapellerie-traclet.com/81184-large_default/chapeau-fedora-nelles-feutre-noir-bailey.jpg",
        badge: "Luxe",
        brand: "Luxe"
    },
    {
        id: 35,
        name: "Chapeau Fedora Nelles Feutre Camel - Bailey",
        description: "Un magnifique chapeau forme fedora/Traveller dans un coloris camel pouvant s'accorder avec de nombreuses tenues.",
        price: 25000,
        category: "accessoires",
        image: "https://media3.chapellerie-traclet.com/62750-thickbox_default/chapeau-fedora-nelles-feutre-camel-bailey.jpg",
        badge: "Luxe",
        brand: "Luxe"
    },
    {
        id: 36,
        name: "Chapeau Haut De Forme HAVISHAM",
        description: "La maison Head'N'Home vous propose un haut de forme en velours et cuir, le Havisham est la reine du balle.",
        price: 25000,
        category: "accessoires",
        image: "https://media1.chapellerie-traclet.com/50644-thickbox_default/chapeau-haut-de-forme-havisham.jpg",
        badge: "élégant",
        brand: "Modern Classic"
    },
    {
        id: 37,
        name: "Chapeau Panama Montecristi Fedora pour Homme",
        description: "Chapeau Fedora en feutre avec ruban de satin, style rétro sophistiqué",
        price: 20000,
        category: "accessoires",
        image: "https://media2.chapellerie-traclet.com/61091-large_default/chapeau-montecristi-extra-fino-fedora-maruja-panama-naturel-traclet.jpg",
        badge: "Rétro",
        brand: "Retro Style"
    },
    {
        id: 38,
        name: "Parapluie Mini Ultra Slim Noir - Isotoner",
        description: "Ce parapluie mini noir avec ouverture manuelle est idéal à glisser dans une poche ou un sac.",
        price: 10000,
        category: "accessoires",
        image: "https://media3.chapellerie-traclet.com/90268-large_default/parapluie-mini-ultra-slim-noir-isotoner.jpg",
        badge: "Fonctionnel",
        brand: "Smart Umbrella"
    },
    {
        id: 39,
        name: "Bob Coton Twill Coton Bleu Marine",
        description: "Un chapeau bob en coton afin de vous protéger du soleil tout en étant au frais.",
        price: 8000,
        category: "accessoires",
        image: "https://media3.chapellerie-traclet.com/66688-large_default/bob-coton-twill-coton-bleu-marine-stetson.jpg",
        badge: "Artisanal",
        brand: "Pearl Craft"
    },
    {
        id: 40,
        name: "Béret Che Guevara étoile rouge",
        description: "Le beret Che porté par Ernesto Guevara. Beret militaire en laine avec coiffe intérieure.",
        price: 50000,
        category: "accessoires",
        image: "https://media2.chapellerie-traclet.com/45992-large_default/beret-che-guevara-etoile-rouge.jpg",
        badge: "Classique",
        brand: "Classique Style"
    }
];

// Fonctions utilitaires
function sortProducts(products, sortBy) {
    const sorted = [...products];
    switch(sortBy) {
        case 'price-asc':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return sorted.sort((a, b) => b.price - a.price);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        default:
            return sorted;
    }
}

function filterProducts(products, category, searchTerm) {
    let filtered = products;
    
    if (category && category !== '') {
        filtered = filtered.filter(product => product.category === category);
    }
    
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term) ||
            (product.brand && product.brand.toLowerCase().includes(term))
        );
    }
    
    return filtered;
}

function formatPrice(price) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF',
        minimumFractionDigits: 0
    }).format(price);
}

// Exporter les fonctions
window.productUtils = {
    sortProducts,
    filterProducts,
    formatPrice
};