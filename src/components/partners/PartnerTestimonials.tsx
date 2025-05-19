
interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

interface PartnerTestimonialsProps {
  testimonials: Testimonial[];
}

const PartnerTestimonials = ({ testimonials }: PartnerTestimonialsProps) => {
  return (
    <div className="mb-16 bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl md:text-3xl font-semibold text-teknet-gray-dark mb-8 text-center">
        Témoignages de nos partenaires
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="text-xl italic text-gray-700 mb-4">"{testimonial.quote}"</div>
            <div className="flex items-center">
              <div className="ml-2">
                <p className="font-medium text-teknet-gray-dark">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerTestimonials;
