import Information from "@/components/contact/information";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Geração Samuel | Contato</title>
        <meta name="Contato geração samuel" content="Contato geração samuel" />
      </Head>
      <Navbar />
      <header id="featured" className="site-featured">
        <div id="featured-media" className="featured-media has-overlay">
          <div className="wrapper">
            <div className="page-title">
              <h1 className="display">Contato</h1>
              <h6 className="tagline">Entre em contato</h6>
            </div>
          </div>
        </div>
      </header>
      <Information />
      <Footer />
     </> 
  );
};

export default Contact;