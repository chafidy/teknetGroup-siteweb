
import { ReactNode } from 'react';
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";

type JoinLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
  showCTA?: boolean;
};

const JoinLayout = ({ title, description, children, showCTA = false }: JoinLayoutProps) => {
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

export default JoinLayout;
