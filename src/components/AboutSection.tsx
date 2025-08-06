import { useEffect, useRef, useState } from 'react';
import { Camera, Film, Award } from 'lucide-react';

const AboutSection = () => {
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

  const features = [
    {
      icon: Camera,
      title: "Criatividade",
      description: "Abordagem única e inovadora para cada projeto"
    },
    {
      icon: Film,
      title: "Estilo Urbano",
      description: "Estética moderna que reflete a cultura contemporânea"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Produção profissional com equipamentos de ponta"
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="cinematic-section bg-gradient-hero"
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-black mb-8 font-display bg-gradient-text bg-clip-text text-transparent">
            Sobre a Produtora
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-16 leading-relaxed">
            <strong className="text-primary">Play nos Takes</strong> é uma produtora audiovisual 
            especializada em capturar a essência urbana através de lentes criativas. 
            Combinamos técnicas cinematográficas avançadas com uma visão artística única, 
            criando conteúdo que transcende o comum e conecta com o público de forma autêntica.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`cinematic-card p-8 group hover:scale-105 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <feature.icon className="w-12 h-12 mx-auto mb-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-4 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;