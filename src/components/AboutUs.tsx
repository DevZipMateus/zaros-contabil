
import React from 'react';
import { Target, Eye, Heart, Shield, Users, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="section bg-card">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block bg-primary/10 text-primary font-medium px-6 py-2 rounded-full text-sm mb-6">
            Sobre a ZAROS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Excelência e Confiança em Contabilidade
          </h2>
          <p className="text-foreground/80 text-xl leading-relaxed">
            Mais que números, oferecemos soluções eficazes em contabilidade com responsabilidade, 
            ética e compromisso com o desenvolvimento dos nossos clientes.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Missão */}
          <div className="text-center group">
            <div className="bg-primary/10 p-6 rounded-2xl inline-block mb-6 group-hover:bg-primary/20 transition-colors">
              <Target className="text-primary mx-auto" size={48} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Missão</h3>
            <p className="text-foreground/70 leading-relaxed">
              Ser uma empresa voltada à realidade dos clientes, adequando o serviço à necessidade de cada tipo de empreendimento, 
              com ética e responsabilidade.
            </p>
          </div>

          {/* Visão */}
          <div className="text-center group">
            <div className="bg-primary/10 p-6 rounded-2xl inline-block mb-6 group-hover:bg-primary/20 transition-colors">
              <Eye className="text-primary mx-auto" size={48} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Visão</h3>
            <p className="text-foreground/70 leading-relaxed">
              Ser excelência na prestação de serviços contábeis, fiscais e de gestão empresarial, 
              visando o crescimento dos clientes com confiabilidade e eficácia.
            </p>
          </div>

          {/* Valores */}
          <div className="text-center group">
            <div className="bg-primary/10 p-6 rounded-2xl inline-block mb-6 group-hover:bg-primary/20 transition-colors">
              <Heart className="text-primary mx-auto" size={48} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Valores</h3>
            <p className="text-foreground/70 leading-relaxed">
              Profissionalismo, ética, responsabilidade social, qualificação contínua, 
              confiança mútua e gestão preventiva com legalidade e competência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
