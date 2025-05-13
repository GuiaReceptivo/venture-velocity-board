
import React, { useState } from 'react';
import { Upload, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface FileUploadProps {
  title: string;
  allowedFormats: string[];
  maxSize: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  title,
  allowedFormats,
  maxSize
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  
  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };
  
  const handleFile = (file: File) => {
    // Check file type
    const extension = file.name.split('.').pop()?.toLowerCase();
    if (!extension || !allowedFormats.includes(extension)) {
      toast({
        title: "Formato de arquivo inválido",
        description: `Apenas arquivos ${allowedFormats.join(', ')} são permitidos.`,
        variant: "destructive"
      });
      return;
    }
    
    // Check file size
    const maxSizeInBytes = parseFloat(maxSize) * 1024 * 1024; // Convert from MB to bytes
    if (file.size > maxSizeInBytes) {
      toast({
        title: "Arquivo muito grande",
        description: `O tamanho máximo permitido é ${maxSize}`,
        variant: "destructive"
      });
      return;
    }
    
    setFile(file);
  };
  
  const simulateUpload = () => {
    setUploading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          
          toast({
            title: "Dados carregados com sucesso!",
            description: "Todas as visualizações foram atualizadas.",
          });
          
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };
  
  return (
    <div className="dashboard-card">
      <h3 className="dashboard-title">{title}</h3>
      
      {!file ? (
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          className="border-2 border-dashed border-border rounded-md p-6 text-center cursor-pointer hover:bg-muted/10 transition-colors"
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <input
            type="file"
            id="file-input"
            className="hidden"
            accept={allowedFormats.map(format => `.${format}`).join(',')}
            onChange={handleFileInput}
          />
          
          <div className="flex flex-col items-center gap-2">
            <Upload className="text-muted-foreground" size={30} />
            <p className="text-sm font-medium">Arraste arquivos ou clique para selecionar</p>
            <p className="text-xs text-muted-foreground">
              Formatos aceitos: {allowedFormats.join(', ')} (máx. {maxSize})
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-md">
            <div className="p-2 rounded-full bg-muted">
              {progress === 100 ? (
                <Check size={18} className="text-dashboard-accent" />
              ) : (
                <Upload size={18} className="text-muted-foreground" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{file.name}</p>
              <p className="text-xs text-muted-foreground">{formatBytes(file.size)}</p>
            </div>
            {progress === 100 && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setFile(null)}
              >
                Limpar
              </Button>
            )}
          </div>
          
          {uploading && (
            <Progress value={progress} className="h-1 bg-muted" />
          )}
          
          {!uploading && progress !== 100 && (
            <div className="flex justify-end">
              <Button 
                onClick={simulateUpload}
                className="bg-dashboard-primary hover:bg-dashboard-primary/90"
              >
                Processar arquivo
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
