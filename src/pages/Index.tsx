
import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardHeader } from "@/components/layout/DashboardHeader";
import { FileUpload } from "@/components/dashboard/FileUpload";
import { DateRangeFilter } from "@/components/dashboard/DateRangeFilter";
import { FilterAccordion } from "@/components/dashboard/FilterAccordion";
import { SearchBox } from "@/components/dashboard/SearchBox";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { LineChart } from "@/components/dashboard/charts/LineChart";
import { DonutChart } from "@/components/dashboard/charts/DonutChart";
import { BarChart } from "@/components/dashboard/charts/BarChart";
import { DataTable } from "@/components/dashboard/DataTable";
import { 
  timeSeriesData, 
  channelDistributionData, 
  sellerData, 
  salesData,
  kpiData 
} from "@/components/dashboard/mockData";

const Index = () => {
  return (
    <DashboardLayout>
      <DashboardHeader 
        title="Sales Intelligence Dashboard" 
        subtitle="Análise em tempo real de desempenho de vendas" 
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Upload Section */}
          <FileUpload 
            title="Importar Dados" 
            allowedFormats={["csv", "xlsx"]}
            maxSize="10MB"
          />
          
          {/* Date Range Filter */}
          <DateRangeFilter title="Intervalo de Datas" />
          
          {/* Dynamic Filters */}
          <FilterAccordion 
            title="Filtros Avançados"
            fields={[
              { name: "salesChannel", label: "Canal de Venda" },
              { name: "serviceType", label: "Tipo de Serviço" },
              { name: "seller", label: "Vendedor" },
            ]}
          />
          
          {/* Quick Search */}
          <SearchBox 
            title="Busca Rápida"
            placeholder="Buscar cliente, voucher..."
          />
          
          {/* KPI Grid */}
          <div className="dashboard-card">
            <h3 className="dashboard-title">Métricas Principais</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <KpiCard 
                title="Total de Vendas"
                value={kpiData.totalSales.value}
                change={kpiData.totalSales.change}
                icon="dollar"
                color="#06d6a0"
              />
              <KpiCard 
                title="Vouchers Emitidos"
                value={kpiData.vouchersIssued.value}
                change={kpiData.vouchersIssued.change}
                icon="credit-card"
                color="#3a86ff"
              />
              <KpiCard 
                title="Ticket Médio"
                value={kpiData.averageTicket.value}
                change={kpiData.averageTicket.change}
                icon="trending-up"
                color="#8338ec"
              />
              <KpiCard 
                title="Total PAX"
                value={kpiData.paxCount.value}
                change={kpiData.paxCount.change}
                icon="users"
                color="#ffd166"
              />
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          {/* Time Series Chart */}
          <LineChart 
            title="Evolução de Vendas"
            data={timeSeriesData}
            lines={[
              { key: "Online", color: "#3a86ff" },
              { key: "Telefone", color: "#06d6a0" },
              { key: "Parceiro", color: "#8338ec" },
            ]}
          />
          
          {/* Channel Distribution Donut Chart */}
          <DonutChart 
            title="Distribuição por Canal"
            data={channelDistributionData}
            colors={["#3a86ff", "#06d6a0", "#8338ec", "#ffd166", "#ef476f"]}
          />
          
          {/* Top Sellers Bar Chart */}
          <BarChart 
            title="Top Vendedores"
            data={sellerData}
            color="#3a86ff"
            horizontal={true}
          />
        </div>
      </div>
      
      {/* Full Width Table */}
      <div className="mt-6">
        <DataTable 
          title="Detalhes das Vendas"
          data={salesData}
        />
      </div>
    </DashboardLayout>
  );
};

export default Index;
