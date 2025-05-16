
import React from 'react';
import { TableCell, TableRow as UITableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Mail, ChevronDown, ChevronUp } from 'lucide-react';

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
  return (
    <UITableRow className="hover:bg-muted/5">
      <TableCell>{row.voucher}</TableCell>
      <TableCell>{formatDate(row.date)}</TableCell>
      <TableCell>{row.customer}</TableCell>
      <TableCell>{row.channel}</TableCell>
      <TableCell>{row.service}</TableCell>
      <TableCell className="text-center">{row.pax}</TableCell>
      <TableCell>{formatValue(row.value)}</TableCell>
      <TableCell>{row.seller}</TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
          {row.email && (
            <Button variant="ghost" size="icon" asChild>
              <a href={`mailto:${row.email}`}>
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
