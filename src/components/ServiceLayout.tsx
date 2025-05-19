
import { ReactNode } from 'react';
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import CTA from "./CTA";

type ServiceLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

const ServiceLayout = ({ title, description, children }: ServiceLayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title} | TeknetGroup</title>
        <meta name="description" content={description} />
      </Helmet>
      
      <Header />
      
      <main>
        {children}
        <CTA />
      </main>
      
      <Footer />
    </>
  );
};

export default ServiceLayout;
