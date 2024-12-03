import React, { useRef, useState, useEffect } from "react";
import "./aboutvideo.css"; // Make sure to add the styles below in this CSS file

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      setIsLoading(true);
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsLoading(false);
            setIsPlaying(true);
          })
          .catch((error) => {
            setIsLoading(false);
            console.error("Playback error:", error);
          });
      }
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleDoubleTap = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.parentElement.requestFullscreen();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener("ended", () => setIsPlaying(false));
    video.addEventListener("playing", () => setIsPlaying(true));
    video.addEventListener("pause", () => setIsPlaying(false));
    video.addEventListener("error", () => setIsLoading(false));

    return () => {
      video.removeEventListener("ended", () => setIsPlaying(false));
      video.removeEventListener("playing", () => setIsPlaying(true));
      video.removeEventListener("pause", () => setIsPlaying(false));
      video.removeEventListener("error", () => setIsLoading(false));
    };
  }, []);

  return (
    <div className="vd-body">
      <div className="vd-video-container" onDoubleClick={handleDoubleTap}>
        <video
          ref={videoRef}
          onClick={togglePlay}
          playsInline
          src="img/video1.webm.mp4"
        >
          Your browser does not support the video tag.
        </video>
        {isLoading && <div className="vd-loading" />}
        {!isPlaying && (
          <div className="vd-play-button" onClick={togglePlay}>
            <div className="vd-play-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
