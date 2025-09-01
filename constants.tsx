import { ServiceItem, PackageItem } from './types.ts';
import { 
  MagnifyingGlassIcon, 
  DocumentTextIcon, 
  ComputerDesktopIcon, 
  ChatBubbleOvalLeftEllipsisIcon, 
  BriefcaseIcon,
  StarIcon 
} from './components/Icons.tsx';

export const services: ServiceItem[] = [
  {
    icon: <MagnifyingGlassIcon />,
    title: "Diagnóstico rápido de LinkedIn ou Curriculo",
    subtitle: "Descubra o que Impede seu Perfil de Decolar",
    description: "Não sabe por que não é chamado para entrevistas? Com um investimento simbólico, farei um raio-X do seu currículo ou LinkedIn e te entregarei um áudio ou texto com os 3 principais pontos de melhoria imediata. É o primeiro passo, rápido e acessível, para entender como se tornar mais atraente para os recrutadores.",
    features: [],
    deliverables: "",
    price: 20,
    deliveryTime: "Até 2 dias úteis",
  },
  {
    icon: <DocumentTextIcon />,
    title: "Análise e Formatação Estratégica de Curriculo",
    subtitle: "Passe pelos Filtros e Conquiste o Recrutador",
    description: "Vamos transformar seu currículo de uma simples lista de tarefas em uma poderosa ferramenta de marketing. Usando minha experiência como Tech Recruiter, reescrevo (ou crio, caso não tenha um) e formato seu documento para:",
    features: [
      "Ser aprovado pelos sistemas de triagem (ATS).",
      "Destacar suas conquistas e resultados.",
      "Chamar a atenção de recrutadores em menos de 10 segundos.",
    ],
    deliverables: "Um currículo totalmente novo, em formato PDF e Word, pronto para te abrir portas.",
    price: 100,
    deliveryTime: "7 a 10 dias úteis",
  },
  {
    icon: <ComputerDesktopIcon />,
    title: "Análise e Formatação Estratégica de LinkedIn",
    subtitle: "Atraía oportunidades enquanto você dorme",
    description: "Seu LinkedIn é seu outdoor profissional 24/7. Vou otimizar seu perfil (ou criar um, caso não tenha) para que ele trabalhe por você, atraindo recrutadores e as oportunidades certas com:",
    features: [
      "Criação de um título e resumo magnéticos.",
      "Descrição das suas experiências focada em impacto.",
      "Uso estratégico de palavras-chave para aumentar sua visibilidade nas buscas.",
    ],
    deliverables: "Todos os textos otimizados em um documento, prontos para você atualizar seu perfil e começar a ser notado.",
    price: 100,
    deliveryTime: "7 a 10 dias úteis",
  },
  {
    icon: <ChatBubbleOvalLeftEllipsisIcon />,
    title: "Simulação de Entrevista com Feedback Construtivo",
    subtitle: "Treine com uma Recrutadora e Ganhe Confiança",
    description: "A melhor forma de se preparar para uma entrevista é praticando. Em uma sessão online de 60 minutos, vamos simular uma entrevista real para a área que você deseja. Você terá a chance de treinar suas respostas em um ambiente seguro e, ao final, receberá meu feedback direto e honesto sobre:",
    features: [
        "Clareza e impacto das suas respostas.",
        "Comunicação verbal e não verbal.",
        "Como demonstrar seu valor e fit cultural."
    ],
    deliverables: "Saia da nossa sessão pronto para brilhar na entrevista de verdade + um email de acompanhamento com o resumo dos seus pontos fortes e áreas de melhoria + um plano de ação com dicas práticas para implementar imediatamente.",
    price: 150,
  },
   {
    icon: <BriefcaseIcon />,
    title: "Consultoria de Carreira com Mapeamento de Perfil",
    subtitle: "Clareza e Direção para seu Próximo Passo",
    description: "Você sabe que pode mais, mas não tem certeza de qual caminho seguir? Usando minha visão de quem recruta, vamos trabalhar juntos em uma sessão colaborativa para:",
    features: [
        "Mapear seus pontos fortes, paixões e valores fundamentais.",
        "Identificar oportunidades de mercado e caminhos de carreira alinhados com seu perfil.",
        "Construir um plano de ação prático com os próximos passos para você alcançar seus objetivos."
    ],
    deliverables: "Saia da nossa sessão com clareza total sobre seu futuro profissional e um Plano de Ação Estratégico em PDF para te guiar em cada etapa da jornada.",
    price: 150,
  }
];

export const packages: PackageItem[] = [
    {
        icon: <BriefcaseIcon />,
        title: "Pacote Plano de Voo",
        includes: [
            "Análise e Formatação Estratégica de Currículo",
            "Análise e Formatação Estratégica de LinkedIn",
        ],
        description: "A dobradinha essencial para decolar. Garante que sua apresentação online e offline esteja 100% alinhada e otimizada para atrair as melhores oportunidades.",
        price: 180,
        deliveryTime: "7 a 10 dias úteis",
    },
    {
        icon: <BriefcaseIcon />,
        title: "Pacote Rota da Aprovação",
        includes: [
            "Análise e Formatação Estratégica de Currículo",
            "Análise e Formatação Estratégica de LinkedIn",
            "Simulação de Entrevista com Feedback Construtivo",
        ],
        description: "O arsenal completo para a conquista. O pacote mais popular para quem está em busca ativa, preparando você para se destacar da candidatura à entrevista.",
        price: 290,
        deliveryTime: "7 a 10 dias úteis",
    },
    {
        icon: <BriefcaseIcon />,
        title: "Pacote Aceleração",
        includes: [
            "Análise e Formatação Estratégica de Currículo",
            "Análise e Formatação Estratégica de LinkedIn",
            "Consultoria de Carreira",
        ],
        description: "O rebranding completo da sua carreira. Criamos um novo plano estratégico e alinhamos completamente sua imagem profissional (CV e LinkedIn) a essa nova direção.",
        price: 290,
        deliveryTime: "7 a 10 dias úteis",
    },
    {
        icon: <StarIcon />,
        title: "Pacote Propulsão Máxima",
        includes: [
            "Análise e Formatação Estratégica de Currículo",
            "Análise e Formatação Estratégica de LinkedIn",
            "Simulação de Entrevista com Feedback Construtivo",
            "Consultoria de Carreira",
        ],
        description: "A transformação de carreira definitiva. A experiência premium mais completa, uma mentoria cobrindo todas as frentes: da clareza estratégica à performance na entrevista.",
        price: 420,
        deliveryTime: "7 a 10 dias úteis",
    }
];

export const faqs = [
  {
    question: "Você garante que vou conseguir um emprego?",
    answer: "Nenhuma consultoria séria pode garantir uma contratação, pois a decisão final envolve múltiplos fatores, incluindo a performance do candidato na entrevista e o fit com a cultura da empresa. O que eu garanto é que você terá um material profissional, competitivo e alinhado às melhores práticas do mercado, além de um preparo sólido para as entrevistas. Meu objetivo é aumentar drasticamente suas chances de ser notado(a) e de avançar nos processos seletivos."
  },
  {
    question: "Como são feitas as sessões de simulação e consultoria?",
    answer: "Todas as sessões são online e ao vivo, realizadas via Google Meet, com duração de 60 minutos."
  },
  {
    question: "E se eu não gostar do resultado do currículo ou LinkedIn?",
    answer: "O processo é colaborativo. Após a primeira entrega, você tem direito a 1 (uma) rodada de ajustes para garantir que o material final esteja 100% alinhado com sua história e objetivos."
  },
  {
    question: "Qual o seu principal diferencial como consultora de carreira?",
    answer: "Meu maior diferencial é a minha vivência como Tech Recruiter. Analisei milhares de currículos e perfis no LinkedIn, conduzi centenas de entrevistas e sei exatamente o que os gestores e recrutadores de tecnologia buscam. Eu não ofereço apenas \"dicas\", mas uma visão estratégica de quem já esteve do outro lado da mesa."
  },
  {
    question: "Não sei qual serviço é o ideal para mim. Você pode me ajudar a escolher?",
    answer: "Claro! Se você estiver em dúvida, entre em contato. Nessa conversa rápida, entenderemos seu momento de carreira e seus objetivos, e eu poderei indicar o serviço ou pacote que trará mais impacto para você."
  },
  {
    question: "Qual a diferença do seu serviço para as dicas que encontro de graça na internet?",
    answer: "As dicas genéricas são um bom ponto de partida, mas não levam em conta sua história, suas conquistas e seus objetivos específicos. Meu serviço é 100% personalizado. Nós criamos uma narrativa profissional estratégica para você, alinhada com as vagas que você deseja, usando as palavras-chave certas para se destacar tanto para os robôs de triagem (ATS) quanto para os recrutadores humanos."
  },
  {
    question: "Para a revisão do LinkedIn, preciso te passar minha senha?",
    answer: "Não. Por questões de segurança, eu nunca peço sua senha. Eu entrego todo o conteúdo (textos do \"Sobre\", Título, descrições de experiências) em um documento organizado para que você mesma(o) possa copiar e colar no seu perfil, com minhas instruções claras. Caso prefira, a atualização pode ser feita por mim, mas de qualquer forma, você receberá o arquivo com o passo a passo."
  },
  {
    question: "Qual é a política de agendamento e cancelamento para as sessões ao vivo?",
    answer: (
        <>
            <p>Entendemos que imprevistos acontecem! Para garantir a melhor organização e respeito ao tempo de todos, nossa política é a seguinte:</p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                <li><strong>Agendamento:</strong> Após a compra, você tem um prazo de 30 dias para agendar sua(s) sessão(ões). Recomendamos agendar o quanto antes para garantir a data ideal.</li>
                <li><strong>Remarcação Gratuita:</strong> Você pode reagendar qualquer encontro sem custo, desde que a solicitação seja feita com mais de 24 horas de antecedência.</li>
                <li><strong>Taxa de Reagendamento:</strong> Para solicitações de remarcação ou cancelamentos feitos com menos de 24 horas de antecedência, será aplicada uma taxa de reagendamento de R$ 50,00 para um novo horário.</li>
                <li><strong>Atrasos:</strong> Temos uma tolerância de 15 minutos de atraso. Após esse período, a sessão é considerada "não comparecimento" (no-show), e a mesma taxa de reagendamento de R$ 50,00 será aplicada para marcar um novo encontro.</li>
            </ul>
            <p className="mt-4">Essa política nos ajuda a manter a agenda organizada e a dedicar o tempo de qualidade que cada cliente merece.</p>
        </>
    )
  },
  {
    question: "Você atende apenas profissionais de TI ou também de outras áreas?",
    answer: (
      <>
        <p>Sim. Embora minha especialidade principal seja o mercado de tecnologia, minha metodologia se aplica a profissionais de diversas áreas, pois os princípios de um recrutamento estratégico e de uma boa apresentação de carreira são universais. Meu trabalho abrange (mas não se limita a):</p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
          <li><strong>Tecnologia, Produto e SAP:</strong> Meu foco principal, incluindo Desenvolvedores, Engenheiros de Dados, Product Managers, especialistas em SAP (funcionais e técnicos) e outras posições de alta tecnologia.</li>
          <li><strong>Infraestrutura e Operações de TI:</strong> Perfis como Administradores de Sistemas, Analistas de Suporte e especialistas em redes, que formam a base da operação tecnológica.</li>
          <li><strong>Áreas Corporativas e de Negócio:</strong> Profissionais de setores como Marketing, Vendas, Finanças, Recursos Humanos e Operações, que buscam se posicionar de forma mais estratégica e competitiva no mercado de trabalho.</li>
        </ul>
        <p className="mt-4">Meu diferencial é aplicar a visão crítica e estratégica de uma recrutadora especializada para ajudar qualquer profissional qualificado a comunicar seu valor de forma clara e impactante.</p>
      </>
    )
  }
];