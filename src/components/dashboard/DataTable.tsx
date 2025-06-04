
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { SaleData, DataTableProps } from './table/types';
import { TableActions } from './table/TableActions';
import { TablePagination } from './table/TablePagination';
import { SalesTableRow } from './table/TableRow';
import { ExpandedRowContent } from './table/ExpandedRowContent';

export const DataTable: React.FC<DataTableProps> = ({ title, data }) => {
  const [page, setPage] = useState(1);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  
  const paginatedData = data.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  
  const formatValue = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };
  
  const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString('pt-BR');
  };
  
  const toggleRowExpand = (id: string) => {
    if (expandedRow === id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };

  const handleExport = (format: string) => {
    console.log(`Exporting data as ${format}`);
    // Implementation for export functionality
  };
  
  return (
    <div className="dashboard-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="dashboard-title">{title}</h3>
        <TableActions onExport={handleExport} />
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Voucher</TableHead>
              <TableHead className="w-[120px]">Data Serviço</TableHead>
              <TableHead className="w-[180px]">Cliente</TableHead>
              <TableHead className="w-[100px]">Canal</TableHead>
              <TableHead className="w-[120px]">Tipo Serviço</TableHead>
              <TableHead className="w-[60px] text-center">PAX</TableHead>
              <TableHead className="w-[100px]">Valor</TableHead>
              <TableHead className="w-[120px]">Vendedor</TableHead>
              <TableHead className="w-[80px] text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row) => (
              <React.Fragment key={row.id}>
                <SalesTableRow
                  row={row}
                  isExpanded={expandedRow === row.id}
                  onToggleExpand={() => toggleRowExpand(row.id)}
                  formatDate={formatDate}
                  formatValue={formatValue}
                />
                {expandedRow === row.id && (
                  <TableRow>
                    <TableCell colSpan={9} className="bg-muted/5 p-4">
                      <ExpandedRowContent 
                        rowData={row} 
                        formatDate={formatDate} 
                        formatValue={formatValue} 
                      />
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="mt-4">
        <TablePagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};
