
export type NavigationItem = {
  id: string;
  type: 'dropdown';
  label: string;
  items: {
    to: string;
    label: string;
  }[];
};

export const navigationData: NavigationItem[] = [
  {
    id: 'nous-rejoindre',
    type: 'dropdown',
    label: 'Nous Rejoindre',
    items: [
      { to: '/qui-sommes-nous', label: 'Qui sommes-nous' },
      { to: '/politique-qualite-rgpd', label: 'Politique Qualité & RGPD' },
      { to: '/contact', label: 'Contact' },
      { to: '/nos-implantations', label: 'Nos implantations' },
      { to: '/nos-partenaires', label: 'Nos partenaires' },
    ],
  },
  {
    id: 'nos-metiers',
    type: 'dropdown',
    label: 'Nos Métiers',
    items: [
      { to: '/surete-securite-identification', label: 'Sûreté - Sécurité & Identification' },
      { to: '/numerisation-ged', label: 'Numérisation & GED' },
      { to: '/badges-cartes', label: 'Badges & Cartes' },
      { to: '/systemes-information-reseaux', label: 'Systèmes d\'information & Réseaux' },
      { to: '/geolocalisation', label: 'Géolocalisation' },
      { to: '/cybersecurite', label: 'Cybersécurité' },
      { to: '/formation', label: 'Formation' },
      { to: '/developpement-informatique', label: 'Développement informatique' },
    ],
  },
  {
    id: 'nos-produits',
    type: 'dropdown',
    label: 'Nos Produits',
    items: [
      { to: '/produits-partenaires', label: 'Produits partenaires' },
      { to: '/produits-teknetgroup', label: 'Produits TeknetGroup' },
    ],
  },
  {
    id: 'teknet-formation',
    type: 'dropdown',
    label: 'Teknet Formation',
    items: [
      { to: '/formations-produits-partenaires', label: 'Formations sur produits partenaires' },
      { to: '/catalogue-formations', label: 'Catalogue des formations' },
    ],
  },
];
