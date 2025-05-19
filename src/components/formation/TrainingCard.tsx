
import Image from "../../components/ui/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TrainingCardProps { 
  title: string; 
  levels?: string | null; 
  objectives?: string[]; 
  skills?: string[]; 
  tools?: string[]; 
  audience?: string | null;
  imageSrc?: string | null;
}

const TrainingCard = ({ 
  title, 
  levels = null, 
  objectives = [], 
  skills = [], 
  tools = [], 
  audience = null,
  imageSrc = null
}: TrainingCardProps) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
    {imageSrc && (
      <div className="h-40 overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
    )}
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      {levels && <CardDescription>Niveaux : {levels}</CardDescription>}
      {audience && <CardDescription>Public : {audience}</CardDescription>}
    </CardHeader>
    <CardContent>
      {objectives.length > 0 && (
        <div className="mb-3">
          <h4 className="font-semibold mb-1">Objectifs :</h4>
          <p className="text-sm text-gray-700">{objectives.join(", ")}</p>
        </div>
      )}
      {skills.length > 0 && (
        <div className="mb-3">
          <h4 className="font-semibold mb-1">Compétences :</h4>
          <p className="text-sm text-gray-700">{skills.join(", ")}</p>
        </div>
      )}
      {tools.length > 0 && (
        <div>
          <h4 className="font-semibold mb-1">Outils :</h4>
          <p className="text-sm text-gray-700">{tools.join(", ")}</p>
        </div>
      )}
    </CardContent>
  </Card>
);

export default TrainingCard;
