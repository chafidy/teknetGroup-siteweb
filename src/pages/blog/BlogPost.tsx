
import { useParams, Link, useNavigate } from 'react-router-dom';
import BlogLayout from "@/components/BlogLayout";
import { getPostBySlug, getLatestPosts } from "@/lib/blog-data";
import { formatDate } from '@/lib/blog-utils';
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/blog/BlogCard";
import Image from "@/components/ui/image";
import { CalendarDays, User, ArrowLeft, Share2, Tag as TagIcon, FileImage } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = slug ? getPostBySlug(slug) : undefined;
  const relatedPosts = getLatestPosts(3);
  
  if (!post) {
    return (
      <BlogLayout
        title="Article non trouvé"
        description="L'article que vous recherchez n'existe pas."
      >
        <div className="teknet-container py-32 text-center">
          <h1 className="text-3xl font-bold mb-6">Article non trouvé</h1>
          <p className="mb-8 text-lg text-gray-700">
            L'article que vous recherchez n'existe pas ou a été déplacé.
          </p>
          <Button asChild>
            <Link to="/actualites">Retour aux actualités</Link>
          </Button>
        </div>
      </BlogLayout>
    );
  }
  
  // Utiliser les images téléchargées pour la galerie
  const galleryImages = [
    '/lovable-uploads/30e49f8a-e864-4fd0-8b1f-6cb96ee54750.png',
    '/lovable-uploads/1704c284-39e6-49c5-8ee8-ef09c21146ec.png',
    '/lovable-uploads/96b50ebc-18ce-4584-9248-f2580cde4036.png',
    '/lovable-uploads/c353e7b8-2292-4d75-8be1-191b4683de1f.png',
    '/lovable-uploads/bf9505c9-3ec0-4a91-9f5e-3a2953d3436a.png',
    '/lovable-uploads/79c0015b-98f5-4b2c-9425-627e5a21e74d.png',
    '/lovable-uploads/6253ea7c-00eb-49d4-9f70-2cedb99af096.png',
    '/lovable-uploads/a8d21636-52df-4b55-8020-9d801855d64f.png'
  ];
  
  return (
    <BlogLayout
      title={post.title}
      description={post.excerpt}
    >
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px] max-h-[500px] w-full bg-gray-800 overflow-hidden">
        <Image 
          src={post.coverImage} 
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 text-white">
          <div className="teknet-container">
            <Button 
              variant="outline"
              size="sm"
              className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour
            </Button>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-200">
              <Link 
                to={`/actualites/categorie/${post.category.slug}`}
                className="bg-teknet-red/80 hover:bg-teknet-red text-white px-3 py-1 rounded-md text-xs font-medium transition-colors"
              >
                {post.category.name}
              </Link>
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <article className="py-12 bg-white">
        <div className="teknet-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Image Gallery */}
              <div className="my-10">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FileImage className="h-5 w-5 mr-2" />
                  Galerie d'images
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryImages.slice(0, 6).map((img, index) => (
                    <div key={index} className="aspect-square relative rounded-lg overflow-hidden border border-gray-200 group">
                      <Image 
                        src={img} 
                        alt={`Image ${index + 1} de l'événement`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Extra images in a larger format */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {galleryImages.slice(6, 8).map((img, index) => (
                    <div key={index + 6} className="aspect-video relative rounded-lg overflow-hidden border border-gray-200 group">
                      <Image 
                        src={img} 
                        alt={`Image supplémentaire ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced Content Section */}
              <div className="my-10 prose prose-lg max-w-none">
                <h3>À propos de cet événement</h3>
                <p>
                  TeknetGroup a participé activement à cet événement majeur dans le domaine technologique, 
                  regroupant des professionnels et partenaires de différents secteurs. Notre équipe a eu 
                  l'opportunité de présenter nos solutions innovantes et d'échanger avec de nombreux acteurs 
                  du marché.
                </p>
                <p>
                  Les conférences et ateliers ont permis d'aborder les enjeux actuels de la transformation 
                  numérique, avec un focus particulier sur la cybersécurité et les solutions d'identification 
                  sécurisée, domaines dans lesquels TeknetGroup excelle depuis plus de 20 ans.
                </p>
                <h4>Nos interventions</h4>
                <p>
                  Nos experts ont animé plusieurs sessions de formation et de démonstration, mettant en avant 
                  l'expertise de TeknetGroup dans la conception et l'implémentation de solutions technologiques 
                  adaptées aux besoins spécifiques de nos clients.
                </p>
                <blockquote>
                  "Ce type d'événement est essentiel pour tisser des liens durables avec nos partenaires et 
                  clients. Il nous permet également de rester à la pointe de l'innovation et d'adapter nos 
                  solutions aux défis émergents." — Direction TeknetGroup
                </blockquote>
              </div>
              
              {/* Tags Section */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t">
                  <div className="flex flex-wrap items-center gap-2">
                    <TagIcon className="h-5 w-5 text-gray-500" />
                    {post.tags.map(tag => (
                      <Link 
                        key={tag}
                        to={`/actualites/tag/${tag}`}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Share Section */}
              <div className="mt-8 pt-6 border-t flex flex-wrap items-center justify-between">
                <div className="text-gray-700 font-medium">Partager cet article:</div>
                <div className="flex space-x-3 mt-2 sm:mt-0">
                  <Button variant="outline" size="sm" className="rounded-full p-2 h-9 w-9">
                    <span className="sr-only">Partager sur Facebook</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full p-2 h-9 w-9">
                    <span className="sr-only">Partager sur Twitter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full p-2 h-9 w-9">
                    <span className="sr-only">Partager sur LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full p-2 h-9 w-9">
                    <span className="sr-only">Copier le lien</span>
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-4">À propos de l'auteur</h3>
                  <div className="text-sm text-gray-600">
                    <p className="mb-4">Les articles de TeknetGroup sont rédigés par nos experts en technologies et sécurité informatique, partageant leur expertise et leurs connaissances du secteur.</p>
                    <Link to="/qui-sommes-nous" className="text-teknet-red hover:underline font-medium">
                      En savoir plus sur notre équipe
                    </Link>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-4">Événements à venir</h3>
                  <ul className="space-y-4 text-sm">
                    <li>
                      <p className="font-semibold">Forum de la Cybersécurité</p>
                      <p className="text-gray-600">15 juin 2025 - Paris</p>
                    </li>
                    <li>
                      <p className="font-semibold">Salon des Technologies d'Identification</p>
                      <p className="text-gray-600">23-25 juillet 2025 - Antananarivo</p>
                    </li>
                    <li>
                      <p className="font-semibold">Tech Summit Madagascar</p>
                      <p className="text-gray-600">10 septembre 2025 - Antananarivo</p>
                    </li>
                  </ul>
                  <Link to="/contact" className="mt-4 inline-block text-teknet-red hover:underline font-medium">
                    Voir tous les événements
                  </Link>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Besoin d'information?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner dans vos projets.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/contact">Nous contacter</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related Articles */}
      <section className="py-12 bg-gray-50">
        <div className="teknet-container">
          <h2 className="section-title mb-8">Articles similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link to="/actualites">Voir tous les articles</Link>
            </Button>
          </div>
        </div>
      </section>
    </BlogLayout>
  );
};

export default BlogPost;
