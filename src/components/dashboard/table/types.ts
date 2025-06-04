
export interface DetalhesPax {
  adt: number;
  chd: number;
  inf: number;
  sen: number;
  free: number;
}

export interface Cliente {
  nome: string;
  email: string;
  telefone: string;
  qtde_pax: number;
  detalhe_pax: DetalhesPax;
}

export interface Servico {
  nome: string;
  valor: number;
  desconto: number;
  status_cobranca: string;
  observacao?: string;
}

export interface Trajeto {
  origem: string;
  destino: string;
}

export interface SaleData {
  id: string;
  voucher: string;
  dataLancamentoServico: string;
  canal_de_venda: string;
  tipo_servico: string;
  tipo_cobranca: string;
  cliente: Cliente;
  servico: Servico;
  vendedor: string;
  trajeto: Trajeto;
}

export interface DataTableProps {
  title: string;
  data: SaleData[];
}
