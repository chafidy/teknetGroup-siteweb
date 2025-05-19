
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { LevelType } from './TrainingFilters';

interface TrainingCategoryProps { 
  icon: LucideIcon; 
  title: string; 
  color?: string; 
  children: React.ReactNode;
  levelFilter?: LevelType;
}

const TrainingCategory = ({ 
  icon: Icon, 
  title, 
  color = "teknet-red", 
  children,
  levelFilter = "all"
}: TrainingCategoryProps) => {
  // Filter children based on level if specified
  const filteredChildren = React.Children.toArray(children).filter(child => {
    if (levelFilter === "all") return true;
    
    // Only filter if the child is a React element with props
    if (React.isValidElement(child) && 'props' in child) {
      const { levels } = child.props;
      
      // Check if the course has levels specified and if it includes the filtered level
      if (!levels) return true; // No levels specified, show by default
      
      return typeof levels === 'string' && 
        levels.toLowerCase().includes(levelFilter.toLowerCase());
    }
    
    return true;
  });
  
  // Don't render the category if there are no matching courses
  if (filteredChildren.length === 0) return null;

  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 rounded-full bg-${color}/10 flex items-center justify-center`}>
          <Icon className={`h-6 w-6 text-${color}`} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChildren}
      </div>
    </div>
  );
};

export default TrainingCategory;
