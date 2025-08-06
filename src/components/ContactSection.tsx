import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Instagram, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
// 1. Importe a biblioteca do EmailJS
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
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

  // 2. A função de envio agora usa o EmailJS
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples para não enviar formulário vazio
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos incompletos",
        description: "Por favor, preencha todos os campos para enviar.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Parâmetros que você definiu no seu template do EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      "service_9pal3ys",   
      "template_uxvluuv",  
      templateParams,
      "uu5s_mUiKmqCAmcZg"    
    )
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text);
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Obrigado pelo contato. Responderemos em breve.",
      });
      setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
    })
    .catch((err) => {
      console.error("ERRO AO ENVIAR O EMAIL: ", err);
      toast({
        title: "Erro ao enviar a mensagem.",
        description: "Por favor, tente novamente mais tarde ou use o contato direto.",
        variant: "destructive",
      });
    })
    .finally(() => {
      setIsLoading(false); // Finaliza o carregamento
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/554789212612?text=Olá! Gostaria de saber mais sobre os serviços da Play nos Takes.', '_blank');
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/1000graul_films/', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Mail, href: 'mailto:contato@playnostakes.com', label: 'Email' }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="cinematic-section"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-black mb-8 font-display bg-gradient-text bg-clip-text text-transparent">
            Vamos Trabalhar Juntos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar sua visão em arte cinematográfica? 
            Entre em contato e vamos criar algo extraordinário.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="cinematic-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Envie uma Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input type="text" name="name" placeholder="Seu nome" value={formData.name} onChange={handleInputChange} required className="bg-input border-border text-foreground" />
                </div>
                <div>
                  <Input type="email" name="email" placeholder="Seu email" value={formData.email} onChange={handleInputChange} required className="bg-input border-border text-foreground" />
                </div>
                <div>
                  <Textarea name="message" placeholder="Conte-nos sobre seu projeto..." value={formData.message} onChange={handleInputChange} required rows={5} className="bg-input border-border text-foreground resize-none" />
                </div>
                
                {/* O botão com estado de loading continua o mesmo */}
                <Button 
                  type="submit" 
                  className="w-full cinematic-button"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Informações de Contato */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-8">
              <div className="cinematic-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-card-foreground">Contato Direto</h3>
                <div className="space-y-6">
                  <Button onClick={openWhatsApp} className="w-full cinematic-button justify-start" size="lg">
                    <Phone className="w-5 h-5 mr-3" />
                    WhatsApp: (47) 8921-2612
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-primary text-primary hover:bg-primary hover:text-primary-foreground" size="lg" onClick={() => window.location.href = 'mailto:frank.robson51987@gmail.com'}>
                    <Mail className="w-5 h-5 mr-3" />
                    frank.robson51987@gmail.com
                  </Button>
                </div>
              </div>
              <div className="cinematic-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-card-foreground">Redes Sociais</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button key={index} variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group" onClick={() => window.open(social.href, '_blank')}>
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;