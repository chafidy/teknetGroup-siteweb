
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authService } from "../services/authService";

interface ProtectedRouteProps {
  children: ReactNode;
  requiredPermissions?: string[];
}

export default function ProtectedRoute({ 
  children, 
  requiredPermissions = [] 
}: ProtectedRouteProps) {
  const location = useLocation();
  const isLoggedIn = authService.isLoggedIn();
  
  // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
  if (!isLoggedIn) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }
  
  // Vérifier si l'utilisateur a les permissions requises
  const hasRequiredPermissions = requiredPermissions.length === 0 || 
    requiredPermissions.every(permission => authService.hasPermission(permission));
  
  // Si l'utilisateur n'a pas les permissions requises, rediriger vers une page non autorisée
  if (!hasRequiredPermissions) {
    return <Navigate to="/admin/unauthorized" replace />;
  }
  
  // Si tout est bon, afficher le contenu protégé
  return <>{children}</>;
}
