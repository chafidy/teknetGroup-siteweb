
import React from 'react';
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "../../components/ui/image";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import TrainingCategory from "./TrainingCategory";

const TrainingCertification = () => {
  return (
    <TrainingCategory icon={GraduationCap} title="FORMATION CERTIFIANTE EN LIGNE">
      <Card className="col-span-1 md:col-span-3 overflow-hidden hover:shadow-lg transition-shadow">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <Image 
              src="/lovable-uploads/460a1bb3-27c0-48d0-b1d2-638f3e677047.png" 
              alt="Formation certifiante"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <CardTitle className="mb-4">Certification Microsoft - Découverte des technologies numériques</CardTitle>
            <CardDescription className="mb-4 text-base">
              Format : 100% en ligne + certification
            </CardDescription>
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Contenus :</h4>
              <ul className="space-y-1 list-disc pl-5">
                <li>Informatique de base</li>
                <li>Services Cloud</li>
                <li>Sécurité</li>
                <li>Vie numérique</li>
                <li>Bureautique</li>
              </ul>
            </div>
            <Button>
              En savoir plus
            </Button>
          </div>
        </div>
      </Card>
    </TrainingCategory>
  );
};

export default TrainingCertification;
