import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Update document title
    document.title = 'Contact Us | Saclai';
  }, []);

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
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
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
    <main>
      {/* Contact Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">Let's Connect</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Have questions about our courses or want to explore partnership opportunities? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 bg-primary">
                  <h2 className="font-sans font-bold text-2xl text-white mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="mt-1 mr-4 text-white/80" size={20} />
                      <div>
                        <h3 className="font-semibold text-white">Email</h3>
                        <p className="text-white/80">info@saclai.edu</p>
                        <p className="text-white/80">partnerships@saclai.edu</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="mt-1 mr-4 text-white/80" size={20} />
                      <div>
                        <h3 className="font-semibold text-white">Phone</h3>
                        <p className="text-white/80">+1 (555) 123-4567</p>
                        <p className="text-white/80">+1 (555) 987-6543</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="mt-1 mr-4 text-white/80" size={20} />
                      <div>
                        <h3 className="font-semibold text-white">Address</h3>
                        <p className="text-white/80">123 Education Ave</p>
                        <p className="text-white/80">New York, NY 10001</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="mt-1 mr-4 text-white/80" size={20} />
                      <div>
                        <h3 className="font-semibold text-white">Office Hours</h3>
                        <p className="text-white/80">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className="text-white/80">Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <h2 className="font-sans font-bold text-2xl text-gray-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-5">
                      <div>
                        <Label htmlFor="name" className="text-gray-700">Name</Label>
                        <Input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1" 
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="institution" className="text-gray-700">Institution</Label>
                        <Input 
                          type="text" 
                          id="institution" 
                          name="institution" 
                          value={formData.institution}
                          onChange={handleChange}
                          className="mt-1" 
                          placeholder="Your institution"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700">Email</Label>
                        <Input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1" 
                          placeholder="your.email@institution.edu"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-gray-700">Message</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          value={formData.message}
                          onChange={handleChange}
                          rows={5} 
                          className="mt-1" 
                          placeholder="Tell us how we can help..."
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-sans font-bold text-3xl text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about our educational partnerships.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-sans font-semibold text-xl text-gray-900 mb-2">How are courses delivered to partner institutions?</h3>
                <p className="text-gray-600">Our courses can be delivered in various formats including fully online, hybrid, or in-person instruction depending on your institution's needs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-sans font-semibold text-xl text-gray-900 mb-2">Can courses be customized for our specific curriculum?</h3>
                <p className="text-gray-600">Yes, we work closely with each partner to tailor our courses to your specific learning objectives, student profiles, and institutional requirements.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-sans font-semibold text-xl text-gray-900 mb-2">What support do you provide during course implementation?</h3>
                <p className="text-gray-600">We offer comprehensive support including faculty training, technical assistance, and ongoing educational consultation throughout the partnership.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-sans font-semibold text-xl text-gray-900 mb-2">How long does it take to implement a new course?</h3>
                <p className="text-gray-600">Implementation timelines vary based on course complexity and customization needs, but typically range from 4-12 weeks from initial agreement to launch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
