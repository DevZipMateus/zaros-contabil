import React from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-background relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-5"></div>
      
      {/* Decorative elements with brand colors */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/47ef10f5-1c17-47b6-a783-a4caf1b7d0bd.png" 
              alt="ZAROS Assessoria Contábil" 
              className="h-20 md:h-24 mx-auto mb-6"
            />
          </div>
          
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-foreground leading-tight mb-6 animate-fade-in`} 
              style={{ animationDelay: '0.1s' }}>
            MAIS QUE NÚMEROS,<br />
            <span className="text-primary">SOLUÇÕES EFICAZ EM CONTABILIDADE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in font-light" 
             style={{ animationDelay: '0.2s' }}>
            Assessoria completa para o sucesso do seu negócio
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in" 
             style={{ animationDelay: '0.3s' }}>
            Somos especialistas em contabilidade, fiscal, tributário e gestão empresarial, 
            oferecendo soluções personalizadas para cada tipo de empreendimento.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in" 
               style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://wa.me/5544999677837" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-flex items-center justify-center gap-3"
            >
              <img src="/lovable-uploads/9a8edb27-0fd0-49ff-9165-64acf1186a7f.png" alt="WhatsApp" className="w-6 h-6" />
              <span>Solicitar Orçamento</span>
            </a>
            <a href="#services" className="btn-secondary">
              Conheça nossos serviços
            </a>
          </div>
        </div>
      </div>
      
      {/* Wave decoration with brand color */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="hsl(0, 0%, 8%)" fillOpacity="1" d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,53.3C1120,43,1280,21,1360,10.7L1440,0L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z">
          </path>
        </svg>
      </div>
    </section>
  );
};
export default Hero;