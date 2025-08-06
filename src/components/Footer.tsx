import { Instagram, Youtube, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoWhite from '@/assets/logobrancatransparente.png'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/1000graul_films/',
      label: 'Instagram'
    },
    {
      icon: Youtube,
      href: 'https://youtube.com',
      label: 'YouTube'
    },
    {
      icon: Mail,
      href: 'mailto:contato@playnostakes.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo e Descrição */}
          <div>
           

            <div className="flex items-center justify-center gap-4 mb-6">
  <img 
    src={logoWhite} 
    alt="Play nos Takes Logo" 
    className="h-10 w-auto" 
  />
  <h3 className="text-2xl font-bold font-display bg-gradient-text bg-clip-text text-transparent mb-4">
              Play nos Takes
            </h3>
</div>
            <p className="text-muted-foreground leading-relaxed">
              Produtora audiovisual especializada em capturar momentos únicos 
              com criatividade e estilo urbano.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-card-foreground">Links Rápidos</h4>
            <div className="space-y-2 text-center md:text-left">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto md:mx-0 text-muted-foreground hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto md:mx-0 text-muted-foreground hover:text-primary transition-colors"
              >
                Portfólio
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block mx-auto md:mx-0 text-muted-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-card-foreground">Siga-nos</h4>
            <div className="flex gap-3 justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
                  onClick={() => window.open(social.href, '_blank')}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Linha Divisória e Créditos */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1.5 mb-2">
            © {currentYear} Play nos Takes. Feito com 
            <Heart className="w-4 h-4 text-red-500 fill-current" /> 
            para capturar momentos únicos.
          </p>
          
          {/* --- SUA LINHA DE CRÉDITOS AQUI --- */}
          <p>
            Desenvolvido por{' '}
            <a 
              href="https://keventech.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              Keven Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;