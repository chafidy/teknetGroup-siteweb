
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Routes du site existantes
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SureteSecurity from "./pages/services/SureteSecurity";
import DeveloppementInformatique from "./pages/services/DeveloppementInformatique";
import BadgesCartes from "./pages/services/BadgesCartes";
import Cybersecurite from "./pages/services/Cybersecurite";
import SystemesInformation from "./pages/services/SystemesInformation";
import NumerisationGED from "./pages/services/NumerisationGED";
import Geolocalisation from "./pages/services/Geolocalisation";
import Formation from "./pages/services/Formation";
import QuiSommesNous from "./pages/join/QuiSommesNous";
import PolitiqueQualite from "./pages/join/PolitiqueQualite";
import Contact from "./pages/join/Contact";
import NosImplantations from "./pages/join/NosImplantations";
import NosPartenaires from "./pages/join/NosPartenaires";
import ProduitsTeknetGroup from "./pages/products/ProduitsTeknetGroup";
import ProduitsPartenaires from "./pages/products/ProduitsPartenaires";
import BlogHome from "./pages/blog/BlogHome";
import BlogPost from "./pages/blog/BlogPost";
import BlogCategory from "./pages/blog/BlogCategory";
import FormationsProduitsPartenaires from "./pages/formation/FormationsProduitsPartenaires";
import CatalogueFormations from "./pages/formation/CatalogueFormations";

// Chat Button
import ChatButton from "./components/ChatButton";

// Routes du back-office
import DashboardPage from "./admin-dashboard/pages/dashboard/DashboardPage";
import ContentsPage from "./admin-dashboard/pages/contents/ContentsPage";
import MediaPage from "./admin-dashboard/pages/media/MediaPage";
import ContactsPage from "./admin-dashboard/pages/contacts/ContactsPage";
import UsersPage from "./admin-dashboard/pages/users/UsersPage";
import LoginPage from "./admin-dashboard/pages/auth/LoginPage";
import UnauthorizedPage from "./admin-dashboard/pages/auth/UnauthorizedPage";
import ProtectedRoute from "./admin-dashboard/components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Routes du site existantes */}
            <Route path="/" element={<Index />} />
            <Route path="/surete-securite-identification" element={<SureteSecurity />} />
            <Route path="/developpement-informatique" element={<DeveloppementInformatique />} />
            <Route path="/badges-cartes" element={<BadgesCartes />} />
            <Route path="/cybersecurite" element={<Cybersecurite />} />
            <Route path="/systemes-information-reseaux" element={<SystemesInformation />} />
            <Route path="/numerisation-ged" element={<NumerisationGED />} />
            <Route path="/geolocalisation" element={<Geolocalisation />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
            <Route path="/politique-qualite-rgpd" element={<PolitiqueQualite />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/nos-implantations" element={<NosImplantations />} />
            <Route path="/nos-partenaires" element={<NosPartenaires />} />
            <Route path="/produits-teknetgroup" element={<ProduitsTeknetGroup />} />
            <Route path="/produits-partenaires" element={<ProduitsPartenaires />} />
            <Route path="/actualites" element={<BlogHome />} />
            <Route path="/actualites/:slug" element={<BlogPost />} />
            <Route path="/actualites/categorie/:category" element={<BlogCategory />} />
            <Route path="/formations-produits-partenaires" element={<FormationsProduitsPartenaires />} />
            <Route path="/catalogue-formations" element={<CatalogueFormations />} />
            
            {/* Routes du back-office */}
            <Route path="/admin/login" element={<LoginPage />} />
            <Route path="/admin/unauthorized" element={<UnauthorizedPage />} />
            
            {/* Routes protégées du back-office */}
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/contents" 
              element={
                <ProtectedRoute requiredPermissions={['manage_content', 'edit_content']}>
                  <ContentsPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/media" 
              element={
                <ProtectedRoute requiredPermissions={['manage_media']}>
                  <MediaPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/contacts" 
              element={
                <ProtectedRoute requiredPermissions={['manage_contacts']}>
                  <ContactsPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/users" 
              element={
                <ProtectedRoute requiredPermissions={['manage_users']}>
                  <UsersPage />
                </ProtectedRoute>
              } 
            />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
