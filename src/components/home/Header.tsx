import Head from "next/head";
import AudioPlayer from "./AudioPlayer";
import { useEffect, useRef } from "react";
import Navbar from "../header/navbar";

const Header = () => {

  const videoRef = useRef({ muted: false, autoplay: false, loop: false });
  const audioRef = useRef({ muted: false, autoplay: false, loop: false });

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true;
      video.autoplay = true;
      video.loop = true;
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.muted = true;
      audio.autoplay = true;
      audio.loop = true;
    }
  }, []);

  return (
    <>
      <Head>
        <title>Geração Samuel | Home</title>
      </Head>
      <header id="featured" className="site-featured">
        <div id="featured-media" className="featured-media has-overlay">
          <div className="wrapper">
            <div className="featured-episode">
              <div className="featured-episode-text">
                <p className="text-uppercase text-weight-medium text-opacity-75">Episódio Em Destaque</p>
                <h1 className="display"><a href="single-episode.html">#13: A alegria de colocar ideias em realidade e caneta no papel</a></h1>
                <p>Vince Smith met bandmates Jim Kelly and Nancy Gibbs at a Sex Pistols concert, where he tried to kiss Sid guitar and got a bloody nose. Together they formed Aftershock.</p>
              </div>
              <AudioPlayer />
            </div>
            <div className="featured-cover">
              <a href="single-episode.html" className="shine-on-hover">
                <picture>
                  <img src="images/sample-540x540-1.jpg" alt="Bateria" />
                </picture>
                <span className="flash">new</span>
                <span className="shine-canvas"></span>
              </a>
            </div>
            <div className="featured-actions">
              {/* <div className="featured-actions-main">
                <a href="#"><span className="mdi mdi-podcast"></span> Subscribe on Apple Podcasts</a>
                <a href="#"><span className="mdi mdi-rss"></span> Subscribe using RSS Feed</a>
              </div> */}
              <div className="featured-actions-secondary">
                <a href="episodes.html">Todos os episódios <span className="mdi mdi-trending-neutral"></span></a>
              </div>
            </div>
          </div>
          <video
            ref={videoRef as React.RefObject<HTMLVideoElement>}
            src="/media/sample-featured-video2.mp4"
            poster="/tmp/sample-featured-video2.jpg"
            preload="metadata"
            width={1320}
            height={756}
          />
        </div>
      </header>
    </>
  );
};

export default Header;