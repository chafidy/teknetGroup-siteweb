
import { ReactNode } from 'react';
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";

type BlogLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

const BlogLayout = ({ title, description, children }: BlogLayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title} | TeknetGroup</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <Header />
      
      <main>
        {children}
      </main>
      
      <Footer />
    </>
  );
};

export default BlogLayout;
