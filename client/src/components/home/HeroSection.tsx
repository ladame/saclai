import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight mb-4">
              {t('home.hero.title')}
            </h1>
            <p className="text-gray-600 text-lg lg:text-xl mb-8 leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold">
                  {t('home.hero.cta')}
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 font-semibold">
                  {t('home.hero.secondary')}
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-amber-500 opacity-10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary opacity-10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Global business education concept" 
                className="rounded-lg shadow-xl w-full h-auto object-cover relative z-10" 
                width="600" 
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
