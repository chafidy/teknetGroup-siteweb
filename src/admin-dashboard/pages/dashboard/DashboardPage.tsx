
import { useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Calendar, Mail, Users } from "lucide-react";

// Pour une démonstration simple, nous utilisons des données fictives
const mockDashboardData = {
  visits: 1234,
  contacts: 32,
  articles: 15,
  users: 5
};

export default function DashboardPage() {
  const [dashboardData, setDashboardData] = useState(mockDashboardData);
  
  return (
    <AdminLayout title="Tableau de bord">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Visites totales
            </CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.visits}</div>
            <p className="text-xs text-muted-foreground">
              +20% depuis le mois dernier
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Contacts reçus
            </CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.contacts}</div>
            <p className="text-xs text-muted-foreground">
              +5 depuis la semaine dernière
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Articles publiés
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.articles}</div>
            <p className="text-xs text-muted-foreground">
              +2 publiés cette semaine
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Utilisateurs actifs
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.users}</div>
            <p className="text-xs text-muted-foreground">
              Tous les rôles confondus
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Activités récentes</CardTitle>
            <CardDescription>
              Les dernières actions effectuées dans le back-office
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Article "Nouvelles technologies" publié
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Par Admin, aujourd'hui à 10:30
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    2 images ajoutées à la galerie
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Par Community Manager, hier à 14:15
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Page "Services" mise à jour
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Par Editor, 12/05/2025 à 09:45
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Voir toutes les activités
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Derniers contacts</CardTitle>
            <CardDescription>
              Les demandes de contact récentes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Jean Dupont
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Demande d'information sur les services de cybersécurité
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Aujourd'hui à 11:45
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Marie Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Demande de devis pour badges d'accès
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Hier à 16:30
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Société ABC
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Intéressé par une formation
                  </p>
                  <p className="text-xs text-muted-foreground">
                    13/05/2025 à 14:20
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Voir tous les contacts
            </Button>
          </CardFooter>
        </Card>
      </div>
    </AdminLayout>
  );
}
