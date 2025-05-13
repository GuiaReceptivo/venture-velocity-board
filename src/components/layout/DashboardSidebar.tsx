
import React from "react";
import { ChevronLeft, ChevronRight, BarChart2, Upload, Filter, Search, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardSidebarProps {
  open: boolean;
  onToggle: () => void;
}

export const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ 
  open, 
  onToggle 
}) => {
  return (
    <aside 
      className={`bg-sidebar h-screen transition-all duration-300 ${
        open ? "w-64" : "w-20"
      } border-r border-border flex flex-col`}
    >
      <div className="p-4 flex items-center justify-between border-b border-border">
        <div className={`flex items-center gap-3 ${!open && "justify-center w-full"}`}>
          <BarChart2 size={24} className="text-dashboard-primary" />
          {open && <span className="font-bold text-lg">Dashboard</span>}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className={`rounded-full p-1 hover:bg-muted ${!open && "hidden"}`}
        >
          <ChevronLeft size={18} />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </div>
      
      {!open && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="rounded-full p-1 hover:bg-muted absolute top-4 -right-3 bg-background border border-border"
        >
          <ChevronRight size={18} />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      )}

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" active open={open} />
          <SidebarItem icon={<Upload size={20} />} label="Importar Dados" open={open} />
          <SidebarItem icon={<Filter size={20} />} label="Filtros" open={open} />
          <SidebarItem icon={<Search size={20} />} label="Busca" open={open} />
        </ul>
      </nav>
      
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          {open ? (
            <div className="text-xs text-muted-foreground">
              <p>Sales Intelligence v1.0</p>
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <span className="text-xs text-muted-foreground">v1.0</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  open: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, open }) => {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
          active 
            ? "bg-sidebar-accent text-sidebar-accent-foreground" 
            : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
        } ${!open && "justify-center"}`}
      >
        {icon}
        {open && <span>{label}</span>}
      </a>
    </li>
  );
};
