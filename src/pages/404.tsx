import Navbar from "@/components/header/navbar";
import Head from "next/head";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Geração Samuel | 404 </title>
      </Head>
      <Navbar/>
      <header id="featured" className="site-featured">
        <div id="featured-media" className="featured-media has-overlay"  style={{ height: '90vh'}}>
          <div className="wrapper">
            <div className="page-title">
              <h1 className="huge">Error 404</h1>
              <p className="text-opacity-75">Ops! Parece que você encontrou uma página que desapareceu como um ninja em fuga.</p>
              <Link href="/" className="button button-primary">Voltar para home</Link>
            </div>
          </div>
        </div>
	    </header>
    </>
  );
};

export default NotFoundPage;