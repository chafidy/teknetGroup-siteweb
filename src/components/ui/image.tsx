
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

const Image = ({ className, fallback = "/placeholder.svg", alt = "", ...props }: ImageProps) => {
  return (
    <img
      className={cn("max-w-full h-auto", className)}
      alt={alt}
      {...props}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = fallback;
      }}
    />
  );
};

export default Image;

export interface VideoThumbnailProps {
  thumbnailSrc: string;
  videoSrc?: string;
  className?: string;
  alt?: string;
  onPlay?: () => void;
}

export const VideoThumbnail = ({
  thumbnailSrc,
  videoSrc = "#",
  className,
  alt = "Vidéo thumbnail",
  onPlay
}: VideoThumbnailProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleClick = () => {
    if (onPlay) {
      onPlay();
    } else if (videoSrc) {
      // Ouvrir dans une modal ou rediriger
      window.open(videoSrc, '_blank');
    }
  };
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg cursor-pointer group",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <Image 
        src={thumbnailSrc} 
        alt={alt}
        className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105" 
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
        <div className={`
          relative
          w-16 h-16 md:w-20 md:h-20
          flex items-center justify-center
          rounded-full
          transition-all duration-500
          ${isHovered ? 'scale-110' : 'scale-100'}
          pulse-animation
        `}>
          {/* Cercle externe avec gradient */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/5"></div>
          
          {/* Cercle du bouton play */}
          <div className="absolute inset-2 bg-teknet-red rounded-full flex items-center justify-center shadow-lg">
            {/* Icône de lecture */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="white" 
              className="w-8 h-8"
              style={{ marginLeft: '2px' }}
            >
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
