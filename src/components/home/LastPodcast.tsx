import SpacerSection from "../spacerSection/SpacerSection";
import AudioPlayer from "./AudioPlayer";
import { useEffect, useRef } from "react";

const LastPodcast = () => {

  const videoRef = useRef({ muted: false, autoplay: true, loop: true });
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
      <div id="featured" className="site-featured">
        <div id="featured-media" className="featured-media has-overlay">
          <div className="wrapper">
            <div className="featured-episode">
              <div className="featured-episode-text">
                <p className="text-uppercase text-weight-medium text-opacity-75">Episódio Em Destaque</p>
                <h1 className="display"><a href="single-episode.html">#13: A alegria do Senhor que vive em mim</a></h1>
                <p>
                  Sua graça infinita preenche almas vazias, proporcionando paz e esperança. Sua luz brilha, 
                  dissipando trevas, revelando um caminho de amor e reconciliação.
                </p>
              </div>
              <AudioPlayer />
            </div>
            <div className="featured-cover">
              <a href="single-episode.html" className="shine-on-hover">
                <picture>
                  <img src="images/sample-540x540-1.jpg" alt="Feração Samuel" />
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
          {/* <video
            ref={videoRef as React.RefObject<HTMLVideoElement>}
            src="/media/sample-featured-video2.mp4"
            preload="metadata"
            width={1320}
            height={756}
          /> */}
        </div>
      </div>
    </>
  );
};

export default LastPodcast;