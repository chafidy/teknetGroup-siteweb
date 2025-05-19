
import { BlogPost, Category } from '@/types/blog';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Entreprise',
    slug: 'entreprise',
    description: 'Actualités concernant TeknetGroup et ses activités'
  },
  {
    id: '2',
    name: 'Partenariats',
    slug: 'partenariats',
    description: 'Informations sur nos collaborations et partenariats'
  },
  {
    id: '3',
    name: 'Technologie',
    slug: 'technologie',
    description: 'Dernières innovations et tendances technologiques'
  },
  {
    id: '4',
    name: 'RSE',
    slug: 'rse',
    description: 'Responsabilité sociale et environnementale'
  },
  {
    id: '5',
    name: 'Cybersécurité',
    slug: 'cybersecurite',
    description: 'Actualités et conseils en matière de cybersécurité'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'TeknetGroup signe un partenariat stratégique avec la Lithothèque de Madagascar',
    slug: 'partenariat-strategique-lithotheque-madagascar',
    excerpt: "TeknetGroup annonce la signature d'un partenariat majeur avec la Lithothèque de Madagascar pour moderniser ses systèmes d'information et renforcer la sécurité de ses installations.",
    content: `
      <p>TeknetGroup est fier d'annoncer la signature d'un partenariat stratégique avec la Lithothèque de Madagascar, une institution de référence dans la conservation et l'étude des ressources minérales de l'île.</p>
      
      <p>Ce partenariat vise à moderniser l'ensemble des systèmes d'information de la Lithothèque et à renforcer la sécurité de ses installations. Notre équipe d'experts mettra en œuvre des solutions innovantes pour numériser les collections, assurer leur conservation à long terme, et faciliter l'accès aux ressources pour les chercheurs et le grand public.</p>
      
      <p>"Ce partenariat avec la Lithothèque de Madagascar est une étape importante pour TeknetGroup. Il nous permet de contribuer à la préservation et à la valorisation du patrimoine géologique malgache tout en déployant nos solutions technologiques de pointe", a déclaré le directeur de TeknetGroup lors de la cérémonie de signature.</p>
      
      <p>La première phase du projet débutera dès le mois prochain avec l'installation de systèmes de sécurité avancés et la mise en place d'une infrastructure réseau performante.</p>
    `,
    coverImage: '/lovable-uploads/643be00d-421f-445f-8187-6059559b4281.png',
    date: '2024-04-15',
    author: 'Équipe TeknetGroup',
    category: categories[1],
    tags: ['partenariat', "systèmes d'information", 'sécurité'],
    featured: true
  },
  {
    id: '2',
    title: 'TeknetGroup participe à une journée de formation à Madagascar',
    slug: 'journee-formation-madagascar',
    excerpt: "Dans le cadre de notre engagement pour le développement des compétences locales, TeknetGroup a organisé une journée de formation dédiée aux professionnels du numérique à Madagascar.",
    content: `
      <p>Le mois dernier, TeknetGroup a organisé une importante journée de formation à Madagascar, réunissant plus de 50 professionnels du secteur numérique. Cette initiative s'inscrit dans notre engagement continu pour le développement des compétences locales et le transfert de connaissances.</p>
      
      <p>Durant cette journée, nos experts ont présenté les dernières innovations en matière de cybersécurité et de solutions d'identification, avec des sessions théoriques et pratiques qui ont permis aux participants d'approfondir leurs connaissances.</p>
      
      <p>"Chez TeknetGroup, nous croyons que la formation est un pilier essentiel du développement technologique. En partageant notre expertise, nous contribuons à renforcer l'écosystème numérique local et à préparer les professionnels aux défis de demain", a expliqué notre responsable formation.</p>
      
      <p>Cette action s'inscrit dans un programme plus large de TeknetGroup qui vise à accompagner le développement des compétences numériques dans la région et à créer un réseau de professionnels qualifiés.</p>
      
      <p>TeknetGroup s'est engagé à renouveler cette opération régulièrement et à élargir son offre de formation pour répondre aux besoins croissants du marché.</p>
    `,
    coverImage: '/lovable-uploads/37b689dd-d756-42af-9e3d-332e0bb51b51.png',
    date: '2024-03-22',
    author: 'Département Formation',
    category: categories[3],
    tags: ['formation', 'compétences', 'numérique', 'Madagascar']
  },
  {
    id: '3',
    title: 'Conférence sur la cybersécurité : TeknetGroup partage son expertise',
    slug: 'conference-cybersecurite-expertise',
    excerpt: "TeknetGroup a animé une conférence majeure sur les enjeux de la cybersécurité pour les entreprises malgaches, présentant des solutions adaptées aux défis locaux.",
    content: `
      <p>Dans un contexte mondial marqué par la recrudescence des cyberattaques, TeknetGroup a organisé une conférence de référence sur la cybersécurité à Madagascar.</p>
      
      <p>Cet événement a réuni plus d'une centaine de dirigeants d'entreprises, responsables IT et experts du secteur pour discuter des menaces actuelles et des stratégies de protection. Les intervenants de TeknetGroup ont partagé leur expertise et présenté des cas concrets d'implémentation de solutions de sécurité adaptées au contexte local.</p>
      
      <p>"La sensibilisation aux enjeux de la cybersécurité est cruciale dans un monde de plus en plus connecté", explique notre Directeur Technique. "Notre objectif avec cette conférence était de fournir aux entreprises malgaches les outils et connaissances nécessaires pour protéger efficacement leurs actifs numériques."</p>
      
      <p>Les participants ont particulièrement apprécié les sessions pratiques et les démonstrations de nos experts, qui ont permis de rendre concrètes des notions parfois complexes.</p>
      
      <p>TeknetGroup prévoit d'organiser d'autres événements similaires dans les mois à venir, avec un focus particulier sur la sécurité des infrastructures critiques.</p>
    `,
    coverImage: '/lovable-uploads/09f5c20e-8d22-4954-b417-ab573defba92.png',
    date: '2024-02-10',
    author: 'Département Cybersécurité',
    category: categories[4],
    tags: ['cybersécurité', 'conférence', 'expertise', 'sécurité']
  },
  {
    id: '4',
    title: "TeknetGroup présent à la CCI France Madagascar",
    slug: 'presence-cci-france-madagascar',
    excerpt: 'TeknetGroup a participé activement au salon professionnel organisé par la CCI France Madagascar, renforçant ses liens avec les acteurs économiques de la région.',
    content: `
      <p>TeknetGroup a marqué sa présence lors du récent salon professionnel organisé par la Chambre de Commerce et d'Industrie France Madagascar (CCIFM), un événement majeur pour les entreprises opérant dans la région.</p>
      
      <p>Notre équipe a présenté les dernières innovations en matière de sécurité numérique et physique, ainsi que nos solutions d'identification avancées. Ce fut également l'occasion de rencontrer de nombreux partenaires potentiels et de renforcer nos relations avec les acteurs économiques locaux.</p>
      
      <p>"Cet événement est une vitrine importante pour TeknetGroup. Il nous permet de montrer notre engagement sur le marché malgache et de mettre en avant notre expertise dans des domaines clés pour le développement des entreprises locales", a déclaré notre responsable commercial lors de l'événement.</p>
      
      <p>Les visiteurs ont particulièrement apprécié les démonstrations de nos solutions de contrôle d'accès et de nos systèmes de surveillance intelligente, adaptés aux besoins spécifiques du marché local.</p>
      
      <p>Cette participation s'inscrit dans notre stratégie de développement régional et confirme notre position d'acteur incontournable dans le domaine de la sécurité et de l'identification à Madagascar.</p>
    `,
    coverImage: '/lovable-uploads/a6a2afe1-a018-4c02-95f0-1c2c1a6f0883.png',
    date: '2024-01-18',
    author: 'Direction Commerciale',
    category: categories[0],
    tags: ['salon', 'CCIFM', 'partenariat', 'développement']
  },
  {
    id: '5',
    title: "Certification : TeknetGroup renforce son expertise technique",
    slug: 'certification-expertise-technique',
    excerpt: "Deux ingénieurs de TeknetGroup ont obtenu une certification internationale chez EVOLIS, renforçant les compétences techniques de l'entreprise et sa capacité à déployer des solutions de pointe.",
    content: `
      <p>TeknetGroup est fier d'annoncer que deux de ses ingénieurs viennent d'obtenir une certification internationale auprès d'EVOLIS, leader mondial des solutions d'identification et d'impression de cartes.</p>
      
      <p>Cette certification, obtenue après un programme de formation intensif, témoigne de l'expertise de nos équipes techniques et de notre engagement continu pour l'excellence. Elle permet à TeknetGroup de renforcer sa position en tant que partenaire privilégié pour le déploiement de solutions d'identification sécurisées.</p>
      
      <p>"Ces certifications sont essentielles pour garantir à nos clients des prestations de la plus haute qualité. Elles attestent de la maîtrise technique de nos équipes et de notre capacité à implémenter des solutions complexes et personnalisées", explique notre directeur technique.</p>
      
      <p>Les compétences acquises lors de cette formation permettront notamment à TeknetGroup de proposer des services avancés de maintenance et de personnalisation des systèmes d'impression de cartes, répondant ainsi aux besoins spécifiques de secteurs comme la banque, la santé ou les administrations publiques.</p>
      
      <p>TeknetGroup poursuit son programme de formation continue, avec l'objectif de certifier l'ensemble de ses techniciens sur les technologies clés de son portefeuille de solutions.</p>
    `,
    coverImage: '/lovable-uploads/0a94b281-2859-4bc4-94a4-bd9ace1626c0.png',
    date: '2023-12-05',
    author: 'Département Technique',
    category: categories[2],
    tags: ['certification', 'formation', 'expertise', 'identification']
  },
  {
    id: '6',
    title: "TeknetGroup célèbre la réussite de ses stagiaires",
    slug: 'celebration-reussite-stagiaires',
    excerpt: "TeknetGroup a organisé une cérémonie pour célébrer la fin du programme de stage et remettre des certificats aux participants ayant complété avec succès leur formation pratique au sein de l'entreprise.",
    content: `
      <p>TeknetGroup a récemment organisé une cérémonie spéciale pour marquer la fin de son programme de stage annuel et célébrer les réussites des jeunes talents qui ont rejoint l'entreprise pour une formation pratique.</p>
      
      <p>Durant cette cérémonie, des certificats ont été remis aux stagiaires ayant complété avec succès leur période de formation au sein de nos différents départements. Plusieurs d'entre eux se sont particulièrement distingués par leur implication et leurs contributions aux projets de l'entreprise.</p>
      
      <p>"Notre programme de stage est une composante essentielle de notre engagement envers le développement des talents locaux. Nous sommes fiers de voir ces jeunes professionnels grandir et acquérir des compétences précieuses qui les aideront dans leur carrière future", a déclaré notre responsable des ressources humaines.</p>
      
      <p>Cette année, le programme a accueilli plus de vingt stagiaires dans des domaines variés comme le développement informatique, la cybersécurité, le marketing digital et la gestion de projets. Certains d'entre eux se verront proposer des opportunités d'emploi permanent au sein de TeknetGroup.</p>
      
      <p>L'entreprise prévoit d'élargir son programme pour l'année prochaine, avec davantage de places disponibles et de nouveaux domaines de spécialisation.</p>
    `,
    coverImage: '/lovable-uploads/09ce135e-9bed-4790-ba40-7bb0c4d9de1d.png',
    date: '2023-11-10',
    author: 'Ressources Humaines',
    category: categories[0],
    tags: ['stage', 'formation', 'talents', 'certification']
  },
  {
    id: '7',
    title: "Visite technique : TeknetGroup chez Smiths Detection",
    slug: 'visite-technique-smiths-detection',
    excerpt: "Une délégation de TeknetGroup a effectué une visite technique chez Smiths Detection, renforçant son expertise dans les technologies de détection avancées et les solutions de sécurité de pointe.",
    content: `
      <p>Une délégation de TeknetGroup, composée d'ingénieurs et de responsables techniques, a récemment effectué une visite aux installations de Smiths Detection, leader mondial dans les technologies de détection et de sécurité.</p>
      
      <p>Cette visite s'inscrit dans le cadre du partenariat stratégique entre les deux entreprises et avait pour objectif de renforcer l'expertise de nos équipes sur les dernières innovations en matière de détection et de sécurité avancée.</p>
      
      <p>"Cette visite technique nous a permis d'approfondir notre connaissance des solutions Smiths Detection et de mieux comprendre les technologies de pointe qu'ils développent. Cela nous permettra d'offrir des services encore plus pertinents à nos clients qui ont des besoins spécifiques en matière de sécurité", explique le chef de notre délégation.</p>
      
      <p>Au cours de cette visite, nos équipes ont pu participer à des sessions de formation pratique et échanger avec les experts de Smiths Detection sur les meilleures pratiques et les cas d'usage les plus pertinents pour le marché africain.</p>
      
      <p>TeknetGroup prévoit d'organiser d'autres visites techniques similaires auprès de ses partenaires stratégiques dans les mois à venir, afin de maintenir son niveau d'expertise à la pointe de la technologie.</p>
    `,
    coverImage: '/lovable-uploads/680b41c0-2fe0-45db-9d9d-4109f8e6376a.png',
    date: '2023-10-15',
    author: 'Équipe Technique',
    category: categories[1],
    tags: ['partenariat', 'formation', 'technologie', 'sécurité']
  },
  {
    id: '8',
    title: "Formation professionnelle : TeknetGroup investit dans ses talents",
    slug: 'formation-professionnelle-talents',
    excerpt: "TeknetGroup renforce son programme de développement professionnel continu, permettant à ses collaborateurs d'acquérir de nouvelles compétences essentielles dans un secteur technologique en constante évolution.",
    content: `
      <p>TeknetGroup a récemment intensifié son programme de formation professionnelle continue, permettant à l'ensemble de ses collaborateurs de développer leurs compétences et d'acquérir de nouvelles certifications dans leurs domaines d'expertise.</p>
      
      <p>Ce programme, qui s'étend sur toute l'année, couvre des domaines aussi variés que la cybersécurité, le développement logiciel, la gestion de projet agile, ou encore les technologies émergentes comme l'intelligence artificielle et l'IoT.</p>
      
      <p>"Dans notre secteur, les technologies évoluent rapidement et il est crucial que nos équipes restent à la pointe. Ce programme de formation continue est un investissement stratégique pour TeknetGroup, car il nous permet de maintenir notre avantage compétitif tout en offrant des opportunités d'évolution à nos talents", souligne notre directeur des ressources humaines.</p>
      
      <p>Plusieurs collaborateurs ont déjà pu bénéficier de formations certifiantes auprès d'organismes internationalement reconnus, renforçant ainsi le niveau d'expertise global de l'entreprise.</p>
      
      <p>TeknetGroup prévoit d'étendre ce programme dans les prochains mois, avec l'ajout de nouvelles formations spécialisées et la possibilité pour les collaborateurs de participer à des conférences et des événements techniques internationaux.</p>
    `,
    coverImage: '/lovable-uploads/fabe044f-6927-4a7f-9615-892a47c3625e.png',
    date: '2023-09-08',
    author: 'Direction des Ressources Humaines',
    category: categories[2],
    tags: ['formation', 'développement professionnel', 'compétences', 'certification']
  }
];

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getLatestPosts(limit: number = 3): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts.filter(post => post.category.slug === categorySlug);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}
