import {
  Car, Users, Bike, Truck, Bus, Ship, Shield, Monitor,
  Award, Leaf, Anchor,
} from 'lucide-react';

/* ═══════════════════════════════════════════
   CONTACT
   ═══════════════════════════════════════════ */
export const contactInfo = {
  address: '4 bis rue Louise Michel',
  city: 'Levallois-Perret',
  postalCode: '92300',
  phone: '01 55 63 93 30',
  phoneTel: 'tel:+33155639330',
  email: 'ame92secretariat@gmail.com',
  googleMapsUrl:
    'https://www.google.com/maps/place/Auto-%C3%A9cole+AME+LEVALLOIS/@48.8870037,2.2816294,16z/data=!3m1!4b1!4m6!3m5!1s0x47e66f88bb48a933:0xde0a61c1b5afb972!8m2!3d48.8870037!4d2.2842043!16s%2Fg%2F11b67jxs5j',
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.0!2d2.2816294!3d48.8870037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f88bb48a933%3A0xde0a61c1b5afb972!2sAuto-%C3%A9cole%20AME%20LEVALLOIS!5e0!3m2!1sfr!2sfr!4v1',
  googleReviewsUrl:
    'https://www.google.com/maps/place/Auto-%C3%A9cole+AME+LEVALLOIS/@48.8870037,2.2842043,16z/data=!4m8!3m7!1s0x47e66f88bb48a933:0xde0a61c1b5afb972!8m2!3d48.8870037!4d2.2842043!9m1!1b1!16s%2Fg%2F11b67jxs5j?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D',
  hours: {
    weekdays: 'Lun–Ven : 9h–19h',
    saturday: 'Sam : 9h–13h',
    sunday: 'Dim : Fermé',
  },
};

/* ═══════════════════════════════════════════
   FORMATIONS PRINCIPALES
   ═══════════════════════════════════════════ */
export const mainServices = [
  {
    id: 'permis-b',
    title: 'Permis B — Auto',
    subtitle: 'Auto',
    description:
      'La formation complète pour obtenir votre permis de conduire. Cours de code et heures de conduite avec des moniteurs expérimentés et patients.',
    icon: Car,
    tag: 'Le plus demandé',
    popular: true,
  },
  {
    id: 'conduite-accompagnee',
    title: 'Conduite Accompagnée (AAC)',
    subtitle: 'AAC',
    description:
      "Accessible dès 15 ans, la conduite accompagnée permet d'acquérir une expérience solide avant le permis. Idéal pour les jeunes conducteurs.",
    icon: Users,
    tag: 'Dès 15 ans',
  },
  {
    id: 'permis-moto',
    title: 'Permis Moto (A / A2)',
    subtitle: 'A / A2',
    description:
      'Formation complète au permis moto avec plateau et circulation. Équipement fourni pour les cours de plateau.',
    icon: Bike,
    tag: 'Populaire',
    popular: true,
  },
  {
    id: 'permis-125',
    title: 'Permis 125 (A1)',
    subtitle: 'A1',
    description:
      'Formation 7h pour conduire un deux-roues 125cc. Accessible aux titulaires du permis B depuis 2 ans minimum.',
    icon: Bike,
  },
  {
    id: 'permis-remorque',
    title: 'Permis Remorque (BE / B96)',
    subtitle: 'BE / B96',
    description:
      'Passez le permis remorque pour tracter en toute légalité. Formation adaptée à vos besoins personnels ou professionnels.',
    icon: Truck,
  },
  {
    id: 'code-en-ligne',
    title: 'Code en Ligne',
    subtitle: '24h/24',
    description:
      'Révisez le code de la route à votre rythme, où vous voulez, quand vous voulez. Accès illimité à notre plateforme.',
    icon: Monitor,
    tag: '24h/24',
  },
];

/* ═══════════════════════════════════════════
   AUTRES FORMATIONS
   ═══════════════════════════════════════════ */
export const otherServices = [
  {
    id: 'bsr',
    title: 'BSR (AM)',
    icon: Shield,
    description: 'Brevet de Sécurité Routière pour cyclomoteur dès 14 ans.',
  },
  {
    id: 'poids-lourd',
    title: 'Poids Lourd (C)',
    icon: Truck,
    description: 'Formation professionnelle au permis poids lourd catégorie C.',
  },
  {
    id: 'transport-commun',
    title: 'Transport en Commun (D)',
    icon: Bus,
    description: 'Permis pour le transport de passagers en véhicule de plus de 8 places.',
  },
  {
    id: 'bateau',
    title: 'Permis Bateau',
    icon: Anchor,
    description: 'Obtenez votre permis bateau côtier ou fluvial avec AME.',
  },
  {
    id: 'stage-points',
    title: 'Stage Récupération de Points',
    icon: Award,
    description: "Récupérez jusqu'à 4 points sur votre permis en seulement 2 jours.",
  },
  {
    id: 'eco-conduite',
    title: 'Éco Conduite',
    icon: Leaf,
    description:
      'Apprenez à conduire de manière plus économique et écologique.',
  },
];

/* ═══════════════════════════════════════════
   QUICK FORMATIONS (homepage)
   ═══════════════════════════════════════════ */
export const quickFormations = [
  { title: 'Permis B', sub: 'Auto', icon: Car },
  { title: 'Permis Moto', sub: 'A / A2', icon: Bike },
  { title: 'Conduite Accompagnée', sub: 'AAC', icon: Users },
  { title: 'Code en Ligne', sub: '24h/24', icon: Monitor },
];

/* ═══════════════════════════════════════════
   AVIS
   ═══════════════════════════════════════════ */
export const reviews = [
  {
    name: 'Manon L.',
    rating: 5,
    text: "Super auto-école ! Les moniteurs sont vraiment patients et pédagogues. J'ai eu mon permis du premier coup grâce à eux. Je recommande à 100% !",
    date: 'Il y a 2 semaines',
    formation: 'Permis B',
  },
  {
    name: 'Thomas R.',
    rating: 5,
    text: "Excellente expérience pour le permis moto. L'équipe est au top, les cours sur plateau sont très bien organisés. Merci AME !",
    date: 'Il y a 1 mois',
    formation: 'Permis Moto',
  },
  {
    name: 'Sarah K.',
    rating: 5,
    text: "Je recommande vivement AME Levallois. L'accueil est chaleureux, les moniteurs s'adaptent vraiment à chaque élève. Code obtenu rapidement.",
    date: 'Il y a 3 semaines',
    formation: 'Code + Permis B',
  },
  {
    name: 'Lucas M.',
    rating: 5,
    text: 'Conduite accompagnée au top ! Mon fils a adoré ses cours. Les moniteurs sont jeunes et dynamiques, ça met en confiance.',
    date: 'Il y a 1 mois',
    formation: 'Conduite Accompagnée',
  },
  {
    name: 'Emma D.',
    rating: 5,
    text: 'Très bonne auto-école, sérieuse et professionnelle. Le code en ligne est super pratique. Merci pour votre patience !',
    date: 'Il y a 2 mois',
    formation: 'Permis B',
  },
  {
    name: 'Karim B.',
    rating: 4,
    text: 'Bonne expérience globale. Les créneaux horaires sont flexibles, ce qui est un vrai plus quand on travaille. Je recommande.',
    date: 'Il y a 3 mois',
    formation: 'Permis B',
  },
];

/* ═══════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════ */
export const faqs = [
  {
    question: 'Quel est le prix du permis B chez AME Levallois ?',
    answer:
      'Nos forfaits permis B démarrent à partir de 1 100 €. Le prix varie selon la formule choisie (code seul, code + conduite, accéléré). Contactez-nous pour un devis personnalisé adapté à votre situation.',
  },
  {
    question: "Peut-on s'inscrire en ligne au code de la route ?",
    answer:
      'Oui ! Nous proposons un accès au code en ligne 24h/24 et 7j/7. Vous pouvez réviser depuis chez vous ou en déplacement, à votre rythme. Passez en agence ou appelez-nous pour obtenir vos identifiants.',
  },
  {
    question:
      'À partir de quel âge peut-on passer la conduite accompagnée ?',
    answer:
      "La conduite accompagnée (AAC) est accessible dès 15 ans. C'est une excellente solution pour acquérir de l'expérience et gagner en confiance avant de passer le permis à 17 ans.",
  },
  {
    question: 'Où se trouve AME Levallois ?',
    answer:
      "Nous sommes situés au 4 bis rue Louise Michel, 92300 Levallois-Perret, à proximité immédiate du métro et des lignes de bus. Facile d'accès depuis Neuilly, Clichy, Asnières et Paris 17e.",
  },
  {
    question: 'Quels types de permis proposez-vous ?',
    answer:
      'Nous proposons une large gamme de formations : Permis B (auto), Moto (A/A2), Conduite Accompagnée, 125, Remorque (BE/B96), Poids Lourd (C), Transport en Commun (D), BSR, Permis Bateau, Code en ligne, Stage récupération de points et Éco-conduite.',
  },
  {
    question: 'Combien de temps faut-il pour obtenir le permis B ?',
    answer:
      "En moyenne, comptez 1 à 3 mois selon votre rythme d'apprentissage et votre disponibilité. Nous proposons également des formations accélérées pour les plus pressés. Le minimum légal est de 20 heures de conduite.",
  },
];

/* ═══════════════════════════════════════════
   STATS
   ═══════════════════════════════════════════ */
export const stats = [
  { value: '4.9', suffix: '/5', label: 'Note Google' },
  { value: '222', suffix: '+', label: 'Avis clients' },
  { value: '95', suffix: '%', label: 'Satisfaction' },
];

/* ═══════════════════════════════════════════
   SEO META PAR PAGE
   ═══════════════════════════════════════════ */
export const seoMeta = {
  home: {
    title: 'AME Levallois | Auto Moto École à Levallois-Perret (92)',
    description:
      'AME Levallois — Auto Moto École à Levallois-Perret (92). Permis B, Moto, Conduite Accompagnée, Code en ligne. 4.9★ Google — 222+ avis. ☎ 01 55 63 93 30.',
  },
  formations: {
    title: 'Nos Formations | AME Levallois — Permis B, Moto, Code (92)',
    description:
      'Toutes les formations AME Levallois : Permis B, Moto A/A2, Conduite Accompagnée, 125, Remorque, Code en ligne. À Levallois-Perret (92).',
  },
  about: {
    title: 'À propos | AME Levallois — Auto Moto École Levallois-Perret',
    description:
      'Équipe jeune et dynamique. Pédagogie personnalisée, véhicules récents. 4.9★ Google — 222+ avis.',
  },
  reviews: {
    title: 'Avis Clients | AME Levallois — 4.9★ Google (222+ avis)',
    description:
      'Découvrez les témoignages de nos élèves. 4.9★ sur Google avec 222+ avis.',
  },
  contact: {
    title: 'Contact | AME Levallois — ☎ 01 55 63 93 30',
    description:
      'Contactez AME Levallois. ☎ 01 55 63 93 30. 4 bis rue Louise Michel, 92300 Levallois-Perret. Devis gratuit.',
  },
};
