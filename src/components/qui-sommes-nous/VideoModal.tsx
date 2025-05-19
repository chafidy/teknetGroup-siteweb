
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface VideoModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const VideoModal = ({ isOpen, onOpenChange }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 bg-black">
        <DialogTitle className="sr-only">
          <VisuallyHidden>À propos de TeknetGroup</VisuallyHidden>
        </DialogTitle>
        <div className="aspect-video w-full">
          <iframe 
            className="w-full h-full" 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="À propos de TeknetGroup" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};
