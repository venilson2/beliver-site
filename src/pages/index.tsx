import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import Banner from "@/components/home/Banner";
import HopeEnvent from "@/components/home/HopeEnvent";
import LastPodcast from "@/components/home/LastPodcast";
import Head from "next/head";

const Home = () => {

  return (
    <>
      <Head>
        <title>Geração Samuel | Home</title>
        <meta name="Geração Samuel" content="Home | Geração Samuel" />
      </Head>
      <Navbar />
      <Banner />
      <HopeEnvent />
      {/* <LastPodcast /> */}
      <Footer />
    </>
  );
};

export default Home;