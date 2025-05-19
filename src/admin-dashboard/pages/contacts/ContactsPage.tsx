
import { useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Search, Download, Mail, Eye, Archive, Trash } from "lucide-react";

// Contacts mockés
const mockContacts = [
  { 
    id: 1, 
    name: "Jean Dupont", 
    email: "jean.dupont@example.com", 
    subject: "Demande d'information sur les services de cybersécurité", 
    date: "14/05/2025", 
    status: "new" 
  },
  { 
    id: 2, 
    name: "Marie Martin", 
    email: "marie.martin@example.com", 
    subject: "Demande de devis pour badges d'accès", 
    date: "13/05/2025", 
    status: "read" 
  },
  { 
    id: 3, 
    name: "Société ABC", 
    email: "contact@abc.com", 
    subject: "Intéressé par une formation", 
    date: "12/05/2025", 
    status: "replied" 
  },
  { 
    id: 4, 
    name: "Pierre Leroy", 
    email: "pierre.leroy@example.com", 
    subject: "Question technique sur la géolocalisation", 
    date: "10/05/2025", 
    status: "read" 
  },
  { 
    id: 5, 
    name: "Sophie Bernard", 
    email: "sophie.b@example.com", 
    subject: "Problème avec l'inscription à la newsletter", 
    date: "09/05/2025", 
    status: "archived" 
  },
];

export default function ContactsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState(mockContacts);
  const [selectedContacts, setSelectedContacts] = useState<number[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  
  // Filtrer les contacts basés sur le terme de recherche et le filtre de statut
  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = 
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === null || contact.status === filter;
    
    return matchesSearch && matchesFilter;
  });
  
  const toggleContactSelection = (id: number) => {
    if (selectedContacts.includes(id)) {
      setSelectedContacts(selectedContacts.filter(contactId => contactId !== id));
    } else {
      setSelectedContacts([...selectedContacts, id]);
    }
  };
  
  const toggleSelectAll = () => {
    if (selectedContacts.length === filteredContacts.length) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(filteredContacts.map(contact => contact.id));
    }
  };
  
  const handleExportCSV = () => {
    console.log("Exporting contacts as CSV...");
    // Logique pour exporter en CSV serait implémentée ici
  };

  return (
    <AdminLayout title="Formulaires & contacts">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-medium">Liste des contacts</h2>
          <p className="text-sm text-muted-foreground">
            Gérez les demandes entrantes via le formulaire de contact
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center relative w-64">
            <Search size={16} className="absolute left-2 text-muted-foreground" />
            <Input
              placeholder="Rechercher un contact..."
              className="pl-8 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button 
            variant="outline"
            className="flex items-center gap-2"
            onClick={handleExportCSV}
          >
            <Download size={16} />
            <span>Exporter CSV</span>
          </Button>
        </div>
      </div>
      
      <div className="mb-4 flex gap-2">
        <Button 
          variant={filter === null ? "secondary" : "outline"} 
          size="sm"
          onClick={() => setFilter(null)}
        >
          Tous ({contacts.length})
        </Button>
        <Button 
          variant={filter === "new" ? "secondary" : "outline"} 
          size="sm"
          onClick={() => setFilter("new")}
        >
          Nouveaux ({contacts.filter(c => c.status === "new").length})
        </Button>
        <Button 
          variant={filter === "read" ? "secondary" : "outline"} 
          size="sm"
          onClick={() => setFilter("read")}
        >
          Lus ({contacts.filter(c => c.status === "read").length})
        </Button>
        <Button 
          variant={filter === "replied" ? "secondary" : "outline"} 
          size="sm"
          onClick={() => setFilter("replied")}
        >
          Répondus ({contacts.filter(c => c.status === "replied").length})
        </Button>
        <Button 
          variant={filter === "archived" ? "secondary" : "outline"} 
          size="sm"
          onClick={() => setFilter("archived")}
        >
          Archivés ({contacts.filter(c => c.status === "archived").length})
        </Button>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <input 
                type="checkbox" 
                className="rounded" 
                checked={selectedContacts.length === filteredContacts.length && filteredContacts.length > 0} 
                onChange={toggleSelectAll}
              />
            </TableHead>
            <TableHead>Nom</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Sujet</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredContacts.map((contact) => (
            <TableRow 
              key={contact.id}
              className={`${selectedContacts.includes(contact.id) ? "bg-accent/30" : ""} ${
                contact.status === "new" ? "font-medium" : ""
              }`}
            >
              <TableCell>
                <input 
                  type="checkbox" 
                  className="rounded" 
                  checked={selectedContacts.includes(contact.id)} 
                  onChange={() => toggleContactSelection(contact.id)}
                />
              </TableCell>
              <TableCell>{contact.name}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>
                <div className="max-w-xs truncate">{contact.subject}</div>
              </TableCell>
              <TableCell>{contact.date}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye size={16} />
                    <span className="sr-only">Voir</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Mail size={16} />
                    <span className="sr-only">Répondre</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Archive size={16} />
                    <span className="sr-only">Archiver</span>
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
    </AdminLayout>
  );
}
