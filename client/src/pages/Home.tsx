import HeroSection from '@/components/home/HeroSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import FeaturedCoursesSection from '@/components/home/FeaturedCoursesSection';
import TrustedBySection from '@/components/home/TrustedBySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Update document title
    document.title = 'Saclai - Empowering Business Students';
  }, []);

  return (
    <main>
      <HeroSection />
      <WhyChooseSection />
      <FeaturedCoursesSection />
      <TrustedBySection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Home;
