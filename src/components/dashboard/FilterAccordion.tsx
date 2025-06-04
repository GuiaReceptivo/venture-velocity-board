
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
  // Mock options for dropdowns based on new data structure
  const mockOptions = {
    'canal_de_venda': ['Agência', 'Online', 'Telefone', 'Parceiro', 'App'],
    'tipo_servico': ['Traslado', 'Passeio', 'Hospedagem', 'Transfer', 'Pacote'],
    'vendedor': ['João Becker', 'Ana Silva', 'Carlos Oliveira', 'Maria Santos', 'Paula Costa'],
    'tipo_cobranca': ['Pag. Regular', 'Pag. Privativo', 'Pag. Parcelado']
  };
  
  const getOptionsForField = (name: string) => {
    switch(name) {
      case 'canal_de_venda': return mockOptions.canal_de_venda;
      case 'tipo_servico': return mockOptions.tipo_servico;
      case 'vendedor': return mockOptions.vendedor;
      case 'tipo_cobranca': return mockOptions.tipo_cobranca;
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
