
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
  const online = Math.floor(Math.random() * 15000) + 5000;
  const phone = Math.floor(Math.random() * 8000) + 2000;
  const partner = Math.floor(Math.random() * 12000) + 3000;
  
  return {
    date,
    Online: online,
    Telefone: phone,
    Parceiro: partner
  };
});

// Mock donut chart data
export const channelDistributionData = [
  { name: "Online", value: 254000 },
  { name: "Telefone", value: 125000 },
  { name: "Presencial", value: 98000 },
  { name: "Parceiro", value: 187000 },
  { name: "App", value: 143000 },
];

// Mock bar chart data
export const sellerData = [
  { name: "Ana Silva", value: 230000 },
  { name: "Carlos Oliveira", value: 187000 },
  { name: "Maria Santos", value: 164000 },
  { name: "João Ribeiro", value: 132000 },
  { name: "Paula Costa", value: 121000 },
];

// Mock table data
export const salesData = Array.from({ length: 50 }).map((_, i) => {
  const id = `sale-${i + 1}`;
  const date = dates[Math.floor(Math.random() * dates.length)];
  const channels = ["Online", "Telefone", "Presencial", "Parceiro", "App"];
  const services = ["Hospedagem", "Traslado", "Pacote", "Passeio", "Transfer"];
  const sellers = ["Ana Silva", "Carlos Oliveira", "Maria Santos", "João Ribeiro", "Paula Costa"];
  
  const channel = channels[Math.floor(Math.random() * channels.length)];
  const service = services[Math.floor(Math.random() * services.length)];
  const seller = sellers[Math.floor(Math.random() * sellers.length)];
  
  const pax = Math.floor(Math.random() * 5) + 1;
  const value = Math.floor(Math.random() * 5000 * pax) + 1000;
  
  return {
    id,
    voucher: `V${10000 + i}`,
    date,
    customer: `Cliente ${i + 1}`,
    channel,
    service,
    pax,
    value,
    seller,
    email: `cliente${i + 1}@example.com`,
  };
});

// KPI Data
export const kpiData = {
  totalSales: {
    value: "R$ 1.523.000",
    change: {
      value: "12,5%",
      positive: true,
    },
  },
  vouchersIssued: {
    value: "754",
    change: {
      value: "8,2%",
      positive: true,
    },
  },
  averageTicket: {
    value: "R$ 2.020",
    change: {
      value: "3,7%",
      positive: true,
    },
  },
  paxCount: {
    value: "1.892",
    change: {
      value: "5,3%",
      positive: false,
    },
  },
};
