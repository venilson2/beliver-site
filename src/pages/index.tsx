import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import Banner from "@/components/home/Banner";
import FollowInsta from "@/components/home/FollowInsta";
import LastPodcast from "@/components/home/LastPodcast";
import NextEvent from "@/components/home/NextEvent";
import Head from "next/head";

const Home = () => {

  return (
    <>
      <Head>
        <title>Geração Samuel | Home</title>
      </Head>
      <Navbar />
      <Banner />
      <NextEvent />
      <LastPodcast />
      <FollowInsta />
      <Footer />
    </>
  );
};

export default Home;