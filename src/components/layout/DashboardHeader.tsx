
import React from 'react';
import { BarChart2 } from 'lucide-react';

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  subtitle
}) => {
  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-dashboard-primary/20">
          <BarChart2 size={24} className="text-dashboard-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
      </div>
    </header>
  );
};
