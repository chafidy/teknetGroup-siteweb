
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function SectionTitle({ className, children, ...props }: TypographyProps) {
  return (
    <h2 
      className={cn("text-2xl md:text-3xl font-semibold text-teknet-gray-dark mb-4", className)} 
      {...props}
    >
      {children}
    </h2>
  );
}

export function Paragraph({ className, children, ...props }: TypographyProps) {
  return (
    <p 
      className={cn("text-gray-700", className)} 
      {...props}
    >
      {children}
    </p>
  );
}
