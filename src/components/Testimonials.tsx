
import React, { useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Elina Santos',
    position: 'Diretora da BJT Transportadora',
    content: 'A ContaPlus tem se mostrado extremamente pontual na entrega de documentos e o suporte é sempre atencioso. Recomendo a todos que procuram um serviço contábil confiável.',
    rating: 5
  },
  {
    id: 2,
    name: 'Joel Gomes',
    position: 'Administrador da Torque Implementos',
    content: 'O comprometimento da equipe da ContaPlus com a satisfação do cliente é notável. Eles sempre atendem às necessidades da nossa empresa com excelência e profissionalismo.',
    rating: 5
  },
  {
    id: 3,
    name: 'João Meneses',
    position: 'Diretor da Ágil Mecânica',
    content: 'O atendimento da ContaPlus é prestativo, sempre esclarecendo nossas dúvidas. Os serviços prestados são excelentes e nos ajudam a manter nosso negócio em ordem.',
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="section bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça a experiência de quem já utiliza nossos serviços e confia em nossa expertise.
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div 
            className="relative bg-card rounded-xl p-8 md:p-10 shadow-sm animate-fade-in border border-border"
            key={testimonials[activeIndex].id}
          >
            {/* Quotation Mark */}
            <div className="absolute -top-6 left-8 text-6xl text-primary/20">"</div>
            
            {/* Content */}
            <div className="text-center">
              {/* Testimonial Text */}
              <p className="text-muted-foreground text-lg italic mb-8">
                "{testimonials[activeIndex].content}"
              </p>
              
              {/* Author Info */}
              <div className="flex flex-col items-center">
                <h4 className="text-lg font-semibold text-card-foreground">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{testimonials[activeIndex].position}</p>
                
                {/* Rating */}
                <div className="flex justify-center">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-accent hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            
            {/* Indicator Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'bg-primary w-6' : 'bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-accent hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
