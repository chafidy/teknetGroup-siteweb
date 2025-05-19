
import { useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Search, Plus, Edit, Trash, Check, X } from "lucide-react";

// Utilisateurs mockés
const mockUsers = [
  { id: 1, name: "Admin User", email: "admin@teknetgroup.com", role: "admin", status: "active", lastLogin: "14/05/2025 - 10:30" },
  { id: 2, name: "Marketing Manager", email: "marketing@teknetgroup.com", role: "marketing", status: "active", lastLogin: "13/05/2025 - 14:15" },
  { id: 3, name: "Content Editor", email: "editor@teknetgroup.com", role: "editor", status: "active", lastLogin: "12/05/2025 - 09:45" },
  { id: 4, name: "Community Manager", email: "community@teknetgroup.com", role: "community", status: "inactive", lastLogin: "01/05/2025 - 16:20" },
];

// Définition des rôles disponibles
const roles = [
  { value: "admin", label: "Administrateur", description: "Accès complet à tous les modules" },
  { value: "marketing", label: "Responsable Marketing", description: "Gestion des articles, landing pages et stats de visites" },
  { value: "community", label: "Community Manager", description: "Gestion des publications, images et témoignages" },
  { value: "editor", label: "Rédacteur", description: "Edition de contenu uniquement (sans suppression)" },
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(mockUsers);

  // Filtrer les utilisateurs basés sur le terme de recherche
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout title="Gestion des utilisateurs">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-medium">Liste des utilisateurs</h2>
          <p className="text-sm text-muted-foreground">
            Gérez les accès et les permissions des utilisateurs du back-office
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center relative w-64">
            <Search size={16} className="absolute left-2 text-muted-foreground" />
            <Input
              placeholder="Rechercher un utilisateur..."
              className="pl-8 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button className="flex items-center gap-2">
            <Plus size={16} />
            <span>Ajouter un utilisateur</span>
          </Button>
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Utilisateur</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Rôle</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Dernière connexion</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {roles.find(role => role.value === user.role)?.label || user.role}
                  </span>
                </TableCell>
                <TableCell>
                  {user.status === "active" ? (
                    <span className="inline-flex items-center gap-1 text-green-700 text-xs font-medium">
                      <Check size={14} />
                      <span>Actif</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-red-700 text-xs font-medium">
                      <X size={14} />
                      <span>Inactif</span>
                    </span>
                  )}
                </TableCell>
                <TableCell>{user.lastLogin}</TableCell>
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
      </Card>
      
      <div className="mt-8 grid gap-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Rôles et permissions</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {roles.map((role) => (
              <Card key={role.value} className="p-4">
                <div className="font-medium">{role.label}</div>
                <div className="text-sm text-muted-foreground">{role.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
