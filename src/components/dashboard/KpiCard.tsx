
import React from 'react';
import { DollarSign, CreditCard, TrendingUp, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KpiCardProps {
  title: string;
  value: string;
  change?: {
    value: string;
    positive: boolean;
  };
  icon: 'dollar' | 'credit-card' | 'trending-up' | 'users';
  color: string;
}

export const KpiCard: React.FC<KpiCardProps> = ({ 
  title, 
  value, 
  change, 
  icon,
  color
}) => {
  const getIcon = () => {
    switch (icon) {
      case 'dollar':
        return <DollarSign size={20} />;
      case 'credit-card':
        return <CreditCard size={20} />;
      case 'trending-up':
        return <TrendingUp size={20} />;
      case 'users':
        return <Users size={20} />;
      default:
        return <DollarSign size={20} />;
    }
  };

  return (
    <div className="dashboard-card">
      <div className="flex items-center gap-3 mb-3">
        <div 
          className={cn("p-2 rounded-md flex items-center justify-center")}
          style={{ backgroundColor: `${color}20`, color: color }}
        >
          {getIcon()}
        </div>
        <span className="dashboard-subtitle">{title}</span>
      </div>
      
      <div>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <div className={`text-sm mt-1 ${change.positive ? 'text-dashboard-accent' : 'text-dashboard-error'}`}>
            {change.positive ? '↑' : '↓'} {change.value}
          </div>
        )}
      </div>
    </div>
  );
};
