import Information from "@/components/contact/information";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/header/navbar";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Geração Samuel | Contato</title>
        <meta name="Contato Geração Samuel" content="Contato Geração Samuel" />
      </Head>
      <Navbar />
      <Header title="Contato" imgUrl="images/logo.jpg"/>
      <Information />
      <Footer />
     </> 
  );
};

export default Contact;