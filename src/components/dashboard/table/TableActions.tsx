
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface TableActionsProps {
  onExport?: (format: string) => void;
}

export const TableActions: React.FC<TableActionsProps> = ({ onExport }) => {
  const handleExport = (format: string) => {
    if (onExport) {
      onExport(format);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Download size={16} className="mr-2" />
          Exportar
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleExport('csv')}>
          Exportar como CSV
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleExport('xlsx')}>
          Exportar como XLSX
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
