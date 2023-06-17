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
              <p>I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</p>
              <cite>João 13:24</cite>
            </blockquote>
            <figure className="block-image alignwide shine-on-children-hover">
              <a href="tmp/sample-1400x900-1.jpg" data-fancybox="test-gallery">
                <img src="images/sample-1400x900-1.jpg" width="1400" height="900" alt="" />
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