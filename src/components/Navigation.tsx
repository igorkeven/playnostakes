import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logoWhite from '@/assets/logobrancatransparente.png'; 


const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'Sobre' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'testimonials', label: 'Depoimentos' },
    { id: 'contact', label: 'Contato' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}

          {/* Logo e Nome da Marca */}
<button 
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="flex items-center gap-2 hover:scale-105 transition-transform"
>
  <img 
    src={logoWhite} 
    alt="Play nos Takes Logo" 
    className="h-8 w-auto" // Tamanho do logo na barra de navegação
  />
  <span className="text-xl md:text-2xl font-bold font-display bg-gradient-text bg-clip-text text-transparent">
    Play nos Takes
  </span>
</button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors font-medium tracking-wide hover:scale-105 transform transition-transform"
                >
                  {item.label}
                </button>
              ))}
              
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Fale Conosco
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              <Button 
                onClick={() => scrollToSection('contact')}
                className="cinematic-button"
                size="lg"
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;