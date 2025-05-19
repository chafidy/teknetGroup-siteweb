
// Types pour l'authentification
export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  permissions: Permission[];
}

export type UserRole = 'admin' | 'marketing' | 'editor' | 'community';

export interface Permission {
  name: string;
  description: string;
}

// Permissions par rôle
const rolePermissions: Record<UserRole, Permission[]> = {
  admin: [
    { name: 'manage_users', description: 'Créer, modifier et supprimer des utilisateurs' },
    { name: 'manage_content', description: 'Gérer tout le contenu' },
    { name: 'manage_media', description: 'Gérer la médiathèque' },
    { name: 'manage_contacts', description: 'Gérer les contacts et formulaires' },
    { name: 'view_analytics', description: 'Voir les statistiques' },
  ],
  marketing: [
    { name: 'manage_content', description: 'Gérer tout le contenu' },
    { name: 'manage_media', description: 'Gérer la médiathèque' },
    { name: 'view_analytics', description: 'Voir les statistiques' },
  ],
  editor: [
    { name: 'edit_content', description: 'Modifier le contenu' },
    { name: 'manage_media', description: 'Gérer la médiathèque' },
  ],
  community: [
    { name: 'edit_content', description: 'Modifier le contenu' },
    { name: 'manage_media', description: 'Gérer la médiathèque' },
  ],
};

// Utilisateurs mockés pour la démo
const mockUsers: User[] = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@teknetgroup.com',
    role: 'admin',
    permissions: rolePermissions.admin,
  },
  {
    id: 2,
    name: 'Marketing Manager',
    email: 'marketing@teknetgroup.com',
    role: 'marketing',
    permissions: rolePermissions.marketing,
  },
  {
    id: 3,
    name: 'Content Editor',
    email: 'editor@teknetgroup.com',
    role: 'editor',
    permissions: rolePermissions.editor,
  },
  {
    id: 4,
    name: 'Community Manager',
    email: 'community@teknetgroup.com',
    role: 'community',
    permissions: rolePermissions.community,
  },
];

export const authService = {
  // Vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    const token = localStorage.getItem('adminToken');
    return !!token;
  },
  
  // Récupérer le rôle de l'utilisateur actuel
  getCurrentUserRole(): UserRole | null {
    const role = localStorage.getItem('adminRole') as UserRole;
    return role || null;
  },
  
  // Récupérer l'utilisateur actuel
  getCurrentUser(): User | null {
    const role = this.getCurrentUserRole();
    if (!role) return null;
    
    // En situation réelle, nous ferions un appel API pour obtenir les informations de l'utilisateur
    // Pour la démo, on utilise un utilisateur mocké correspondant au rôle
    return mockUsers.find(user => user.role === role) || null;
  },
  
  // Vérifier si l'utilisateur a une permission spécifique
  hasPermission(permission: string): boolean {
    const user = this.getCurrentUser();
    if (!user) return false;
    
    return user.permissions.some(p => p.name === permission);
  },
  
  // Simuler la connexion
  async login(email: string, password: string): Promise<User> {
    // Simuler un délai
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Vérifier les identifiants
    const user = mockUsers.find(u => u.email === email);
    
    if (!user || password !== 'admin123') {
      throw new Error('Identifiants incorrects');
    }
    
    // Enregistrer les informations d'authentification
    localStorage.setItem('adminToken', `demo-token-${user.id}`);
    localStorage.setItem('adminRole', user.role);
    
    return user;
  },
  
  // Déconnexion
  logout(): void {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminRole');
  }
};

// Hook pour protéger les routes
export function useAuthGuard() {
  // Cette fonction vérifie si l'utilisateur peut accéder à une route spécifique
  const canAccess = (requiredPermissions: string[] = []): boolean => {
    if (!authService.isLoggedIn()) {
      return false;
    }
    
    // Si aucune permission n'est requise, l'utilisateur connecté peut accéder
    if (requiredPermissions.length === 0) {
      return true;
    }
    
    // Vérifier chaque permission requise
    return requiredPermissions.every(permission => authService.hasPermission(permission));
  };
  
  return { canAccess };
}
