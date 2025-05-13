
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { Mail, Download, ChevronDown, ChevronUp } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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

interface DataTableProps {
  title: string;
  data: SaleData[];
}

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
  
  return (
    <div className="dashboard-card">
      <div className="flex justify-between items-center mb-4">
        <h3 className="dashboard-title">{title}</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              <Download size={16} className="mr-2" />
              Exportar
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Exportar como CSV</DropdownMenuItem>
            <DropdownMenuItem>Exportar como XLSX</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Voucher</TableHead>
              <TableHead className="w-[120px]">Data Venda</TableHead>
              <TableHead className="w-[180px]">Cliente</TableHead>
              <TableHead className="w-[100px]">Canal</TableHead>
              <TableHead className="w-[120px]">Serviço</TableHead>
              <TableHead className="w-[60px] text-center">PAX</TableHead>
              <TableHead className="w-[100px]">Valor</TableHead>
              <TableHead className="w-[120px]">Vendedor</TableHead>
              <TableHead className="w-[80px] text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((row) => (
              <React.Fragment key={row.id}>
                <TableRow className="hover:bg-muted/5">
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
                        onClick={() => toggleRowExpand(row.id)}
                      >
                        {expandedRow === row.id ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                        <span className="sr-only">Expandir</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
                {expandedRow === row.id && (
                  <TableRow>
                    <TableCell colSpan={9} className="bg-muted/5 p-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="font-semibold">Detalhes do Cliente</p>
                          <p className="text-muted-foreground">Nome: {row.customer}</p>
                          {row.email && <p className="text-muted-foreground">Email: {row.email}</p>}
                        </div>
                        <div>
                          <p className="font-semibold">Detalhes da Venda</p>
                          <p className="text-muted-foreground">Voucher: {row.voucher}</p>
                          <p className="text-muted-foreground">Data: {formatDate(row.date)}</p>
                          <p className="text-muted-foreground">Valor: {formatValue(row.value)}</p>
                        </div>
                        <div>
                          <p className="font-semibold">Detalhes do Serviço</p>
                          <p className="text-muted-foreground">Tipo: {row.service}</p>
                          <p className="text-muted-foreground">Canal: {row.channel}</p>
                          <p className="text-muted-foreground">PAX: {row.pax}</p>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="mt-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setPage(page > 1 ? page - 1 : 1)}
                disabled={page === 1}
              />
            </PaginationItem>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(p => p === 1 || p === totalPages || (p >= page - 1 && p <= page + 1))
              .map((p, index, array) => {
                // Add ellipsis
                if (index > 0 && p - array[index - 1] > 1) {
                  return (
                    <React.Fragment key={`ellipsis-${p}`}>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          isActive={p === page}
                          onClick={() => setPage(p)}
                        >
                          {p}
                        </PaginationLink>
                      </PaginationItem>
                    </React.Fragment>
                  );
                }
                
                return (
                  <PaginationItem key={p}>
                    <PaginationLink
                      isActive={p === page}
                      onClick={() => setPage(p)}
                    >
                      {p}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
            
            <PaginationItem>
              <PaginationNext
                onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
                disabled={page === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
