
import { useState } from "react";
import Image from "@/components/ui/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Images, ZoomIn } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    src: "/lovable-uploads/0ecfdcff-7313-4366-aa20-3cd238b63f27.png",
    alt: "Équipe technique de TeknetGroup sur un site d'installation",
    caption: "Nos équipes techniques en intervention"
  },
  {
    id: 2,
    src: "/lovable-uploads/10003189-6977-400b-8032-d53d995afc7e.png",
    alt: "Stand TeknetGroup lors d'un salon professionnel",
    caption: "TeknetGroup au salon des technologies innovantes"
  },
  {
    id: 3,
    src: "/lovable-uploads/deeb1644-7b7a-485a-a7a0-6e3a2026f660.png",
    alt: "Conférence et discussion professionnelle",
    caption: "Conférence sur les tendances technologiques"
  },
  {
    id: 4,
    src: "/lovable-uploads/eacb160d-1880-4584-91ad-52a325a27b51.png",
    alt: "Équipe TeknetGroup lors d'un salon international",
    caption: "Représentation à la CCI France Madagascar"
  },
  {
    id: 5,
    src: "/lovable-uploads/17861d95-da68-4661-9e8f-4038d64f5a3f.png",
    alt: "Techniciens TeknetGroup installant un équipement de sécurité",
    caption: "Maintenance des équipements de sécurité"
  },
  {
    id: 6,
    src: "/lovable-uploads/722f6401-3162-475b-8e67-4a4385ed321a.png",
    alt: "Système de contrôle d'accès à un évènement",
    caption: "Solutions de contrôle d'accès pour évènements"
  },
  {
    id: 7,
    src: "/lovable-uploads/0e6b59b5-b43f-4bfa-b9ae-2c210990c41b.png",
    alt: "Présentation TeknetGroup lors d'une conférence",
    caption: "Présentation de nos solutions digitales"
  },
  {
    id: 8,
    src: "/lovable-uploads/252614b4-aa8a-4d28-829f-8d5c719f99ff.png",
    alt: "Remise de certificats lors d'une cérémonie TeknetGroup",
    caption: "Cérémonie de remise de certificats de formation"
  },
  {
    id: 9,
    src: "/lovable-uploads/65268035-f154-4877-8a26-a6ea30c946c3.png",
    alt: "Stand TeknetGroup à la CCI France Madagascar",
    caption: "Présentation à la CCI France Madagascar"
  }
];

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openImageModal = (index: number) => {
    setCurrentImage(index);
    setIsDialogOpen(true);
  };

  const handlePrevious = () => {
    if (currentImage === null) return;
    setCurrentImage((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    if (currentImage === null) return;
    setCurrentImage((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="teknet-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Nos activités en images</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Découvrez TeknetGroup à travers notre galerie d'images de projets, événements et interventions sur le terrain.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card 
              key={image.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div 
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
                  onClick={() => openImageModal(index)}
                >
                  <Button variant="outline" size="icon" className="bg-white text-teknet-gray-dark hover:bg-gray-100 hover:text-teknet-red">
                    <ZoomIn className="h-6 w-6" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">{image.caption}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-5xl p-0 bg-black bg-opacity-90 border-none">
            {currentImage !== null && (
              <div className="relative">
                <div className="p-6">
                  <Image
                    src={galleryImages[currentImage].src}
                    alt={galleryImages[currentImage].alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center text-white p-2 bg-black bg-opacity-60">
                  {galleryImages[currentImage].caption}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 hover:bg-white/50 rounded-full"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 hover:bg-white/50 rounded-full" 
                  onClick={handleNext}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
