
import React from 'react';
import { Button } from "@/components/ui/button";

const TrainingCTA = () => {
  return (
    <div className="bg-teknet-red/10 p-8 rounded-lg mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold mb-4 text-teknet-gray-dark">Un besoin spécifique ?</h3>
          <p className="text-lg mb-4">
            Vous ne trouvez pas la formation adaptée à vos besoins dans notre catalogue ?
          </p>
          <p className="text-lg mb-4">
            Notre équipe pédagogique peut concevoir un programme entièrement personnalisé, adapté à vos objectifs et contraintes spécifiques.
          </p>
        </div>
        <div className="flex justify-center">
          <a href="/contact" className="btn-primary">
            <Button>Demander un devis personnalisé</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TrainingCTA;
