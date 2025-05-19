
import { useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Upload, Folder, Search, Filter, Grid, List, FileText } from "lucide-react";
import Image from "@/components/ui/image";

// Données mockées pour la galerie
const mockMedia = [
  { id: 1, name: "image-1.jpg", type: "image", size: "1.2 MB", url: "/logos/usersafe.png", date: "14/05/2025" },
  { id: 2, name: "image-2.jpg", type: "image", size: "0.8 MB", url: "/logos/netguard.png", date: "12/05/2025" },
  { id: 3, name: "image-3.jpg", type: "image", size: "1.5 MB", url: "/logos/datacore.png", date: "10/05/2025" },
  { id: 4, name: "document-1.pdf", type: "document", size: "0.5 MB", url: "#", date: "05/05/2025" },
  { id: 5, name: "image-4.jpg", type: "image", size: "2.1 MB", url: "/logos/globaltech.png", date: "01/05/2025" },
  { id: 6, name: "image-5.jpg", type: "image", size: "1.7 MB", url: "/logos/identitrust.png", date: "28/04/2025" },
  { id: 7, name: "document-2.pdf", type: "document", size: "1.3 MB", url: "#", date: "25/04/2025" },
  { id: 8, name: "image-6.jpg", type: "image", size: "0.9 MB", url: "/logos/techsecure.png", date: "20/04/2025" },
];

export default function MediaPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMedia, setSelectedMedia] = useState<number[]>([]);

  const toggleMediaSelection = (id: number) => {
    if (selectedMedia.includes(id)) {
      setSelectedMedia(selectedMedia.filter(mediaId => mediaId !== id));
    } else {
      setSelectedMedia([...selectedMedia, id]);
    }
  };

  const handleUploadClick = () => {
    // Simuler un clic sur l'input de type file caché
    document.getElementById('file-upload')?.click();
  };

  return (
    <AdminLayout title="Galerie / Médias">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button className="flex items-center gap-2" onClick={handleUploadClick}>
            <Upload size={16} />
            <span>Téléverser</span>
            <input 
              id="file-upload" 
              type="file" 
              className="hidden" 
              multiple 
              onChange={(e) => console.log('Files selected:', e.target.files)} 
            />
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Folder size={16} />
            <span>Nouveau dossier</span>
          </Button>
        </div>
        
        <div className="flex items-center gap-4">
          <Input
            placeholder="Rechercher des médias..."
            className="w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="outline" size="icon">
            <Filter size={16} />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className={viewMode === "grid" ? "bg-accent" : ""} 
            onClick={() => setViewMode("grid")}
          >
            <Grid size={16} />
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className={viewMode === "list" ? "bg-accent" : ""} 
            onClick={() => setViewMode("list")}
          >
            <List size={16} />
          </Button>
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground">
          {selectedMedia.length} fichiers sélectionnés sur {mockMedia.length} fichiers
        </div>
        
        {viewMode === "grid" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {mockMedia.map((media) => (
              <Card 
                key={media.id}
                className={`cursor-pointer overflow-hidden transition-all ${
                  selectedMedia.includes(media.id) ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => toggleMediaSelection(media.id)}
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    {media.type === "image" ? (
                      <Image 
                        src={media.url} 
                        alt={media.name}
                        className="h-full w-full object-cover" 
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-500">
                        <FileText size={32} />
                        <span className="text-xs mt-1">PDF</span>
                      </div>
                    )}
                  </div>
                  <div className="p-2">
                    <div className="font-medium text-sm truncate">{media.name}</div>
                    <div className="text-xs text-muted-foreground">{media.size} • {media.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <input type="checkbox" className="rounded" />
                  </TableHead>
                  <TableHead>Nom</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Taille</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockMedia.map((media) => (
                  <TableRow 
                    key={media.id}
                    className={selectedMedia.includes(media.id) ? "bg-accent/30" : ""}
                    onClick={() => toggleMediaSelection(media.id)}
                  >
                    <TableCell>
                      <input 
                        type="checkbox" 
                        className="rounded" 
                        checked={selectedMedia.includes(media.id)}
                        onChange={() => {}} // Pour éviter l'avertissement React sur un composant contrôlé
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {media.type === "image" ? (
                          <Image src={media.url} alt={media.name} className="h-8 w-8 rounded object-cover" />
                        ) : (
                          <div className="h-8 w-8 rounded bg-gray-100 flex items-center justify-center">
                            <FileText size={16} />
                          </div>
                        )}
                        {media.name}
                      </div>
                    </TableCell>
                    <TableCell>{media.type}</TableCell>
                    <TableCell>{media.size}</TableCell>
                    <TableCell>{media.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
