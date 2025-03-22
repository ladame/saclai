import { Link } from 'wouter';
import { NAVLINKS, COURSES } from '@/lib/constants';
import { 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import logoUrl from '@/assets/logo';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  // Translated nav links
  const translatedNavLinks = NAVLINKS.map(link => ({
    ...link,
    title: t(`nav.${link.title.toLowerCase()}`)
  }));

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <img src={logoUrl} alt="Saclai Logo" className="h-10 brightness-0 invert" />
            </div>
            <p className="mb-4 text-gray-400">Empowering business students with an AI and international mindset.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-white mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              {translatedNavLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      {link.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Courses */}
          <div>
            <h3 className="font-sans font-semibold text-white mb-4">{t('footer.courses')}</h3>
            <ul className="space-y-2">
              {COURSES.slice(0, 4).map((course) => (
                <li key={course.id}>
                  <Link href={`/courses#${course.id}`}>
                    <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                      {course.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-sans font-semibold text-white mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail className="mt-1.5 mr-2 text-primary/80" size={16} />
                <span>info@saclai.edu</span>
              </li>
              <li className="flex items-start">
                <Phone className="mt-1.5 mr-2 text-primary/80" size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mt-1.5 mr-2 text-primary/80" size={16} />
                <span>123 Education Ave, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Saclai Education. {t('footer.rights')}</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">{t('footer.privacy')}</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
