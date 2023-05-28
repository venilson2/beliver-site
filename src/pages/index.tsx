import AudioPlayer from "@/components/home/AudioPlayer";
import Head from "next/head";
import { useEffect, useRef } from "react";

const Home = () => {
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
        <title>Geração Samuel — Home</title>
      </Head>
      <header id="featured" className="site-featured">
        <div id="featured-media" className="featured-media has-overlay">
          <div className="wrapper">
            <div className="featured-episode">
              <div className="featured-episode-text">
                <p className="text-uppercase text-weight-medium text-opacity-75">Featured Podcast Episode</p>
                <h1 className="display"><a href="single-episode.html">#13: The joy of putting ideas into reality and pen to paper</a></h1>
                <p>Vince Smith met bandmates Jim Kelly and Nancy Gibbs at a Sex Pistols concert, where he tried to kiss Sid guitar and got a bloody nose. Together they formed Aftershock.</p>
              </div>
              {/* <div className="episode-player episode-type-audio">
                <audio ref={audioRef as React.RefObject<HTMLVideoElement>} controls>
                  <source src="/media/preview1.mp3" type="audio/mpeg" />
                </audio>
                <div className="media-controls">
                  <button className="media-play-pause"></button>
                  <button className="media-rate" data-rates="1.5 0.5 1" title="Playback speed">1x</button>
                  <span className="media-current-time">00:00</span>
                  <div className="media-time-rail"><span className="media-time-rail-current"></span></div>
                  <span className="media-duration">00:41</span>
                  <a className="media-download" href="https://html.liviucerchez.com/common/preview1.mp3" download="" title="Download episode (831.6 KB)"></a>
                  <a className="media-transcript" href="#" title="View transcript"></a>
                </div>
              </div> */}
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
              <div className="featured-actions-main">
                <a href="#"><span className="mdi mdi-podcast"></span> Subscribe on Apple Podcasts</a>
                <a href="#"><span className="mdi mdi-rss"></span> Subscribe using RSS Feed</a>
              </div>
              <div className="featured-actions-secondary">
                <a href="episodes.html">Browse all episodes <span className="mdi mdi-trending-neutral"></span></a>
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

export default Home;