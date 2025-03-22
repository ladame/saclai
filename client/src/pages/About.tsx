import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Update document title
    document.title = 'About Us | Saclai';
  }, []);

  return (
    <main>
      {/* About Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">Our Vision for Education</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Saclai, we're dedicated to bridging the gap between traditional business education and the rapidly evolving technological landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-sans font-bold text-3xl text-gray-900 mb-6">
                  Equipping Students for Tomorrow's Business Challenges
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Saclai was founded by a team of business professors and industry professionals who recognized that traditional business curricula weren't keeping pace with technological change and global integration.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our mission is to help institutions equip students with practical AI skills and a global mindset, ensuring they enter the workforce prepared for the business landscape of tomorrow, not yesterday.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Every course we develop involves hands-on experience with real-world AI tools or international case studies, bridging theory with practical application.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary opacity-10 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Students in a modern classroom setting" 
                  className="rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-sans font-bold text-3xl text-gray-900 mb-4">Our Educational Approach</h2>
            <p className="text-gray-600">We believe that the most effective learning experiences combine theoretical knowledge with practical application.</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-sans font-semibold text-xl mb-3 text-gray-900">Adaptive Learning</h3>
                <p className="text-gray-600">Our courses adapt to students' learning styles and pace, providing personalized educational experiences.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-sans font-semibold text-xl mb-3 text-gray-900">Global Perspective</h3>
                <p className="text-gray-600">All our courses incorporate international business contexts and cross-cultural considerations.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-sans font-semibold text-xl mb-3 text-gray-900">Technology Integration</h3>
                <p className="text-gray-600">We seamlessly blend cutting-edge technology with traditional business education principles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-sans font-bold text-3xl text-gray-900 mb-6">Ready to Enhance Your Business Program?</h2>
            <p className="text-gray-600 mb-8">
              Partner with Saclai to bring future-focused, AI-powered courses to your students.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/courses">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold">
                  Explore Our Courses
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 font-semibold">
                  Book a Strategy Call
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
