
import { useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash, Plus, FileText, File } from "lucide-react";

// Pages statiques mockées
const mockStaticPages = [
  { id: 1, title: "Accueil", lastModified: "14/05/2025", status: "Publié" },
  { id: 2, title: "Services", lastModified: "10/05/2025", status: "Publié" },
  { id: 3, title: "À propos", lastModified: "05/05/2025", status: "Publié" },
  { id: 4, title: "Contact", lastModified: "01/05/2025", status: "Publié" },
];

// Articles de blog mockés
const mockBlogArticles = [
  { id: 1, title: "Nouvelles technologies de sécurité", author: "Admin", date: "14/05/2025", status: "Publié" },
  { id: 2, title: "Protection des données en entreprise", author: "Editor", date: "12/05/2025", status: "Publié" },
  { id: 3, title: "Événement cybersécurité", author: "Marketing", date: "10/05/2025", status: "Brouillon" },
  { id: 4, title: "Guide complet sur les badges d'accès", author: "Editor", date: "01/05/2025", status: "Planifié" },
];

export default function ContentsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("pages");
  
  return (
    <AdminLayout title="Gestion des contenus">
      <Tabs defaultValue="pages" className="w-full" onValueChange={setActiveTab}>
        <div className="flex items-center justify-between mb-6">
          <TabsList>
            <TabsTrigger value="pages" className="flex items-center gap-2">
              <File size={16} />
              <span>Pages</span>
            </TabsTrigger>
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <FileText size={16} />
              <span>Blog / Actualités</span>
            </TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-4">
            <Input
              placeholder="Rechercher..."
              className="w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button className="flex items-center gap-2">
              <Plus size={16} />
              <span>{activeTab === "pages" ? "Nouvelle page" : "Nouvel article"}</span>
            </Button>
          </div>
        </div>
        
        <TabsContent value="pages" className="pt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Titre</TableHead>
                <TableHead>Dernière modification</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockStaticPages.map((page) => (
                <TableRow key={page.id}>
                  <TableCell className="font-medium">{page.title}</TableCell>
                  <TableCell>{page.lastModified}</TableCell>
                  <TableCell>
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                      {page.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit size={16} />
                        <span className="sr-only">Modifier</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash size={16} />
                        <span className="sr-only">Supprimer</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        
        <TabsContent value="blog" className="pt-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Titre</TableHead>
                <TableHead>Auteur</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockBlogArticles.map((article) => (
                <TableRow key={article.id}>
                  <TableCell className="font-medium">{article.title}</TableCell>
                  <TableCell>{article.author}</TableCell>
                  <TableCell>{article.date}</TableCell>
                  <TableCell>
                    <span 
                      className={`inline-block px-2 py-1 text-xs font-medium rounded-full 
                        ${article.status === "Publié" ? "bg-green-100 text-green-800" : 
                          article.status === "Brouillon" ? "bg-yellow-100 text-yellow-800" : 
                          "bg-blue-100 text-blue-800"}`}
                    >
                      {article.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit size={16} />
                        <span className="sr-only">Modifier</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash size={16} />
                        <span className="sr-only">Supprimer</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </AdminLayout>
  );
}
