
import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface BarDataPoint {
  name: string;
  value: number;
}

interface BarChartProps {
  title: string;
  data: BarDataPoint[];
  color: string;
  horizontal?: boolean;
}

export const BarChart: React.FC<BarChartProps> = ({ 
  title, 
  data, 
  color,
  horizontal = false 
}) => {
  return (
    <div className="dashboard-card h-full flex flex-col">
      <h3 className="dashboard-title">{title}</h3>
      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart
            layout={horizontal ? "vertical" : "horizontal"}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a45" />
            {horizontal ? (
              <>
                <YAxis 
                  dataKey="name" 
                  type="category"
                  stroke="#8E9196" 
                  tick={{ fill: '#8E9196' }} 
                  axisLine={{ stroke: '#2a2a45' }}
                  width={120}
                />
                <XAxis 
                  type="number"
                  stroke="#8E9196" 
                  tick={{ fill: '#8E9196' }} 
                  axisLine={{ stroke: '#2a2a45' }}
                  tickFormatter={(value) => 
                    new Intl.NumberFormat('pt-BR', {
                      notation: 'compact',
                      compactDisplay: 'short'
                    }).format(value)
                  }
                />
              </>
            ) : (
              <>
                <XAxis 
                  dataKey="name" 
                  stroke="#8E9196" 
                  tick={{ fill: '#8E9196' }} 
                  axisLine={{ stroke: '#2a2a45' }}
                />
                <YAxis
                  stroke="#8E9196"
                  tick={{ fill: '#8E9196' }}
                  axisLine={{ stroke: '#2a2a45' }}
                  tickFormatter={(value) => 
                    new Intl.NumberFormat('pt-BR', {
                      notation: 'compact',
                      compactDisplay: 'short'
                    }).format(value)
                  }
                />
              </>
            )}
            <Tooltip
              contentStyle={{
                backgroundColor: '#16213e',
                border: '1px solid #2a2a45',
                borderRadius: '0.375rem',
                color: '#ffffff',
              }}
              formatter={(value) => [
                new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(Number(value)),
                '',
              ]}
            />
            <Legend />
            <Bar 
              dataKey="value" 
              fill={color} 
              name="Valor"
              radius={[4, 4, 0, 0]}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
