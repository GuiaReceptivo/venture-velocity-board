
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
    <div className="dashboard-card h-full flex flex-col">
      <h3 className="dashboard-title">{title}</h3>
      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a45" />
            <XAxis 
              dataKey="date" 
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
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#16213e', 
                border: '1px solid #2a2a45',
                borderRadius: '0.375rem',
                color: '#ffffff'
              }} 
              formatter={(value) => [
                new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(Number(value)), 
                ''
              ]}
            />
            <Legend />
            {lines.map((line) => (
              <Line
                key={line.key}
                type="monotone"
                dataKey={line.key}
                stroke={line.color}
                strokeWidth={2}
                activeDot={{ r: 6 }}
                dot={{ r: 3 }}
              />
            ))}
          </RechartsLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
