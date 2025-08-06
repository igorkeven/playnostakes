import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      id: 1,
      quote: "Cada frame é uma obra de arte. A Play nos Takes captura momentos que falam por si só.",
      author: "Cliente Satisfeito",
      role: "Empresário"
    },
    {
      id: 2,
      quote: "Profissionalismo e criatividade em cada projeto. Superaram todas as expectativas.",
      author: "Marca Premium",
      role: "Marketing Director"
    },
    {
      id: 3,
      quote: "A qualidade cinematográfica é incomparável. Transformaram nossa visão em realidade.",
      author: "Startup Inovadora",
      role: "CEO"
    }
  ];

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="cinematic-section bg-gradient-hero"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-black mb-16 font-display bg-gradient-text bg-clip-text text-transparent">
            O que dizem sobre nós
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`cinematic-card p-8 text-left group hover:scale-105 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Quote className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                
                <blockquote className="text-lg mb-6 text-card-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-primary">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;