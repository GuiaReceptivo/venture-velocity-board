
import React, { ReactNode } from "react";
import { DashboardSidebar } from "./DashboardSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
