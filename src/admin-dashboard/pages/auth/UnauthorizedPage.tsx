
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function UnauthorizedPage() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 text-center">
      <Helmet>
        <title>Accès non autorisé | TeknetGroup Admin</title>
      </Helmet>
      
      <div className="mb-6 flex items-center justify-center">
        <div className="bg-red-100 p-4 rounded-full">
          <X size={48} className="text-red-500" />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Accès non autorisé</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-md">
        Vous n'avez pas les permissions nécessaires pour accéder à cette page.
      </p>
      
      <div className="flex gap-4">
        <Button onClick={() => navigate("/admin/dashboard")}>
          Retour au tableau de bord
        </Button>
        <Button variant="outline" onClick={() => navigate("/")}>
          Retour au site
        </Button>
      </div>
    </div>
  );
}
