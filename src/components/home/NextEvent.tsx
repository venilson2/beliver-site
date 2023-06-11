import { useEffect, useRef } from "react";
import CountdownTimer from "../countdownTimer/CountdownTimer";

const NextEvent = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const targetDate = "2023-11-25T18:00:00";

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = true;
      video.autoplay = true;
      video.loop = true;
    }
  }, []);

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
          <div id="featured-media">
            <div className="wrapper">
              <div className="page-title">
                <h6 className="tagline">Próximo evento</h6>
                <h3 className="display">Believer - A esperança</h3>
                <h1 className="xxxx-large">
                  <CountdownTimer targetDate={targetDate} />
                </h1>
              </div>
            </div>
          </div>
          <video
            ref={videoRef}
            src="/media/galaxy.mp4"
            preload="metadata"
            width={1320}
            height={756}
          ></video>
        </div>
      </div>
    </>
  );
};

export default NextEvent;
