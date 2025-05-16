
export interface SaleData {
  id: string;
  voucher: string;
  date: string;
  customer: string;
  channel: string;
  service: string;
  pax: number;
  value: number;
  seller: string;
  email?: string;
}

export interface DataTableProps {
  title: string;
  data: SaleData[];
}
