
import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const TablePagination: React.FC<TablePaginationProps> = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {currentPage === 1 ? (
            <PaginationPrevious className="pointer-events-none opacity-50" />
          ) : (
            <PaginationPrevious onClick={() => onPageChange(currentPage - 1)} />
          )}
        </PaginationItem>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(p => p === 1 || p === totalPages || (p >= currentPage - 1 && p <= currentPage + 1))
          .map((p, index, array) => {
            // Add ellipsis
            if (index > 0 && p - array[index - 1] > 1) {
              return (
                <React.Fragment key={`ellipsis-${p}`}>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem key={p}>
                    {p === currentPage ? (
                      <PaginationLink isActive={true}>{p}</PaginationLink>
                    ) : (
                      <PaginationLink onClick={() => onPageChange(p)}>{p}</PaginationLink>
                    )}
                  </PaginationItem>
                </React.Fragment>
              );
            }
            
            return (
              <PaginationItem key={p}>
                {p === currentPage ? (
                  <PaginationLink isActive={true}>{p}</PaginationLink>
                ) : (
                  <PaginationLink onClick={() => onPageChange(p)}>{p}</PaginationLink>
                )}
              </PaginationItem>
            );
          })}
        
        <PaginationItem>
          {currentPage === totalPages ? (
            <PaginationNext className="pointer-events-none opacity-50" />
          ) : (
            <PaginationNext onClick={() => onPageChange(currentPage + 1)} />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
