import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InstagramEmbed } from 'react-social-media-embed';

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // 1. Adicionado o novo vídeo e as legendas para cada item
  const portfolioItems = [
    {
      id: 1,
      url: "https://www.instagram.com/reel/DNBbUy7JfWi/",
      title: "Primecar Automóveis",
      caption: "Produção dinâmica para concessionária, destacando a agilidade e o design dos veículos."
    },
    {
      id: 2,
      url: "https://www.instagram.com/reel/DMxfZvFsgac/",
      title: "Brando Bike",
      caption: "Vídeo focado na aventura e liberdade, capturando a essência do ciclismo."
    },
    {
      id: 3,
      url: "https://www.instagram.com/reel/DMXsIZqOXGT/",
      title: "Tchê Celulares",
      caption: "Comercial moderno e vibrante para loja de eletrônicos, com foco em tecnologia."
    },
    {
      id: 4, // Novo vídeo
      url: "https://www.instagram.com/reel/DMuxt6PAQZX/",
      title: "WS Imóveis",
      caption: "Filmagem cinematográfica para o setor imobiliário, valorizando a arquitetura."
    }
  ];

  const openInstagram = () => {
    window.open('https://www.instagram.com/1000graul_films/', '_blank');
  };

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="cinematic-section py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-black mb-8 font-display bg-gradient-text bg-clip-text text-transparent">
            Trabalhos Recentes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore nossa galeria de projetos que destacam nossa paixão por storytelling visual 
            e produção cinematográfica de alta qualidade.
          </p>
          
          <Button 
            onClick={openInstagram}
            variant="outline"
            className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            Ver mais no Instagram
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* 2. Container para o vídeo e a legenda */}
              <div className="bg-card p-2 rounded-xl shadow-lg">
                <InstagramEmbed url={item.url} width="100%" />
              </div>

              {/* 3. Renderizamos o título e a legenda abaixo do vídeo */}
              <div className="mt-4 px-2">
                <h3 className="text-xl font-bold text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground mt-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;