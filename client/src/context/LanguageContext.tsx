import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'fr';

// Define language context type
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Create language context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key) => key,
});

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Props for LanguageProvider
interface LanguageProviderProps {
  children: ReactNode;
}

// Language provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Get initial language from localStorage or default to English
  const initialLanguage = (localStorage.getItem('language') as Language) || 'en';
  const [language, setLanguage] = useState<Language>(initialLanguage);

  // Function to change language
  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  // Function to translate text based on current language
  const translate = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translations object
export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.courses': 'Courses',
    'nav.contact': 'Contact',
    'nav.language': 'Language',
    'nav.language.en': 'English',
    'nav.language.fr': 'French',
    'nav.login': 'Log In',
    'nav.partner': 'Partner with Us',

    // Home page
    'home.hero.title': 'Empower Your Business Skills',
    'home.hero.subtitle': 'Cutting-edge business education for professionals and organizations',
    'home.hero.cta': 'Explore Courses',
    'home.hero.secondary': 'Learn More',
    
    'home.why.title': 'Why Choose Saclai',
    'home.why.subtitle': 'We deliver exceptional educational experiences that transform careers',
    'home.why.card1.title': 'Expert Instructors',
    'home.why.card1.description': 'Learn from industry leaders with years of practical experience',
    'home.why.card2.title': 'Flexible Learning',
    'home.why.card2.description': 'Access courses anytime, anywhere, on any device',
    'home.why.card3.title': 'Business Focused',
    'home.why.card3.description': 'Curriculum designed for immediate application in your career',

    'home.featured.title': 'Featured Courses',
    'home.featured.subtitle': 'Discover our most popular business courses',
    'home.featured.viewall': 'View All Courses',

    'home.testimonials.title': 'What Our Students Say',
    'home.testimonials.subtitle': 'Success stories from professionals who transformed their careers',

    'home.trusted.title': 'Trusted By',
    'home.trusted.subtitle': 'Leading companies and institutions that partner with us',

    'home.cta.title': 'Ready to Advance Your Career?',
    'home.cta.subtitle': 'Join thousands of professionals who have transformed their careers with Saclai',
    'home.cta.button': 'Get Started Today',

    // About page
    'about.hero.title': 'About Saclai',
    'about.hero.subtitle': 'Leading the future of business education',
    'about.mission.title': 'Our Mission',
    'about.mission.description': 'Saclai is dedicated to providing accessible, high-quality business education that empowers professionals and organizations to thrive in today\'s competitive environment.',
    'about.vision.title': 'Our Vision',
    'about.vision.description': 'To be the premier global platform for business education, connecting professionals with the knowledge and skills they need to succeed.',
    'about.values.title': 'Our Values',
    'about.values.value1.title': 'Excellence',
    'about.values.value1.description': 'We strive for excellence in all our educational offerings',
    'about.values.value2.title': 'Innovation',
    'about.values.value2.description': 'We constantly innovate to deliver cutting-edge educational experiences',
    'about.values.value3.title': 'Accessibility',
    'about.values.value3.description': 'We believe quality education should be accessible to all',
    'about.values.value4.title': 'Impact',
    'about.values.value4.description': 'We measure success by the positive impact on our students\' careers',
    'about.team.title': 'Our Team',
    'about.team.subtitle': 'Meet the experts behind Saclai',

    // Courses page
    'courses.hero.title': 'Our Courses',
    'courses.hero.subtitle': 'Comprehensive business education for every stage of your career',
    'courses.filter.title': 'Filter Courses',
    'courses.filter.all': 'All Categories',
    'courses.filter.business': 'Business Strategy',
    'courses.filter.marketing': 'Marketing',
    'courses.filter.finance': 'Finance',
    'courses.filter.leadership': 'Leadership',
    'courses.search.placeholder': 'Search courses...',
    'courses.notfound': 'No courses found. Try adjusting your filters.',

    // Contact page
    'contact.hero.title': 'Contact Us',
    'contact.hero.subtitle': 'We\'d love to hear from you',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.form.success': 'Your message has been sent successfully!',
    'contact.form.error': 'There was an error sending your message. Please try again.',
    'contact.info.title': 'Get in Touch',
    'contact.info.description': 'Have questions about our courses or partnerships? Reach out to our team.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.address': 'Address',
    'contact.faq.title': 'Frequently Asked Questions',

    // Common components
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.courses': 'Courses',
    'footer.about': 'About Us',
    'footer.contact': 'Contact',
    'footer.resources': 'Resources',
    'footer.blog': 'Blog',
    'footer.newsletter.title': 'Subscribe to our newsletter',
    'footer.newsletter.placeholder': 'Your email address',
    'footer.newsletter.button': 'Subscribe',
    'footer.social': 'Follow Us',

    'course.duration': 'Duration',
    'course.category': 'Category',
    'course.details': 'View Details',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.courses': 'Cours',
    'nav.contact': 'Contact',
    'nav.language': 'Langue',
    'nav.language.en': 'Anglais',
    'nav.language.fr': 'Français',
    'nav.login': 'Connexion',
    'nav.partner': 'Devenez Partenaire',

    // Home page
    'home.hero.title': 'Développez Vos Compétences Professionnelles',
    'home.hero.subtitle': 'Formation commerciale de pointe pour les professionnels et les organisations',
    'home.hero.cta': 'Explorer les Cours',
    'home.hero.secondary': 'En Savoir Plus',
    
    'home.why.title': 'Pourquoi Choisir Saclai',
    'home.why.subtitle': 'Nous offrons des expériences éducatives exceptionnelles qui transforment les carrières',
    'home.why.card1.title': 'Instructeurs Experts',
    'home.why.card1.description': 'Apprenez avec des leaders de l\'industrie ayant des années d\'expérience pratique',
    'home.why.card2.title': 'Apprentissage Flexible',
    'home.why.card2.description': 'Accédez aux cours à tout moment, n\'importe où, sur n\'importe quel appareil',
    'home.why.card3.title': 'Orientation Commerciale',
    'home.why.card3.description': 'Programme conçu pour une application immédiate dans votre carrière',

    'home.featured.title': 'Cours en Vedette',
    'home.featured.subtitle': 'Découvrez nos cours commerciaux les plus populaires',
    'home.featured.viewall': 'Voir Tous les Cours',

    'home.testimonials.title': 'Ce Que Disent Nos Étudiants',
    'home.testimonials.subtitle': 'Histoires de réussite de professionnels qui ont transformé leur carrière',

    'home.trusted.title': 'Partenaires de Confiance',
    'home.trusted.subtitle': 'Entreprises et institutions leaders qui collaborent avec nous',

    'home.cta.title': 'Prêt à Faire Progresser Votre Carrière?',
    'home.cta.subtitle': 'Rejoignez des milliers de professionnels qui ont transformé leur carrière avec Saclai',
    'home.cta.button': 'Commencez Aujourd\'hui',

    // About page
    'about.hero.title': 'À Propos de Saclai',
    'about.hero.subtitle': 'Leader de l\'avenir de l\'éducation commerciale',
    'about.mission.title': 'Notre Mission',
    'about.mission.description': 'Saclai se consacre à fournir une éducation commerciale accessible et de haute qualité qui permet aux professionnels et aux organisations de prospérer dans l\'environnement concurrentiel actuel.',
    'about.vision.title': 'Notre Vision',
    'about.vision.description': 'Devenir la principale plateforme mondiale d\'éducation commerciale, reliant les professionnels aux connaissances et compétences dont ils ont besoin pour réussir.',
    'about.values.title': 'Nos Valeurs',
    'about.values.value1.title': 'Excellence',
    'about.values.value1.description': 'Nous visons l\'excellence dans toutes nos offres éducatives',
    'about.values.value2.title': 'Innovation',
    'about.values.value2.description': 'Nous innovons constamment pour offrir des expériences éducatives de pointe',
    'about.values.value3.title': 'Accessibilité',
    'about.values.value3.description': 'Nous croyons que l\'éducation de qualité doit être accessible à tous',
    'about.values.value4.title': 'Impact',
    'about.values.value4.description': 'Nous mesurons le succès par l\'impact positif sur la carrière de nos étudiants',
    'about.team.title': 'Notre Équipe',
    'about.team.subtitle': 'Rencontrez les experts derrière Saclai',

    // Courses page
    'courses.hero.title': 'Nos Cours',
    'courses.hero.subtitle': 'Une éducation commerciale complète pour chaque étape de votre carrière',
    'courses.filter.title': 'Filtrer les Cours',
    'courses.filter.all': 'Toutes les Catégories',
    'courses.filter.business': 'Stratégie d\'Entreprise',
    'courses.filter.marketing': 'Marketing',
    'courses.filter.finance': 'Finance',
    'courses.filter.leadership': 'Leadership',
    'courses.search.placeholder': 'Rechercher des cours...',
    'courses.notfound': 'Aucun cours trouvé. Essayez d\'ajuster vos filtres.',

    // Contact page
    'contact.hero.title': 'Contactez-Nous',
    'contact.hero.subtitle': 'Nous serions ravis d\'avoir de vos nouvelles',
    'contact.form.name': 'Votre Nom',
    'contact.form.email': 'Adresse Email',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Votre Message',
    'contact.form.submit': 'Envoyer le Message',
    'contact.form.success': 'Votre message a été envoyé avec succès!',
    'contact.form.error': 'Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.',
    'contact.info.title': 'Prenez Contact',
    'contact.info.description': 'Vous avez des questions sur nos cours ou partenariats? Contactez notre équipe.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Téléphone',
    'contact.info.address': 'Adresse',
    'contact.faq.title': 'Questions Fréquemment Posées',

    // Common components
    'footer.rights': 'Tous droits réservés',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',
    'footer.courses': 'Cours',
    'footer.about': 'À Propos',
    'footer.contact': 'Contact',
    'footer.resources': 'Ressources',
    'footer.blog': 'Blog',
    'footer.newsletter.title': 'Abonnez-vous à notre newsletter',
    'footer.newsletter.placeholder': 'Votre adresse email',
    'footer.newsletter.button': 'S\'abonner',
    'footer.social': 'Suivez-Nous',

    'course.duration': 'Durée',
    'course.category': 'Catégorie',
    'course.details': 'Voir les Détails',
  }
};