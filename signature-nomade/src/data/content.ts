import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  ChefHat,
  Leaf,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
  Wine,
} from "lucide-react";
import { images } from "./images";

export const site = {
  name: "Signature Nomade",
  tagline: "L'expérience gastronomique nomade",
  slogan: "Rendre chaque lieu exceptionnel",
  phone: "+33 6 12 34 56 78",
  email: "contact@signature-nomade.fr",
  /** Renseignez un numéro international sans + (ex. 33612345678) ou utilisez VITE_WHATSAPP_PHONE */
  whatsappPhone: import.meta.env.VITE_WHATSAPP_PHONE ?? "33612345678",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27835758.693781495!2d2.2137491!3d46.603354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54acf33e9288cfa%3A0x1cdd69969cdeb9cd!2sFrance!5e0!3m2!1sfr!2sfr!4v1715000000000!5m2!1sfr!2sfr",
} as const;

export const hero = {
  title: "L'expérience gastronomique qui vient à vous",
  subtitle:
    "Prestations culinaires haut de gamme pour entreprises, événements privés et réceptions sur mesure.",
  badge: "Déplacement partout en France",
  ctaPrimary: "Demander un devis",
  ctaSecondary: "Voir nos prestations",
} as const;

export const about = {
  title: "À propos",
  body: "Signature Nomade transforme chaque réception en expérience culinaire mémorable. Nous proposons des prestations de restauration sur mesure directement sur le lieu de votre événement, pour les professionnels comme les particuliers.",
  stats: [
    { value: "+150", label: "événements" },
    { value: "100%", label: "sur mesure" },
    { value: "7j/7", label: "disponible" },
  ] as const,
} as const;

export type ServiceImageKey = keyof typeof images.services;

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  imageKey: ServiceImageKey;
  icon: LucideIcon;
};

export const services: ServiceItem[] = [
  {
    id: "cocktail",
    title: "Cocktails dînatoires",
    description: "Bouchées raffinées, bar à viandes fumées et service fluide pour vos soirées.",
    imageKey: "cocktail",
    icon: Wine,
  },
  {
    id: "buffet",
    title: "Buffet premium",
    description: "Grandes tablées soignées, dressages scénographiés et produits de saison.",
    imageKey: "buffet",
    icon: UtensilsCrossed,
  },
  {
    id: "chef",
    title: "Chef à domicile",
    description: "Menu dégustation, cuisine live et storytelling autour de chaque assiette.",
    imageKey: "chefDom",
    icon: ChefHat,
  },
  {
    id: "brunch",
    title: "Brunch événementiel",
    description: "Partager un moment gourmand du matin jusqu'au dessert, ambiance lounge.",
    imageKey: "brunch",
    icon: Sparkles,
  },
  {
    id: "seminaire",
    title: "Séminaires d'entreprise",
    description: "Pauses carburant, déjeuners presse et dîners de clôture clés en main.",
    imageKey: "entreprise",
    icon: Briefcase,
  },
  {
    id: "mariage",
    title: "Mariages & événements privés",
    description: "De l'apéritif au dessert, orchestration impeccable et mise en valeur du lieu.",
    imageKey: "mariage",
    icon: PartyPopper,
  },
];

export const savoirFaire = {
  title: "Notre savoir-faire",
  subtitle: "Une promesse artisanale pour des événements d'exception",
  pillars: [
    {
      title: "Produits frais",
      description: "Sélection saisonnière, provenance tracée et circuit court lorsque possible.",
      icon: Leaf,
    },
    {
      title: "Cuisine maison",
      description: "Tout est préparé dans nos cuisines avant une finition impeccable sur site.",
      icon: ChefHat,
    },
    {
      title: "Service professionnel",
      description: "Équipes discrètes, synchronisées et formées aux standards événementiel.",
      icon: Sparkles,
    },
    {
      title: "Installation complète",
      description: "Matériel premium, mise en beauté du buffet et ambiance lumineuse subtile.",
      icon: UtensilsCrossed,
    },
    {
      title: "Adaptation alimentaire",
      description: "Allergènes, halal, végan, sans gluten ou menus enfants harmonisés au menu principal.",
      icon: ShieldCheck,
    },
  ],
} as const;

export type PricingTier = {
  id: string;
  name: string;
  highlight?: boolean;
  price: string;
  description: string;
  features: string[];
};

export const pricing: PricingTier[] = [
  {
    id: "essentiel",
    name: "Formule Essentielle",
    price: "À partir de 25€/personne",
    description: "L'entrée élégante pour vos réceptions professionnelles ou familiales.",
    features: ["Buffet simple", "Livraison", "Mise en place"],
  },
  {
    id: "signature",
    name: "Formule Signature",
    highlight: true,
    price: "À partir de 49€/personne",
    description: "L'expression la plus représentative de notre gastronomie mobile.",
    features: ["Menu premium", "Service inclus", "Animation culinaire"],
  },
  {
    id: "prestige",
    name: "Formule Prestige",
    price: "Sur devis",
    description: "Une signature sur mesure pour les grandes occasions et événements exclusifs.",
    features: ["Expérience sur mesure", "Chef privé", "Événement haut de gamme"],
  },
];

export const testimonials = [
  {
    id: "tech",
    name: "Sophie Marin",
    role: "Office Manager • ScaleUp SaaS • Paris",
    rating: 5,
    quote:
      "Soirée de lancement impeccable : timings millimétrés, dressage niveau gastronomique et une équipe en retrait parfaite. Nos investisseurs n'ont pas arrêté de complimenter le cocktail.",
    type: "Entreprise",
  },
  {
    id: "wedding",
    name: "Claire & Julien Dumas",
    role: "Château dans le Val de Loire",
    rating: 5,
    quote:
      "Une progression de menu sublime et un service aussi chaleureux que discret. Tout était anticipé jusqu'aux derniers enfants sans oublier notre tableau végétarien impeccablement intégré.",
    type: "Mariage",
  },
  {
    id: "anniv",
    name: "Élodie Petit",
    role: "Réception famille • Lyon",
    rating: 5,
    quote:
      "Pour les 60 ans de mon père, Signature Nomade a transformé notre salon en restaurant étoilé. Les invités parlaient encore du ris de veau trois jours après.",
    type: "Anniversaire",
  },
  {
    id: "private",
    name: "Alexandre Vogt",
    role: "Réception maison contemporaine • Bordeaux",
    rating: 5,
    quote:
      "Chef à domicile pour seize convives — menu carte blanche avec accords précis à chaque plat. Une expérience rare, très proche du grand restaurant.",
    type: "Événement privé",
  },
  {
    id: "agency",
    name: "Inès Haroun",
    role: "Directrice événements • Agence premium",
    rating: 5,
    quote:
      "Notre cliente fashion exige une image irréprochable. Chaque passe-plat était photogénique, la logistique transparente pour nous. Partenaire de confiance désormais.",
    type: "Entreprise",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Prise de contact",
    description:
      "Échange téléphonique ou visio pour cerner vos attentes, le lieu et l'ambiance souhaitée.",
  },
  {
    step: "02",
    title: "Création du menu",
    description: "Propositions personnalisées, dégustation possible selon vos contraintes alimentaires.",
  },
  {
    step: "03",
    title: "Organisation",
    description: "Plans de montage, logistique, coordination avec vos prestataires sur place.",
  },
  {
    step: "04",
    title: "Jour J",
    description:
      "Arrivée matinale ou horaire précis selon vos besoins, service fluide jusqu'aux derniers rangements.",
  },
] as const;
