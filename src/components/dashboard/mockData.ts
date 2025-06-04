
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

// Mock table data with specific values to total R$ 890.550,50 for 2025
export const salesData = [
  // Janeiro 2025 - R$ 150.000
  { id: "sale-1", voucher: "V10001", date: "2025-01-15", dataLancamentoServico: "2025-01-15", customer: "Cliente 1", channel: "Online", service: "Hospedagem", pax: 2, value: 25000, seller: "Ana Silva", email: "cliente1@example.com" },
  { id: "sale-2", voucher: "V10002", date: "2025-01-20", dataLancamentoServico: "2025-01-20", customer: "Cliente 2", channel: "Telefone", service: "Pacote", pax: 4, value: 35000, seller: "Carlos Oliveira", email: "cliente2@example.com" },
  { id: "sale-3", voucher: "V10003", date: "2025-01-25", dataLancamentoServico: "2025-01-25", customer: "Cliente 3", channel: "Online", service: "Transfer", pax: 2, value: 15000, seller: "Maria Santos", email: "cliente3@example.com" },
  { id: "sale-4", voucher: "V10004", date: "2025-01-28", dataLancamentoServico: "2025-01-28", customer: "Cliente 4", channel: "Parceiro", service: "Passeio", pax: 6, value: 45000, seller: "João Ribeiro", email: "cliente4@example.com" },
  { id: "sale-5", voucher: "V10005", date: "2025-01-30", dataLancamentoServico: "2025-01-30", customer: "Cliente 5", channel: "App", service: "Traslado", pax: 3, value: 30000, seller: "Paula Costa", email: "cliente5@example.com" },
  
  // Fevereiro 2025 - R$ 180.000
  { id: "sale-6", voucher: "V10006", date: "2025-02-05", dataLancamentoServico: "2025-02-05", customer: "Cliente 6", channel: "Online", service: "Hospedagem", pax: 4, value: 55000, seller: "Ana Silva", email: "cliente6@example.com" },
  { id: "sale-7", voucher: "V10007", date: "2025-02-12", dataLancamentoServico: "2025-02-12", customer: "Cliente 7", channel: "Telefone", service: "Pacote", pax: 2, value: 25000, seller: "Carlos Oliveira", email: "cliente7@example.com" },
  { id: "sale-8", voucher: "V10008", date: "2025-02-18", dataLancamentoServico: "2025-02-18", customer: "Cliente 8", channel: "Presencial", service: "Transfer", pax: 8, value: 65000, seller: "Maria Santos", email: "cliente8@example.com" },
  { id: "sale-9", voucher: "V10009", date: "2025-02-25", dataLancamentoServico: "2025-02-25", customer: "Cliente 9", channel: "Parceiro", service: "Passeio", pax: 3, value: 35000, seller: "João Ribeiro", email: "cliente9@example.com" },
  
  // Março 2025 - R$ 220.000
  { id: "sale-10", voucher: "V10010", date: "2025-03-08", dataLancamentoServico: "2025-03-08", customer: "Cliente 10", channel: "Online", service: "Hospedagem", pax: 6, value: 85000, seller: "Ana Silva", email: "cliente10@example.com" },
  { id: "sale-11", voucher: "V10011", date: "2025-03-15", dataLancamentoServico: "2025-03-15", customer: "Cliente 11", channel: "App", service: "Pacote", pax: 4, value: 45000, seller: "Paula Costa", email: "cliente11@example.com" },
  { id: "sale-12", voucher: "V10012", date: "2025-03-22", dataLancamentoServico: "2025-03-22", customer: "Cliente 12", channel: "Telefone", service: "Traslado", pax: 5, value: 55000, seller: "Carlos Oliveira", email: "cliente12@example.com" },
  { id: "sale-13", voucher: "V10013", date: "2025-03-28", dataLancamentoServico: "2025-03-28", customer: "Cliente 13", channel: "Presencial", service: "Passeio", pax: 2, value: 35000, seller: "Maria Santos", email: "cliente13@example.com" },
  
  // Abril 2025 - R$ 165.000
  { id: "sale-14", voucher: "V10014", date: "2025-04-10", dataLancamentoServico: "2025-04-10", customer: "Cliente 14", channel: "Online", service: "Hospedagem", pax: 3, value: 45000, seller: "Ana Silva", email: "cliente14@example.com" },
  { id: "sale-15", voucher: "V10015", date: "2025-04-18", dataLancamentoServico: "2025-04-18", customer: "Cliente 15", channel: "Parceiro", service: "Pacote", pax: 7, value: 75000, seller: "João Ribeiro", email: "cliente15@example.com" },
  { id: "sale-16", voucher: "V10016", date: "2025-04-25", dataLancamentoServico: "2025-04-25", customer: "Cliente 16", channel: "App", service: "Transfer", pax: 4, value: 45000, seller: "Paula Costa", email: "cliente16@example.com" },
  
  // Maio 2025 - R$ 175.550,50
  { id: "sale-17", voucher: "V10017", date: "2025-05-05", dataLancamentoServico: "2025-05-05", customer: "Cliente 17", channel: "Online", service: "Hospedagem", pax: 5, value: 65000, seller: "Ana Silva", email: "cliente17@example.com" },
  { id: "sale-18", voucher: "V10018", date: "2025-05-12", dataLancamentoServico: "2025-05-12", customer: "Cliente 18", channel: "Telefone", service: "Pacote", pax: 6, value: 75550.50, seller: "Carlos Oliveira", email: "cliente18@example.com" },
  { id: "sale-19", voucher: "V10019", date: "2025-05-20", dataLancamentoServico: "2025-05-20", customer: "Cliente 19", channel: "Presencial", service: "Traslado", pax: 2, value: 25000, seller: "Maria Santos", email: "cliente19@example.com" },
  { id: "sale-20", voucher: "V10020", date: "2025-05-28", dataLancamentoServico: "2025-05-28", customer: "Cliente 20", channel: "Parceiro", service: "Passeio", pax: 1, value: 10000, seller: "João Ribeiro", email: "cliente20@example.com" },
  
  // Alguns dados de 2024 para teste
  { id: "sale-21", voucher: "V10021", date: "2024-12-15", dataLancamentoServico: "2024-12-15", customer: "Cliente 21", channel: "Online", service: "Hospedagem", pax: 2, value: 35000, seller: "Ana Silva", email: "cliente21@example.com" },
  { id: "sale-22", voucher: "V10022", date: "2024-11-20", dataLancamentoServico: "2024-11-20", customer: "Cliente 22", channel: "Telefone", service: "Pacote", pax: 3, value: 42000, seller: "Carlos Oliveira", email: "cliente22@example.com" },
];

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
