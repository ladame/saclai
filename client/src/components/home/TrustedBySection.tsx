import { PARTNERS } from '@/lib/constants';

const TrustedBySection = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-sans font-semibold text-xl text-gray-500 mb-8">Trusted by Leading Business Schools</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {PARTNERS.map((partner) => (
            <div key={partner.id} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
              <div className="h-16 flex items-center justify-center">
                <div className="w-32 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500 font-sans font-semibold text-sm">
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
