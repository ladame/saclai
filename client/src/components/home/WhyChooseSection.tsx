import { Bot, Globe, Briefcase } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WhyChooseSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Bot size={24} className="text-primary" />,
      title: t('home.why.card1.title'),
      description: t('home.why.card1.description')
    },
    {
      icon: <Globe size={24} className="text-primary" />,
      title: t('home.why.card2.title'),
      description: t('home.why.card2.description')
    },
    {
      icon: <Briefcase size={24} className="text-primary" />,
      title: t('home.why.card3.title'),
      description: t('home.why.card3.description')
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl text-gray-900 mb-4">{t('home.why.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('home.why.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="font-sans font-semibold text-xl mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
