
import { Card, CardContent } from "@/components/ui/card";

interface MethodologyCardProps {
  index: number;
  title: string;
  subtitle: string;
  color: "blue" | "orange" | "pink" | "green" | "red";
  items: string[];
  className?: string;
  "data-index"?: string | number;
}

const colorVariants = {
  blue: "border-l-blue-400 hover:shadow-blue-100",
  orange: "border-l-orange-400 hover:shadow-orange-100",
  pink: "border-l-pink-400 hover:shadow-pink-100",
  green: "border-l-green-400 hover:shadow-green-100",
  red: "border-l-red-400 hover:shadow-red-100",
};

const bgVariants = {
  blue: "bg-blue-100 text-blue-600",
  orange: "bg-orange-100 text-orange-600",
  pink: "bg-pink-100 text-pink-600",
  green: "bg-green-100 text-green-600",
  red: "bg-red-100 text-red-600",
};

const textVariants = {
  blue: "text-blue-600",
  orange: "text-orange-600",
  pink: "text-pink-600",
  green: "text-green-600",
  red: "text-red-600",
};

export function MethodologyCard({ index, title, subtitle, color, items, className, ...props }: MethodologyCardProps) {
  return (
    <Card 
      className={`hover:shadow-xl transition-all duration-300 border-l-4 ${colorVariants[color]} ${className} hover:-translate-y-1`}
      {...props}
    >
      <CardContent className="pt-6">
        <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 text-teknet-gray-dark">
          <span className={`flex items-center justify-center w-8 h-8 rounded-full ${bgVariants[color]} font-bold transform transition-transform hover:scale-110 duration-300`}>
            {index + 1}
          </span>
          {title}
        </h3>
        <p className={`font-medium ${textVariants[color]} mb-3`}>{subtitle}</p>
        <ul className="space-y-2 text-gray-600">
          {items.map((item, i) => (
            <li key={i} className="flex items-start group">
              <span className="mr-2 group-hover:text-teknet-red transition-colors duration-300">•</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

interface ValueCardProps {
  title: string;
  description: string;
}

export function ValueCard({ title, description }: ValueCardProps) {
  return (
    <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
      <CardContent className="pt-6">
        <h4 className="font-semibold text-xl mb-2 group flex items-center">
          <span className="group-hover:text-teknet-red transition-colors duration-300">{title}</span>
        </h4>
        <p className="transition-opacity duration-300 hover:opacity-90">{description}</p>
      </CardContent>
    </Card>
  );
}

interface ClientSectorCardProps {
  title: string;
  sectors: string[];
}

export function ClientSectorCard({ title, sectors }: ClientSectorCardProps) {
  return (
    <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
      <CardContent className="pt-6">
        <h4 className="font-semibold text-xl mb-2">{title}</h4>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          {sectors.map((sector, index) => (
            <li key={index} className="hover:text-teknet-red transition-colors duration-300">{sector}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function MissionCard({ title, description }: ValueCardProps) {
  return (
    <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
      <CardContent className="pt-6">
        <h4 className="font-semibold text-xl mb-2 hover:text-teknet-red transition-colors duration-300">{title}</h4>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}

export function SolutionCard({ title, description }: ValueCardProps) {
  return (
    <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
      <CardContent className="pt-6">
        <h4 className="font-semibold text-xl mb-2 hover:text-teknet-red transition-colors duration-300">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
