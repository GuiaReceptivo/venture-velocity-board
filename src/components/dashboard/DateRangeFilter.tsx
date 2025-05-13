
import React, { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';

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
