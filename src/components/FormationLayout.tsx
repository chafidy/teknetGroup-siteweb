
import { ReactNode } from 'react';
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";

type FormationLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

const FormationLayout = ({ title, description, children }: FormationLayoutProps) => {
  return (
    <>
      <Helmet>
        <title>{title} | TeknetGroup Formation</title>
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

export default FormationLayout;
