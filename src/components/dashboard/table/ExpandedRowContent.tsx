
import React from 'react';

interface SaleData {
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

interface ExpandedRowContentProps {
  rowData: SaleData;
  formatDate: (date: string) => string;
  formatValue: (value: number) => string;
}

export const ExpandedRowContent: React.FC<ExpandedRowContentProps> = ({ 
  rowData, 
  formatDate, 
  formatValue 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
      <div>
        <p className="font-semibold">Detalhes do Cliente</p>
        <p className="text-muted-foreground">Nome: {rowData.customer}</p>
        {rowData.email && <p className="text-muted-foreground">Email: {rowData.email}</p>}
      </div>
      <div>
        <p className="font-semibold">Detalhes da Venda</p>
        <p className="text-muted-foreground">Voucher: {rowData.voucher}</p>
        <p className="text-muted-foreground">Data: {formatDate(rowData.date)}</p>
        <p className="text-muted-foreground">Valor: {formatValue(rowData.value)}</p>
      </div>
      <div>
        <p className="font-semibold">Detalhes do Serviço</p>
        <p className="text-muted-foreground">Tipo: {rowData.service}</p>
        <p className="text-muted-foreground">Canal: {rowData.channel}</p>
        <p className="text-muted-foreground">PAX: {rowData.pax}</p>
      </div>
    </div>
  );
};
