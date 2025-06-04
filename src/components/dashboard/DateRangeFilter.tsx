import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, BadgeDollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { salesData } from '../dashboard/mockData';

interface DateRangeFilterProps {
  title: string;
}

export const DateRangeFilter: React.FC<DateRangeFilterProps> = ({ title }) => {
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  
  const [startDate, setStartDate] = useState<Date | undefined>(firstDayOfMonth);
  const [endDate, setEndDate] = useState<Date | undefined>(today);
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  const [isEndCalendarOpen, setIsEndCalendarOpen] = useState(false);
  const [totalSales, setTotalSales] = useState<number>(0);
  
  useEffect(() => {
    calculateTotalSales();
  }, [startDate, endDate]);
  
  const calculateTotalSales = () => {
    if (!startDate || !endDate) return;
    
    const start = startDate.getTime();
    const end = endDate.getTime();
    
    // Filter sales by "dataLancamentoServico" field instead of "date"
    const filteredSales = salesData.filter(sale => {
      const serviceLaunchDate = new Date(sale.dataLancamentoServico).getTime();
      return serviceLaunchDate >= start && serviceLaunchDate <= end;
    });
    
    const total = filteredSales.reduce((sum, sale) => sum + sale.value, 0);
    setTotalSales(total);
    
    console.log('Filtered sales:', filteredSales.length);
    console.log('Total calculated:', total);
    console.log('Date range:', { start: startDate, end: endDate });
  };
  
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };
  
  return (
    <div className="dashboard-card">
      <h3 className="dashboard-title">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-muted-foreground mb-2">Data Inicial</p>
          <Popover open={isStartCalendarOpen} onOpenChange={setIsStartCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !startDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {startDate ? format(startDate, "dd/MM/yyyy") : "Escolha uma data"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={(date) => {
                  setStartDate(date);
                  setIsStartCalendarOpen(false);
                }}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div>
          <p className="text-sm text-muted-foreground mb-2">Data Final</p>
          <Popover open={isEndCalendarOpen} onOpenChange={setIsEndCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !endDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {endDate ? format(endDate, "dd/MM/yyyy") : "Escolha uma data"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={(date) => {
                  setEndDate(date);
                  setIsEndCalendarOpen(false);
                }}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      {/* Total Sales for Selected Period */}
      <Card className="mt-4 bg-muted/10 border-dashed">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BadgeDollarSign className="text-dashboard-primary" size={20} />
              <span className="text-sm font-medium">Total de Vendas no Período:</span>
            </div>
            <span className="text-lg font-bold">{formatCurrency(totalSales)}</span>
          </div>
        </CardContent>
      </Card>
      
      <Separator className="my-4" />
      
      <div className="flex items-center justify-between text-xs">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => {
            const now = new Date();
            setStartDate(new Date(now.getFullYear(), now.getMonth(), 1));
            setEndDate(now);
          }}>
            Este mês
          </Button>
          
          <Button variant="outline" size="sm" onClick={() => {
            const now = new Date();
            setStartDate(new Date(now.getFullYear(), now.getMonth() - 1, 1));
            setEndDate(new Date(now.getFullYear(), now.getMonth(), 0));
          }}>
            Mês anterior
          </Button>
        </div>
        
        <Button variant="outline" size="sm" onClick={() => {
          setStartDate(firstDayOfMonth);
          setEndDate(today);
        }}>
          Resetar
        </Button>
      </div>
    </div>
  );
};
