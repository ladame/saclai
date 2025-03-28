import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/context/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t('contact.form.success.title'),
        description: t('contact.form.success.description'),
        variant: "default",
      });
      setFormData({
        name: '',
        institution: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-10 bg-gray-50">
              <h2 className="font-sans font-bold text-2xl md:text-3xl text-gray-900 mb-4">{t('home.cta.title')}</h2>
              <p className="text-gray-600 mb-6">{t('home.cta.subtitle')}</p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="ml-3 text-gray-600">{t('home.cta.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="ml-3 text-gray-600">{t('home.cta.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="ml-3 text-gray-600">{t('home.cta.feature3')}</span>
                </li>
              </ul>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{t('home.cta.noObligation')}</span>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-10">
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">{t('contact.form.name')}</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary" 
                      placeholder={t('contact.form.name')}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="institution" className="text-sm font-medium text-gray-700 mb-1">{t('contact.form.institution')}</Label>
                    <Input 
                      type="text" 
                      id="institution" 
                      name="institution" 
                      value={formData.institution}
                      onChange={handleChange}
                      className="w-full border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary" 
                      placeholder={t('contact.form.institutionPlaceholder')}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">{t('contact.form.email')}</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary" 
                      placeholder={t('contact.form.emailPlaceholder')}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1">{t('contact.form.message')}</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows={4} 
                      className="w-full border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary" 
                      placeholder={t('contact.form.messagePlaceholder')}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary text-white hover:bg-primary/90 font-semibold py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t('contact.form.submitting') || 'Submitting...' : t('home.cta.button')}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
