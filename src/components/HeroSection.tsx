import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-video-bg.jpg';
import logoWhite from '@/assets/logobrancatransparente.png'; 

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/554789212612?text=Olá! Gostaria de saber mais sobre os serviços da Play nos Takes.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-6 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
  <img 
    src={logoWhite} 
    alt="Play nos Takes Logo" 
    className="h-24 w-auto" // Ajuste o 'h-12' para o tamanho desejado (ex: h-10, h-16)
  />
  <h1 className="cinematic-title font-display">
    Play nos Takes
  </h1>
</div>
          <p className="cinematic-subtitle max-w-3xl mx-auto mb-12">
            Capturamos momentos únicos com criatividade e estilo urbano. 
            Transformamos sua visão em arte cinematográfica.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            onClick={openWhatsApp}
            className="cinematic-button rounded-full group"
            size="lg"
          >
            <Play className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
            Fale Conosco
          </Button>
          
          <Button 
            variant="outline" 
            onClick={scrollToAbout}
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            size="lg"
          >
            Nossos Trabalhos
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          className="w-8 h-8 text-primary cursor-pointer hover:scale-110 transition-transform" 
          onClick={scrollToAbout}
        />
      </div>
    </section>
  );
};

export default HeroSection;