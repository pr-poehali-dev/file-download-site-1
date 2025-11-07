import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [downloads, setDownloads] = useState(1247);
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownload = () => {
    setIsDownloading(true);
    setDownloads(prev => prev + 1);

    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/placeholder.svg';
      link.download = 'sample-file.svg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
      
      toast({
        title: "Файл загружен!",
        description: "Скачивание началось успешно",
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <Card className="relative z-10 w-full max-w-2xl p-12 backdrop-blur-sm bg-card/50 border-2 border-primary/20 shadow-2xl animate-scale-in">
        <div className="text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
              <Icon name="Download" size={48} className="text-primary" />
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight">
              Скачать файл
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              Простой и быстрый способ получить нужный файл. Одно нажатие — и файл у вас.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              size="lg"
              className="h-16 px-12 text-xl font-heading font-bold shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              {isDownloading ? (
                <>
                  <Icon name="Loader2" className="mr-3 h-6 w-6 animate-spin" />
                  Загрузка...
                </>
              ) : (
                <>
                  <Icon name="Download" className="mr-3 h-6 w-6" />
                  Скачать сейчас
                </>
              )}
            </Button>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="FileText" size={18} />
                <span>Размер: 2.4 MB</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={18} />
                <span>Безопасно</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-primary/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Icon name="Users" size={18} className="text-primary" />
              <span className="text-muted-foreground">
                Скачали <span className="font-semibold text-foreground">{downloads.toLocaleString('ru-RU')}</span> раз
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
