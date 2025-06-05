
import { format, subDays } from "date-fns";

// Generate dates for the past 30 days
const generateDates = (days: number) => {
  return Array.from({ length: days }).map((_, i) => {
    const date = subDays(new Date(), days - i - 1);
    return format(date, "yyyy-MM-dd");
  });
};

const dates = generateDates(30);

// Mock time series data
export const timeSeriesData = dates.map((date) => {
  const agencia = Math.floor(Math.random() * 15000) + 5000;
  const online = Math.floor(Math.random() * 8000) + 2000;
  const telefone = Math.floor(Math.random() * 12000) + 3000;
  
  return {
    date,
    Agência: agencia,
    Online: online,
    Telefone: telefone
  };
});

// Mock donut chart data
export const channelDistributionData = [
  { name: "Agência", value: 254000 },
  { name: "Online", value: 125000 },
  { name: "Telefone", value: 98000 },
  { name: "Parceiro", value: 187000 },
  { name: "App", value: 143000 },
];

// Mock bar chart data
export const sellerData = [
  { name: "João Becker", value: 230000 },
  { name: "Ana Silva", value: 187000 },
  { name: "Carlos Oliveira", value: 164000 },
  { name: "Maria Santos", value: 132000 },
  { name: "Paula Costa", value: 121000 },
];

// Expanded sales data to match approximately R$ 1.118.968,50
export const salesData = [
  {
    id: "sale-1",
    voucher: "1374022",
    dataLancamentoServico: "2025-01-15",
    canal_de_venda: "Agência",
    tipo_servico: "Traslado",
    tipo_cobranca: "Pag. Privativo",
    cliente: {
      nome: "EDUARDO F. NOGUEIRA",
      email: "dunog77@me.com",
      telefone: "+55 4198478110",
      qtde_pax: 2,
      detalhe_pax: {
        adt: 2,
        chd: 0,
        inf: 0,
        sen: 0,
        free: 0
      }
    },
    servico: {
      nome: "Transfer Privativo OUT",
      valor: 130.00,
      desconto: 0.00,
      status_cobranca: "130.00 atrasado no IN (26/dez 18:50)"
    },
    vendedor: "João Becker",
    trajeto: {
      origem: "Airbnb - Bariloche",
      destino: "Aeroparque - Jorge Newbery"
    }
  },
  {
    id: "sale-2",
    voucher: "1383480",
    dataLancamentoServico: "2025-01-20",
    canal_de_venda: "Agência",
    tipo_servico: "Passeio",
    tipo_cobranca: "Pag. Regular",
    cliente: {
      nome: "LUIZ HENRIQUE DE SOUZA MEDEIROS",
      email: "luizh9@hotmail.com",
      telefone: "+55 6596296993",
      qtde_pax: 2,
      detalhe_pax: {
        adt: 2,
        chd: 0,
        inf: 0,
        sen: 0,
        free: 0
      }
    },
    servico: {
      nome: "Delta tigre",
      valor: 1000.00,
      desconto: 0.00,
      status_cobranca: "Pago",
      observacao: "RESERVA CONFIRMADA, AGUARDAR NA RECEPÇÃO DO HOTEL ÀS 08:40"
    },
    vendedor: "João Becker",
    trajeto: {
      origem: "Airbnb - Ushuaia",
      destino: "Delta tigre"
    }
  },
  // High-value sales to reach target total
  {
    id: "sale-3",
    voucher: "1390123",
    dataLancamentoServico: "2025-02-05",
    canal_de_venda: "Online",
    tipo_servico: "Pacote Premium",
    tipo_cobranca: "Pag. Regular",
    cliente: {
      nome: "MARIA FERNANDA SANTOS",
      email: "maria.santos@email.com",
      telefone: "+55 1199887766",
      qtde_pax: 8,
      detalhe_pax: {
        adt: 4,
        chd: 2,
        inf: 1,
        sen: 1,
        free: 0
      }
    },
    servico: {
      nome: "Pacote Patagônia Luxo - 15 dias",
      valor: 45000.00,
      desconto: 2000.00,
      status_cobranca: "Pago"
    },
    vendedor: "Ana Silva",
    trajeto: {
      origem: "São Paulo",
      destino: "Circuito Patagônia"
    }
  },
  {
    id: "sale-4",
    voucher: "1395678",
    dataLancamentoServico: "2025-02-12",
    canal_de_venda: "Agência",
    tipo_servico: "Pacote Corporativo",
    tipo_cobranca: "Pag. Empresarial",
    cliente: {
      nome: "EMPRESA VIAGGI LTDA",
      email: "contato@viaggi.com.br",
      telefone: "+55 1133445566",
      qtde_pax: 25,
      detalhe_pax: {
        adt: 25,
        chd: 0,
        inf: 0,
        sen: 0,
        free: 0
      }
    },
    servico: {
      nome: "Convenção Corporativa - Buenos Aires",
      valor: 87500.00,
      desconto: 5000.00,
      status_cobranca: "Pago"
    },
    vendedor: "Carlos Oliveira",
    trajeto: {
      origem: "São Paulo",
      destino: "Buenos Aires - Hotel Sheraton"
    }
  },
  {
    id: "sale-5",
    voucher: "1398765",
    dataLancamentoServico: "2025-03-01",
    canal_de_venda: "Online",
    tipo_servico: "Cruzeiro",
    tipo_cobranca: "Pag. Parcelado",
    cliente: {
      nome: "FAMÍLIA COSTA SILVA",
      email: "costa.silva@family.com",
      telefone: "+55 1155667788",
      qtde_pax: 6,
      detalhe_pax: {
        adt: 4,
        chd: 2,
        inf: 0,
        sen: 0,
        free: 0
      }
    },
    servico: {
      nome: "Cruzeiro Antártica Premium - 21 dias",
      valor: 95000.00,
      desconto: 8000.00,
      status_cobranca: "Parcialmente Pago"
    },
    vendedor: "Maria Santos",
    trajeto: {
      origem: "Ushuaia",
      destino: "Península Antártica"
    }
  },
  {
    id: "sale-6",
    voucher: "1401234",
    dataLancamentoServico: "2025-03-15",
    canal_de_venda: "Telefone",
    tipo_servico: "Pacote Lua de Mel",
    tipo_cobranca: "Pag. Regular",
    cliente: {
      nome: "RICARDO E JULIANA FERREIRA",
      email: "ricardo.juliana@email.com",
      telefone: "+55 2199887766",
      qtde_pax: 2,
      detalhe_pax: {
        adt: 2,
        chd: 0,
        inf: 0,
        sen: 0,
        free: 0
      }
    },
    servico: {
      nome: "Lua de Mel Bariloche & Mendoza - 12 dias",
      valor: 25000.00,
      desconto: 1500.00,
      status_cobranca: "Pago"
    },
    vendedor: "Paula Costa",
    trajeto: {
      origem: "Rio de Janeiro",
      destino: "Bariloche - Mendoza"
    }
  },
  {
    id: "sale-7",
    voucher: "1405432",
    dataLancamentoServico: "2025-04-02",
    canal_de_venda: "Agência",
    tipo_servico: "Grupo Terceira Idade",
    tipo_cobranca: "Pag. Regular",
    cliente: {
      nome: "GRUPO MELHOR IDADE - RECIFE",
      email: "grupo@melhoridade.com.br",
      telefone: "+55 8133224455",
      qtde_pax: 35,
      detalhe_pax: {
        adt: 30,
        chd: 0,
        inf: 0,
        sen: 5,
        free: 0
      }
    },
    servico: {
      nome: "Tour Argentina Completa - 18 dias",
      valor: 125000.00,
      desconto: 12000.00,
      status_cobranca: "Pago"
    },
    vendedor: "João Becker",
    trajeto: {
      origem: "Recife",
      destino: "Buenos Aires - Bariloche - Mendoza"
    }
  },
  {
    id: "sale-8",
    voucher: "1407890",
    dataLancamentoServico: "2025-04-18",
    canal_de_venda: "Online",
    tipo_servico: "Aventura Premium",
    tipo_cobranca: "Pag. Regular",
    cliente: {
      nome: "CLUBE DE AVENTUREIROS SP",
      email: "aventura@clube.com.br",
      telefone: "+55 1144556677",
      qtde_pax: 12,
      detalhe_pax: {
        adt: 12,
        chd: 0,
        inf: 0,
        sen: 0,
        free: 0
      }
    },
    servico: {
      nome: "Expedição Patagônia Selvagem - 25 dias",
      valor: 180000.00,
      desconto: 15000.00,
      status_cobranca: "Pago"
    },
    vendedor: "Ana Silva",
    trajeto: {
      origem: "São Paulo",
      destino: "El Calafate - Torres del Paine"
    }
  },
  {
    id: "sale-9",
    voucher: "1410123",
    dataLancamentoServico: "2025-05-05",
    canal_de_venda: "Agência",
    tipo_servico: "Incentivo Corporativo",
    tipo_cobranca: "Pag. Empresarial",
    cliente: {
      nome: "BANCO REGIONAL NORDESTE",
      email: "viagens@bancoregional.com.br",
      telefone: "+55 8532112233",
      qtde_pax: 50,
      detalhe_pax: {
        adt: 50,
        chd: 0,
        inf: 0,
        sen: 0,
        free: 0
      }
    },
    servico: {
      nome: "Incentivo Executivo Uruguai & Argentina",
      valor: 275000.00,
      desconto: 25000.00,
      status_cobranca: "Pago"
    },
    vendedor: "Carlos Oliveira",
    trajeto: {
      origem: "Fortaleza",
      destino: "Montevidéu - Buenos Aires"
    }
  },
  {
    id: "sale-10",
    voucher: "1412456",
    dataLancamentoServico: "2025-05-20",
    canal_de_venda: "Telefone",
    tipo_servico: "Formatura",
    tipo_cobranca: "Pag. Estudantil",
    cliente: {
      nome: "FORMANDOS MEDICINA UFMG 2025",
      email: "formatura@medicina.ufmg.br",
      telefone: "+55 3133445566",
      qtde_pax: 80,
      detalhe_pax: {
        adt: 80,
        chd: 0,
        inf: 0,
        sen: 0,
        free: 0
      }
    },
    servico: {
      nome: "Formatura Especial - Buenos Aires & Bariloche",
      valor: 320000.00,
      desconto: 30000.00,
      status_cobranca: "Parcialmente Pago"
    },
    vendedor: "Maria Santos",
    trajeto: {
      origem: "Belo Horizonte",
      destino: "Buenos Aires - Bariloche"
    }
  },
  {
    id: "sale-11",
    voucher: "1414789",
    dataLancamentoServico: "2025-06-01",
    canal_de_venda: "Online",
    tipo_servico: "Religioso",
    tipo_cobranca: "Pag. Regular",
    cliente: {
      nome: "PARÓQUIA SÃO FRANCISCO - BH",
      email: "paroquia@saofrancisco.org.br",
      telefone: "+55 3122334455",
      qtde_pax: 45,
      detalhe_pax: {
        adt: 35,
        chd: 5,
        inf: 2,
        sen: 3,
        free: 0
      }
    },
    servico: {
      nome: "Peregrinação Santuários Argentinos",
      valor: 67500.00,
      desconto: 5000.00,
      status_cobranca: "Pago"
    },
    vendedor: "Paula Costa",
    trajeto: {
      origem: "Belo Horizonte",
      destino: "Buenos Aires - Luján - San Nicolás"
    }
  },
  // Additional smaller sales to fine-tune the total
  {
    id: "sale-12",
    voucher: "1416001",
    dataLancamentoServico: "2025-01-25",
    canal_de_venda: "Agência",
    tipo_servico: "Transfer",
    tipo_cobranca: "Pag. Regular",
    cliente: {
      nome: "SANDRA OLIVEIRA",
      email: "sandra.oli@email.com",
      telefone: "+55 1166778899",
      qtde_pax: 4,
      detalhe_pax: {
        adt: 2,
        chd: 2,
        inf: 0,
        sen: 0,
        free: 0
      }
    },
    servico: {
      nome: "Transfer Executivo Aeroporto",
      valor: 450.00,
      desconto: 0.00,
      status_cobranca: "Pago"
    },
    vendedor: "João Becker",
    trajeto: {
      origem: "Hotel Sheraton Buenos Aires",
      destino: "Aeroporto Ezeiza"
    }
  },
  {
    id: "sale-13",
    voucher: "1417500",
    dataLancamentoServico: "2025-02-28",
    canal_de_venda: "Online",
    tipo_servico: "City Tour",
    tipo_cobranca: "Pag. Regular",
    cliente: {
      nome: "MARCOS ANTONIO SILVA",
      email: "marcos.silva@hotmail.com",
      telefone: "+55 1177889900",
      qtde_pax: 3,
      detalhe_pax: {
        adt: 2,
        chd: 1,
        inf: 0,
        sen: 0,
        free: 0
      }
    },
    servico: {
      nome: "City Tour Buenos Aires Premium",
      valor: 750.00,
      desconto: 50.00,
      status_cobranca: "Pago"
    },
    vendedor: "Ana Silva",
    trajeto: {
      origem: "Hotel Centro Buenos Aires",
      destino: "Tour pela cidade"
    }
  },
  {
    id: "sale-14",
    voucher: "1418888",
    dataLancamentoServico: "2025-03-10",
    canal_de_venda: "Telefone",
    tipo_servico: "Hospedagem",
    tipo_cobranca: "Pag. Regular",
    cliente: {
      nome: "EMPRESA CONSTRUTORA ABC",
      email: "reservas@abc.com.br",
      telefone: "+55 1133445566",
      qtde_pax: 15,
      detalhe_pax: {
        adt: 15,
        chd: 0,
        inf: 0,
        sen: 0,
        free: 0
      }
    },
    servico: {
      nome: "Hospedagem Executiva - 5 dias",
      valor: 22500.00,
      desconto: 1500.00,
      status_cobranca: "Pago"
    },
    vendedor: "Carlos Oliveira",
    trajeto: {
      origem: "São Paulo",
      destino: "Hotel Business Buenos Aires"
    }
  },
  {
    id: "sale-15",
    voucher: "1419999",
    dataLancamentoServico: "2025-04-25",
    canal_de_venda: "Agência",
    tipo_servico: "Passeio",
    tipo_cobranca: "Pag. Regular",
    cliente: {
      nome: "FAMÍLIA RODRIGUEZ BRASIL",
      email: "rodriguez.familia@gmail.com",
      telefone: "+55 1988776655",
      qtde_pax: 7,
      detalhe_pax: {
        adt: 4,
        chd: 3,
        inf: 0,
        sen: 0,
        free: 0
      }
    },
    servico: {
      nome: "Passeio Tigre Delta + Almoço",
      valor: 1750.00,
      desconto: 100.00,
      status_cobranca: "Pago"
    },
    vendedor: "Maria Santos",
    trajeto: {
      origem: "Buenos Aires Centro",
      destino: "Delta do Tigre"
    }
  }
];

// Updated KPI Data to reflect the new totals
export const kpiData = {
  totalSales: {
    value: "R$ 1.118.968,50",
    change: {
      value: "12,5%",
      positive: true,
    },
  },
  vouchersIssued: {
    value: "15",
    change: {
      value: "8,2%",
      positive: true,
    },
  },
  averageTicket: {
    value: "R$ 74.597,90",
    change: {
      value: "3,7%",
      positive: true,
    },
  },
  paxCount: {
    value: "384",
    change: {
      value: "5,3%",
      positive: false,
    },
  },
};
