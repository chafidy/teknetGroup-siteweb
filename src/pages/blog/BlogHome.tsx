
import { useState } from 'react';
import BlogLayout from "@/components/BlogLayout";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getFeaturedPosts, getLatestPosts, categories } from "@/lib/blog-data";
import { Link } from "react-router-dom";
import { Tag } from "lucide-react";

const BlogHome = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const featuredPosts = getFeaturedPosts();
  const latestPosts = getLatestPosts(6);
  
  return (
    <BlogLayout
      title="Actualités"
      description="Découvrez les dernières actualités et articles de TeknetGroup sur la sécurité informatique, les nouvelles technologies et nos projets."
    >
      {/* Hero Section with Background Image */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/a6a2afe1-a018-4c02-95f0-1c2c1a6f0883.png"
            alt="TeknetGroup à la CCI France Madagascar"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 teknet-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Actualités & Articles</h1>
            <p className="text-lg text-gray-100 mb-8">
              Restez informé des dernières actualités, innovations et initiatives de TeknetGroup
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="teknet-container">
            <h2 className="section-title mb-8">À la une</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map(post => (
                <BlogCard key={post.id} post={post} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Latest Posts */}
      <section className="py-12 bg-gray-50">
        <div className="teknet-container">
          <div className="flex flex-wrap justify-between items-center mb-8">
            <h2 className="section-title mb-0">Derniers articles</h2>
            <div className="flex overflow-x-auto gap-2 py-2 scrollbar-hide">
              <Button 
                variant={activeTab === "all" ? "default" : "outline"}
                onClick={() => setActiveTab("all")}
                className="whitespace-nowrap"
              >
                Tous
              </Button>
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={activeTab === category.slug ? "default" : "outline"}
                  onClick={() => setActiveTab(category.slug)}
                  className="whitespace-nowrap"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild>
              <Link to="/actualites/archives">Voir tous les articles</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="teknet-container">
          <h2 className="section-title mb-8">Explorer par catégorie</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(category => (
              <Card key={category.id} className="hover:shadow-md transition-shadow">
                <Link to={`/actualites/categorie/${category.slug}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <span className="p-2 bg-gray-100 rounded-full">
                        <Tag className="h-4 w-4 text-teknet-red" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-12 bg-teknet-gray-dark text-white">
        <div className="teknet-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Restez informé</h2>
            <p className="mb-6">Abonnez-vous à notre newsletter pour recevoir nos dernières actualités et informations.</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="flex-grow px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-teknet-red"
              />
              <Button type="submit" className="bg-teknet-red hover:bg-red-700 whitespace-nowrap">
                S'abonner
              </Button>
            </form>
          </div>
        </div>
      </section>
    </BlogLayout>
  );
};

export default BlogHome;
