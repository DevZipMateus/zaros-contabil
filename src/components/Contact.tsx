import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Contact = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="contact" className="section bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos prontos para atender às suas necessidades através dos nossos canais de atendimento.
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <div className="bg-card rounded-xl shadow-sm overflow-hidden animate-fade-in border border-border">
            <div className="bg-emerald-500 p-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png" 
                alt="WhatsApp" 
                className="w-16 h-16"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Atendimento rápido e prático</p>
              <a 
                href="https://wa.me/5544999677837" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>Enviar mensagem</span>
              </a>
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="bg-card rounded-xl shadow-sm overflow-hidden animate-fade-in border border-border" style={{ animationDelay: '0.1s' }}>
            <div className="bg-primary p-6 flex items-center justify-center">
              <Phone className="w-16 h-16 text-primary-foreground" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Telefone</h3>
              <p className="text-muted-foreground mb-4">Fale diretamente conosco</p>
              <a 
                href="tel:+5544999677837"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>(44) 99967-7837</span>
              </a>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="bg-card rounded-xl shadow-sm overflow-hidden animate-fade-in border border-border" style={{ animationDelay: '0.2s' }}>
            <div className="bg-background p-6 flex items-center justify-center border-b border-border">
              <Mail className="w-16 h-16 text-primary" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">E-mail</h3>
              <p className="text-muted-foreground mb-4">Envie sua mensagem</p>
              <a 
                href="mailto:juliana@zarosassessoriacontabil.com.br"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium"
              >
                <span>juliana@zarosassessoriacontabil.com.br</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Address and Hours Card */}
        <div className="mt-12 bg-card rounded-xl shadow-sm p-8 max-w-4xl mx-auto border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Address */}
            <div className="flex items-start">
              <div className="bg-accent p-3 rounded-full mr-4 flex-shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-2">Endereço</h4>
                <p className="text-muted-foreground">AV TAMANDARE, NÚMERO 230, SALA 04 PAVMTO02, CEP.87.013-210, MARINGÁ-PR</p>
              </div>
            </div>
            
            {/* Working Hours */}
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-4">Horário de Atendimento</h4>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Segunda - Sexta:</span>
                  <span className="font-medium text-card-foreground">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábado:</span>
                  <span className="font-medium text-card-foreground">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingo:</span>
                  <span className="font-medium text-card-foreground">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
