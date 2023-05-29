import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import Content from "@/components/home/Content";
import Header from "@/components/home/Header";
import Head from "next/head";

const Home = () => {

  return (
    <>
      <Head>
        <title>Geração Samuel | Home</title>
      </Head>
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default Home;