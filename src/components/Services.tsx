
import React from 'react';
import { FileSpreadsheet, FileCheck, Building2, Users, Calculator, TrendingUp, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Abertura, Alteração e Baixa de Empresa',
    description: 'Orientação completa na estruturação societária, alterações contratuais e encerramento de empresas com total suporte legal.',
    icon: Building2,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Assessoria Fiscal e Contábil',
    description: 'Gestão completa das obrigações fiscais e contábeis, garantindo conformidade e otimização tributária.',
    icon: FileSpreadsheet,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Departamento Pessoal',
    description: 'Gestão completa de recursos humanos, folha de pagamento, benefícios e obrigações trabalhistas.',
    icon: Users,
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Planejamento Tributário',
    description: 'Estratégias personalizadas para redução legal da carga tributária e otimização fiscal do seu negócio.',
    icon: TrendingUp,
    delay: '0.3s'
  },
  {
    id: 5,
    title: 'Imposto de Renda PF',
    description: 'Declaração de Imposto de Renda Pessoa Física com máxima precisão e aproveitamento de todas as deduções legais.',
    icon: Calculator,
    delay: '0.4s'
  },
  {
    id: 6,
    title: 'Abertura e Manutenção de Holdings',
    description: 'Estruturação e gestão de holdings familiares e empresariais para proteção patrimonial e planejamento sucessório.',
    icon: FileCheck,
    delay: '0.5s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block bg-primary/10 text-primary font-medium px-6 py-2 rounded-full text-sm mb-6">
            Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-kassan text-foreground mb-6">
            Soluções Completas em Contabilidade
          </h2>
          <p className="text-foreground/80 text-xl leading-relaxed">
            Oferecemos assessoria especializada para atender às necessidades específicas do seu negócio, 
            com ética, responsabilidade e excelência profissional.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in group"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-primary/10 p-4 rounded-xl inline-block mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold font-kassan mb-4 text-foreground leading-tight">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <a 
            href="https://wa.me/5544999677837" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3"
          >
            <span>Fale com um especialista</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
