import Navbar from "@/components/header/navbar";
import Head from "next/head";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Geração Samuel 404| </title>
      </Head>
      <Navbar/>
      <header id="featured" className="site-featured">
        <div id="featured-media" className="featured-media has-overlay">
          <div className="wrapper">
            <div className="page-title">
              <h1 className="huge">Error 4<span>0<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="79px" viewBox="0 0 40 79">
                  <path d="M19.36 49.45c.75 2.62.22 5.32.38 8 .21 3.58 2.46 6.33 5.21 8.52.17-.52.35-1.04.52-1.56-2.51 1.06-6.55 2.83-6.34 6.11.19 2.82 2.4 4.85 1.88 7.86-.21 1.22 1.57.43 1.73-.45.4-2.25-.36-4.17-1.28-6.19-.37-.82-.77-1.73-.49-2.62.5-1.61 3.42-2.54 4.79-3.13.49-.21 1.07-1.13.52-1.56-2.82-2.26-4.75-4.85-4.86-8.49-.07-2.49.36-4.92-.35-7.36-.31-1.11-1.95.01-1.71.87zM19.99 0C8.96 0 0 11.1 0 24.78c0 13.68 14.91 25.78 19.99 25.78 5.09 0 20-12.09 20-25.78C39.99 11.1 31.04 0 19.99 0zm5.27 7.52 3.69-1.62c11.29 11.6 2.82 20.51 2.82 20.51 3.87-10.8-6.51-18.89-6.51-18.89z">
                  </path>
                </svg></span>4</h1>
              <p className="text-opacity-75">Ops! Parece que você encontrou uma página que desapareceu como um ninja em fuga.</p>
              <p><Link href="/" className="button button-primary">Voltar para home</Link></p>
            </div>
          </div>
        </div>
	    </header>
    </>
  );
};

export default NotFoundPage;