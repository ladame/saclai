import { useState } from 'react';
import { TESTIMONIALS } from '@/lib/constants';
import { Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl text-gray-900 mb-4">{t('home.testimonials.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t('home.testimonials.subtitle')}</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {TESTIMONIALS.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`testimonial-slide bg-white p-8 rounded-xl shadow-sm ${index === activeIndex ? 'block' : 'hidden'}`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                      <img 
                        src={testimonial.imageSrc} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-sans font-semibold text-gray-900">
                        {t(`testimonials.${testimonial.id}.name`) || testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {t(`testimonials.${testimonial.id}.role`) || testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="mb-4 text-amber-500 flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <blockquote className="text-gray-600 italic mb-4">
                      "{t(`testimonials.${testimonial.id}.quote`) || testimonial.quote}"
                    </blockquote>
                    <p className="text-sm text-gray-500">
                      {t(`testimonials.${testimonial.id}.institution`) || testimonial.institution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex justify-center mt-8 space-x-2">
              {TESTIMONIALS.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
