import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAVLINKS } from '@/lib/constants';
import logoUrl from '@/assets/logo';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Translated nav links
  const translatedNavLinks = NAVLINKS.map(link => ({
    ...link,
    title: t(`nav.${link.title.toLowerCase()}`)
  }));

  return (
    <header className={`sticky top-0 bg-white z-50 transition-all duration-300 ${isScrolled ? 'shadow py-2' : 'py-4 shadow-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center">
                <img src={logoUrl} alt="Saclai Logo" className="h-10" />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {translatedNavLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <div className={`font-medium ${location === link.path ? 'text-gray-800' : 'text-gray-500'} hover:text-primary transition-colors font-sans cursor-pointer`}>
                  {link.title}
                </div>
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              {t('nav.login')}
            </Button>
            <Button className="bg-primary text-white hover:bg-primary/90">
              {t('nav.partner')}
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu} 
              aria-label="Toggle menu"
              className="text-gray-500 hover:text-gray-800"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {translatedNavLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <div className={`font-medium px-3 py-2 rounded-md ${location === link.path ? 'text-gray-800 bg-gray-100' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800'} font-sans cursor-pointer`}>
                    {link.title}
                  </div>
                </Link>
              ))}
              <div className="pt-2 flex flex-col space-y-3">
                <LanguageSwitcher />
                <Button variant="outline" className="w-full border-primary text-primary">
                  {t('nav.login')}
                </Button>
                <Button className="w-full bg-primary text-white">
                  {t('nav.partner')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
