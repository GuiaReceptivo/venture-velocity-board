
import React from 'react';
import { TableCell, TableRow as UITableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { SaleData } from './types';

interface TableRowProps {
  row: SaleData;
  isExpanded: boolean;
  onToggleExpand: () => void;
  formatDate: (date: string) => string;
  formatValue: (value: number) => string;
}

export const SalesTableRow: React.FC<TableRowProps> = ({
  row,
  isExpanded,
  onToggleExpand,
  formatDate,
  formatValue,
}) => {
  const valorFinal = row.servico.valor - row.servico.desconto;
  
  return (
    <UITableRow className="hover:bg-muted/5">
      <TableCell>{row.voucher}</TableCell>
      <TableCell>{formatDate(row.dataLancamentoServico)}</TableCell>
      <TableCell>{row.cliente.nome}</TableCell>
      <TableCell>{row.canal_de_venda}</TableCell>
      <TableCell>{row.tipo_servico}</TableCell>
      <TableCell className="text-center">{row.cliente.qtde_pax}</TableCell>
      <TableCell>{formatValue(valorFinal)}</TableCell>
      <TableCell>{row.vendedor}</TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
          {row.cliente.email && (
            <Button variant="ghost" size="icon" asChild>
              <a href={`mailto:${row.cliente.email}`}>
                <Mail size={16} />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          )}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onToggleExpand}
          >
            {isExpanded ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
            <span className="sr-only">Expandir</span>
          </Button>
        </div>
      </TableCell>
    </UITableRow>
  );
};
