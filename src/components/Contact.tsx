
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {/* WhatsApp Card */}
          <div className="bg-card rounded-xl shadow-sm overflow-hidden animate-fade-in border border-border">
            <div className="bg-emerald-500 p-4 sm:p-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/1fa16bc1-908d-4a63-9c7f-88a25f117f80.png" 
                alt="WhatsApp" 
                className="w-12 h-12 sm:w-16 sm:h-16"
              />
            </div>
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">Atendimento rápido e prático</p>
              <a 
                href="https://wa.me/5544999677837" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2.5 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium text-sm sm:text-base"
              >
                <span>Enviar mensagem</span>
              </a>
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="bg-card rounded-xl shadow-sm overflow-hidden animate-fade-in border border-border" style={{ animationDelay: '0.1s' }}>
            <div className="bg-primary p-4 sm:p-6 flex items-center justify-center">
              <Phone className="w-12 h-12 sm:w-16 sm:h-16 text-primary-foreground" />
            </div>
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Telefone</h3>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">Fale diretamente conosco</p>
              <a 
                href="tel:+5544999677837"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2.5 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium text-sm sm:text-base"
              >
                <span>(44) 99967-7837</span>
              </a>
            </div>
          </div>
          
          {/* Email Card */}
          <div className="bg-card rounded-xl shadow-sm overflow-hidden animate-fade-in border border-border sm:col-span-2 lg:col-span-1" style={{ animationDelay: '0.2s' }}>
            <div className="bg-background p-4 sm:p-6 flex items-center justify-center border-b border-border">
              <Mail className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
            </div>
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">E-mail</h3>
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">Envie sua mensagem</p>
              <a 
                href="mailto:juliana@zarosassessoriacontabil.com.br"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2.5 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium text-xs sm:text-sm lg:text-base break-all"
              >
                <span className="truncate">juliana@zarosassessoriacontabil.com.br</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Address and Hours Card */}
        <div className="mt-8 sm:mt-12 bg-card rounded-xl shadow-sm p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Address */}
            <div className="flex items-start">
              <div className="bg-accent p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                <MapPin className="text-primary" size={isMobile ? 20 : 24} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-card-foreground mb-2">Endereço</h4>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  AV TAMANDARE, NÚMERO 230, SALA 04 PAVMTO02, CEP.87.013-210, MARINGÁ-PR
                </p>
              </div>
            </div>
            
            {/* Working Hours */}
            <div>
              <h4 className="text-lg font-semibold text-card-foreground mb-4">Horário de Atendimento</h4>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm sm:text-base">Segunda - Sexta:</span>
                  <span className="font-medium text-card-foreground text-sm sm:text-base">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm sm:text-base">Sábado:</span>
                  <span className="font-medium text-card-foreground text-sm sm:text-base">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm sm:text-base">Domingo:</span>
                  <span className="font-medium text-card-foreground text-sm sm:text-base">Fechado</span>
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
