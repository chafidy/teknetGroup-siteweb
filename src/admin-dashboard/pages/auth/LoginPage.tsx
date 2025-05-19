
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "@/components/ui/image";

// Définition du schéma de validation
const loginSchema = z.object({
  email: z.string().email({ message: "Adresse email invalide" }),
  password: z.string().min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Initialisation du formulaire avec React Hook Form et Zod
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  // Fonction pour gérer la soumission du formulaire
  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simuler une connexion
      console.log("Tentative de connexion avec:", data);
      
      // Simuler un délai de traitement
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Pour la démo, nous acceptons simplement admin@teknetgroup.com avec le mot de passe "admin123"
      if (data.email === "admin@teknetgroup.com" && data.password === "admin123") {
        // Simuler l'enregistrement d'un token d'authentification
        localStorage.setItem("adminToken", "demo-token-12345");
        localStorage.setItem("adminRole", "admin");
        
        // Rediriger vers le tableau de bord
        navigate("/admin/dashboard");
      } else {
        setError("Identifiants incorrects");
      }
    } catch (err) {
      setError("Une erreur est survenue lors de la connexion");
      console.error("Erreur de connexion:", err);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Helmet>
        <title>Connexion | TeknetGroup Admin</title>
      </Helmet>
      
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 items-center text-center">
          <div className="flex justify-center mb-4">
            <Image 
              src="/logos/usersafe.png" 
              alt="TeknetGroup Logo" 
              className="h-12 w-auto" 
            />
          </div>
          <CardTitle className="text-2xl">Connexion administration</CardTitle>
          <CardDescription>
            Entrez vos identifiants pour accéder au back-office
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-3 mb-4 text-sm">
              {error}
            </div>
          )}
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="admin@teknetgroup.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mot de passe</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Connexion en cours..." : "Se connecter"}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col text-center">
          <div className="text-sm text-muted-foreground">
            Pour la démo, utilisez:
          </div>
          <div className="text-sm">
            Email: <span className="font-medium">admin@teknetgroup.com</span>
            <br />
            Mot de passe: <span className="font-medium">admin123</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
