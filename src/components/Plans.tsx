import React from 'react';
import { Check, X } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
import { cn } from '../lib/utils';

const plans = [{
  id: 1,
  name: 'Plano Essencial',
  price: '99,99',
  description: 'Ideal para microempresas ou empreendedores individuais que buscam serviços básicos de contabilidade.',
  features: [{
    text: 'Emissão de até 10 notas fiscais mensais',
    included: true
  }, {
    text: 'Declaração mensal de impostos',
    included: true
  }, {
    text: 'Suporte contábil por e-mail',
    included: true
  }, {
    text: 'Relatório financeiro básico mensal',
    included: true
  }, {
    text: 'Acompanhamento básico de tributos',
    included: true
  }, {
    text: 'Consultoria contábil trimestral',
    included: false
  }, {
    text: 'Otimização fiscal',
    included: false
  }, {
    text: 'Atendimento personalizado',
    included: false
  }],
  popular: false,
  delay: '0s',
  color: 'bg-neutral-50'
}, {
  id: 2,
  name: 'Plano Business',
  price: '269,99',
  description: 'Perfeito para pequenas empresas que necessitam de suporte contábil mais abrangente e relatórios detalhados.',
  features: [{
    text: 'Emissão de até 30 notas fiscais mensais',
    included: true
  }, {
    text: 'Declaração mensal de impostos e encargos trabalhistas',
    included: true
  }, {
    text: 'Suporte contábil por e-mail e telefone',
    included: true
  }, {
    text: 'Relatório financeiro detalhado mensal',
    included: true
  }, {
    text: 'Acompanhamento mensal de tributos',
    included: true
  }, {
    text: 'Consultoria contábil trimestral',
    included: true
  }, {
    text: 'Otimização fiscal',
    included: true
  }, {
    text: 'Atendimento personalizado',
    included: false
  }],
  popular: true,
  delay: '0.1s',
  color: 'bg-amber-50'
}, {
  id: 3,
  name: 'Plano Enterprise',
  price: '699,99',
  description: 'Solução completa para empresas que requerem acompanhamento contábil contínuo e consultoria estratégica.',
  features: [{
    text: 'Emissão ilimitada de notas fiscais',
    included: true
  }, {
    text: 'Declaração mensal de impostos e encargos trabalhistas',
    included: true
  }, {
    text: 'Suporte contábil ilimitado por e-mail, telefone e chat',
    included: true
  }, {
    text: 'Relatórios financeiros completos mensais e trimestrais',
    included: true
  }, {
    text: 'Acompanhamento estratégico de tributos',
    included: true
  }, {
    text: 'Consultoria contábil mensal e planejamento financeiro',
    included: true
  }, {
    text: 'Otimização fiscal avançada',
    included: true
  }, {
    text: 'Atendimento personalizado prioritário',
    included: true
  }],
  popular: false,
  delay: '0.2s',
  color: 'bg-neutral-50'
}];

const Plans = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="plans" className="section bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block bg-primary/10 text-primary font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Planos
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-philosopher text-foreground mb-6">
            Escolha o plano ideal para o seu negócio
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos planos flexíveis que se adaptam às necessidades e ao tamanho da sua empresa.
          </p>
        </div>
        
        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map(plan => <div key={plan.id} className={cn("rounded-2xl overflow-hidden transition-all duration-300 animate-fade-in border", plan.popular ? "shadow-lg border-primary/30 transform md:-translate-y-4" : "shadow-md border-border")} style={{
          animationDelay: plan.delay
        }}>
              {/* Plan Header */}
              <div className={cn("p-6 md:p-8", plan.popular ? "bg-gradient-to-br from-primary/20 to-primary/10" : "bg-card")}>
                {/* Popular Badge */}
                {plan.popular && <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full absolute top-4 right-4">
                    MAIS POPULAR
                  </div>}
                
                {/* Plan Name and Price */}
                <h3 className="text-2xl font-bold text-card-foreground mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-card-foreground">R$ {plan.price}</span>
                  <span className="text-muted-foreground ml-1 mb-1">/mês</span>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {plan.description}
                </p>
                
                {/* CTA Button */}
                <a href="https://wa.me/5544999677837" target="_blank" rel="noopener noreferrer" className="block text-center py-3 px-6 rounded-lg transition-colors duration-300 w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <div className="flex items-center justify-center gap-2">
                    
                    <span>Solicitar Plano</span>
                  </div>
                </a>
              </div>
              
              {/* Features */}
              <div className="p-6 md:p-8 bg-card">
                <h4 className="font-semibold text-card-foreground mb-4">O que está incluso:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => <li key={index} className="flex items-start">
                      <div className={cn("p-1 rounded-full mr-3 mt-0.5 flex-shrink-0", feature.included ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground")}>
                        {feature.included ? <Check size={isMobile ? 14 : 16} /> : <X size={isMobile ? 14 : 16} />}
                      </div>
                      <span className={cn("text-sm", feature.included ? "text-card-foreground" : "text-muted-foreground line-through")}>
                        {feature.text}
                      </span>
                    </li>)}
                </ul>
              </div>
            </div>)}
        </div>
        
        {/* Custom Plans */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Precisa de um plano personalizado para sua empresa?
          </p>
          <a href="https://wa.me/5544999677837" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-all duration-300 gap-2">
            
            <span>Solicitar proposta personalizada</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Plans;
