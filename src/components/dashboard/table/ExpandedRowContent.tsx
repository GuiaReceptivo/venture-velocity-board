
import React from 'react';
import { SaleData } from './types';
import { Badge } from '@/components/ui/badge';

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
  const valorFinal = rowData.servico.valor - rowData.servico.desconto;
  
  const getStatusColor = (status: string) => {
    if (status.toLowerCase().includes('pago')) return 'bg-green-100 text-green-800';
    if (status.toLowerCase().includes('atrasado')) return 'bg-red-100 text-red-800';
    if (status.toLowerCase().includes('parcial')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
      <div className="space-y-3">
        <p className="font-semibold text-base">Detalhes do Cliente</p>
        <div className="space-y-1">
          <p><span className="font-medium">Nome:</span> {rowData.cliente.nome}</p>
          <p><span className="font-medium">Email:</span> {rowData.cliente.email}</p>
          <p><span className="font-medium">Telefone:</span> {rowData.cliente.telefone}</p>
          <p><span className="font-medium">Total PAX:</span> {rowData.cliente.qtde_pax}</p>
        </div>
        
        <div className="pt-2">
          <p className="font-medium mb-2">Detalhamento PAX:</p>
          <div className="grid grid-cols-2 gap-1 text-xs">
            <span>ADT: {rowData.cliente.detalhe_pax.adt}</span>
            <span>CHD: {rowData.cliente.detalhe_pax.chd}</span>
            <span>INF: {rowData.cliente.detalhe_pax.inf}</span>
            <span>SEN: {rowData.cliente.detalhe_pax.sen}</span>
            <span>FREE: {rowData.cliente.detalhe_pax.free}</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <p className="font-semibold text-base">Detalhes do Serviço</p>
        <div className="space-y-1">
          <p><span className="font-medium">Voucher:</span> {rowData.voucher}</p>
          <p><span className="font-medium">Serviço:</span> {rowData.servico.nome}</p>
          <p><span className="font-medium">Tipo:</span> {rowData.tipo_servico}</p>
          <p><span className="font-medium">Cobrança:</span> {rowData.tipo_cobranca}</p>
          <p><span className="font-medium">Valor:</span> {formatValue(rowData.servico.valor)}</p>
          {rowData.servico.desconto > 0 && (
            <p><span className="font-medium">Desconto:</span> {formatValue(rowData.servico.desconto)}</p>
          )}
          <p><span className="font-medium">Total:</span> {formatValue(valorFinal)}</p>
        </div>
        
        <div className="pt-2">
          <Badge className={getStatusColor(rowData.servico.status_cobranca)}>
            {rowData.servico.status_cobranca}
          </Badge>
        </div>
      </div>
      
      <div className="space-y-3">
        <p className="font-semibold text-base">Trajeto & Vendedor</p>
        <div className="space-y-1">
          <p><span className="font-medium">Origem:</span> {rowData.trajeto.origem}</p>
          <p><span className="font-medium">Destino:</span> {rowData.trajeto.destino}</p>
          <p><span className="font-medium">Vendedor:</span> {rowData.vendedor}</p>
          <p><span className="font-medium">Canal:</span> {rowData.canal_de_venda}</p>
          <p><span className="font-medium">Data Serviço:</span> {formatDate(rowData.dataLancamentoServico)}</p>
        </div>
        
        {rowData.servico.observacao && (
          <div className="pt-2">
            <p className="font-medium">Observações:</p>
            <p className="text-xs bg-blue-50 p-2 rounded border text-blue-800">
              {rowData.servico.observacao}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
