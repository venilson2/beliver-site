import Head from "next/head";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/header/navbar";
import EventBox from "@/components/EventBox/EventBox";
import Link from "next/link";
import TabPanel from "@/components/tabPanel/TabPanel";
import FollowInsta from "@/components/followInsta/FollowInsta";
import Event from "@/components/Events/Event";

const Events = () => {
  return (
    <>
      <Head>
        <title>Geração Samuel | Eventos</title>
        <meta name="Geração Samuel" content="Sobre | Geração Samuel" />
      </Head>
      <Navbar />
      <Header title="Eventos" imgUrl="images/sample-540x540-5.jpg" />
      <Event />
      <Footer />
    </>
  );
};

export default Events;