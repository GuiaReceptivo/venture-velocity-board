
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

// New data structure based on the provided JSON
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
  {
    id: "sale-3",
    voucher: "1390123",
    dataLancamentoServico: "2025-02-05",
    canal_de_venda: "Online",
    tipo_servico: "Hospedagem",
    tipo_cobranca: "Pag. Regular",
    cliente: {
      nome: "MARIA FERNANDA SANTOS",
      email: "maria.santos@email.com",
      telefone: "+55 1199887766",
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
      nome: "Hotel Boutique Buenos Aires",
      valor: 2500.00,
      desconto: 250.00,
      status_cobranca: "Pago"
    },
    vendedor: "Ana Silva",
    trajeto: {
      origem: "São Paulo",
      destino: "Buenos Aires"
    }
  },
  {
    id: "sale-4",
    voucher: "1395678",
    dataLancamentoServico: "2025-02-12",
    canal_de_venda: "Telefone",
    tipo_servico: "Pacote",
    tipo_cobranca: "Pag. Parcelado",
    cliente: {
      nome: "CARLOS ALBERTO LIMA",
      email: "carlos.lima@hotmail.com",
      telefone: "+55 2133445566",
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
      nome: "Pacote Patagônia Completa",
      valor: 8500.00,
      desconto: 500.00,
      status_cobranca: "Parcialmente Pago"
    },
    vendedor: "Carlos Oliveira",
    trajeto: {
      origem: "Rio de Janeiro",
      destino: "Bariloche"
    }
  },
  {
    id: "sale-5",
    voucher: "1398765",
    dataLancamentoServico: "2025-03-01",
    canal_de_venda: "Agência",
    tipo_servico: "Transfer",
    tipo_cobranca: "Pag. Privativo",
    cliente: {
      nome: "PEDRO HENRIQUE COSTA",
      email: "pedro.costa@gmail.com",
      telefone: "+55 1155667788",
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
      nome: "Transfer Executivo Premium",
      valor: 450.00,
      desconto: 0.00,
      status_cobranca: "Pago"
    },
    vendedor: "Maria Santos",
    trajeto: {
      origem: "Hotel Centro - Buenos Aires",
      destino: "Aeroporto Ezeiza"
    }
  }
];

// KPI Data
export const kpiData = {
  totalSales: {
    value: "R$ 12.580,00",
    change: {
      value: "12,5%",
      positive: true,
    },
  },
  vouchersIssued: {
    value: "5",
    change: {
      value: "8,2%",
      positive: true,
    },
  },
  averageTicket: {
    value: "R$ 2.516,00",
    change: {
      value: "3,7%",
      positive: true,
    },
  },
  paxCount: {
    value: "17",
    change: {
      value: "5,3%",
      positive: false,
    },
  },
};
