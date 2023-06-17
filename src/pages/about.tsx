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
            <AuthorBox />
            <AuthorBox />
            <AuthorBox />
            <blockquote className="alignwide">
              <p>
                E disse-lhes: Vão pelo mundo todo e preguem o evangelho a todas as pessoas.
              </p>
              <cite>Marcos 16:15</cite>
            </blockquote>
            <figure className="block-image alignwide shine-on-children-hover">
              <a href="tmp/sample-1400x900-1.jpg" data-fancybox="test-gallery">
                <img src="images/sample-540x540-1.jpg" width="1400" height="900" alt="" />
                  <span className="shine-canvas"></span>
                </a>
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