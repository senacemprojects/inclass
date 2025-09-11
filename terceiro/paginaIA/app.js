// Data from the application
const appData = {
  services: [
    {
      icon: "💬",
      title: "Customer Support AI",
      description: "Chatbots inteligentes que resolvem 80% das consultas automaticamente",
      useCase: "E-commerce com 10k+ tickets mensais",
      results: "Redução de 60% no tempo de resposta"
    },
    {
      icon: "📊",
      title: "Sales Process Automation",
      description: "Automação completa do funil de vendas com lead scoring inteligente",
      useCase: "SaaS B2B com ciclo de vendas complexo",
      results: "Aumento de 45% na conversão"
    },
    {
      icon: "📄",
      title: "Document Processing AI",
      description: "Extração e análise automática de dados de documentos complexos",
      useCase: "Escritórios jurídicos e contábeis",
      results: "90% menos tempo manual"
    },
    {
      icon: "🎯",
      title: "Predictive Analytics",
      description: "Modelos de ML personalizados para previsão de demanda e churn",
      useCase: "Retail e subscription businesses",
      results: "Precisão de 85% nas previsões"
    }
  ],
  caseStudies: [
    {
      company: "E-commerce Fashion (50M+ faturamento)",
      challenge: "Alto volume de consultas repetitivas no atendimento",
      solution: "Chatbot AI integrado com sistemas internos",
      results: {
        responseTime: "De 2h para 30 segundos",
        resolution: "78% resoluções automáticas",
        satisfaction: "NPS aumentou 35 pontos",
        roi: "ROI 280% em 6 meses"
      }
    },
    {
      company: "SaaS FinTech (200+ funcionários)",
      challenge: "Processo de vendas manual e ineficiente",
      solution: "Pipeline automatizado com lead scoring IA",
      results: {
        conversion: "+52% conversão qualificada",
        cycleTime: "Ciclo reduzido em 40%",
        revenue: "+R$ 2.3M ARR adicional",
        roi: "ROI 340% no primeiro ano"
      }
    },
    {
      company: "Escritório Jurídico (15 advogados)",
      challenge: "Análise manual de contratos demora dias",
      solution: "IA para extração de cláusulas e riscos",
      results: {
        timeReduction: "De 8h para 45min por contrato",
        accuracy: "99.2% precisão na extração",
        capacity: "+300% capacidade de análise",
        roi: "ROI 190% em 4 meses"
      }
    }
  ],
  pricing: [
    {
      name: "Starter",
      price: "R$ 15.000",
      period: "projeto único",
      description: "Ideal para pequenas empresas que querem automatizar processos simples",
      features: [
        "1 processo automatizado",
        "Chatbot básico ou automação simples",
        "Integração com até 2 sistemas",
        "Treinamento da equipe (4h)",
        "Suporte por 3 meses",
        "Documentação completa"
      ],
      deliveryTime: "3-4 semanas",
      bestFor: "PMEs, processos únicos"
    },
    {
      name: "Professional",
      price: "R$ 45.000",
      period: "projeto completo",
      description: "Para empresas médias que precisam de automação robusta e integrada",
      features: [
        "Até 3 processos automatizados",
        "IA personalizada com ML",
        "Integrações ilimitadas",
        "Dashboard analytics customizado",
        "Treinamento avançado (16h)",
        "Suporte por 12 meses",
        "Otimizações trimestrais"
      ],
      deliveryTime: "6-8 semanas", 
      bestFor: "Empresas médias, múltiplos processos",
      popular: true
    },
    {
      name: "Enterprise",
      price: "A partir de R$ 120.000",
      period: "solução completa",
      description: "Transformação digital completa com IA proprietária e suporte dedicado",
      features: [
        "Automação completa end-to-end",
        "IA proprietária desenvolvida do zero",
        "Integrações enterprise complexas",
        "Time dedicado e CTO on-demand",
        "SLA 99.9% uptime garantido",
        "Suporte 24/7 por 24 meses",
        "Roadmap tecnológico estratégico"
      ],
      deliveryTime: "12-16 semanas",
      bestFor: "Grandes corporações, transformação completa"
    }
  ],
  process: [
    {
      step: 1,
      title: "Discovery Profundo",
      description: "Análise detalhada dos processos atuais, identificação de gargalos e mapeamento de oportunidades de IA",
      duration: "1-2 semanas",
      deliverables: "Audit completo, ROI projetado, roadmap técnico"
    },
    {
      step: 2,
      title: "Prototipagem Ágil",
      description: "Desenvolvimento de MVP funcional para validar hipóteses e ajustar solução antes do desenvolvimento completo",
      duration: "2-3 semanas", 
      deliverables: "Protótipo funcional, testes A/B, validação de conceito"
    },
    {
      step: 3,
      title: "Desenvolvimento & Integração",
      description: "Construção da solução final com integrações nativas, testes rigorosos e preparação para produção",
      duration: "4-8 semanas",
      deliverables: "Sistema completo, integrações, documentação técnica"
    },
    {
      step: 4,
      title: "Launch & Otimização",
      description: "Deploy controlado, treinamento da equipe, monitoramento de performance e otimizações contínuas",
      duration: "2-4 semanas",
      deliverables: "Go-live, treinamentos, dashboards, plano de suporte"
    }
  ],
  differentiators: [
    {
      title: "Expertise Técnica Comprovada",
      description: "Time com 8+ anos em ML/AI, certificações AWS/GCP, e histórico em startups unicórnio"
    },
    {
      title: "Metodologia Proprietária",
      description: "Framework próprio de implementação que garante ROI positivo em 6 meses ou reembolso"
    },
    {
      title: "Integração Nativa Completa", 
      description: "Conectamos com qualquer sistema existente sem necessidade de mudanças na infraestrutura"
    },
    {
      title: "Suporte Pós-Go-Live",
      description: "Time dedicado para otimizações contínuas e evolução da IA conforme seu negócio cresce"
    }
  ]
};

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const servicesGrid = document.getElementById('services-grid');
const differentiatorsGrid = document.getElementById('differentiators-grid');
const caseStudiesCarousel = document.getElementById('case-studies-carousel');
const processTimeline = document.getElementById('process-timeline');
const pricingGrid = document.getElementById('pricing-grid');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  populateServices();
  populateDifferentiators();
  populateCaseStudies();
  populateProcess();
  populatePricing();
  initCTAButtons();
  initSmoothScroll();
});

// Navigation functionality
function initNavigation() {
  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
    });
  });

  // Change navbar background on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.backdropFilter = 'blur(20px)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.backdropFilter = 'blur(10px)';
    }
  });
}

// Populate Services Section
function populateServices() {
  appData.services.forEach(service => {
    const serviceCard = document.createElement('div');
    serviceCard.className = 'service-card';
    serviceCard.innerHTML = `
      <span class="service-icon">${service.icon}</span>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-description">${service.description}</p>
      <div class="service-use-case">
        <strong>Caso de uso:</strong> ${service.useCase}
      </div>
      <div class="service-results">
        <strong>Resultado:</strong> ${service.results}
      </div>
    `;
    servicesGrid.appendChild(serviceCard);
  });
}

// Populate Differentiators Section
function populateDifferentiators() {
  appData.differentiators.forEach(diff => {
    const diffCard = document.createElement('div');
    diffCard.className = 'differentiator-card';
    diffCard.innerHTML = `
      <h4 class="differentiator-title">${diff.title}</h4>
      <p class="differentiator-description">${diff.description}</p>
    `;
    differentiatorsGrid.appendChild(diffCard);
  });
}

// Populate Case Studies Section
function populateCaseStudies() {
  appData.caseStudies.forEach(caseStudy => {
    const caseCard = document.createElement('div');
    caseCard.className = 'case-study-card';
    
    const resultsKeys = Object.keys(caseStudy.results);
    const resultsHTML = resultsKeys.map(key => {
      const value = caseStudy.results[key];
      const label = getResultLabel(key);
      return `
        <div class="result-item">
          <span class="result-value">${value}</span>
          <span class="result-label">${label}</span>
        </div>
      `;
    }).join('');
    
    caseCard.innerHTML = `
      <h3 class="case-study-company">${caseStudy.company}</h3>
      <div class="case-study-challenge">
        <strong>Desafio:</strong> ${caseStudy.challenge}
      </div>
      <div class="case-study-solution">
        <strong>Solução:</strong> ${caseStudy.solution}
      </div>
      <div class="case-study-results">
        ${resultsHTML}
      </div>
    `;
    caseStudiesCarousel.appendChild(caseCard);
  });
}

// Helper function to get result labels
function getResultLabel(key) {
  const labels = {
    responseTime: 'Tempo Resposta',
    resolution: 'Resolução Auto',
    satisfaction: 'Satisfação',
    roi: 'ROI',
    conversion: 'Conversão',
    cycleTime: 'Ciclo Vendas',
    revenue: 'Receita Extra',
    timeReduction: 'Redução Tempo',
    accuracy: 'Precisão',
    capacity: 'Capacidade'
  };
  return labels[key] || key;
}

// Populate Process Section
function populateProcess() {
  appData.process.forEach((step, index) => {
    const stepDiv = document.createElement('div');
    stepDiv.className = 'process-step';
    stepDiv.innerHTML = `
      <div class="step-number">${step.step}</div>
      <div class="step-content">
        <h3 class="step-title">${step.title}</h3>
        <p class="step-description">${step.description}</p>
        <div class="step-duration">⏱️ ${step.duration}</div>
        <div class="step-deliverables">📋 ${step.deliverables}</div>
      </div>
    `;
    processTimeline.appendChild(stepDiv);
  });
}

// Populate Pricing Section
function populatePricing() {
  appData.pricing.forEach(plan => {
    const pricingCard = document.createElement('div');
    pricingCard.className = `pricing-card${plan.popular ? ' popular' : ''}`;
    
    const featuresHTML = plan.features.map(feature => `<li>${feature}</li>`).join('');
    
    pricingCard.innerHTML = `
      <h3 class="pricing-name">${plan.name}</h3>
      <div class="pricing-price">${plan.price}</div>
      <div class="pricing-period">${plan.period}</div>
      <p class="pricing-description">${plan.description}</p>
      <ul class="pricing-features">
        ${featuresHTML}
      </ul>
      <div class="pricing-meta">
        <span><strong>Prazo:</strong> ${plan.deliveryTime}</span>
        <span><strong>Ideal para:</strong> ${plan.bestFor}</span>
      </div>
      <button class="btn btn--primary btn--full-width pricing-cta" data-plan="${plan.name}">
        Solicitar Proposta
      </button>
    `;
    pricingGrid.appendChild(pricingCard);
  });
  
  // Add click events to pricing CTAs
  const pricingCTAs = document.querySelectorAll('.pricing-cta');
  pricingCTAs.forEach(cta => {
    cta.addEventListener('click', function() {
      const plan = this.getAttribute('data-plan');
      handleCTAClick('pricing', plan);
    });
  });
}

// Initialize CTA buttons
function initCTAButtons() {
  const ctaPrimary = document.getElementById('cta-primary');
  const learnMore = document.getElementById('learn-more');
  const finalCTA = document.getElementById('final-cta');
  
  ctaPrimary.addEventListener('click', () => handleCTAClick('hero'));
  learnMore.addEventListener('click', () => {
    document.getElementById('case-studies').scrollIntoView({ behavior: 'smooth' });
  });
  finalCTA.addEventListener('click', () => handleCTAClick('final'));
}

// Handle CTA clicks
function handleCTAClick(source, plan = null) {
  let message = `Olá! Gostaria de agendar uma consultoria gratuita sobre soluções de IA para meu negócio.`;
  
  if (source === 'pricing' && plan) {
    message = `Olá! Tenho interesse no plano ${plan} e gostaria de solicitar uma proposta personalizada.`;
  }
  
  const whatsappNumber = '5511999999999'; // Replace with actual number
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
  // Open WhatsApp in new tab
  window.open(whatsappURL, '_blank');
  
  // Track CTA click (if analytics is implemented)
  if (typeof gtag !== 'undefined') {
    gtag('event', 'cta_click', {
      source: source,
      plan: plan || 'none'
    });
  }
}

// Initialize smooth scrolling for navigation links
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const headerOffset = 80;
        const elementPosition = targetSection.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Add scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe elements that should animate on scroll
  const animateElements = document.querySelectorAll('.service-card, .case-study-card, .pricing-card, .differentiator-card, .process-step');
  animateElements.forEach(el => {
    observer.observe(el);
  });
}

// Initialize scroll animations after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(initScrollAnimations, 100);
});

// Add loading states for CTA buttons
function addLoadingState(button) {
  const originalText = button.textContent;
  button.textContent = 'Redirecionando...';
  button.disabled = true;
  
  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
  }, 2000);
}

// Enhanced CTA handling with loading states
const originalHandleCTAClick = handleCTAClick;
handleCTAClick = function(source, plan = null) {
  const button = event.target;
  addLoadingState(button);
  originalHandleCTAClick(source, plan);
};

// Add form validation for future forms
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Add error handling for external links
window.addEventListener('error', function(e) {
  console.error('Application error:', e.error);
  // Could send to analytics or error reporting service
});

// Add performance monitoring
window.addEventListener('load', function() {
  const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
  console.log('Page load time:', loadTime + 'ms');
  
  // Could send to analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_load_time', {
      value: loadTime
    });
  }
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    appData,
    populateServices,
    populateCaseStudies,
    populatePricing,
    handleCTAClick,
    validateEmail
  };
}