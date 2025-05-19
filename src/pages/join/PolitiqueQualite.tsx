
import JoinLayout from '@/components/JoinLayout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Image from '@/components/ui/image';
import { FileText } from 'lucide-react';

const PolitiqueQualite = () => {
  return (
    <JoinLayout
      title="Politique Qualité & RGPD"
      description="Découvrez notre politique qualité et nos engagements concernant la protection des données personnelles (RGPD)."
    >
      <div className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-20">
        <div className="teknet-container">
          <h1 className="text-4xl md:text-5xl font-bold text-teknet-gray-dark mb-6">
            Politique Qualité & RGPD
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mb-12">
            Chez TeknetGroup, nous nous engageons à maintenir les plus hauts standards de qualité 
            dans nos services et à respecter pleinement les droits à la vie privée de nos clients 
            et partenaires.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-teknet-gray-dark mb-4">
                Notre Politique Qualité
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Notre politique qualité repose sur plusieurs piliers fondamentaux qui orientent 
                  toutes nos actions et décisions:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Amélioration continue:</strong> Nous cherchons constamment à améliorer 
                    nos processus, services et produits pour atteindre l'excellence.
                  </li>
                  <li>
                    <strong>Satisfaction client:</strong> La satisfaction de nos clients est au cœur 
                    de nos préoccupations. Nous mesurons et analysons régulièrement leur retour d'expérience.
                  </li>
                  <li>
                    <strong>Formation et compétences:</strong> Nous investissons dans la formation continue 
                    de nos équipes pour garantir un haut niveau d'expertise.
                  </li>
                  <li>
                    <strong>Conformité réglementaire:</strong> Nous nous assurons de respecter toutes les 
                    réglementations en vigueur dans nos domaines d'activité.
                  </li>
                </ul>
              </div>
              
              <h3 className="text-xl font-semibold text-teknet-gray-dark mt-6 mb-4">
                Certification
              </h3>
              
              <div className="flex flex-col items-start">
                <div className="mb-6">
                  <Image 
                    src="/lovable-uploads/6077eca4-45a2-4504-8eb1-de762ef810a4.png"
                    alt="Certification ISO 9001 SOCOTEC"
                    className="max-w-[300px] h-auto"
                    fallback="/placeholder.svg"
                  />
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="flex gap-2 items-center">
                      <FileText size={16} />
                      Consulter notre politique qualité
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <Image 
                      src="/lovable-uploads/b1cae183-de6b-4cbb-8053-5c3d8078c535.png"
                      alt="Politique Qualité & Engagement d'Intégrité TeknetGroup"
                      className="w-full h-auto"
                      fallback="/placeholder.svg"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-teknet-gray-dark mb-4">
                Notre Engagement RGPD
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Le Règlement Général sur la Protection des Données (RGPD) est au cœur de notre 
                  stratégie de traitement des données. Voici comment nous respectons ces principes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Transparence:</strong> Nous informons clairement nos clients sur la façon 
                    dont leurs données sont collectées et utilisées.
                  </li>
                  <li>
                    <strong>Minimisation des données:</strong> Nous ne collectons que les données 
                    strictement nécessaires à nos services.
                  </li>
                  <li>
                    <strong>Sécurité:</strong> Nous mettons en place des mesures techniques et 
                    organisationnelles robustes pour protéger les données.
                  </li>
                  <li>
                    <strong>Droits des personnes:</strong> Nous facilitons l'exercice des droits des 
                    personnes concernées (accès, rectification, effacement, etc.)
                  </li>
                </ul>
                <p>
                  Nous avons désigné un Délégué à la Protection des Données (DPO) que vous pouvez 
                  contacter pour toute question relative à la protection de vos données personnelles.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-teknet-gray-dark mb-6">
            Questions Fréquentes
          </h2>
          
          <div className="mb-16">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Comment TeknetGroup garantit-il la qualité de ses services ?</AccordionTrigger>
                <AccordionContent>
                  Nous suivons un processus rigoureux de contrôle qualité à chaque étape de nos projets, 
                  incluant des revues par les pairs, des tests automatisés et manuels, et des audits 
                  réguliers. Notre équipe qualité veille au respect de nos standards et à l'amélioration 
                  continue de nos processus.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Quelles mesures de sécurité sont mises en place pour protéger les données ?</AccordionTrigger>
                <AccordionContent>
                  Nous appliquons une approche multicouche pour la sécurité des données, comprenant le 
                  chiffrement des données sensibles, des contrôles d'accès stricts, une surveillance 
                  continue des systèmes, des sauvegardes régulières, et la formation de notre personnel 
                  aux meilleures pratiques de sécurité.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Comment exercer mes droits RGPD auprès de TeknetGroup ?</AccordionTrigger>
                <AccordionContent>
                  Vous pouvez exercer vos droits (accès, rectification, effacement, etc.) en contactant 
                  notre DPO par email à dpo@teknetgroup.com ou par courrier à l'adresse de notre siège 
                  social. Nous nous engageons à traiter votre demande dans le délai légal d'un mois.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>TeknetGroup partage-t-il mes données avec des tiers ?</AccordionTrigger>
                <AccordionContent>
                  Nous ne partageons vos données qu'avec les tiers nécessaires à la fourniture de nos 
                  services (sous-traitants, partenaires techniques). Tous nos partenaires sont soumis 
                  à des clauses contractuelles strictes garantissant la protection de vos données.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Comment sont gérés les incidents de sécurité ?</AccordionTrigger>
                <AccordionContent>
                  Nous disposons d'une procédure formalisée de gestion des incidents de sécurité, comprenant 
                  la détection rapide, l'évaluation de l'impact, la notification aux autorités et aux personnes 
                  concernées si nécessaire, et la mise en œuvre de mesures correctives pour éviter que 
                  l'incident ne se reproduise.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-teknet-gray-dark rounded-lg p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">
              Notre Engagement pour Demain
            </h3>
            <p className="mb-6">
              TeknetGroup s'engage à maintenir les plus hauts standards de qualité et de protection 
              des données dans un environnement technologique en constante évolution. Nous révisons 
              régulièrement nos politiques et nos pratiques pour nous assurer qu'elles restent 
              alignées avec les meilleures pratiques du secteur et les exigences réglementaires.
            </p>
            <p className="font-medium">
              Découvrez comment nous pouvons vous aider à mettre en œuvre des solutions technologiques 
              sécurisées et conformes aux réglementations.
            </p>
          </div>
        </div>
      </div>
    </JoinLayout>
  );
};

export default PolitiqueQualite;
