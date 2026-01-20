
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  ChevronDown, 
  Cpu, 
  Zap, 
  Award, 
  ShieldCheck, 
  Users, 
  MessageCircle, 
  ArrowRight,
  Star,
  CheckCircle2,
  AlertCircle,
  PlayCircle,
  Youtube,
  Lock,
  CreditCard,
  Clock
} from 'lucide-react';

// Timer Hook
const useCountdown = (targetDate: string) => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

// Components
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
          <Zap className="text-white w-5 h-5 fill-current" />
        </div>
        <span className="font-orbitron font-bold text-xl tracking-tighter text-blue-400">FONTE PRO</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
        <a href="#sobre" className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Sobre</a>
        <a href="#curriculo" className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Conteúdo</a>
        <a href="#bonus" className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Bônus</a>
        <a href="#depoimentos" className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Depoimentos</a>
        <a href="#professor" className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">Professor</a>
      </div>
      <a 
        href="#preço" 
        className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
      >
        Garanta sua Vaga
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden circuit-pattern">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
      <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-400 text-sm font-semibold mb-8">
        <Zap className="w-4 h-4" />
        O Guia Definitivo para Técnicos
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-white mb-6 leading-tight">
        Fonte Chaveada <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          Descomplicada
        </span>
      </h1>
      <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
        Aprenda a Diagnosticar e Reparar com Clareza, Mesmo Sem Ser Expert em Eletrônica. 
        Um curso direto ao ponto, criado por técnico para técnico.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
        <a 
          href="#preço" 
          className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-xl text-lg font-black flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        >
          QUERO COMEÇAR AGORA <ArrowRight className="w-5 h-5" />
        </a>
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          Garantia de 7 dias
        </div>
      </div>
      
      <div className="relative mx-auto max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/8rsLRlbEyyA?rel=0&modestbranding=1" 
          title="Fonte Chaveada Descomplicada" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  </section>
);

const TargetAudience = () => {
  const points = [
    "Técnicos que querem entender de verdade como funcionam as fontes chaveadas das placas inverter.",
    "Quem já trabalha com refrigeração mas trava na parte eletrônica.",
    "Quem sente que “já passou da idade” de aprender, mas quer virar o jogo.",
    "Técnicos cansados de conteúdo enrolado, com linguagem difícil e pouca prática.",
    "Quem quer segurança pra diagnosticar sem trocar peça à toa."
  ];

  return (
    <section id="sobre" className="py-24 bg-slate-950 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <CheckCircle className="text-emerald-500 w-8 h-8" />
              Pra quem é este curso?
            </h2>
            <div className="space-y-6">
              {points.map((point, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-slate-300 font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl bg-blue-600/10 border border-blue-500/20 flex flex-col items-center justify-center p-6 text-center">
                <Users className="w-12 h-12 text-blue-400 mb-4" />
                <p className="text-white font-bold text-2xl">1.5k+</p>
                <p className="text-slate-400 text-sm">Alunos Ativos</p>
              </div>
              <div className="aspect-square rounded-2xl bg-emerald-600/10 border border-emerald-500/20 flex flex-col items-center justify-center p-6 text-center">
                <Award className="w-12 h-12 text-emerald-400 mb-4" />
                <p className="text-white font-bold text-2xl">100%</p>
                <p className="text-slate-400 text-sm">Prático</p>
              </div>
            </div>
            <div className="pt-8 space-y-4">
              <div className="aspect-square rounded-2xl bg-orange-600/10 border border-orange-500/20 flex flex-col items-center justify-center p-6 text-center">
                <Zap className="w-12 h-12 text-orange-400 mb-4" />
                <p className="text-white font-bold text-2xl">24h</p>
                <p className="text-slate-400 text-sm">Acesso Imediato</p>
              </div>
              <div className="aspect-square rounded-2xl bg-purple-600/10 border border-purple-500/20 flex flex-col items-center justify-center p-6 text-center">
                <MessageCircle className="w-12 h-12 text-purple-400 mb-4" />
                <p className="text-white font-bold text-2xl">Suporte</p>
                <p className="text-slate-400 text-sm">WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Curriculum = () => {
  const modules = [
    {
      title: "Módulo 1: Comece do Zero",
      items: ["Introdução à Fonte Chaveada", "Ferramentas Essenciais para Diagnóstico", "A Anatomia das Fontes Chaveadas"],
      icon: <Cpu className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Módulo 2: Testes na Prática",
      items: ["Testes Básicos dos Componentes", "Como Funciona o CI Chaveador", "Teste Completo do Transformador Chopper"],
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Módulo 3: Diagnóstico Profundo",
      items: ["Análise do Primário e Secundário da Fonte", "Entendendo o Feedback e Mosfet Externo", "Identificando Curto no Secundário"],
      icon: <AlertCircle className="w-6 h-6 text-red-400" />
    },
    {
      title: "Módulo 4: Casos Reais e Topologias",
      items: ["Topologia BUCK sem complicação", "Análises em Placas Reais (LG, Consul, Daikin)", "Diagnóstico com Dois Divisores de Tensão"],
      icon: <CheckCircle className="w-6 h-6 text-emerald-400" />
    }
  ];

  return (
    <section id="curriculo" className="py-24 bg-slate-900 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">O que você vai aprender?</h2>
          <p className="text-slate-400">Conteúdo planejado para levar você do iniciante ao avançado no reparo de fontes.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((mod, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl border-l-4 border-l-blue-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                  {mod.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{mod.title}</h3>
              </div>
              <ul className="space-y-4">
                {mod.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400">
                    <ChevronDown className="w-4 h-4 mt-1 flex-shrink-0 text-blue-500 -rotate-90" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Bonus = () => {
  const bonuses = [
    {
      title: "Checklist de Diagnóstico",
      desc: "Um roteiro passo a passo para você imprimir e usar no dia a dia da bancada.",
      value: "R$ 47,00"
    },
    {
      title: "Atualizações por 1 Ano",
      desc: "Receba todas as novas aulas e análises de placas que entrarem no curso.",
      value: "R$ 197,00"
    }
  ];

  return (
    <section id="bonus" className="py-24 bg-slate-950 overflow-hidden relative scroll-mt-16">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Presentes para você</span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mt-2">Bônus Exclusivos</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {bonuses.map((b, idx) => (
            <div key={idx} className="bg-slate-900 border border-white/5 p-8 rounded-2xl hover:bg-slate-800/50 transition-all group">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Star className="text-emerald-400 fill-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{b.title}</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">{b.desc}</p>
              <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                <span className="text-xs text-slate-500 uppercase tracking-wider">Valor Real</span>
                <span className="text-emerald-400 font-bold">{b.value}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500">
             <div className="px-8 py-2 rounded-full bg-slate-950 text-white font-bold flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" /> Tudo isso GRÁTIS ao garantir sua vaga hoje
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Differentiators = () => {
  const items = [
    { title: "Linguagem Simples", desc: "Voltada pra quem já tá no campo e no dia a dia da oficina." },
    { title: "Foco na Prática", desc: "Explicações pensadas pra quem tem dificuldade com teoria pura." },
    { title: "Clareza Total", desc: "Você vai ver e entender cada etapa do reparo com perfeição." },
    { title: "Técnico para Técnico", desc: "Sem enrolação acadêmica. É o que funciona na vida real." }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-blue-600 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-32" />
          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((it, i) => (
              <div key={i} className="space-y-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-xl">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{it.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const people = [
    { name: "João, 56 anos", comment: "Sou técnico há mais de 20 anos, e esse foi o primeiro curso que realmente me fez entender como funciona uma fonte chaveada.", city: "São Paulo - SP" },
    { name: "Cláudio, 49 anos", comment: "Achei que não ia dar conta por causa da idade, mas a forma de explicar é leve, clara e prática. Recomendo demais!", city: "Curitiba - PR" }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-slate-950 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">Quem já aprendeu aprova</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {people.map((p, i) => (
            <div key={i} className="bg-slate-900/50 p-10 rounded-3xl border border-white/5 relative">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, star) => <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-xl text-slate-300 italic mb-8 leading-relaxed">"{p.comment}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white uppercase">
                  {p.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold">{p.name}</h4>
                  <p className="text-slate-500 text-sm">{p.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const targetDate = '2026-01-22T00:00:00';
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const formatNum = (num: number) => num.toString().padStart(2, '0');

  return (
    <section id="preço" className="py-24 bg-slate-900 relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto bg-slate-950 border border-blue-500/30 rounded-[40px] p-8 md:p-16 shadow-[0_0_50px_rgba(59,130,246,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-500 text-white px-6 py-2 rounded-bl-3xl font-bold text-sm">
            OFERTA DE LANÇAMENTO
          </div>
          
          {/* Cronômetro Regressivo */}
          <div className="mb-10 text-center">
            <p className="text-blue-400 font-bold text-sm uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" /> Oferta de Lançamento Disponível 48h:
            </p>
            <div className="flex justify-center gap-2 md:gap-4">
              {[
                { label: 'DIAS', value: days },
                { label: 'HORAS', value: hours },
                { label: 'MINUTOS', value: minutes },
                { label: 'SEGUNDOS', value: seconds },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="bg-blue-600/10 border border-blue-500/20 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-xl md:rounded-2xl shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                    <span className="text-2xl md:text-4xl font-orbitron font-bold text-white">
                      {item.value < 0 ? '00' : formatNum(item.value)}
                    </span>
                  </div>
                  <span className="text-[10px] md:text-xs text-slate-500 font-bold mt-2 tracking-widest uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-slate-500 text-xs font-medium">
              Até o dia 22 de Janeiro de 2026 à meia-noite.
            </p>
          </div>

          <p className="text-slate-500 line-through text-xl mb-2">De R$ 497,00 por apenas</p>
          <div className="mb-8">
            <span className="text-slate-400 text-2xl align-top mr-2 font-bold">12x</span>
            <span className="text-6xl md:text-8xl font-orbitron font-extrabold text-emerald-500">20,07</span>
          </div>
          <p className="text-slate-300 mb-10 text-lg">Ou R$ 197,00 à vista no PIX ou Cartão</p>
          
          <a 
            href="https://clkdmg.site/pay/9fe94596-9cb4-463f-bc79-0d9eec44d4c6" 
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-6 rounded-2xl text-2xl font-black transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.3)] mb-6 animate-pulse"
          >
            QUERO MINHA VAGA AGORA!
          </a>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-10 h-10 text-emerald-500" />
              <div className="text-left">
                <p className="text-white font-bold text-sm">Garantia Blindada</p>
                <p className="text-slate-400 text-xs">7 dias ou seu dinheiro de volta</p>
              </div>
            </div>
            
            <div className="hidden md:block h-12 w-px bg-white/10" />
            
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-1.5 text-slate-300 text-[10px] font-bold uppercase tracking-wider mb-1">
                <Lock className="w-3 h-3 text-emerald-500" /> Checkout 100% Seguro
              </div>
              <img 
                src="https://help.vindi.com.br/hc/article_attachments/360018862112/selos-pagamento.png" 
                alt="Métodos de Pagamento Aceitos" 
                className="h-7 md:h-8 opacity-90 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<div class="text-white/50 text-xs italic flex items-center gap-2"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg> Aceitamos PIX e Cartão</div>');
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeacherSection = () => (
  <section id="professor" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-16">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 relative order-2 lg:order-1">
          <div className="absolute -inset-4 bg-blue-500/20 blur-[100px] rounded-full opacity-30" />
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
               <img 
                 src="https://i.postimg.cc/FzSds8sB/imagem-gabriel.png" 
                 alt="Gabriel Lima" 
                 className="w-full h-full object-cover"
                 onError={(e) => {
                   e.currentTarget.src = "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=800";
                 }}
               />
            </div>
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl border border-white/10">
              <p className="text-white font-black text-xl font-orbitron">Gabriel Lima</p>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">Especialista Inverter</p>
            </div>
          </div>
        </div>
        <div className="flex-1 text-left order-1 lg:order-2">
          <span className="inline-block bg-blue-500/10 text-blue-400 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-blue-500/20">
            Seu instrutor
          </span>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-8">
            Quem vai ser o seu professor?
          </h2>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              Meu nome é <span className="text-white font-bold">Gabriel Lima</span>, sou especialista em Tecnologia Inverter.
            </p>
            <p>
              Formado em Eletrônica e em Refrigeração, e com amplo conhecimento em reparos de Placas Inverter. Sou criador do Canal <span className="text-blue-400 font-bold underline decoration-blue-500/30 underline-offset-4">Gabriel Lima Refrigeração</span>, com <span className="text-white font-bold">111 mil inscritos</span> e mais de <span className="text-white font-bold">6 milhões</span> de visualizações no YouTube.
            </p>
            <p>
              E também sou criador do <span className="text-emerald-400 font-bold italic">Método Inverter Fácil</span>, onde disponibilizo todo o meu conhecimento de conserto de placa inverter no formato de Curso.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-8 items-center">
            <div className="flex flex-col">
              <span className="text-4xl font-black text-white font-orbitron tracking-tighter">111K</span>
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <Youtube className="w-3 h-3 text-red-500" /> Inscritos
              </span>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-4xl font-black text-white font-orbitron tracking-tighter">6M+</span>
              <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Visualizações</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-slate-950 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Zap className="text-blue-500 w-6 h-6" />
          <span className="font-orbitron font-bold text-lg text-white">FONTE PRO</span>
        </div>
        <div className="text-slate-500 text-sm text-center">
          © {new Date().getFullYear()} Todos os direitos reservados. Este curso não tem vínculo oficial com marcas citadas.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Termos</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacidade</a>
        </div>
      </div>
    </div>
  </footer>
);

const LandingPage = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TargetAudience />
      <Differentiators />
      <Curriculum />
      <Bonus />
      <Testimonials />
      <Pricing />
      <TeacherSection />
      <Footer />

      {/* Sticky Mobile CTA */}
      <div className={`fixed bottom-0 left-0 right-0 p-4 z-50 md:hidden transition-transform duration-300 ${showSticky ? 'translate-y-0' : 'translate-y-full'}`}>
        <a 
          href="#preço" 
          className="bg-emerald-500 text-slate-950 w-full flex items-center justify-center py-4 rounded-xl font-bold shadow-2xl active:scale-95 transition-transform"
        >
          GARANTIR MINHA VAGA <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return <LandingPage />;
};

export default App;
