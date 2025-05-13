
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface FilterField {
  name: string;
  label: string;
  options?: string[];
}

interface FilterAccordionProps {
  title: string;
  fields: FilterField[];
}

export const FilterAccordion: React.FC<FilterAccordionProps> = ({
  title,
  fields
}) => {
  // Mock options for dropdowns
  const mockOptions = {
    'salesChannel': ['Online', 'Telefone', 'Presencial', 'Parceiro', 'App'],
    'serviceType': ['Hospedagem', 'Traslado', 'Pacote', 'Passeio', 'Transfer'],
    'seller': ['Ana Silva', 'Carlos Oliveira', 'Maria Santos', 'João Ribeiro', 'Paula Costa']
  };
  
  const getOptionsForField = (name: string) => {
    switch(name) {
      case 'salesChannel': return mockOptions.salesChannel;
      case 'serviceType': return mockOptions.serviceType;
      case 'seller': return mockOptions.seller;
      default: return [];
    }
  };
  
  return (
    <div className="dashboard-card">
      <h3 className="dashboard-title">{title}</h3>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="filters" className="border-none">
          <AccordionTrigger className="text-sm py-2 px-0">
            Expandir filtros
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              {fields.map((field) => (
                <div key={field.name} className="space-y-1">
                  <label className="text-sm text-muted-foreground">
                    {field.label}
                  </label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={`Selecione ${field.label}`} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Todos</SelectItem>
                      {getOptionsForField(field.name).map(option => (
                        <SelectItem key={option} value={option.toLowerCase()}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
