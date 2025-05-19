
import { useParams, Link } from 'react-router-dom';
import BlogLayout from "@/components/BlogLayout";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { getPostsByCategory, getCategoryBySlug } from "@/lib/blog-data";
import { ArrowLeft } from "lucide-react";

const BlogCategory = () => {
  const { category: categorySlug } = useParams<{ category: string }>();
  
  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;
  const posts = categorySlug ? getPostsByCategory(categorySlug) : [];
  
  if (!category) {
    return (
      <BlogLayout
        title="Catégorie non trouvée"
        description="La catégorie que vous recherchez n'existe pas."
      >
        <div className="teknet-container py-32 text-center">
          <h1 className="text-3xl font-bold mb-6">Catégorie non trouvée</h1>
          <p className="mb-8 text-lg text-gray-700">
            La catégorie que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Button asChild>
            <Link to="/actualites">Retour aux actualités</Link>
          </Button>
        </div>
      </BlogLayout>
    );
  }
  
  return (
    <BlogLayout
      title={`${category.name} - Actualités`}
      description={category.description || `Articles et actualités dans la catégorie ${category.name}`}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-12">
        <div className="teknet-container">
          <Button 
            variant="outline"
            size="sm"
            className="mb-4"
            asChild
          >
            <Link to="/actualites">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Toutes les actualités
            </Link>
          </Button>
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-teknet-gray-dark mb-4">{category.name}</h1>
            {category.description && (
              <p className="text-lg text-gray-700">{category.description}</p>
            )}
          </div>
        </div>
      </section>
      
      {/* Article List */}
      <section className="py-12 bg-white">
        <div className="teknet-container">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-4">Aucun article dans cette catégorie</h2>
              <p className="text-gray-600 mb-8">
                Il n'y a actuellement aucun article publié dans cette catégorie.
              </p>
              <Button asChild>
                <Link to="/actualites">Voir toutes les actualités</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </BlogLayout>
  );
};

export default BlogCategory;
