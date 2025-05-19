
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "@/components/ui/image";
import { CalendarDays, User, Tag } from "lucide-react";
import { formatDate } from '@/lib/blog-utils';
import { BlogPost } from '@/types/blog';

type BlogCardProps = {
  post: BlogPost;
  variant?: 'default' | 'featured';
};

const BlogCard = ({ post, variant = 'default' }: BlogCardProps) => {
  const isFeatured = variant === 'featured';
  
  return (
    <Card className={`overflow-hidden transition-all h-full hover:shadow-lg ${isFeatured ? 'border-teknet-red' : ''}`}>
      <Link to={`/actualites/${post.slug}`} className="block h-full">
        <div className={`relative ${isFeatured ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}>
          <Image 
            src={post.coverImage} 
            alt={post.title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          {isFeatured && (
            <div className="absolute top-4 left-4">
              <span className="bg-teknet-red text-white px-3 py-1 text-sm font-semibold rounded-md">
                À la une
              </span>
            </div>
          )}
        </div>
        <CardHeader>
          <div className="space-y-1">
            <Link 
              to={`/actualites/categorie/${post.category.slug}`}
              className="text-xs font-medium inline-block px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {post.category.name}
            </Link>
            <h3 className={`font-semibold line-clamp-2 ${isFeatured ? 'text-xl' : 'text-lg'}`}>
              {post.title}
            </h3>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {post.excerpt}
          </p>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground flex flex-wrap gap-3">
          <div className="flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-3.5 w-3.5" />
            <span>{post.author}</span>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default BlogCard;
