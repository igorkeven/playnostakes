import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(true);

  const openWhatsApp = () => {
    window.open('https://wa.me/554789212612?text=Olá! Gostaria de saber mais sobre os serviços da Play nos Takes.', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp Button */}
      <Button
        onClick={openWhatsApp}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-dramatic group animate-pulse hover:animate-none transition-all duration-300 hover:scale-110"
        size="icon"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </Button>

      {/* Close Button */}
      <Button
        onClick={() => setIsVisible(false)}
        variant="outline"
        size="icon"
        className="w-8 h-8 rounded-full bg-muted/80 border-border hover:bg-muted opacity-70 hover:opacity-100 transition-all duration-300"
      >
        <X className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;