
import React from 'react';
import { 
  LineChart as RechartsLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer
} from 'recharts';

interface DataPoint {
  date: string;
  [key: string]: number | string;
}

interface LineChartProps {
  title: string;
  data: DataPoint[];
  lines: {
    key: string;
    color: string;
  }[];
}

export const LineChart: React.FC<LineChartProps> = ({ title, data, lines }) => {
  return (
    <div className="dashboard-card">
      <h3 className="text-base font-medium mb-2">{title}</h3>
      <div className="h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={data}
            margin={{
              top: 5,
              right: 20,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a45" />
            <XAxis 
              dataKey="date" 
              stroke="#8E9196" 
              tick={{ fill: '#8E9196', fontSize: 10 }} 
              axisLine={{ stroke: '#2a2a45' }}
            />
            <YAxis
              stroke="#8E9196"
              tick={{ fill: '#8E9196', fontSize: 10 }}
              axisLine={{ stroke: '#2a2a45' }}
              tickFormatter={(value) => 
                new Intl.NumberFormat('pt-BR', {
                  notation: 'compact',
                  compactDisplay: 'short'
                }).format(value)
              }
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#16213e', 
                border: '1px solid #2a2a45',
                borderRadius: '0.375rem',
                color: '#ffffff',
                fontSize: '0.75rem'
              }} 
              formatter={(value) => [
                new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(Number(value)), 
                ''
              ]}
            />
            <Legend wrapperStyle={{ fontSize: '0.7rem' }} />
            {lines.map((line) => (
              <Line
                key={line.key}
                type="monotone"
                dataKey={line.key}
                stroke={line.color}
                strokeWidth={1.5}
                activeDot={{ r: 4 }}
                dot={{ r: 2 }}
              />
            ))}
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
