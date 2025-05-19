
import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  SidebarProvider,
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, FileText, Image as ImageIcon, Users, Mail, LogOut } from "lucide-react";
import Image from "@/components/ui/image";

type AdminLayoutProps = {
  children: ReactNode;
  title?: string;
};

// Définition des liens du menu admin
const adminNavLinks = [
  { 
    title: "Tableau de bord", 
    path: "/admin/dashboard", 
    icon: LayoutDashboard,
    roles: ["admin", "editor", "marketing", "community"]
  },
  { 
    title: "Gestion des contenus", 
    path: "/admin/contents", 
    icon: FileText,
    roles: ["admin", "editor", "marketing"]
  },
  { 
    title: "Galerie / Médias", 
    path: "/admin/media", 
    icon: ImageIcon,
    roles: ["admin", "editor", "marketing", "community"] 
  },
  { 
    title: "Formulaires & contacts", 
    path: "/admin/contacts", 
    icon: Mail,
    roles: ["admin", "marketing"] 
  },
  { 
    title: "Gestion des utilisateurs", 
    path: "/admin/users", 
    icon: Users,
    roles: ["admin"] 
  },
];

export default function AdminLayout({ children, title = "Administration" }: AdminLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  
  // En l'absence d'authentification réelle pour l'instant, nous simulons un utilisateur admin
  const userRole = "admin";
  
  // Filtrer les liens en fonction du rôle de l'utilisateur
  const filteredLinks = adminNavLinks.filter(link => 
    link.roles.includes(userRole)
  );
  
  // Gestion de la déconnexion
  const handleLogout = () => {
    // Pour l'instant, simplement rediriger vers l'accueil
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>{title} | TeknetGroup Admin</title>
      </Helmet>
      
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-gray-100">
          <Sidebar variant="sidebar" collapsible="icon">
            <SidebarHeader className="flex items-center justify-center p-4">
              <div className="flex items-center gap-2">
                <Image 
                  src="/logos/usersafe.png" 
                  alt="TeknetGroup Logo" 
                  className="h-8 w-auto" 
                />
                <span className="text-lg font-bold">Admin</span>
              </div>
            </SidebarHeader>
            
            <SidebarContent>
              <SidebarMenu>
                {filteredLinks.map((link) => (
                  <SidebarMenuItem key={link.path}>
                    <SidebarMenuButton
                      tooltip={link.title}
                      isActive={location.pathname === link.path}
                      onClick={() => navigate(link.path)}
                    >
                      <link.icon />
                      <span>{link.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
            
            <SidebarFooter className="p-4">
              <Button 
                variant="ghost" 
                className="w-full flex items-center gap-2 justify-start" 
                onClick={handleLogout}
              >
                <LogOut size={18} />
                <span>Déconnexion</span>
              </Button>
            </SidebarFooter>
            <SidebarRail />
          </Sidebar>
          
          <SidebarInset>
            <main className="flex flex-col w-full p-6">
              <header className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
              </header>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                {children}
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </>
  );
}
