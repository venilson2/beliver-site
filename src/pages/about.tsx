import Content from "@/components/about/Content";
import Header from "@/components/about/Header";
import AuthorBox from "@/components/authorBox/AuthorBox";
import FollowInsta from "@/components/followInsta/FollowInsta";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/header/navbar";
import SpacerSection from "@/components/spacerSection/SpacerSection";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Geração Samuel | Sobre</title>
        <meta name="Sobre geração samuel" content="Sobre geração samuel" />
      </Head>
      <Navbar />
      <Header />
      <div id="content" className="site-content">
		    <div className="wrapper">
			    <div className="entry-content">
            <Content />
            <SpacerSection title="Líderes"/>
            <AuthorBox img_url="images/lary.jpg" name="Larissa" description="Líder do grupo de teatro e co-líder do grupo de jovens" />
            <AuthorBox img_url="images/sara.jpg" name="Sara" description="Líder do grupo de Jovens e co-líder do grupo de jovens"/>
            <AuthorBox img_url="images/manu.jpg" name="Manuel" description="Líder do grupo de Louvor e co-líder do grupo de jovens e teatro"/>
            <blockquote className="alignwide">
              <p>
                E disse-lhes: Vão pelo mundo todo e preguem o evangelho a todas as pessoas.
              </p>
              <cite>Marcos 16:15</cite>
            </blockquote>
            <figure className="block-image alignwide shine-on-children-hover">
              <a href="images/sample-540x540-1.jpg" data-fancybox="gallery">
                <picture>
                  <img src="images/sample-540x540-1.jpg" width="1400" height="900" alt="" />
                </picture>
                  <span className="shine-canvas"></span>
                </a>
                <a href="images/sample-540x540-2.jpg" data-fancybox="gallery"></a>
                <a href="images/sample-540x540-3.jpg" data-fancybox="gallery"></a>
                <a href="images/sample-540x540-4.jpg" data-fancybox="gallery"></a>
            </figure>
          </div>
        </div>
      </div>
      <FollowInsta />
      <Footer />
    </>
  );
};

export default About;