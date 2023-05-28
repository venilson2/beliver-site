import { useEffect, useRef, useState } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playPauseButtonRef = useRef<HTMLButtonElement>(null);
  const currentTimeRef = useRef<HTMLSpanElement>(null);
  const timeRailCurrentRef = useRef<HTMLSpanElement>(null);
  const durationRef = useRef<HTMLSpanElement>(null);
  const mediaCurrentTimeRef = useRef<HTMLSpanElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    const playPauseButton = playPauseButtonRef.current;
    const timeRailCurrent = timeRailCurrentRef.current;
    const mediaCurrentTime = mediaCurrentTimeRef.current;

    if (audio) {
      audio.muted = true;
      audio.autoplay = true;
      audio.loop = false;
    }

    if (playPauseButton) {
      playPauseButton.addEventListener('click', togglePlayPause);
    }

    if (timeRailCurrent) {
      audio?.addEventListener('timeupdate', updateTimeRail);
    }

    if (audio && mediaCurrentTime) {
      const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        return `${formattedMinutes}:${formattedSeconds}`;
      };

      const handleAudioLoadedData = () => {
        setIsLoaded(true);
      };
      
      const handlePlayPause = () => {
        setIsPlaying((prevState) => !prevState);
      };
      
      if (audio) {
        audio.addEventListener('loadeddata', handleAudioLoadedData);
        audio.addEventListener('play', handlePlayPause);
        audio.addEventListener('pause', handlePlayPause);
      }

      const updateCurrentTime = () => {
          const currentTime = audio.currentTime;
          mediaCurrentTime.textContent = formatTime(currentTime);
      };

      audio.addEventListener('timeupdate', updateCurrentTime);
    }

    return () => {
      if (playPauseButton) {
        playPauseButton.removeEventListener('click', togglePlayPause);
      }
      if (timeRailCurrent) {
        audio?.removeEventListener('timeupdate', updateTimeRail);
      }
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (audio && audio.paused) {
      audio.play();
      audio.muted = false;
    } else if (audio) {
      audio.pause();
    }
  };

  const updateTimeRail = () => {
    const audio = audioRef.current;
    const timeRailCurrent = timeRailCurrentRef.current;

    if (audio && timeRailCurrent && !audio.paused) {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      const percentage = (currentTime / duration) * 100;
      timeRailCurrent.style.width = `${percentage}%`;
    }
  };

  return (
    <div className={`episode-player episode-type-audio ${isLoaded ? 'is-loaded' : ''} ${isPlaying ? 'playing' : ''}`}>
      <audio ref={audioRef} controls style={{display: 'none'}}>
        <source src="/media/preview1.mp3" type="audio/mpeg" />
      </audio>
      <div className="media-controls">
        <button className="media-play-pause" ref={playPauseButtonRef}></button>
        <span className="media-current-time" ref={mediaCurrentTimeRef}>00:00</span>
        <div className="media-time-rail">
          <span className="media-time-rail-current" ref={timeRailCurrentRef}></span>
        </div>
        <span className="media-duration" ref={durationRef}>00:41</span>
        <a className="media-download" href="https://html.liviucerchez.com/common/preview1.mp3" download="" title="Download episode (831.6 KB)"></a>
        <a className="media-transcript" href="#" title="View transcript"></a>
      </div>
    </div>
  );
};

export default AudioPlayer;
