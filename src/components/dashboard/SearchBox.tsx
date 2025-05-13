
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBoxProps {
  title: string;
  placeholder: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({ 
  title, 
  placeholder 
}) => {
  const [query, setQuery] = useState('');
  
  return (
    <div className="dashboard-card">
      <h3 className="dashboard-title">{title}</h3>
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          className="pl-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};
