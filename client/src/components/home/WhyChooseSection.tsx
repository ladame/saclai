import { Bot, Globe, Briefcase } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: <Bot size={24} className="text-primary" />,
      title: "AI-First Approach",
      description: "Our curriculum integrates AI tools and concepts into every course, ensuring students are fluent in tomorrow's business language."
    },
    {
      icon: <Globe size={24} className="text-primary" />,
      title: "International Focus",
      description: "Global case studies and cross-cultural business scenarios prepare students for an interconnected business world."
    },
    {
      icon: <Briefcase size={24} className="text-primary" />,
      title: "Real-World Learning",
      description: "Hands-on projects and practical assignments developed in collaboration with industry partners provide authentic learning experiences."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl text-gray-900 mb-4">Why Choose Saclai?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Partner with us to give your students the competitive edge they need in today's rapidly evolving business landscape.</p>
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
