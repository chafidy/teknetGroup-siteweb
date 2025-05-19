
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import JoinLayout from '@/components/JoinLayout';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Le nom doit contenir au moins 2 caractères.' }),
  email: z.string().email({ message: 'Adresse email invalide.' }),
  phone: z.string().min(10, { message: 'Numéro de téléphone invalide.' }),
  company: z.string().optional(),
  subject: z.string().min(5, { message: 'Le sujet doit contenir au moins 5 caractères.' }),
  message: z.string().min(10, { message: 'Votre message doit contenir au moins 10 caractères.' }),
  privacy: z.boolean().refine(val => val === true, {
    message: 'Vous devez accepter la politique de confidentialité.',
  }),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      privacy: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form data submitted:', data);
      
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <JoinLayout
      title="Contact"
      description="Contactez l'équipe TeknetGroup pour discuter de vos projets ou poser vos questions."
    >
      <div className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
        <div className="teknet-container">
          <h1 className="text-4xl md:text-5xl font-bold text-teknet-gray-dark mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-12">
            Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner 
            dans vos projets technologiques.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <Phone className="h-5 w-5 text-teknet-red" />
                </div>
                <h3 className="text-lg font-semibold">Téléphone</h3>
              </div>
              <p className="text-gray-600">Contact</p>
              <p className="font-medium mb-2">020 23 33 445</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <Mail className="h-5 w-5 text-teknet-red" />
                </div>
                <h3 className="text-lg font-semibold">Email</h3>
              </div>
              <p className="text-gray-600">Informations générales</p>
              <p className="font-medium mb-2">info@teknetgroup.com</p>
              <p className="text-gray-600">Support technique</p>
              <p className="font-medium">support@teknetgroup.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <Clock className="h-5 w-5 text-teknet-red" />
                </div>
                <h3 className="text-lg font-semibold">Horaires</h3>
              </div>
              <p className="font-medium mb-2">Lundi - Vendredi</p>
              <p className="text-gray-600">8h - 18h</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-teknet-gray-dark mb-6">
                Envoyez-nous un message
              </h2>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom complet*</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email*</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="votre.email@exemple.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Téléphone*</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre numéro de téléphone" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Entreprise</FormLabel>
                          <FormControl>
                            <Input placeholder="Nom de votre entreprise (optionnel)" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sujet*</FormLabel>
                        <FormControl>
                          <Input placeholder="Sujet de votre message" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message*</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Détaillez votre demande ici..." 
                            className="min-h-32" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="privacy"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox 
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            J'accepte que mes données soient traitées conformément à la politique de confidentialité
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              </Form>
            </div>
            
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold text-teknet-gray-dark mb-6">
                Notre localisation
              </h2>
              
              <div className="h-96 bg-gray-200 rounded-lg mb-6 overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5694129551753!2d47.53097930503364!3d-18.90028839960426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07de34f1f395f%3A0xbbc66e61d50c3212!2sAlarobia%2C%20Antananarivo%2C%20Madagascar!5e0!3m2!1sfr!2sfr!4v1715187442694!5m2!1sfr!2sfr"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TeknetGroup Emplacement du Bureau"
                ></iframe>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <MapPin className="h-5 w-5 text-teknet-red" />
                  </div>
                  <h3 className="text-lg font-semibold">Adresse</h3>
                </div>
                <p className="text-gray-600">Siège social</p>
                <p className="font-medium mb-2">
                  BP: 3914 - 3e Etage<br />
                  Immeuble Trade Tower Alarobia<br />
                  Antananarivo 101, Madagascar
                </p>
              </div>
              
              <div className="bg-teknet-gray-dark rounded-lg p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Besoin d'une assistance rapide?</h3>
                <p className="mb-4">
                  Nos équipes sont à votre disposition pour répondre à vos questions et vous accompagner 
                  dans vos projets technologiques.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-teknet-gray-dark">
                    <Phone className="h-4 w-4 mr-2" /> Nous appeler
                  </Button>
                  <Button variant="default" className="bg-teknet-red hover:bg-red-700">
                    <Mail className="h-4 w-4 mr-2" /> Email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </JoinLayout>
  );
};

export default Contact;
